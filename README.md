# Sujal Gadhave Portfolio

A production-grade portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, shadcn-style UI primitives, and GitHub Pages-compatible static export.

## Tech Stack

- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis smooth scrolling
- Lucide Icons
- react-intersection-observer
- shadcn/ui style component architecture (`src/components/ui`)

## Project Structure

```text
src/
  app/
  components/
  sections/
  hooks/
  lib/
  styles/
  data/
  types/
  utils/
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
```

Static output is generated in `out/`.

## GitHub Pages Deployment

This project is configured for GitHub Pages static deployment using GitHub Actions.

### One-time repo settings

1. Go to repository `Settings` -> `Pages`.
2. Under `Build and deployment`, choose `Source: GitHub Actions`.

### Automatic deployment

- On every push to `main`, workflow `.github/workflows/deploy.yml` will:
  1. Install dependencies
  2. Build static export (`next build` with `output: "export"`)
  3. Create `404.html` fallback from `index.html`
  4. Deploy `out/` to GitHub Pages

### Base path behavior

`next.config.ts` auto-detects the repository name from `GITHUB_REPOSITORY` and applies:
- `basePath`
- `assetPrefix`

when `GITHUB_PAGES=true`.

This ensures assets/routes work correctly on project Pages URLs:

`https://<user>.github.io/<repo>/`

## Notes

- GitHub stats and contribution visuals are embedded as external image sources.
- GitHub profile/repo data is fetched during build when possible, with fallback values for reliability.

