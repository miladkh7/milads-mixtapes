# Codex instructions — Milad's Mixtapes

Before implementing UI, read `docs/PRODUCT.md` and `docs/DESIGN.md`. Treat these as the product/design baseline. Do not invent final visual details when a reference screenshot is required; ask for the missing screenshot or clearly mark your interpretation.

## Delivery
- Implement frontend first using Next.js App Router, TypeScript, Tailwind CSS.
- Start with `/music/office` (The Shared AUX); obtain visual approval before building remaining routes.
- Keep content and Spotify URLs in typed configuration, not hardcoded throughout components.
- No Django, database, authentication, or fake submission success in the first release.
- Use semantic HTML, accessible controls, responsive layouts, and reasonable loading/empty states.
- Run lint/typecheck/build where available and report outcomes.
- Work on a feature branch and propose a PR; do not silently merge.
- In PR descriptions, include screenshots at desktop and mobile widths and identify deviations from references.
