# Cursor Handoff

## First prompt to use in Cursor

Open this repository and review these files first:

- `README.md`
- `docs/WEBSITE-BRIEF.md`
- `docs/CONTENT-EDITING-GUIDE.md`
- `docs/ASSET-MAP.md`
- `src/content/site.ts`
- `src/content/caseStudies.ts`

Then run the project locally and inspect the responsive layout.

Do not change verified metrics, client names, dates, attribution notes, or the distinction between organic and paid performance unless I explicitly approve the change. Do not replace local case-study screenshots with fabricated platform UI. Preserve the current visual system unless I request a redesign.

Before making major copy or layout changes, show me the proposed changes and list the files you plan to edit.

## Useful follow-up prompts

### Copy only

> Rewrite the Gavel case-study summary to sound more direct. Change only copy in `src/content/caseStudies.ts`. Do not change facts, metrics, image paths, layout, or CSS. Show me the revised copy before editing the file.

### Replace a picture

> Replace the Samson Waters selected-work image with the new file I added to `public/case-studies/samson-waters/`. Update only the relevant media object and alt text in `src/content/caseStudies.ts`.

### Adjust the design system

> Make the cream background slightly warmer and reduce the size of the oversized case-study headings by 10%. Edit only `src/app/globals.css`. Preserve the existing palette structure and mobile behavior.

### Add a new case study

> Add a new case-study object using the existing reusable component system. Do not duplicate the card or modal components. First ask me for the verified role, dates, metrics, attribution rules, copy, and assets.
