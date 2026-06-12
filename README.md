# Today, I'm Brave — Website

Marketing site for the non-profit **Today, I'm Brave**, rebuilt from Figma
("20260601 - Production Ready"). Desktop-first, bilingual (EN/ES), with a
scroll-driven "sticky-stack" experience.

## Getting started

```bash
cd tib-site-2026
nvm use            # Node 24 (pinned in .nvmrc); run `nvm install 24` if missing
npm install        # first time only
npm run dev        # dev server → http://localhost:3000 (redirects to /en)
```

### Scripts
| Command | Purpose |
|---|---|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build (statically prerenders /en and /es) |
| `npm start` | Serve the production build (after `npm run build`) |
| `npm run lint` | ESLint |

## Stack
- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — design tokens live in `app/globals.css` via `@theme`
- **next-intl 4** — i18n routing + locale detection
- **Node 24 LTS** (pinned via `.nvmrc`); deploy target is Vercel

## Routes / i18n
- Locale is always in the URL: **`/en`** (default) and **`/es`**.
- `proxy.ts` (Next 16's middleware) redirects `/` → `/en` and detects locale.
- **Built pages** (each statically prerendered for both locales):
  - `/[locale]` — Home
  - `/[locale]/our-mission`
  - `/[locale]/brave-camp/about`
  - `/[locale]/brave-camp/for-parents`
- Spec'd but not yet built: Action, Stories, Press, BraveU, BraveWear — see
  `page-sections.md`. Their nav links currently 404 (no styled not-found yet).
- The EN/ES nav toggle switches locale on the **current** page and shows a brief
  centered loader during the swap.
- The two Brave Camp pages share a sub-nav (`BraveCampTabs`) pinned at the same
  spot on both, so it doesn't jump when navigating between them.

## Project structure
```
app/
  [locale]/
    layout.tsx        # root layout: <html lang>, font, Nav, NextIntlClientProvider
    page.tsx          # Home — the scroll-stack
    our-mission/page.tsx
    brave-camp/
      about/page.tsx
      for-parents/page.tsx
  globals.css         # Tailwind import + @theme tokens + scroll-driven keyframes
components/
  Nav, Footer, Button, Logo, Container, EyebrowTitle, MediaBand, VideoLoop,
  FeatureImage, HeroHighlight, WatchNowButton, LanguageToggle, DonateButton,
  BraveCampTabs, FaqAccordion
  cards/              # ActionCard, StoryCard, PressCard, PartnerLogo
  sections/           # Home sections (Hero, OurAction*, TheirStories*, Press*, Partners*, CtaBand, BraveCampPromo)
  sections/mission/   # Mission sections (Hero, Statement, Story, Collage)
  sections/brave-camp/ # About: AboutHero, FeatureRows, ConnectBand, AboutCtaCards
                       # For-Parents: ForParentsHero, RegistrationCard, KidsBenefits,
                       #   ActivityCards, ScheduleTable, FaqSection, FaqFadeLayer,
                       #   ReadyContactCards
content/              # All editable content as typed TS (no CMS — see content/README.md)
  copy.ts             # Bilingual UI strings (en/es) + getCopy() helper
  *.ts                # Data collections (stories, press, actions, partners, brave camp, etc.)
i18n/
  routing.ts          # locales: ['en','es'], default 'en'
  request.ts          # next-intl request config (messages empty; strings come from copy.ts)
  navigation.ts       # locale-aware <Link>, useRouter, usePathname
proxy.ts              # next-intl middleware
public/
  fonts/              # Helvetica Neue LT Pro (.woff2, self-hosted)
  images/             # home/, action/, stories/, press/, partners/, mission/, about/,
                      #   for-parents/, brave-camp/, footer/, ...
  video/              # looping media-band + collage MP4s (resized for web)
```

> Raw source assets (`tib-videos/`, `tib-images-*/`, `helvetica-neue-lt-pro/`)
> are gitignored — only the resized/optimized copies under `public/` ship.

## Content model (no CMS, $0)
All content is **typed TypeScript in `content/`** — edit a file, commit, push.
- **Translatable UI strings** → `content/copy.ts` (`{ en, es }`). Server
  components call `getCopy()` (no prop-drilling) to resolve the current locale.
- **Data collections** (images, video ids, colors, links) → `content/*.ts`
  (locale-independent), e.g. `stories.ts`, `press.ts`, `actions.ts`, `partners.ts`.
- Proper nouns (people, outlets, partner brands, program titles) are intentionally
  **not** translated.
- See `content/README.md` for conventions and `TODO` markers (real links, etc.).

## Design system
- **Fonts:** Helvetica Neue LT Pro, self-hosted via `next/font/local`
  (`400` Roman / `500` Medium / `700` Bold).
- **Colors** (`@theme` in `globals.css`): `cream #F5F2E5`, `ink #000`,
  `brand-green #39C85C`, `brand-yellow #F5CA16`, `brand-orange #ED4A26`,
  `brand-blue #6CC6FF`, `brand-pink #FBBAE5`.
- **Buttons** (`Button.tsx`): nav CTAs use a brand fill; in-section "dark" pills
  invert to black @ 50% + cream text on hover.

## Scroll choreography
All four pages use a CSS **sticky-stack**: each section is `sticky` and pinned,
and the next section scrolls up and covers it (ascending `z-index`). Transparent
sections let the pinned layer behind show through (e.g. the About feature cards
and For-Parents "What Kids Get" tiles ride over a pinned video / heading). Holds
are `h-screen` spacer `<div>`s. The home lion sticker uses a CSS scroll-driven
`view-timeline` animation. The one JS-driven exception is the For-Parents FAQ
fade (`FaqFadeLayer.tsx`), a small scroll listener that fades the FAQ out as the
"Ready to Register" card rises. Otherwise no JS scroll library.

## Video & interactive elements
- **Background loops** — self-hosted MP4s (`public/video/`) rendered by
  `MediaBand` → `VideoLoop`, which shows a brief spinner over the poster until
  the loop starts playing (site-wide).
- **"Watch Now"** (`WatchNowButton.tsx`) opens a fullscreen modal player
  (YouTube/Vimeo embed). IDs live in `content/actions.ts` / `content/stories.ts`.
- **Donate** (`DonateButton.tsx`) opens the Donorbox campaign in a branded modal;
  wired to every Donate CTA (nav + home CTA band).
- **FAQ** (`FaqAccordion.tsx`) — For-Parents accordion; black bars expand to
  reveal each answer at body size.

## Reference docs
- `figma-dev-ready.md` — Figma → dev tokens, rename map, interactions.
- `page-sections.md` — per-page section blueprint mapped to components.

## Notes / TODO
- **Desktop-first (1440px)** — a responsive (mobile/tablet) pass is pending,
  including a mobile nav (the only piece that needs a design decision).
- Spanish copy is a first-pass translation (`content/copy.ts`) — worth a native review.
- Outstanding `// TODO`s: real Register/Donate/Partner/Contact destinations,
  the packing-list link, BraveU/BraveWear/Action/Stories/Press pages, and a
  styled `not-found`.
- `public/` carries ~50MB of media (mostly the video loops); move to Vercel Blob
  or a CDN before the repo grows.
