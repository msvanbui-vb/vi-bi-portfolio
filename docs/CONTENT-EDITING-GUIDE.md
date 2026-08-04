# Content Editing Guide

## Change homepage copy

Edit `src/content/site.ts` and, only when needed, the related component in `src/components/`.

## Change a case study

Edit `src/content/caseStudies.ts`. Each project contains:

- card headline and summary
- capability tags
- card metrics
- featured card images
- challenge, ownership, and approach copy
- detailed metrics and analytics image
- selected-work assets and captions
- external post links
- attribution notes and testimonial

The reusable card and modal components update automatically.

## Replace or add an image

1. Add the optimised file to the correct folder under `public/case-studies/`.
2. Edit the relevant `src`, `alt`, `caption`, and `fit` fields in `src/content/caseStudies.ts`.
3. Use `fit: "cover"` for visual posts and vertical Reels. Use `fit: "contain"` for analytics, documents, or screenshots that should remain fully visible.

Example:

```ts
{
  src: "/case-studies/gavel/gavel-new-post.webp",
  alt: "Description of the published Gavel post.",
  caption: "Product education",
  fit: "cover",
}
```

## Change the selected work

Each selected-work item has an `assets` array. Add one image for a single example or two images for a before-and-after or source-to-output comparison.

External links are optional:

```ts
link: "https://www.linkedin.com/...",
linkLabel: "View original LinkedIn post",
```

## Change colours or typography

Edit the variables and typography rules at the top of `src/app/globals.css`.

## Add another case study

Duplicate one object in `src/content/caseStudies.ts`, give it a unique `id`, and update its content and assets. The existing components will render it automatically.

## Update metadata

Edit `src/app/layout.tsx`.

## Keep claims defensible

- Do not add metrics without a source screenshot or report.
- Do not combine paid and organic figures when the scope was organic.
- Do not convert qualitative feedback into attributed revenue, leads, or bookings.
- Do not describe founder content as ghostwriting on the public website.
