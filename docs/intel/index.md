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