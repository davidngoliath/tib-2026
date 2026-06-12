# TIB — Page section blueprint (desktop 1440)

> **Build status:** Home, Our Mission, Brave Camp About, and Brave Camp
> For-Parents are **built** (see `app/[locale]/`). Action, Stories, Press,
> BraveU, and BraveWear are **not yet built**. Component/section names below were
> the original plan; the shipped components live under `components/sections/`
> (some names differ slightly, e.g. `Nav`/`Footer` rather than `SiteNav`).

Each section below maps to a React component to build. Node IDs are Figma source.
Shared across all pages: `<SiteNav>` (sticky top nav) and `<SiteFooter>` (pink footer,
1539px overhanging plate). Build those once, reuse everywhere.

Shared primitives reused across pages:
- `<Nav>` — `669:808 / 1105 / 1218 / 1483`
- `<Footer>` — `669:639 / 1038 / 1156 / 1283`
- `<MediaBand>` — full-width Brave Camp GIF/video band
- `<Button>` variants: Register, Donate, WatchNow, ViewAll, LearnMore (color-invert hover)
- `<EyebrowTitle>` — the "OUR" + "ACTION" / "THEIR" + "STORIES" stacked-heading pattern

---

## 1. Home Page — `669:429` (1440 × 18488)

| # | Section | Component | Node | Notes |
|---|---|---|---|---|
| 1 | Nav | `<Nav>` | 669:808 | sticky; color-invert hover links |
| 2 | Hero | `<HomeHero>` | 669:430 | logo, headline, animated "global non-profit" highlight, scroll indicator |
| 3 | Brave Camp registration | `<BraveCampPromo>` | 669:447 | green card, dates, 2× Watch Now, image |
| 4 | Media band #1 | `<MediaBand>` | 669:457 | gif + lion sticker |
| 5 | Our Action | `<OurAction>` | 669:583 + 701 | eyebrow+title+subhead, 6× `<ActionCard>`, View All |
| 6 | Media band #2 | `<MediaBand>` | 669:592 | reuse of #4 |
| 7 | Their Stories | `<TheirStories>` | 669:698 + 732 | 4× `<StoryCard>`, View All |
| 8 | Press | `<Press>` | 669:595 + 761 | 4× `<PressCard>`, View All |
| 9 | Friends / Partners | `<PartnerGrid>` | 669:602 + 605 | 18× `<PartnerLogo>` (6×3) |
| 10 | CTA (Partner/Donate) | `<CtaBand>` | 669:625 | 2 buttons + heading |
| 11 | Footer | `<Footer>` | 669:639 | logo, socials, address, 501(c)(3) line |

Cards: `<ActionCard>` ×6, `<StoryCard>` ×4, `<PressCard>` ×4, `<PartnerLogo>` ×18.

---

## 2. Our Mission — `669:1017` (1440 × 12807)

| # | Section | Component | Node | Notes |
|---|---|---|---|---|
| 1 | Nav | `<Nav>` | 669:1105 | shared |
| 2 | Hero "OUR MISSION" | `<MissionHero>` | 669:1018 | black eyebrow+title |
| 3 | Mission statement band | `<MissionStatement>` | 669:1023 | yellow; "We help people build courage…" |
| 4 | Story header | `<EyebrowTitle>` | 669:1028 | "Our MISSION" |
| 5 | Mission long-form story | `<MissionStory>` | 669:1032/1033 | long narrative copy block |
| 6 | Media band | `<MediaBand>` | 669:1034 | brave camp gif |
| 7 | Photo collage | `<PhotoCollage>` | 669:1097–1104 | 8–9 scattered images |
| 8 | Full-width feature image | `<FeatureImage>` | 669:1037 | |
| 9 | Footer | `<Footer>` | 669:1038 | shared |

New components: `<MissionStatement>`, `<MissionStory>`, `<PhotoCollage>`, `<FeatureImage>`.

---

## 3. Brave Camp — About Brave Camp — `669:1117` (1440 × 8863)

| # | Section | Component | Node | Notes |
|---|---|---|---|---|
| 1 | Nav | `<Nav>` | 669:1218 | shared |
| 2 | Hero | `<BraveCampHero>` | 669:1118 | breadcrumb tabs (links → About / For-Parents pages) |
| 3 | Intro banner | `<BraveCampIntro>` | 669:1125 + 1217 | image + "Brave Camp is a free, weeklong sleepaway camp…" |
| 4 | What Makes It Different | `<FeatureGrid>` | 669:1126–1135 | 2-col image+text grid (yellow/green/orange tiles): Brave Camp, What Makes Brave Camp Different, A Day at Brave Camp |
| 5 | Callout band | `<ConnectCallout>` | 669:1140 | "Whether you're a parent… or organization…" |
| 6 | Two CTA cards | `<DualCta>` | 669:1143 | `<CtaCard>` ×2: "Learn More for Parents & Campers" (yellow) + "Become a Brave Camp Partner" (blue) |
| 7 | Image band | `<FeatureImage>` | 669:1155 | full-width |
| 8 | Footer | `<Footer>` | 669:1156 | shared |

New components: `<BraveCampHero>` (w/ breadcrumb tabs), `<BraveCampIntro>`, `<FeatureGrid>` + `<FeatureTile>`, `<ConnectCallout>`, `<DualCta>` + `<CtaCard>`.

---

## 4. Brave Camp — For Parents and Campers — `669:1230` (1440 × 15408)

| # | Section | Component | Node | Notes |
|---|---|---|---|---|
| 1 | Nav | `<Nav>` | 669:1483 | shared |
| 2 | Hero + Registration | `<RegistrationHero>` | 669:1231 + 1464 | pink "Brave Camp 2026 registration is now open"; meta: Aug 16-23 2026 / Ages 8-13 / $40 Refundable Deposit |
| 3 | Intro image | `<FeatureImage>` | 669:1245 | full-width |
| 4 | What Kids Get | `<BenefitGrid>` | 669:1250–1262 | 6-item benefit grid w/ colored tags |
| 5 | Activities Designed to Build Brave | `<ActivitiesList>` | 669:1263 + cards | blue bg; `<ActivityCard>` ×4 (Meditation & Mindfulness, Creative Art Camp, Growth & Bravery, …) |
| 6 | Schedule | `<ScheduleBlock>` | 669:1463 | **real data grid** — 2-col table (pink day label + description), 5 rows, divider lines. Data-driven from a `schedule[]` array |
| 7 | FAQ header | `<EyebrowTitle>` | 669:1247 | "FAQ" |
| 8 | FAQ accordion | `<Faq>` | 669:1368–1382 | 5× `<FaqItem>` (black rows + chevron toggle) |
| 9 | Register CTA | `<CtaBand>` | 669:1265 | green "Ready to Register for Brave Camp?" |
| 10 | Contact CTA | `<CtaBand>` | 669:1274 | yellow "Contact Us" |
| 11 | Footer | `<Footer>` | 669:1283 | shared |

New components: `<RegistrationHero>`, `<BenefitGrid>` + `<BenefitTile>`, `<ActivitiesList>` + `<ActivityCard>`, `<ScheduleBlock>`, `<Faq>` + `<FaqItem>` (the one true interactive accordion — expand/collapse).

`<ScheduleBlock>` data (2-col grid, pink day label + description):
```
[
  { day: "Day 1",    activities: "Arrival, orientation, team-building activities" },
  { day: "Days 2–3", activities: "Outdoor challenges, workshops, mentor sessions" },
  { day: "Days 4–5", activities: "Creative studios, community projects, performances" },
  { day: "Days 6–7", activities: "Leadership challenges, reflection, celebration night" },
  { day: "Day 8",    activities: "Closing ceremony, family day, departure" },
]
```

---

## Component inventory (build order)

**Shared first:** `<Nav>`, `<Footer>`, `<Button>` (5 variants), `<EyebrowTitle>`, `<MediaBand>`, `<FeatureImage>`.

**Cards:** `<ActionCard>`, `<StoryCard>`, `<PressCard>`, `<PartnerLogo>`, `<CtaCard>`,
`<FeatureTile>`, `<BenefitTile>`, `<ActivityCard>`, `<FaqItem>`.

**Section blocks:** per tables above.

**Interactive (needs JS, not just hover):** `<Faq>` accordion (expand/collapse) — the only
stateful component. The `<BraveCampHero>` breadcrumb tabs are plain `<Link>` navigation
between the About and For-Parents pages (active tab styled per current route).
Everything else is hover-state (CSS) + later scroll parallax.
