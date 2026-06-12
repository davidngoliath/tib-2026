# Content directory

All site content lives here as typed TypeScript data files. No CMS, no recurring
cost — edit a file, commit, push. Vercel builds a preview URL.

## Conventions

- **Translatable strings** (every word a visitor reads, EN + ES) → `copy.ts`,
  keyed by locale and section. Server components call `getCopy()` to resolve the
  current locale's dictionary (no prop-drilling). Long-form prose (mission story,
  feature/activity bodies) lives here as arrays of paragraphs, rendered as `<p>`s.
- **Structured collections** (lists of similar items) → typed `.ts` arrays in the
  other files. Each holds locale-independent data (images, video ids, colors,
  links) + a stable `id`; the matching strings live in `copy.ts` under that id.
  The page `.map()`s over the collection and looks up copy by id.
- **One-off mechanics** (dates, registration open/URL) → constants (e.g. `braveCamp.ts`).
- **Shared primitives** (`ImageRef`, `Link`, `Video`) live in `types.ts`.
- Proper nouns (people, outlets, partner brands, program titles) are intentionally
  **not** translated.

## Media

- Images → `/public/images/...` (or Vercel Blob), rendered via Next `<Image>`.
- Looping background video → self-hosted MP4/WebM → `Video` with `type: "loop"`.
- Feature/testimonial video → Vimeo/YouTube → `Video` with `type: "embed"`.

## Files

| File | Page / section |
|---|---|
| `types.ts` | shared types (ImageRef, Link, Video) |
| `site.ts` | nav, footer, socials, logo (all pages) |
| `press.ts` | Home → Press (4) |
| `stories.ts` | Home → Their Stories (4) |
| `actions.ts` | Home → Our Action (6) |
| `partners.ts` | Home → Friends/Partners (18) |
| `braveCamp.ts` | registration mechanics (isOpen, register URL) |
| `features.ts` | Brave Camp About → feature rows (ids + images + colors) |
| `benefits.ts` | Brave Camp For-Parents → What Kids Get tiles (ids + colors) |
| `activities.ts` | Brave Camp For-Parents → Activities (3, ids + images) |
| `faq.ts` | Brave Camp For-Parents → FAQ row ids (5) |
| `copy.ts` | ALL translatable strings (EN/ES), keyed by the ids above |

## TODOs

Some files still contain `// TODO` markers where exact links, video ids, or
image exports weren't available from the Figma file (real Register/Donate/
Partner/Contact URLs, the packing-list link, FAQ answers that were left blank).
Search `TODO` to find them. Spanish strings in `copy.ts` are a first-pass
translation and should get a native-speaker review before launch.
