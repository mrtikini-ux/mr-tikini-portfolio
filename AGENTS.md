# Repository guidance for OpenAI Codex

## Project overview
- This is a static portfolio website deployed on Cloudflare Pages.
- The site uses plain HTML, CSS, and vanilla JavaScript; there is no package manager or build step.
- Keep `index.html`, `styles.css`, `script.js`, and `assets/` at the repository root.

## Working conventions
- Preserve the existing visual style: minimal editorial layout, monochrome palette, and blue accent.
- Keep the site responsive and accessible. Use semantic HTML, visible keyboard focus, descriptive labels, and respect reduced-motion preferences when adding motion.
- Do not add a framework, dependencies, build tooling, or server-side code unless specifically requested.
- Never put API keys, tokens, or other secrets in client-side files. Any external API integration must use a secure server-side component and environment secrets.
- Preserve verified portfolio links and factual content. Do not invent personal or professional details.
- Keep changes focused and avoid modifying portfolio assets unless requested.

## Validation
- There is currently no automated test or build command.
- For HTML/CSS/JavaScript edits, inspect the changed files for syntax and responsive/accessibility regressions.
- Cloudflare Pages deployment uses Framework preset **None**, no build command, and the repository root as the output directory.
