---
hide:
  - navigation
  - toc
  - footer
---

<div class="b13-page">


<section class="b13-page-hero">

<div class="b13-page-hero-content">

<div class="b13-page-code">
B13 // DETECTION ENGINEERING
</div>

<h1 class="b13-page-title">
Detection <strong>Library</strong>
</h1>

<p class="b13-page-lead">
Detection engineering at BELISARIUS13 focuses on turning observed
adversary behavior into testable, explainable and reproducible
defensive logic.
</p>

<div class="b13-page-meta">

<span>SIGMA</span>
<span>ELASTIC</span>
<span>KQL</span>
<span>SURICATA</span>
<span>MITRE ATT&CK</span>
<span>DETECTION-AS-CODE</span>

</div>

</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
DETECTION PHILOSOPHY
</div>

<h2>
Detection is an engineering process.
</h2>

</div>

<p>
A rule is not considered useful simply because it matches an event.
It must be tied to a hypothesis, tested against known behavior and
revalidated after tuning.
</p>

</div>


<div class="b13-detection-principles">


<div class="b13-detection-principle">

<span>01 // BEHAVIOR</span>

<h3>
Start with attacker behavior
</h3>

<p>
Define what activity should be visible before writing detection logic.
</p>

</div>


<div class="b13-detection-principle">

<span>02 // TELEMETRY</span>

<h3>
Know the evidence source
</h3>

<p>
Identify which endpoint, network, identity or cloud telemetry should
contain the behavior.
</p>

</div>


<div class="b13-detection-principle">

<span>03 // TEST</span>

<h3>
Generate known activity
</h3>

<p>
Execute controlled activity so the detection can be tested against a
known ground truth.
</p>

</div>


<div class="b13-detection-principle">

<span>04 // TUNE</span>

<h3>
Measure signal quality
</h3>

<p>
Document false positives, environmental assumptions and tuning decisions.
</p>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
VALIDATION PIPELINE
</div>

<h2>
Detection lifecycle
</h2>

</div>

<p>
Every BELISARIUS13 detection should move through the same validation
workflow before it is marked as complete.
</p>

</div>


<div class="b13-detection-pipeline">


<div class="b13-detection-stage">

<span>01</span>

<strong>
HYPOTHESIS
</strong>

<small>
Define the behavior.
</small>

</div>


<div class="b13-detection-arrow">
→
</div>


<div class="b13-detection-stage">

<span>02</span>

<strong>
TELEMETRY
</strong>

<small>
Locate the evidence.
</small>

</div>


<div class="b13-detection-arrow">
→
</div>


<div class="b13-detection-stage">

<span>03</span>

<strong>
DETECT
</strong>

<small>
Write detection logic.
</small>

</div>


<div class="b13-detection-arrow gold">
→
</div>


<div class="b13-detection-stage gold">

<span>04</span>

<strong>
TEST
</strong>

<small>
Generate known activity.
</small>

</div>


<div class="b13-detection-arrow">
→
</div>


<div class="b13-detection-stage">

<span>05</span>

<strong>
TUNE
</strong>

<small>
Reduce noise.
</small>

</div>


<div class="b13-detection-arrow">
→
</div>


<div class="b13-detection-stage validated">

<span>06</span>

<strong>
VALIDATE
</strong>

<small>
Retest and document.
</small>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
DETECTION SCHEMA
</div>

<h2>
What every detection documents
</h2>

</div>

<p>
The library uses a consistent structure so a detection can be understood,
tested and maintained by someone other than the original author.
</p>

</div>


<div class="b13-detection-schema">


<div>

<span>01</span>

<h3>
Detection Hypothesis
</h3>

<p>
What behavior are we attempting to identify and why is it suspicious?
</p>

</div>


<div>

<span>02</span>

<h3>
ATT&CK Mapping
</h3>

<p>
Technique, sub-technique and tactical context associated with the behavior.
</p>

</div>


<div>

<span>03</span>

<h3>
Telemetry Source
</h3>

<p>
Events, fields, logs and sensors required for the detection to function.
</p>

</div>


<div>

<span>04</span>

<h3>
Detection Logic
</h3>

<p>
Sigma rule, Elastic query, KQL query, Suricata signature or other logic.
</p>

</div>


<div>

<span>05</span>

<h3>
Test Procedure
</h3>

<p>
How the controlled activity is generated and what evidence is expected.
</p>

</div>


<div>

<span>06</span>

<h3>
False Positives
</h3>

<p>
Known benign behavior and environmental conditions that may trigger it.
</p>

</div>


<div>

<span>07</span>

<h3>
Tuning Notes
</h3>

<p>
Changes made to improve fidelity while preserving useful coverage.
</p>

</div>


<div>

<span>08</span>

<h3>
Validation Result
</h3>

<p>
Whether the rule fired, what was observed and whether retesting succeeded.
</p>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
DETECTION DOMAINS
</div>

<h2>
Planned detection packs
</h2>

</div>

<p>
Detection content will be populated progressively as each Purple Team
campaign generates real lab telemetry.
</p>

</div>


<div class="b13-detection-domain-grid">


<div class="b13-detection-domain">

<div class="b13-detection-domain-head">

<span>ENDPOINT</span>

<strong>
PLANNED
</strong>

</div>

<h3>
Windows Detection Pack
</h3>

<p>
Process execution, PowerShell, persistence, authentication,
service creation and suspicious system activity.
</p>

<div class="b13-project-tags">
<span>Sysmon</span>
<span>Windows Events</span>
<span>Sigma</span>
<span>Elastic</span>
</div>

<div class="b13-detection-domain-footer">
CAMPAIGN 01–03
</div>

</div>



<div class="b13-detection-domain">

<div class="b13-detection-domain-head">

<span>NETWORK</span>

<strong>
PLANNED
</strong>

</div>

<h3>
Network Detection Pack
</h3>

<p>
Reconnaissance, suspicious DNS, beacon-like activity, protocol misuse
and network indicators generated during lab attacks.
</p>

<div class="b13-project-tags">
<span>Suricata</span>
<span>Wireshark</span>
<span>PCAP</span>
</div>

<div class="b13-detection-domain-footer">
CAMPAIGN 04
</div>

</div>



<div class="b13-detection-domain">

<div class="b13-detection-domain-head">

<span>WEB</span>

<strong>
PLANNED
</strong>

</div>

<h3>
Web Detection Pack
</h3>

<p>
Suspicious HTTP activity, exploitation attempts and application behavior
captured during controlled web-security scenarios.
</p>

<div class="b13-project-tags">
<span>HTTP</span>
<span>OWASP</span>
<span>Elastic</span>
</div>

<div class="b13-detection-domain-footer">
CAMPAIGN 05
</div>

</div>



<div class="b13-detection-domain">

<div class="b13-detection-domain-head">

<span>CLOUD</span>

<strong>
PLANNED
</strong>

</div>

<h3>
Azure Detection Pack
</h3>

<p>
Identity anomalies, suspicious control-plane activity, risky configuration
changes and cloud workload security events.
</p>

<div class="b13-project-tags">
<span>KQL</span>
<span>Entra ID</span>
<span>Azure Logs</span>
<span>Defender</span>
</div>

<div class="b13-detection-domain-footer">
CAMPAIGN 06
</div>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
LIBRARY STATUS
</div>

<h2>
Detection coverage
</h2>

</div>

<p>
The framework is ready. Detection content will move from planned to
validated as the lab campaigns are executed.
</p>

</div>


<div class="b13-detection-status">


<div class="b13-detection-status-main">

<div class="b13-detection-status-code">
LIBRARY // INITIALIZATION
</div>

<h3>
Detection engineering framework established
</h3>

<p>
The repository structure, validation methodology and documentation model
are being established before Campaign-01 begins generating endpoint
telemetry.
</p>

<div class="b13-detection-progress">

<div>
<span>FRAMEWORK</span>
<strong>READY</strong>
</div>

<div>
<span>ENDPOINT RULES</span>
<strong>PLANNED</strong>
</div>

<div>
<span>NETWORK RULES</span>
<strong>PLANNED</strong>
</div>

<div>
<span>CLOUD RULES</span>
<strong>PLANNED</strong>
</div>

</div>

</div>


<div class="b13-detection-status-side">

<span>VALIDATED</span>

<strong>
00
</strong>

<small>
Detections will only be counted after controlled testing and retest.
</small>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-detection-template">

<div>

<div class="b13-kicker">
DETECTION TEMPLATE
</div>

<h2>
Future detection entries
</h2>

<p>
Each validated detection will eventually have its own technical page
using the same engineering schema.
</p>

</div>


<div class="b13-template-terminal">

<div>
<span>$</span>
<strong>detect --validate TXXXX</strong>
</div>

<small>
hypothesis → telemetry → query → test → tune → retest
</small>

</div>

</div>

</section>



<div class="b13-page-signoff">

<span>
B13 // DETECTION ENGINEERING
</span>

<strong>
Behavior first. Detection second. Validation always.
</strong>

</div>


</div>