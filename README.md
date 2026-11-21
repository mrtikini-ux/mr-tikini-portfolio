# Mr Tikini / Darren James Okot — portfolio website

A responsive static website designed for Cloudflare Pages.

## Deploy to Cloudflare Pages (free)
1. Create a new **public or private GitHub repository** named `mr-tikini-portfolio`.
2. Upload the contents of this folder to the repository root (the `index.html`, `styles.css`, `script.js`, and `assets/` folder must be at the root).
3. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
4. Select the GitHub repository.
5. Framework preset: **None**. Build command: leave blank. Build output directory: `/` (or `.` if the UI requests a relative directory).
6. Deploy. Cloudflare will assign a free `*.pages.dev` address and HTTPS.
7. Future edits can be made directly in GitHub; each commit triggers a new deployment.

## Editing
- Main copy and page structure: `index.html`
- Visual design and responsive layout: `styles.css`
- Mobile navigation and year: `script.js`
- Portfolio page images: `assets/`

## Content notes
- The portfolio image pages were rendered from the supplied 8-page Mr Tikini PDF.
- Professional history was adapted from the supplied 2026 CV and your clarification: current role is presented as Diner K.K., working across WO Bikes and Cartel Bikes.
- JPC is intentionally omitted from the public-facing site. No telephone number is published; contact is by email and linked platforms.
- Press links and music destinations are carried over from the supplied documents.
- The site uses Google Fonts; if the visitor blocks Google Fonts, it falls back to system sans-serif and serif fonts.
