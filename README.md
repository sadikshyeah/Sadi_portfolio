# Sadi Parajuli — Portfolio

Personal portfolio site, live at <https://sadikshyeah.github.io/Sadi_portfolio/>.

Built with React, TypeScript and Vite. No UI library; all styling is in `src/index.css`.

## Run locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (type-check and build to `dist/`), `npm run preview` (serve the build), `npm run lint`.

## Editing content

All text, links, projects and experience live in `src/data/portfolio.ts`. Screenshots go in `src/assets/` and the CV in `public/`.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages via `.github/workflows/deploy.yml`.
