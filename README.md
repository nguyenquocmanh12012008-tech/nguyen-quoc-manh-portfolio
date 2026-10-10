# Nguyen Quoc Manh — Portfolio

A responsive personal portfolio built with React, TypeScript, and Vite. Profile details and portfolio content are kept separate from the UI so they can be updated without editing page components.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL after the server starts.

## Build and preview

```bash
npm run build
npm run preview
```

The production site is written to `dist/`.

## Update portfolio content

Edit `src/data/portfolio.ts`:

- `profile`: name, education, location, email, phone, GitHub, LinkedIn, bio, and values.
- `achievements`: original Vietnamese title, English title, competition, academic year, and visual distinction.
- `skillGroups`: technologies and honest learning labels such as `Learning`, `Exploring`, and `Familiar`.
- `projects`: description, technologies, status, optional dataset note, and availability.
- `learningJourney` and `exploring`: learning goals and current interests.

The profile currently has the provided GitHub profile URL, email address, and phone number. LinkedIn is still unconfigured. Add project URLs only when a repository or deployed demo exists. Remove the Paddy Doctor note if that dataset is not used.

## Deploy

### Vercel

Import this repository in Vercel. The defaults are sufficient: Vite is detected automatically, the build command is `npm run build`, and the output directory is `dist`.

### GitHub Pages

Set Vite's `base` in `vite.config.ts` to `'/<repository-name>/'` when deploying to a project site (a user or organization site can use `'/'`). Then build and publish the `dist/` directory with GitHub Actions or a Pages deployment action. For a custom domain, add the domain using GitHub Pages settings.

## Notes

- The contact section uses `mailto:` and `tel:` links; it does not pretend to submit a form.
- Add a `404.html` or hosting-specific route fallback if this site later grows into a multi-route app. The current portfolio uses in-page anchor navigation.
- Fonts are loaded from Google Fonts; the page falls back to system sans-serif if the font service is unavailable.
