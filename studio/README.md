# MR TIKINI — Content Studio

Sanity Studio for the MR TIKINI website.

- Project ID: `kvlkpw2o`
- Dataset: `development` (private)
- Hosted URL (after deploy): https://mr-tikini.sanity.studio

## Requirements

- Node.js **22.12 or later**
- npm

## First-time setup

```bash
cd studio
npm install
npx sanity login
```

## Local development

```bash
npm run dev
```

Open http://localhost:3333

## Deploy to Sanity hosting

```bash
npm run deploy
```

This publishes the Studio to https://mr-tikini.sanity.studio

## Notes

- Never switch the dataset to `production` until content and the Astro site are fully approved.
- Do not commit any API tokens.
- All schemas live in `schemaTypes/`.
