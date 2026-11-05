# Joseph Taomhera | Belisarius

Personal portfolio focused on Azure, Windows security, and Purple Teaming.

## Rebuild branch
The new static site is in `portfolio/`. Legacy MkDocs source is retained for review/history and is not included in the new deployment artifact. No visitor accounts, paid APIs, application server, or database are required.

```bash
python3 scripts/build_portfolio.py
python3 scripts/check_portfolio.py
python3 -m http.server 8000 --directory portfolio
```

Open http://localhost:8000. Node dependencies are not needed. Edit reviewed content in `scripts/build_portfolio.py`, styles in `portfolio/assets/site.css`, and interactions in `portfolio/assets/site.js`, then rebuild. The CV lives in `portfolio/assets/joseph-taomhera-cv.pdf`.

GitHub Actions validates pull requests and publishes `portfolio/` to GitHub Pages only after a main-branch push or a manual main-branch dispatch. The domain remains `belisarius13.com`.

See [project brief](project/BRIEF.md) and [security architecture](project/SECURITY-ARCHITECTURE.md). The meeting form prepares an email request; it does not reserve a calendar slot.
