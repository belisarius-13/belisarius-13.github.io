---
title: Security Research & Field Notes
description: Technical research and field notes from BELISARIUS13 covering Purple Team operations, detection engineering, DFIR, network analysis, Azure security and lab engineering.
hide:
  - navigation
  - toc
  - footer
---

<div class="b13-page">


<section class="b13-page-hero">

<div class="b13-page-hero-content">

<div class="b13-page-code">
B13 // SECURITY RESEARCH
</div>

<h1 class="b13-page-title">
Research & <strong>Field Notes</strong>
</h1>

<p class="b13-page-lead">
Technical research, lab observations and engineering notes produced while
building, attacking, detecting, investigating and improving systems inside
the BELISARIUS13 security lab.
</p>

<div class="b13-page-meta">

<span>PURPLE TEAM</span>
<span>DETECTION NOTES</span>
<span>DFIR</span>
<span>NETWORK ANALYSIS</span>
<span>AZURE SECURITY</span>
<span>BUILD LOGS</span>

</div>

</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
EDITORIAL MODEL
</div>

<h2>
Research from real lab activity
</h2>

</div>

<p>
Articles should originate from experiments, investigations, engineering
decisions or lessons learned rather than generic cybersecurity summaries.
</p>

</div>


<div class="b13-research-principles">


<div class="b13-research-principle">

<span>01 // BUILD</span>

<h3>
Document the environment
</h3>

<p>
Capture architecture decisions, tooling, configuration and reproducible
deployment practices.
</p>

</div>


<div class="b13-research-principle">

<span>02 // TEST</span>

<h3>
Generate evidence
</h3>

<p>
Use controlled attack activity and lab experiments to produce observable
security telemetry.
</p>

</div>


<div class="b13-research-principle">

<span>03 // ANALYZE</span>

<h3>
Explain what happened
</h3>

<p>
Break down telemetry, detections, packet captures, artifacts and
investigative findings.
</p>

</div>


<div class="b13-research-principle">

<span>04 // SHARE</span>

<h3>
Publish the lesson
</h3>

<p>
Turn practical findings into concise technical write-ups that others can
reproduce and evaluate.
</p>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
RESEARCH TRACKS
</div>

<h2>
Publication domains
</h2>

</div>

<p>
Research is organized around the same technical disciplines used across
the BELISARIUS13 campaigns.
</p>

</div>


<div class="b13-research-track-grid">


<div class="b13-research-track">

<div class="b13-research-track-head">
<span>PURPLE</span>
<strong>01</strong>
</div>

<h3>
Purple Team Research
</h3>

<p>
Adversary emulation, security-control validation, ATT&CK coverage and
lessons from attack-to-defense exercises.
</p>

<div class="b13-project-tags">
<span>ATT&CK</span>
<span>Atomic Red Team</span>
<span>Validation</span>
</div>

</div>


<div class="b13-research-track">

<div class="b13-research-track-head">
<span>DETECT</span>
<strong>02</strong>
</div>

<h3>
Detection Notes
</h3>

<p>
Detection hypotheses, telemetry requirements, rule development,
false-positive analysis and tuning decisions.
</p>

<div class="b13-project-tags">
<span>Sigma</span>
<span>Elastic</span>
<span>KQL</span>
</div>

</div>


<div class="b13-research-track">

<div class="b13-research-track-head">
<span>DFIR</span>
<strong>03</strong>
</div>

<h3>
Incident Response & DFIR
</h3>

<p>
Investigation timelines, artifact analysis, root-cause findings,
containment and remediation lessons.
</p>

<div class="b13-project-tags">
<span>Velociraptor</span>
<span>Sysmon</span>
<span>Windows</span>
</div>

</div>


<div class="b13-research-track">

<div class="b13-research-track-head">
<span>NETWORK</span>
<strong>04</strong>
</div>

<h3>
Network Analysis
</h3>

<p>
PCAP analysis, suspicious traffic patterns, protocol behavior and
network-detection engineering.
</p>

<div class="b13-project-tags">
<span>Wireshark</span>
<span>PCAP</span>
<span>Suricata</span>
</div>

</div>


<div class="b13-research-track">

<div class="b13-research-track-head">
<span>CLOUD</span>
<strong>05</strong>
</div>

<h3>
Azure Security
</h3>

<p>
Identity, posture, logging, workload security and control validation
inside Microsoft Azure.
</p>

<div class="b13-project-tags">
<span>Azure</span>
<span>Entra ID</span>
<span>Defender</span>
</div>

</div>


<div class="b13-research-track">

<div class="b13-research-track-head">
<span>BUILD</span>
<strong>06</strong>
</div>

<h3>
Engineering Build Logs
</h3>

<p>
Implementation notes covering lab infrastructure, automation, GitOps,
CI/CD and reproducible security tooling.
</p>

<div class="b13-project-tags">
<span>GitHub</span>
<span>Python</span>
<span>Automation</span>
</div>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
PUBLISHING PIPELINE
</div>

<h2>
From experiment to article
</h2>

</div>

<p>
Research follows a lightweight editorial workflow so notes are based on
evidence and remain technically reproducible.
</p>

</div>


<div class="b13-research-pipeline">


<div class="b13-research-stage">

<span>01</span>

<strong>
EXPERIMENT
</strong>

<small>
Run the lab activity.
</small>

</div>


<div class="b13-research-arrow">
→
</div>


<div class="b13-research-stage">

<span>02</span>

<strong>
CAPTURE
</strong>

<small>
Collect evidence.
</small>

</div>


<div class="b13-research-arrow">
→
</div>


<div class="b13-research-stage">

<span>03</span>

<strong>
ANALYZE
</strong>

<small>
Interpret results.
</small>

</div>


<div class="b13-research-arrow gold">
→
</div>


<div class="b13-research-stage gold">

<span>04</span>

<strong>
DOCUMENT
</strong>

<small>
Write the findings.
</small>

</div>


<div class="b13-research-arrow">
→
</div>


<div class="b13-research-stage">

<span>05</span>

<strong>
VALIDATE
</strong>

<small>
Check reproducibility.
</small>

</div>


<div class="b13-research-arrow">
→
</div>


<div class="b13-research-stage published">

<span>06</span>

<strong>
PUBLISH
</strong>

<small>
Release the article.
</small>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
EDITORIAL QUEUE
</div>

<h2>
Planned research
</h2>

</div>

<p>
The queue is intentionally tied to active and upcoming campaigns so the
site grows alongside the engineering work.
</p>

</div>


<div class="b13-research-queue">


<div class="b13-research-entry">

<div class="b13-research-entry-meta">

<span>BUILD LOG</span>

<strong>QUEUED</strong>

</div>

<h3>
Building BELISARIUS13: Secure Portfolio Infrastructure
</h3>

<p>
Architecture, Git workflow, automated deployment, DNS, TLS and the
security decisions behind Campaign-00.
</p>

<div class="b13-research-entry-footer">
CAMPAIGN-00
</div>

</div>


<div class="b13-research-entry">

<div class="b13-research-entry-meta">

<span>LAB</span>

<strong>QUEUED</strong>

</div>

<h3>
Designing a Resource-Conscious Purple Team Lab
</h3>

<p>
Building a staged lab environment for adversary emulation, endpoint
telemetry and defensive analysis without requiring a large attack range.
</p>

<div class="b13-research-entry-footer">
CAMPAIGN-01
</div>

</div>


<div class="b13-research-entry">

<div class="b13-research-entry-meta">

<span>DETECTION</span>

<strong>PLANNED</strong>

</div>

<h3>
From ATT&CK Technique to Detection Hypothesis
</h3>

<p>
A practical workflow for translating controlled adversary behavior into
telemetry requirements and testable detection logic.
</p>

<div class="b13-research-entry-footer">
CAMPAIGN-01 / 02
</div>

</div>


<div class="b13-research-entry">

<div class="b13-research-entry-meta">

<span>DFIR</span>

<strong>PLANNED</strong>

</div>

<h3>
Reconstructing a Controlled Windows Incident
</h3>

<p>
Using endpoint telemetry and forensic artifacts to build a timeline,
identify root cause and validate remediation.
</p>

<div class="b13-research-entry-footer">
CAMPAIGN-03
</div>

</div>


<div class="b13-research-entry">

<div class="b13-research-entry-meta">

<span>NETWORK</span>

<strong>PLANNED</strong>

</div>

<h3>
Reading the Attack in the PCAP
</h3>

<p>
Protocol analysis and network evidence from a controlled hostile-traffic
scenario.
</p>

<div class="b13-research-entry-footer">
CAMPAIGN-04
</div>

</div>


<div class="b13-research-entry">

<div class="b13-research-entry-meta">

<span>CLOUD</span>

<strong>PLANNED</strong>

</div>

<h3>
Building an Azure Purple Team Validation Workflow
</h3>

<p>
Connecting identity, cloud activity, posture findings and defensive
validation in a controlled Azure lab.
</p>

<div class="b13-research-entry-footer">
CAMPAIGN-06
</div>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
PUBLICATION STATUS
</div>

<h2>
Research archive
</h2>

</div>

<p>
The archive will only count completed technical articles after they have
been reviewed and published.
</p>

</div>


<div class="b13-research-status">


<div class="b13-research-status-main">

<div class="b13-research-status-code">
ARCHIVE // INITIALIZATION
</div>

<h3>
Research framework established
</h3>

<p>
The publication structure is ready. The first articles will be produced
from Campaign-00 documentation and the build-out of Campaign-01.
</p>


<div class="b13-research-status-grid">

<div>
<span>PUBLISHED</span>
<strong>00</strong>
</div>

<div>
<span>QUEUED</span>
<strong>02</strong>
</div>

<div>
<span>PLANNED</span>
<strong>04</strong>
</div>

<div>
<span>TRACKS</span>
<strong>06</strong>
</div>

</div>

</div>


<div class="b13-research-status-side">

<span>CADENCE</span>

<strong>
2×
</strong>

<small>
Technical posts per month when active publishing begins.
</small>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-research-links">

<div>

<div class="b13-kicker">
FOLLOW THE EVIDENCE
</div>

<h2>
Research connects back to the lab.
</h2>

<p>
Articles should link directly to the campaigns, detections and lab
components that produced the underlying evidence.
</p>

</div>


<div class="b13-research-link-actions">

<a href="../projects/">
CAMPAIGNS <strong>→</strong>
</a>

<a href="../lab/">
PURPLE TEAM LAB <strong>→</strong>
</a>

<a href="../detections/">
DETECTION LIBRARY <strong>→</strong>
</a>

</div>

</div>

</section>



<div class="b13-page-signoff">

<span>
B13 // SECURITY RESEARCH
</span>

<strong>
Experiment. Observe. Document. Share.
</strong>

</div>


</div>