# Vi Bi Portfolio

A responsive one-page portfolio built with Next.js App Router, TypeScript, reusable React components, and regular CSS. The project is ready for editing in Cursor, versioning on GitHub, and deployment to Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

The app uses the default Next.js server output (static export is not enabled), so `next/image` optimization works in production.

## Deploy to Vercel

1. Create a GitHub repository and push this folder.
2. In Vercel, choose **Add New Project** and import the repository.
3. Vercel should detect Next.js automatically.
4. Deploy. No environment variables are required for the current version.

## Where to edit

- Homepage, capability, process, AI, about, and contact copy: `src/content/site.ts`
- Case-study copy, metrics, links, and image paths: `src/content/caseStudies.ts`
- Components and layouts: `src/components/`
- Colours, fonts, spacing, and responsive styles: `src/app/globals.css`
- Real case-study assets: `public/case-studies/`
- Brand mark and future global assets: `public/assets/`

## Important project notes

- The old standalone browser preview was removed so Cursor has one clear source of truth: the Next.js project.
- Gavel, Hostfully, and Samson Waters use supplied real-work screenshots in the featured collage and case-study modals.
- Hero and About photos live at `public/images/vi-portrait.png` and `public/images/vi-at-work.webp`.
- Analytics are labelled carefully where organic and paid performance appear in the same source screenshot.
- Optional before launch: social sharing image (1200×630) and a dedicated favicon export if you want something other than the SVG mark.

Start with:

- `docs/CONTENT-EDITING-GUIDE.md`
- `docs/ASSET-MAP.md`
- `docs/WEBSITE-BRIEF.md`
