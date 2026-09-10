---
title: Threat Intelligence
description: Automated defensive threat intelligence from the BELISARIUS13 Security Lab.
hide:
    - navigation
    - toc
    - footer
---

<div class="b13-page-kicker">BELISARIUS13 SECURITY LAB // INTEL-01</div>

# Threat Intelligence

<div class="b13-page-lead">
Automated defensive vulnerability intelligence built from CISA Known Exploited Vulnerabilities, FIRST EPSS enrichment, change tracking, and the B13-KEV-v1 prioritization model.
</div>

## Intelligence Pipeline

```text
CISA KEV
    ↓
NORMALIZE
    ↓
STATE / CHANGE DETECTION
    ↓
FIRST EPSS
    ↓
B13-KEV-v1
    ↓
PUBLISH
```

<section class="b13-page-section" data-b13-intel-dashboard>

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
CURRENT INTELLIGENCE
</div>

<h2>
Defensive Intelligence Posture
</h2>

</div>

<p>
Validated snapshot produced by the BELISARIUS13 automated threat intelligence pipeline.
</p>

</div>


<div class="b13-intel-meta">

<span>
STATUS
<strong data-intel="status">LOADING</strong>
</span>

<span>
CATALOG
<strong data-intel="catalog">—</strong>
</span>

<span>
MODEL
<strong data-intel="model">—</strong>
</span>

<span>
UPDATED
<strong data-intel="generated">—</strong>
</span>

</div>


<div class="b13-grid b13-intel-metrics">

<div class="b13-card">
<div class="b13-card-label">TOTAL KEV</div>
<strong class="b13-intel-number" data-intel="total">—</strong>
<p>Known exploited vulnerabilities currently tracked.</p>
</div>

<div class="b13-card">
<div class="b13-card-label">CRITICAL</div>
<strong class="b13-intel-number" data-intel="critical">—</strong>
<p>Highest-priority defensive remediation candidates.</p>
</div>

<div class="b13-card">
<div class="b13-card-label">HIGH</div>
<strong class="b13-intel-number" data-intel="high">—</strong>
<p>Elevated exploitation or ransomware signals.</p>
</div>

<div class="b13-card">
<div class="b13-card-label">MEDIUM</div>
<strong class="b13-intel-number" data-intel="medium">—</strong>
<p>Remaining confirmed CISA KEV exposure.</p>
</div>

</div>


<h3>What Changed</h3>

<div class="b13-intel-change-grid">

<div>
<span>NEW</span>
<strong data-intel="new">—</strong>
</div>

<div>
<span>CHANGED</span>
<strong data-intel="changed">—</strong>
</div>

<div>
<span>REMOVED</span>
<strong data-intel="removed">—</strong>
</div>

<div>
<span>UNCHANGED</span>
<strong data-intel="unchanged">—</strong>
</div>

</div>


<h3>Top Priorities</h3>

<div class="b13-intel-table-wrap">

<table>

<thead>
<tr>
<th>Priority</th>
<th>CVE</th>
<th>Vendor</th>
<th>Product</th>
<th>EPSS</th>
</tr>
</thead>

<tbody data-intel-top>

<tr>
<td colspan="5">Loading intelligence…</td>
</tr>

</tbody>

</table>

</div>


<div class="b13-actions">

<a class="b13-button" href="feed/latest/">
Analyst Brief →
</a>

<a class="b13-button b13-button-secondary" href="feed/latest.json">
Ranked JSON
</a>

<a class="b13-button b13-button-secondary" href="feed/changes.json">
Change JSON
</a>

<a class="b13-button b13-button-secondary" href="feed/changes.atom">
Atom Feed
</a>

</div>

</section>

<section class="b13-page-section b13-trends" data-b13-intel-trends>

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
HISTORICAL INTELLIGENCE
</div>

<h2>
Trend Analysis
</h2>

</div>

<p>
Longitudinal analysis of CISA KEV exposure, B13 priority movement,
ransomware association, EPSS signals, and daily intelligence activity.
</p>

</div>


<div class="b13-intel-meta">

<span>
STATUS
<strong data-trend="status">LOADING</strong>
</span>

<span>
OBSERVATIONS
<strong data-trend="observations">—</strong>
</span>

<span>
FIRST OBSERVATION
<strong data-trend="first-date">—</strong>
</span>

<span>
LATEST OBSERVATION
<strong data-trend="latest-date">—</strong>
</span>

</div>


<div class="b13-trend-note" data-trend-note>
Loading historical intelligence…
</div>


<h3>Latest Movement</h3>

<div class="b13-trend-metric-grid">

<div class="b13-card">
<div class="b13-card-label">TOTAL KEV</div>
<strong class="b13-intel-number" data-trend="total">—</strong>
<div class="b13-trend-delta" data-trend="total-delta">—</div>
<p>Change in the total KEV population between observations.</p>
</div>

<div class="b13-card">
<div class="b13-card-label">CRITICAL</div>
<strong class="b13-intel-number" data-trend="critical">—</strong>
<div class="b13-trend-delta" data-trend="critical-delta">—</div>
<p>Movement in B13 CRITICAL-priority intelligence.</p>
</div>

<div class="b13-card">
<div class="b13-card-label">RANSOMWARE KNOWN</div>
<strong class="b13-intel-number" data-trend="ransomware">—</strong>
<div class="b13-trend-delta" data-trend="ransomware-delta">—</div>
<p>KEVs associated with known ransomware campaign use.</p>
</div>

<div class="b13-card">
<div class="b13-card-label">EPSS ≥ 0.90</div>
<strong class="b13-intel-number" data-trend="epss90">—</strong>
<div class="b13-trend-delta" data-trend="epss90-delta">—</div>
<p>KEVs carrying very high exploitation probability.</p>
</div>

</div>


<h3>Priority Posture</h3>

<div class="b13-trend-chart-card">

<div class="b13-trend-chart-header">
<div>
<strong>CRITICAL / HIGH</strong>
<span>B13 priority population over time</span>
</div>

<div class="b13-trend-legend">
<span class="b13-trend-key b13-trend-key--primary">CRITICAL</span>
<span class="b13-trend-key b13-trend-key--secondary">HIGH</span>
</div>
</div>

<div
    class="b13-trend-chart"
    data-trend-chart="priority"
    role="img"
    aria-label="Historical Critical and High priority intelligence trend">
</div>

</div>


<h3>Exploitation Signals</h3>

<div class="b13-trend-chart-card">

<div class="b13-trend-chart-header">
<div>
<strong>RANSOMWARE / EPSS</strong>
<span>Elevated exploitation indicators over time</span>
</div>

<div class="b13-trend-legend">
<span class="b13-trend-key b13-trend-key--primary">RANSOMWARE</span>
<span class="b13-trend-key b13-trend-key--secondary">EPSS ≥ 0.90</span>
</div>
</div>

<div
    class="b13-trend-chart"
    data-trend-chart="signals"
    role="img"
    aria-label="Historical ransomware and EPSS exploitation signal trend">
</div>

</div>


<h3>Daily Intelligence Activity</h3>

<div class="b13-trend-chart-card">

<div class="b13-trend-chart-header">
<div>
<strong>NEW / CHANGED</strong>
<span>Daily CISA KEV source activity</span>
</div>

<div class="b13-trend-legend">
<span class="b13-trend-key b13-trend-key--primary">NEW</span>
<span class="b13-trend-key b13-trend-key--secondary">CHANGED</span>
</div>
</div>

<div
    class="b13-trend-chart"
    data-trend-chart="activity"
    role="img"
    aria-label="Historical new and changed vulnerability intelligence activity">
</div>

</div>


<div class="b13-actions">

<a
    class="b13-button b13-button-secondary"
    href="feed/trends.json">
Historical JSON
</a>

</div>

</section>