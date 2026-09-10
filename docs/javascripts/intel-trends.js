(() => {
  "use strict";

  const requireNumber = (value, name) => {
    if (
      typeof value !== "number" ||
      !Number.isFinite(value)
    ) {
      throw new Error(
        `Invalid historical metric: ${name}`
      );
    }

    return value;
  };

  const metricDelta = (
    current,
    previous
  ) => (
    previous === null
      ? null
      : current - previous
  );

  const buildTrendSummary = (history) => {
    if (
      !history ||
      history.schema_version !== 1
    ) {
      throw new Error(
        "Unsupported threat-intelligence history schema"
      );
    }

    if (
      history.priority_model !==
      "B13-KEV-v1"
    ) {
      throw new Error(
        "Unsupported historical priority model"
      );
    }

    const points = history.points;

    if (
      !Array.isArray(points) ||
      points.length === 0
    ) {
      throw new Error(
        "Historical intelligence contains no observations"
      );
    }

    const latest =
      points[points.length - 1];

    const previous =
      points.length >= 2
        ? points[points.length - 2]
        : null;

    const latestMetrics = {
      total: requireNumber(
        latest.total,
        "total"
      ),
      critical: requireNumber(
        latest.priorities.critical,
        "critical"
      ),
      high: requireNumber(
        latest.priorities.high,
        "high"
      ),
      medium: requireNumber(
        latest.priorities.medium,
        "medium"
      ),
      low: requireNumber(
        latest.priorities.low,
        "low"
      ),
      ransomwareKnown: requireNumber(
        latest.signals.ransomware_known,
        "ransomware_known"
      ),
      epssGe090: requireNumber(
        latest.signals.epss_ge_090,
        "epss_ge_090"
      ),
      epssGe095: requireNumber(
        latest.signals.epss_ge_095,
        "epss_ge_095"
      ),
      newRecords: requireNumber(
        latest.changes.new,
        "changes.new"
      ),
      changedRecords: requireNumber(
        latest.changes.changed,
        "changes.changed"
      ),
      removedRecords: requireNumber(
        latest.changes.removed,
        "changes.removed"
      ),
    };

    let deltas = null;

    if (previous) {
      deltas = {
        total: metricDelta(
          latestMetrics.total,
          previous.total
        ),
        critical: metricDelta(
          latestMetrics.critical,
          previous.priorities.critical
        ),
        high: metricDelta(
          latestMetrics.high,
          previous.priorities.high
        ),
        ransomwareKnown: metricDelta(
          latestMetrics.ransomwareKnown,
          previous.signals.ransomware_known
        ),
        epssGe090: metricDelta(
          latestMetrics.epssGe090,
          previous.signals.epss_ge_090
        ),
        epssGe095: metricDelta(
          latestMetrics.epssGe095,
          previous.signals.epss_ge_095
        ),
      };
    }

    return {
      status:
        previous
          ? "TRENDING"
          : "BASELINE",

      observations: points.length,

      period: {
        first: points[0].date,
        latest: latest.date,
      },

      latest: latestMetrics,

      deltas,

      activity: {
        total:
          latestMetrics.newRecords +
          latestMetrics.changedRecords +
          latestMetrics.removedRecords,

        new: latestMetrics.newRecords,
        changed:
          latestMetrics.changedRecords,
        removed:
          latestMetrics.removedRecords,
      },

      series: {
        dates: points.map(
          point => point.date
        ),

        total: points.map(
          point => point.total
        ),

        critical: points.map(
          point => point.priorities.critical
        ),

        high: points.map(
          point => point.priorities.high
        ),

        ransomwareKnown: points.map(
          point => point.signals.ransomware_known
        ),

        epssGe090: points.map(
          point => point.signals.epss_ge_090
        ),

        epssGe095: points.map(
          point => point.signals.epss_ge_095
        ),

        newRecords: points.map(
          point => point.changes.new
        ),

        changedRecords: points.map(
          point => point.changes.changed
        ),
      },
    };
  };

  const SVG_NS =
    "http://www.w3.org/2000/svg";

  const setTrendText = (
    root,
    name,
    value
  ) => {
    const element = root.querySelector(
      `[data-trend="${name}"]`
    );

    if (element) {
      element.textContent =
        value === null ||
        value === undefined
          ? "—"
          : String(value);
    }
  };


  const formatDelta = (value) => {
    if (value === null) {
      return "BASELINE";
    }

    if (value > 0) {
      return `+${value}`;
    }

    return String(value);
  };


  const applyDeltaState = (
    root,
    name,
    value
  ) => {
    const element = root.querySelector(
      `[data-trend="${name}"]`
    );

    if (!element) {
      return;
    }

    element.classList.remove(
      "is-positive",
      "is-negative",
      "is-neutral",
      "is-baseline"
    );

    if (value === null) {
      element.classList.add(
        "is-baseline"
      );
      return;
    }

    if (value > 0) {
      element.classList.add(
        "is-positive"
      );
    } else if (value < 0) {
      element.classList.add(
        "is-negative"
      );
    } else {
      element.classList.add(
        "is-neutral"
      );
    }
  };


  const createSvgElement = (
    name,
    attributes = {}
  ) => {
    const element =
      document.createElementNS(
        SVG_NS,
        name
      );

    for (
      const [key, value]
      of Object.entries(attributes)
    ) {
      element.setAttribute(
        key,
        String(value)
      );
    }

    return element;
  };


  const buildPath = (
    values,
    {
      width,
      height,
      padding,
      minValue,
      maxValue,
    }
  ) => {
    const usableWidth =
      width - padding * 2;

    const usableHeight =
      height - padding * 2;

    const valueRange =
      Math.max(
        maxValue - minValue,
        1
      );

    return values.map(
      (value, index) => {
        const x =
          values.length === 1
            ? width / 2
            : padding +
              (
                index /
                (values.length - 1)
              ) *
              usableWidth;

        const y =
          padding +
          (
            1 -
            (
              value - minValue
            ) /
            valueRange
          ) *
          usableHeight;

        return {
          x,
          y,
          value,
        };
      }
    );
  };


  const renderSeries = (
    svg,
    points,
    className
  ) => {
    if (points.length > 1) {
      const path = createSvgElement(
        "path",
        {
          d: points
            .map(
              (point, index) =>
                `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
            )
            .join(" "),
          class: className,
        }
      );

      svg.appendChild(path);
    }

    for (const point of points) {
      const circle = createSvgElement(
        "circle",
        {
          cx: point.x,
          cy: point.y,
          r: 4,
          class:
            `${className} b13-trend-point`,
        }
      );

      const title = createSvgElement(
        "title"
      );

      title.textContent =
        String(point.value);

      circle.appendChild(title);
      svg.appendChild(circle);
    }
  };


  const renderChart = (
    container,
    dates,
    firstSeries,
    secondSeries
  ) => {
    const width = 760;
    const height = 250;
    const padding = 34;

    const allValues = [
      ...firstSeries,
      ...secondSeries,
    ];

    const minValue =
      Math.min(...allValues);

    const maxValue =
      Math.max(...allValues);

    const svg = createSvgElement(
      "svg",
      {
        viewBox:
          `0 0 ${width} ${height}`,
        preserveAspectRatio:
          "none",
        "aria-hidden": "true",
      }
    );

    svg.classList.add(
      "b13-trend-svg"
    );

    for (let line = 0; line <= 4; line += 1) {
      const y =
        padding +
        (
          line / 4
        ) *
        (
          height -
          padding * 2
        );

      svg.appendChild(
        createSvgElement(
          "line",
          {
            x1: padding,
            y1: y,
            x2:
              width -
              padding,
            y2: y,
            class:
              "b13-trend-grid-line",
          }
        )
      );
    }

    const firstPoints = buildPath(
      firstSeries,
      {
        width,
        height,
        padding,
        minValue,
        maxValue,
      }
    );

    const secondPoints = buildPath(
      secondSeries,
      {
        width,
        height,
        padding,
        minValue,
        maxValue,
      }
    );

    renderSeries(
      svg,
      firstPoints,
      "b13-trend-line b13-trend-line--primary"
    );

    renderSeries(
      svg,
      secondPoints,
      "b13-trend-line b13-trend-line--secondary"
    );

    const firstDate =
      dates[0];

    const lastDate =
      dates[dates.length - 1];

    const firstLabel =
      createSvgElement(
        "text",
        {
          x: padding,
          y:
            height - 8,
          class:
            "b13-trend-axis-label",
        }
      );

    firstLabel.textContent =
      firstDate;

    svg.appendChild(
      firstLabel
    );

    if (dates.length > 1) {
      const lastLabel =
        createSvgElement(
          "text",
          {
            x:
              width -
              padding,
            y:
              height - 8,
            "text-anchor":
              "end",
            class:
              "b13-trend-axis-label",
          }
        );

      lastLabel.textContent =
        lastDate;

      svg.appendChild(
        lastLabel
      );
    }

    container.replaceChildren(
      svg
    );
  };


  const loadHistory = async () => {
    const response = await fetch(
      "feed/trends.json",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status} while loading historical intelligence`
      );
    }

    return response.json();
  };


  const renderTrendDashboard =
    async () => {
      const root =
        document.querySelector(
          "[data-b13-intel-trends]"
        );

      if (!root) {
        return;
      }

      try {
        const history =
          await loadHistory();

        const summary =
          buildTrendSummary(
            history
          );

        setTrendText(
          root,
          "status",
          summary.status
        );

        setTrendText(
          root,
          "observations",
          summary.observations
        );

        setTrendText(
          root,
          "first-date",
          summary.period.first
        );

        setTrendText(
          root,
          "latest-date",
          summary.period.latest
        );

        setTrendText(
          root,
          "total",
          summary.latest.total
        );

        setTrendText(
          root,
          "critical",
          summary.latest.critical
        );

        setTrendText(
          root,
          "ransomware",
          summary.latest.ransomwareKnown
        );

        setTrendText(
          root,
          "epss90",
          summary.latest.epssGe090
        );

        const deltaValues = {
          "total-delta":
            summary.deltas?.total ?? null,

          "critical-delta":
            summary.deltas?.critical ?? null,

          "ransomware-delta":
            summary.deltas
              ?.ransomwareKnown ?? null,

          "epss90-delta":
            summary.deltas
              ?.epssGe090 ?? null,
        };

        for (
          const [name, value]
          of Object.entries(
            deltaValues
          )
        ) {
          setTrendText(
            root,
            name,
            formatDelta(value)
          );

          applyDeltaState(
            root,
            name,
            value
          );
        }

        const note =
          root.querySelector(
            "[data-trend-note]"
          );

        if (note) {
          if (
            summary.status ===
            "BASELINE"
          ) {
            note.textContent =
              "Baseline established. A second UTC-day observation is required before directional trend deltas are calculated.";
          } else {
            note.textContent =
              `${summary.observations} daily observations retained from ${summary.period.first} through ${summary.period.latest}.`;
          }
        }

        const priorityChart =
          root.querySelector(
            '[data-trend-chart="priority"]'
          );

        const signalChart =
          root.querySelector(
            '[data-trend-chart="signals"]'
          );

        const activityChart =
          root.querySelector(
            '[data-trend-chart="activity"]'
          );

        if (priorityChart) {
          renderChart(
            priorityChart,
            summary.series.dates,
            summary.series.critical,
            summary.series.high
          );
        }

        if (signalChart) {
          renderChart(
            signalChart,
            summary.series.dates,
            summary.series.ransomwareKnown,
            summary.series.epssGe090
          );
        }

        if (activityChart) {
          renderChart(
            activityChart,
            summary.series.dates,
            summary.series.newRecords,
            summary.series.changedRecords
          );
        }
      } catch (error) {
        console.error(
          "B13 historical intelligence failed:",
          error
        );

        setTrendText(
          root,
          "status",
          "HISTORY UNAVAILABLE"
        );

        const note =
          root.querySelector(
            "[data-trend-note]"
          );

        if (note) {
          note.textContent =
            "Historical intelligence could not be loaded.";
        }
      }
    };

  window.B13IntelTrends = Object.freeze({
    buildTrendSummary,
    renderTrendDashboard,
  });

  renderTrendDashboard();
})();