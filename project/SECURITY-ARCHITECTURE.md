# Security architecture and verification boundaries

## Implemented in this branch
- Static HTML/CSS/JS only; no backend, dependencies, database, third-party scripts, embedded feeds, or lab connections.
- Standard-library Python build script; reviewed source content, not visitor input.
- Restrictive document CSP: scripts/styles/images limited to self; no network connections, objects, base URI changes, or form submission. No inline scripts or eval.
- Email request data stays in memory until the visitor opens an email draft. Inputs never go into site URLs or browser storage.
- Only theme preference stored locally. No analytics/tracking scripts.
- GitHub Actions PR checks/build without deployment; production only on push to main or manual dispatch on main. Deploy permissions limited to the deploy job, with Actions pinned by commit.
- Scheduled intelligence fetching removed from the new deployment pipeline.

## Required host/account verification before live release
These are requirements, not claims of completed account configuration:
- Confirm strong MFA/passkeys for GitHub, Cloudflare, registrar and email; secure independent recovery.
- Inspect and restrict collaborators, deploy tokens, OAuth/GitHub Apps and DNS changes.
- Confirm main branch rules, required checks, protected deployment environment, and restrictions appropriate to this single-maintainer project.
- Verify GitHub Pages custom domain and enforced HTTPS; verify Cloudflare DNS/proxy/TLS settings and avoid dangling records.
- Configure and test response headers at the actual serving edge where available on the free plan: CSP including frame-ancestors 'none', X-Content-Type-Options nosniff, Referrer-Policy no-referrer, Permissions-Policy denying unused features. Meta CSP cannot enforce frame-ancestors. GitHub Pages does not apply a generic _headers file.
- Consider HSTS only after verifying HTTPS across the intended scope; do not blindly enable preload/includeSubDomains.
- Review platform DDoS protection and plan limits; no promise that any free service is immune to outages or attacks.
- Test rollback to an identified release. Establish availability monitoring before claiming ongoing monitoring.
- Check secret scanning/private vulnerability reporting availability and enabled state.

## Lab separation
No public lab endpoint in this release. Future lab accounts/networks must use separate credentials and must not expose RDP, directory services, or vulnerable exercise targets through the portfolio. Azure trial signup is deferred to the owner; it is not created or upgraded here.

## Content review
The attached CV is published unchanged in the review branch. Review public contact details and chronology before deployment. No synthetic research results or audience numbers.

## Interaction revision
The animated SVG is decorative and local. Focus controls use textContent, not HTML injection. Both preference values are local only. Calendar integration is a validated external HTTPS link rendered only when the owner supplies it. No calendar tokens, direct-send email credentials, or unauthenticated mail relay are placed in public JavaScript. A ChatGPT calendar connection does not itself create a public booking service.
