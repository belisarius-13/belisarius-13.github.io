"""Synchronize validated BELISARIUS13 threat-intel publication data."""

from __future__ import annotations

import json
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET


FEED_ROOT = (
    "https://raw.githubusercontent.com/"
    "belisarius-13/b13-threat-intel/"
    "intel-feed"
)

ATOM_NAMESPACE = "http://www.w3.org/2005/Atom"

MAX_DOWNLOAD_BYTES = 5 * 1024 * 1024

RESOURCES = {
    "latest.json": "data/generated/latest.json",
    "changes.json": "data/generated/changes.json",
    "trends.json": "data/history/trends.json",
    "changes.atom": "feeds/changes.atom",
    "latest.md": "reports/latest.md",
}


class IntelSyncError(RuntimeError):
    """Raised when intelligence synchronization fails validation."""


def fetch_resource(relative_path: str) -> bytes:
    """Fetch one public intel-feed resource with a size limit."""

    url = f"{FEED_ROOT}/{relative_path}"

    request = Request(
        url,
        headers={
            "User-Agent": "BELISARIUS13-site-sync/1.0",
        },
    )

    try:
        with urlopen(
            request,
            timeout=30,
        ) as response:
            content = response.read(
                MAX_DOWNLOAD_BYTES + 1
            )
    except (HTTPError, URLError, TimeoutError) as exc:
        raise IntelSyncError(
            f"Failed to fetch {relative_path}: {exc}"
        ) from exc

    if len(content) > MAX_DOWNLOAD_BYTES:
        raise IntelSyncError(
            f"{relative_path} exceeds download size limit"
        )

    return content


def parse_json(
    content: bytes,
    *,
    name: str,
) -> dict:
    """Decode and validate a JSON object."""

    try:
        document = json.loads(
            content.decode("utf-8")
        )
    except (
        UnicodeDecodeError,
        json.JSONDecodeError,
    ) as exc:
        raise IntelSyncError(
            f"{name} is not valid UTF-8 JSON"
        ) from exc

    if not isinstance(document, dict):
        raise IntelSyncError(
            f"{name} must contain a JSON object"
        )

    return document


def validate_documents(
    latest_content: bytes,
    changes_content: bytes,
    trends_content: bytes,
    atom_content: bytes,
    markdown_content: bytes,
) -> None:
    """Validate the publication set before writing locally."""

    latest = parse_json(
        latest_content,
        name="latest.json",
    )

    changes = parse_json(
        changes_content,
        name="changes.json",
    )

    trends = parse_json(
        trends_content,
        name="trends.json",
    )

    if latest.get("schema_version") != 2:
        raise IntelSyncError(
            "latest.json schema version is not supported"
        )

    if changes.get("schema_version") != 1:
        raise IntelSyncError(
            "changes.json schema version is not supported"
        )

    if trends.get("schema_version") != 1:
        raise IntelSyncError(
            "trends.json schema version is not supported"
        )

    if (
        trends.get("priority_model")
        != latest.get("priority_model")
    ):
        raise IntelSyncError(
            "history priority model does not match publication"
        )

    points = trends.get("points")

    if not isinstance(points, list) or not points:
        raise IntelSyncError(
            "trends.json contains no history points"
        )

    dates = [
        point.get("date")
        for point in points
    ]

    if dates != sorted(dates):
        raise IntelSyncError(
            "history points are not chronological"
        )

    if len(dates) != len(set(dates)):
        raise IntelSyncError(
            "history contains duplicate dates"
        )

    latest_point = points[-1]

    if (
        latest_point.get("generated_at")
        != latest.get("generated_at")
    ):
        raise IntelSyncError(
            "history and current publication timestamps do not match"
        )

    if (
        latest_point.get("catalog_version")
        != latest.get("source_catalog_version")
    ):
        raise IntelSyncError(
            "history and current catalog versions do not match"
        )

    if (
        latest_point.get("total")
        != latest["summary"]["total"]
    ):
        raise IntelSyncError(
            "history and current record totals do not match"
        )

    priorities = latest_point.get(
        "priorities",
        {}
    )

    if priorities != {
        "critical": latest["summary"]["critical"],
        "high": latest["summary"]["high"],
        "medium": latest["summary"]["medium"],
        "low": latest["summary"]["low"],
    }:
        raise IntelSyncError(
            "history and current priority totals do not match"
        )

    if latest.get("priority_model") != "B13-KEV-v1":
        raise IntelSyncError(
            "latest.json priority model is not supported"
        )

    if (
        changes.get("priority_model")
        != latest.get("priority_model")
    ):
        raise IntelSyncError(
            "publication priority models do not match"
        )

    if (
        changes.get("source_catalog_version")
        != latest.get("source_catalog_version")
    ):
        raise IntelSyncError(
            "publication catalog versions do not match"
        )

    if (
        changes.get("generated_at")
        != latest.get("generated_at")
    ):
        raise IntelSyncError(
            "publication timestamps do not match"
        )

    try:
        atom_root = ET.fromstring(
            atom_content
        )
    except ET.ParseError as exc:
        raise IntelSyncError(
            "changes.atom is not valid XML"
        ) from exc

    expected_root = (
        f"{{{ATOM_NAMESPACE}}}feed"
    )

    if atom_root.tag != expected_root:
        raise IntelSyncError(
            "changes.atom is not an Atom feed"
        )

    namespace = {
        "atom": ATOM_NAMESPACE,
    }

    feed_id = atom_root.find(
        "atom:id",
        namespace,
    )

    if (
        feed_id is None
        or feed_id.text
        != "urn:belisarius13:threat-intel:changes"
    ):
        raise IntelSyncError(
            "changes.atom has an unexpected feed ID"
        )

    atom_updated = atom_root.find(
        "atom:updated",
        namespace,
    )

    if (
        atom_updated is None
        or atom_updated.text
        != changes.get("generated_at")
    ):
        raise IntelSyncError(
            "Atom and JSON publication timestamps do not match"
        )

    try:
        markdown = markdown_content.decode(
            "utf-8"
        )
    except UnicodeDecodeError as exc:
        raise IntelSyncError(
            "latest.md is not valid UTF-8"
        ) from exc

    if not markdown.startswith(
        "# B13 Threat Intelligence Brief"
    ):
        raise IntelSyncError(
            "latest.md has an unexpected document format"
        )


def main() -> None:
    """Synchronize the validated intelligence publication."""

    repository_root = (
        Path(__file__).resolve().parents[1]
    )

    destination = (
        repository_root
        / "docs"
        / "intel"
        / "feed"
    )

    downloaded = {
        name: fetch_resource(relative_path)
        for name, relative_path
        in RESOURCES.items()
    }

    validate_documents(
        downloaded["latest.json"],
        downloaded["changes.json"],
        downloaded["trends.json"],
        downloaded["changes.atom"],
        downloaded["latest.md"],
    )

    destination.mkdir(
        parents=True,
        exist_ok=True,
    )

    for name, content in downloaded.items():
        target = destination / name

        temporary = target.with_suffix(
            target.suffix + ".tmp"
        )

        temporary.write_bytes(content)
        temporary.replace(target)

        print(
            f"Synced {name}: {len(content)} bytes"
        )

    latest = parse_json(
        downloaded["latest.json"],
        name="latest.json",
    )

    changes = parse_json(
        downloaded["changes.json"],
        name="changes.json",
    )

    trends = parse_json(
        downloaded["trends.json"],
        name="trends.json",
    )

    counts = changes["changes"]["counts"]

    print()
    print("Threat intelligence snapshot validated.")
    print(
        "Generated:",
        latest["generated_at"],
    )
    print(
        "Catalog:",
        latest["source_catalog_version"],
    )
    print(
        "Records:",
        latest["summary"]["total"],
    )
    print(
        "Critical:",
        latest["summary"]["critical"],
    )
    print(
        "High:",
        latest["summary"]["high"],
    )
    print(
        "New:",
        counts["new"],
    )
    print(
        "Changed:",
        counts["changed"],
    )
    print(
        "Removed:",
        counts["removed"],
    )
    print(
        "History points:",
        len(trends["points"]),
    )


if __name__ == "__main__":
    main()