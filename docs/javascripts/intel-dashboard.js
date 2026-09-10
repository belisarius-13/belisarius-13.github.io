(() => {
  "use strict";

  const dashboard = document.querySelector(
    "[data-b13-intel-dashboard]"
  );

  if (!dashboard) {
    return;
  }

  const setText = (name, value) => {
    const element = dashboard.querySelector(
      `[data-intel="${name}"]`
    );

    if (element) {
      element.textContent =
        value === null || value === undefined
          ? "—"
          : String(value);
    }
  };

  const formatTimestamp = (value) => {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return value || "—";
    }

    return new Intl.DateTimeFormat(
      undefined,
      {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      }
    ).format(date);
  };

  const formatProbability = (value) => {
    const probability = Number(value);

    if (!Number.isFinite(probability)) {
      return "—";
    }

    return probability.toFixed(4);
  };

  const loadJson = async (url) => {
    const response = await fetch(
      url,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status} while loading ${url}`
      );
    }

    return response.json();
  };

  const renderTopPriorities = (records) => {
    const tableBody = dashboard.querySelector(
      "[data-intel-top]"
    );

    if (!tableBody) {
      return;
    }

    tableBody.replaceChildren();

    for (const record of records.slice(0, 5)) {
      const row = document.createElement("tr");

      const values = [
        record.priority,
        record.id,
        record.vendor,
        record.product,
        formatProbability(record.epss),
      ];

      for (const value of values) {
        const cell = document.createElement("td");
        cell.textContent = value ?? "—";
        row.appendChild(cell);
      }

      tableBody.appendChild(row);
    }

    if (records.length === 0) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");

      cell.colSpan = 5;
      cell.textContent =
        "No prioritized intelligence records available.";

      row.appendChild(cell);
      tableBody.appendChild(row);
    }
  };

  const render = async () => {
    try {
      const [latest, changeDocument] =
        await Promise.all([
          loadJson("feed/latest.json"),
          loadJson("feed/changes.json"),
        ]);

      if (latest.schema_version !== 2) {
        throw new Error(
          "Unsupported latest.json schema"
        );
      }

      if (changeDocument.schema_version !== 1) {
        throw new Error(
          "Unsupported changes.json schema"
        );
      }

      if (
        latest.generated_at !==
        changeDocument.generated_at
      ) {
        throw new Error(
          "Intelligence publication timestamps differ"
        );
      }

      if (
        latest.priority_model !==
        changeDocument.priority_model
      ) {
        throw new Error(
          "Intelligence priority models differ"
        );
      }

      const summary = latest.summary;
      const changes =
        changeDocument.changes.counts;

      setText("total", summary.total);
      setText("critical", summary.critical);
      setText("high", summary.high);
      setText("medium", summary.medium);

      setText("new", changes.new);
      setText("changed", changes.changed);
      setText("removed", changes.removed);
      setText("unchanged", changes.unchanged);

      setText(
        "catalog",
        latest.source_catalog_version
      );

      setText(
        "generated",
        formatTimestamp(
          latest.generated_at
        )
      );

      setText(
        "model",
        latest.priority_model
      );

      setText(
        "status",
        "VALIDATED SNAPSHOT"
      );

      renderTopPriorities(
        latest.records ?? []
      );
    } catch (error) {
      console.error(
        "B13 intelligence dashboard failed:",
        error
      );

      setText(
        "status",
        "SNAPSHOT UNAVAILABLE"
      );

      const tableBody = dashboard.querySelector(
        "[data-intel-top]"
      );

      if (tableBody) {
        tableBody.replaceChildren();

        const row =
          document.createElement("tr");

        const cell =
          document.createElement("td");

        cell.colSpan = 5;

        cell.textContent =
          "Threat intelligence data could not be loaded.";

        row.appendChild(cell);
        tableBody.appendChild(row);
      }
    }
  };

  render();
})();