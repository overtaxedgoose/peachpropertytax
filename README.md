# peachpropertytax.com

Static landing page for Peach Property Tax, hosted on GitHub Pages.

## Files

- index.html, styles.css, favicon.svg: the page
- CNAME: tells GitHub Pages to serve the site at peachpropertytax.com
- .nojekyll: tells GitHub Pages to serve the files as-is

## Publish on GitHub Pages

1. Create a repository (for example `peachpropertytax`) and push these files to the `main` branch at the repository root.
2. In the repository, open Settings, then Pages. Under Build and deployment choose Source: Deploy from a branch, Branch: main, Folder: / (root). Save.
3. Still in Settings, Pages, enter `peachpropertytax.com` in Custom domain and save. GitHub will create or confirm the CNAME file. Tick Enforce HTTPS once the DNS check passes (it can take up to an hour after the records propagate).

## DNS records (at your registrar)

Apex domain, four A records (replace any existing A or ALIAS records on the root):

| Type | Host | Value           |
|------|------|-----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

Optional IPv6:

| Type | Host | Value                |
|------|------|----------------------|
| AAAA | @    | 2606:50c0:8000::153  |
| AAAA | @    | 2606:50c0:8001::153  |
| AAAA | @    | 2606:50c0:8002::153  |
| AAAA | @    | 2606:50c0:8003::153  |

www subdomain, one CNAME record (replace YOUR-GITHUB-USER with the account or org that owns the repo):

| Type  | Host | Value                       |
|-------|------|-----------------------------|
| CNAME | www  | YOUR-GITHUB-USER.github.io  |

GitHub will redirect www to the apex automatically once both resolve. Do not add a CNAME on the apex; registrars that only offer CNAME or ALIAS on root should use ALIAS/ANAME pointing to YOUR-GITHUB-USER.github.io instead of the A records.

Email: these records do not affect mail. Keep or add MX records for hello@peachpropertytax.com separately with whatever mail provider you use.

## Form submissions

The free-review form posts to Formspree. Create a free form at formspree.io, set its notification address to hello@peachpropertytax.com, and replace `YOUR_FORM_ID` in index.html with the ID Formspree gives you. Any other form endpoint works the same way by changing the `action` URL.

## Local preview

Open index.html in a browser. No build step.
