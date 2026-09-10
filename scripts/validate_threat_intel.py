"""Validate the committed BELISARIUS13 threat-intel snapshot."""

from __future__ import annotations

from pathlib import Path

from sync_threat_intel import (
    RESOURCES,
    IntelSyncError,
    parse_json,
    validate_documents,
)


def main() -> None:
    """Validate the website's local intelligence snapshot."""

    repository_root = (
        Path(__file__).resolve().parents[1]
    )

    feed_directory = (
        repository_root
        / "docs"
        / "intel"
        / "feed"
    )

    documents: dict[str, bytes] = {}

    for name in RESOURCES:
        path = feed_directory / name

        if not path.is_file():
            raise IntelSyncError(
                f"Missing local intelligence artifact: {name}"
            )

        documents[name] = path.read_bytes()

    validate_documents(
        documents["latest.json"],
        documents["changes.json"],
        documents["trends.json"],
        documents["changes.atom"],
        documents["latest.md"],
    )

    latest = parse_json(
        documents["latest.json"],
        name="latest.json",
    )

    changes = parse_json(
        documents["changes.json"],
        name="changes.json",
    )

    trends = parse_json(
        documents["trends.json"],
        name="trends.json",
    )

    counts = changes["changes"]["counts"]

    print("Local threat intelligence snapshot validated.")
    print("Generated:", latest["generated_at"])
    print(
        "Catalog:",
        latest["source_catalog_version"],
    )
    print("Records:", latest["summary"]["total"])
    print("Critical:", latest["summary"]["critical"])
    print("High:", latest["summary"]["high"])
    print("New:", counts["new"])
    print("Changed:", counts["changed"])
    print("Removed:", counts["removed"])
    print(
        "History points:",
        len(trends["points"]),
    )


if __name__ == "__main__":
    main()