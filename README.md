# Jesús Barba Premium Portfolio

Static-exportable portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion. It uses original/local assets only: your optimized portrait, your CV PDF and custom project thumbnails.

## Run locally

If your machine has `npm`:

```bash
npm install
npm run dev
```

In this Codex workspace, `npm` was bootstrapped locally because the system did not include it:

```bash
node .tooling/package/bin/npm-cli.js install
node .tooling/package/bin/npm-cli.js run dev:wasm
```

Open `http://localhost:3000`.

## Edit content

Most portfolio content lives in:

```text
data/portfolioData.ts
```

Replace or update:

- Personal copy, roles, metrics and experience.
- GitHub project cards.
- LinkedIn, GitHub, email and phone.
- Education and certifications.
- English and Spanish versions.

Assets live in:

```text
public/images/jesus-formal.jpg
public/cv/CV-Jesus-Barba-2026.pdf
public/project-thumbnails/
```

## Build static output

```bash
npm run build
```

If macOS rejects the native SWC binary in a sandboxed environment, use:

```bash
npm run build:wasm
```

The static site is generated in `out/`.

For a GitHub Pages project site, set the repo name as the base path:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
```

Then publish the `out/` folder to GitHub Pages. The build also creates `out/.nojekyll`.

## Folder structure

```text
app/                    Next.js app routes and global styles
components/             Portfolio UI sections
data/                   Editable bilingual portfolio data
public/                 Static assets: photo, CV, thumbnails, favicon
scripts/                Build helper for GitHub Pages
```

## Contact form

The form works on static hosting by opening a prefilled email draft to `jesubarba123@gmail.com`. If you later want a backend form service, replace the submit handler in `components/portfolio-sections.tsx` with Formspree, Resend, EmailJS or a serverless endpoint.
