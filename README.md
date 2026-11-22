1| # Mr Tikini / Darren James Okot — portfolio website
2| 
3| A responsive static website designed for Cloudflare Pages.
4| 
5| ## Deploy to Cloudflare Pages (free)
6| 1. Create a new **public or private GitHub repository** named `mr-tikini-portfolio`.
7| 2. Upload the contents of this folder to the repository root (the `index.html`, `styles.css`, `script.js`, and `assets/` folder must be at the root).
8| 3. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
9| 4. Select the GitHub repository.
10| 5. Framework preset: **None**. Build command: leave blank. Build output directory: `/` (or `.` if the UI requests a relative directory).
11| 6. Deploy. Cloudflare will assign a free `*.pages.dev` address and HTTPS.
12| 7. Future edits can be made directly in GitHub; each commit triggers a new deployment.
13| 
14| ## Editing
15| - Main copy and page structure: `index.html`
16| - Visual design and responsive layout: `styles.css`
17| - Mobile navigation and year: `script.js`
18| - Portfolio page images: `assets/`
19| - AI coding-agent guidance for ChatGPT Codex: `AGENTS.md`
20| 
21| ## Content notes
22| - The portfolio image pages were rendered from the supplied 8-page Mr Tikini PDF.
23| - Professional history was adapted from the supplied 2026 CV and your clarification: current role is presented as Diner K.K., working across WO Bikes and Cartel Bikes.
24| - JPC is intentionally omitted from the public-facing site. No telephone number is published; contact is by email and linked platforms.
25| - Press links and music destinations are carried over from the supplied documents.
26| - The site uses Google Fonts; if the visitor blocks Google Fonts, it falls back to system sans-serif and serif fonts.
27| 
