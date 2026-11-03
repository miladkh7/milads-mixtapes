# Milad's Mixtapes — Design Specification

## Brand personality
Personal, intimate, warm, minimal, editorial. Not a dense music-streaming dashboard. Leave generous breathing room; keep visual hierarchy clear and interaction friendly.

## Confirmed palette
- Warm cream background: `#F4F0E6`
- Charcoal text: `#34332D`
- Olive: `#747B5A`
- Terracotta: `#C58B70`

Use these as tokens (CSS custom properties / Tailwind theme). Avoid introducing unrelated saturated colors. Ensure readable contrast for text and controls.

## Playlist themes
The site shares a coherent overall identity, but individual playlists have distinct personality. `/music/office` must be recognizably olive-themed, reflecting the physical wall context. Other pages should feel related, not identical; propose restrained theme variants for after-hours and deep-focus, and mark any unapproved choices for review.

## Page components
- Site header and navigation to `/music` and individual playlists.
- Playlist index cards with title, brief description, distinct accent, and clear link.
- Playlist detail hero with title, personality text, and Spotify embed.
- Cross-navigation between playlists.
- **Compact floating song-suggestion card** (not a large inline section and not merely an icon-only floating button). Heart icon, heading, supporting text, and CTA. Position responsibly on desktop/mobile; never obscure the Spotify player or important content.

## Suggestion card copy
Default:
- Heading: `Got a song for me? ♡`
- Supporting line: `I'd love to hear what you've been listening to.`
- CTA: `Send me a song`

Office variant:
- Heading: `Got a song for us? ♡`
- Supporting line: `This is our playlist, after all.`
- CTA: `Send me a song`

## Responsive and accessibility expectations
Mobile-first; no horizontal scrolling; readable text sizes; keyboard-visible focus; accessible button/link labels; good contrast; embed must fit narrow viewports; floating card should not block content. Honor reduced-motion preferences.

## Visual fidelity workflow
1. Add approved screenshots to `docs/references/` (see README there).
2. Implement `/music/office` first.
3. Capture desktop and mobile screenshots of implementation.
4. Compare with approved screenshots and list concrete differences in spacing, typography, proportions, colors, and responsive behavior.
5. Request review before extending design to remaining routes.

### Not yet specified — do not pretend these are approved
Exact font family, type scale, spacing grid, hero dimensions, card corner radius, shadows, icon assets, cover artwork, animation behavior, and mobile screenshots. Derive a coherent first proposal if needed, but flag it as provisional and easy to revise.
