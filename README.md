# EncryptionManagement

Static GitHub Pages recreation of an Endpoint Central BitLocker Management UI using plain HTML, CSS, and vanilla JavaScript.

## Files

- `index.html` - app shell and page markup
- `styles.css` - layout and visual styling
- `script.js` - hash routing and small UI interactions
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow

## Run locally

Because this is a dependency-free static site, you can open the file directly in a browser:

1. Open `/home/runner/work/EncryptionManagement/EncryptionManagement/prabhu-dn-11317/EncryptionManagement/index.html`
2. Or double-click `index.html` after cloning the repository

Routing uses URL hashes, so views work both locally and on GitHub Pages.

## Available routes

- `#dashboard` - dashboard (default when no hash)
- `#policies` - policy creation empty state
- `#policy-form` - policy creation form
- Other sidebar routes open a shared placeholder screen

## GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Set the source to **GitHub Actions**.
4. The workflow in `.github/workflows/pages.yml` will deploy the site from the repository root.

## Adding more screenshot-based pages later

Add a new view section in `index.html`, style it in `styles.css`, and register its hash in `script.js`. The existing hash-router structure is intentionally simple so more screens can be added quickly.
