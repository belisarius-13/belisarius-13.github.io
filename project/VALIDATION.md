# Rebuild validation

- Python standard-library build: passed, 8 HTML pages.
- Internal asset/page links and fragment targets: passed.
- CSP presence, no inline code/event handlers, CV PDF signature, domain and content status checks: passed.
- JavaScript syntax: passed.
- Desktop browser: light/dark switch and theme persistence across navigation verified. Profile and contact layouts inspected. Screenshots in project/previews/.
- Meeting request form: field validation inspected. Final mailto navigation is blocked by the QA browser's allowed-protocol policy; external email-app launch was not verified. No email was sent and no appointment booked.
- Responsive CSS included; mobile viewport interaction has not been verified in this environment.
- Account/edge security settings are not verified. See SECURITY-ARCHITECTURE.md.
- Production deployment not performed; draft PR is intended for review.

## Portrait and interactive revision
- Rebuilt all eight pages; link/anchor/CSP checks and JavaScript syntax passed.
- Seven explicit focus areas and generated WebP portrait verified.
- Desktop: focus selection changes visible heading and description; light/dark switch works; motion toggle changes computed animation state to paused.
- Booking configuration tested with a temporary example URL locally: CTA and privacy disclosure appear only when configured; unsafe schemes are rejected. Example URL removed before commit.
- Calendar account and scheduling URL are not connected. No automatic booking or direct server email delivery is claimed.
