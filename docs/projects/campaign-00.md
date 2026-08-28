---
title: Campaign 00 — Secure Purple Team Portfolio Platform
description: Engineering and hardening the BELISARIUS13 cybersecurity portfolio using Git, GitHub Actions, GitHub Pages, Cloudflare DNS, DNSSEC, TLS and protected deployment workflows.
hide:
  - navigation
  - toc
  - footer
---

# Campaign 00 — Secure Purple Team Portfolio Platform

**Status:** COMPLETE  
**Campaign:** 00  
**Platform:** BELISARIUS13  
**Domain:** `belisarius13.com`

---

## Mission

Campaign-00 established the technical foundation for BELISARIUS13.

Rather than treating the portfolio as a static collection of pages, the objective was to engineer it as a reproducible, security-conscious publishing platform with controlled deployment, hardened source control, secure DNS and documented validation.

The platform itself became the first BELISARIUS13 security engineering project.

---

## Engineering Objective

Build a public cybersecurity portfolio that demonstrates the same engineering principles expected from security infrastructure:

- version-controlled source
- reproducible builds
- automated validation
- controlled production deployment
- protected production branches
- dependency monitoring
- secret protection
- secure domain configuration
- DNSSEC
- HTTPS enforcement
- accessibility validation
- responsive design validation
- documented security reporting

---

## Architecture

```text
Developer Workstation
        |
        | Git
        v
Feature Branch
        |
        | Pull Request
        v
GitHub Repository
        |
        | Required status check
        v
MkDocs Strict Build
        |
        | Merge to protected main
        v
GitHub Actions
        |
        v
GitHub Pages
        |
        | HTTPS
        v
belisarius13.com

DNS Authority:
Cloudflare DNS
        |
        +-- A / AAAA → GitHub Pages
        +-- www CNAME
        +-- DNSSEC
```
