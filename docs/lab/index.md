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
B13 // LAB ENVIRONMENT
</div>

<h1 class="b13-page-title">
Purple Team <strong>Lab</strong>
</h1>

<p class="b13-page-lead">
A controlled security engineering environment for adversary emulation,
telemetry collection, detection development, incident investigation and
defensive validation.
</p>

<div class="b13-page-meta">

<span>ISOLATED</span>
<span>REPRODUCIBLE</span>
<span>OBSERVABLE</span>
<span>ATT&CK-ALIGNED</span>
<span>AZURE-READY</span>

</div>

</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
LAB MISSION
</div>

<h2>
Controlled security validation
</h2>

</div>

<p>
The environment is designed to generate known adversary activity,
capture the resulting telemetry and measure defensive visibility.
</p>

</div>


<div class="b13-lab-mission-grid">


<div class="b13-lab-mission-card">

<span>01 // ATTACK</span>

<strong>
Generate controlled activity
</strong>

<p>
Execute known adversary techniques against isolated lab systems
without exposing production infrastructure.
</p>

</div>


<div class="b13-lab-mission-card">

<span>02 // OBSERVE</span>

<strong>
Capture security telemetry
</strong>

<p>
Collect endpoint, network, authentication and cloud evidence generated
during each exercise.
</p>

</div>


<div class="b13-lab-mission-card">

<span>03 // DETECT</span>

<strong>
Engineer visibility
</strong>

<p>
Turn observed behavior into detections, hunting queries and
investigative workflows.
</p>

</div>


<div class="b13-lab-mission-card">

<span>04 // VALIDATE</span>

<strong>
Prove defensive improvement
</strong>

<p>
Retest the same technique after remediation to verify that defensive
controls actually improved.
</p>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
LAB ARCHITECTURE
</div>

<h2>
Security validation pipeline
</h2>

</div>

<p>
The lab is intentionally staged so individual components can be
started, tested and shut down without requiring a large permanent range.
</p>

</div>


<div class="b13-lab-architecture">


<div class="b13-lab-node b13-lab-host">

<div class="b13-lab-node-head">
<span>HOST</span>
<strong>01</strong>
</div>

<h3>
HP ZBook
</h3>

<p>
Primary virtualization and security engineering workstation.
</p>

<div class="b13-project-tags">
<span>Windows</span>
<span>VMware</span>
<span>Hyper-V</span>
</div>

</div>


<div class="b13-lab-flow">
↓
</div>


<div class="b13-lab-stage-grid">


<div class="b13-lab-node b13-lab-red">

<div class="b13-lab-node-head">
<span>ATTACKER</span>
<strong>RED</strong>
</div>

<h3>
Kali Linux
</h3>

<p>
Controlled adversary emulation, reconnaissance and attack generation.
</p>

<div class="b13-lab-status ready">
AVAILABLE
</div>

</div>


<div class="b13-lab-node b13-lab-endpoint">

<div class="b13-lab-node-head">
<span>TARGET</span>
<strong>ENDPOINT</strong>
</div>

<h3>
Windows Endpoint
</h3>

<p>
Victim workload used for execution, persistence, discovery and
incident-response exercises.
</p>

<div class="b13-lab-status ready">
AVAILABLE
</div>

</div>


</div>


<div class="b13-lab-flow">
↓ TELEMETRY
</div>


<div class="b13-lab-telemetry-grid">


<div class="b13-lab-node">

<div class="b13-lab-node-head">
<span>SIEM</span>
<strong>BLUE</strong>
</div>

<h3>
Elastic
</h3>

<p>
Central telemetry analysis, hunting and detection engineering platform.
</p>

<div class="b13-lab-status integration">
INTEGRATION
</div>

</div>


<div class="b13-lab-node">

<div class="b13-lab-node-head">
<span>DFIR</span>
<strong>IR</strong>
</div>

<h3>
Velociraptor
</h3>

<p>
Endpoint collection, triage, artifact acquisition and investigation.
</p>

<div class="b13-lab-status integration">
INTEGRATION
</div>

</div>


<div class="b13-lab-node">

<div class="b13-lab-node-head">
<span>NETWORK</span>
<strong>PCAP</strong>
</div>

<h3>
Wireshark
</h3>

<p>
Packet capture and protocol-level analysis for network investigations.
</p>

<div class="b13-lab-status ready">
AVAILABLE
</div>

</div>


<div class="b13-lab-node">

<div class="b13-lab-node-head">
<span>SENSOR</span>
<strong>NDR</strong>
</div>

<h3>
Suricata
</h3>

<p>
Network intrusion detection and signature validation for later campaigns.
</p>

<div class="b13-lab-status planned">
PLANNED
</div>

</div>


</div>


<div class="b13-lab-flow">
↓ FUTURE EXPANSION
</div>


<div class="b13-lab-cloud">

<div class="b13-lab-node b13-lab-azure">

<div class="b13-lab-node-head">
<span>CLOUD</span>
<strong>AZURE</strong>
</div>

<h3>
Azure Security Lab
</h3>

<p>
Future cloud extension for identity, workload, posture, activity-log
and security-control validation.
</p>

<div class="b13-project-tags">
<span>Entra ID</span>
<span>Defender for Cloud</span>
<span>Azure Monitor</span>
<span>Policy</span>
</div>

<div class="b13-lab-status planned">
PLANNED
</div>

</div>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
TELEMETRY MATRIX
</div>

<h2>
What the lab observes
</h2>

</div>

<p>
Each campaign should identify which evidence sources are expected before
the attack is executed.
</p>

</div>


<div class="b13-telemetry-matrix">


<div class="b13-telemetry-card">

<div class="b13-telemetry-code">
ENDPOINT
</div>

<h3>
Host Telemetry
</h3>

<p>
Process execution, authentication, services, persistence,
PowerShell activity and operating-system events.
</p>

<div class="b13-project-tags">
<span>Sysmon</span>
<span>Event Logs</span>
<span>Velociraptor</span>
</div>

</div>


<div class="b13-telemetry-card">

<div class="b13-telemetry-code">
NETWORK
</div>

<h3>
Network Telemetry
</h3>

<p>
DNS, TCP, TLS, HTTP, SMB and suspicious connection behavior
captured during controlled attacks.
</p>

<div class="b13-project-tags">
<span>Wireshark</span>
<span>PCAP</span>
<span>Suricata</span>
</div>

</div>


<div class="b13-telemetry-card">

<div class="b13-telemetry-code">
DETECTION
</div>

<h3>
Detection Telemetry
</h3>

<p>
Searches, alerts, correlation logic and hunting queries derived
from observed adversary behavior.
</p>

<div class="b13-project-tags">
<span>Elastic</span>
<span>Sigma</span>
<span>KQL</span>
</div>

</div>


<div class="b13-telemetry-card">

<div class="b13-telemetry-code">
CLOUD
</div>

<h3>
Azure Telemetry
</h3>

<p>
Identity, resource activity, policy findings and workload security
events when the cloud lab is introduced.
</p>

<div class="b13-project-tags">
<span>Entra</span>
<span>Activity Logs</span>
<span>Defender</span>
</div>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-page-section-header">

<div>

<div class="b13-kicker">
ENGINEERING PRINCIPLES
</div>

<h2>
Lab design requirements
</h2>

</div>

<p>
The lab should remain useful even as individual technologies change.
</p>

</div>


<div class="b13-lab-principles">


<div>

<span>01</span>

<h3>
Isolated
</h3>

<p>
Attack traffic stays separated from production and business systems.
</p>

</div>


<div>

<span>02</span>

<h3>
Reproducible
</h3>

<p>
Configuration, scripts and documentation make scenarios repeatable.
</p>

</div>


<div>

<span>03</span>

<h3>
Observable
</h3>

<p>
Exercises are designed around known telemetry expectations rather than
blind attack execution.
</p>

</div>


<div>

<span>04</span>

<h3>
Disposable
</h3>

<p>
Lab systems can be reverted, rebuilt or destroyed after testing.
</p>

</div>


</div>

</section>



<section class="b13-page-section">

<div class="b13-lab-integration">

<div>

<div class="b13-kicker">
CAMPAIGN INTEGRATION
</div>

<h2>
The lab exists to support the campaigns.
</h2>

<p>
Each BELISARIUS13 campaign should add or improve a lab capability,
telemetry source, detection or investigation workflow.
</p>

</div>


<div class="b13-lab-integration-actions">

<a href="../projects/">
VIEW CAMPAIGNS <strong>→</strong>
</a>

<a href="../detections/">
DETECTION ENGINEERING <strong>→</strong>
</a>

</div>

</div>

</section>



<div class="b13-page-signoff">

<span>
B13 // PURPLE TEAM LAB
</span>

<strong>
Controlled activity. Measurable defense.
</strong>

</div>


</div>