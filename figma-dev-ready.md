# TIB — Making the "20260601 - Production Ready" page dev-ready

A working checklist for organizing the Figma Home Page (node `669:429`) so it hands
off cleanly to development. Values below were read directly from the file.

> Note: these edits must be made in the Figma app — the Dev Mode connection is read-only.
> Work top-to-bottom; each section is independently shippable.

---

## 0. Foundations to create first (Variables / tokens)

The file currently has **no Variables defined**. Create these collections before renaming,
so components can bind to them.

### Colors (confirmed from file)
| Token | Value | Where seen |
|---|---|---|
| `color/bg/cream` | `#F5F2E5` | page background, cards |
| `color/brand/green` | `#39C85C` | Brave Camp card |
| `color/text/black` | `#000000` | all display + body text |

### Colors (visible in design — confirm exact hex in Figma, then tokenize)
- `color/brand/yellow` — OUR ACTION section
- `color/brand/pink` — closing block / accents
- `color/brand/blue` — CTA / schedule grid
- `color/brand/orange` — PRESS section
- `color/brand/white` — `#FFFFFF`

### Typography (confirmed)
Font family: **Helvetica Neue LT Pro**
| Token | Weight | Size / leading / tracking | Use |
|---|---|---|---|
| `type/display` | 75 Bold | 56px / 55–64px / -1.68px | section + card titles (OUR ACTION, card headings) |
| `type/body` | 65 Medium | 18px / 25px / 0 | paragraph copy |
| `type/eyebrow` | 75 Bold | (115px tall blocks — confirm size) | "OUR" / "THEIR" eyebrows |

### Radius / spacing (confirmed)
| Token | Value | Use |
|---|---|---|
| `radius/card` | 20px | section cards |
| `radius/media` | 10px | images inside cards |
| `space/gutter` | 60px | page side margins (1440 − 1320 content = 120, 60 each side) |
| `space/content-max` | 1320px | inner content width |

---

## 1. Rename map — Home Page (`669:429`, 1440×18488)

Ordered top-to-bottom. Rename layers to these semantic names.

### Nav (`669:808` → `Nav`)
| id | current | → suggested |
|---|---|---|
| 669:808 | Group 124 | `Nav` |
| 669:809 | Rectangle 34 | `Nav/PillLeft` |
| 669:810 | Rectangle 39 | `Nav/PillCenter` |
| 669:811 | Rectangle 40 | `Nav/PillRight` |
| 669:813 | Group 92 | `Nav/Logo` |
| 669:815–818 | Hero Navigation Button ×4 | `Nav/Link1…4` |
| 669:814 | Registration | `Nav/Button-Register` |
| 669:819 | Donate | `Nav/Button-Donate` |
| 669:812 | Group 127 | `Nav/Button-Menu` |

### Hero (`669:430` → `Hero`)
| id | current | → suggested |
|---|---|---|
| 669:430 | Group 96 | `Hero` |
| 669:431 | Rectangle 53 | `Hero/Background` |
| 669:432 | Group 95 | `Hero/Content` |
| 669:439 | TIB_Logos-02 1 | `Hero/Logo` |
| 669:438 | Group 90 | `Hero/Headline` |
| 669:440 | (text) | `Hero/Subhead` |
| 669:441 | Group 143 | `Hero/Graphic` |
| 669:433 | Group 140 | `Hero/ScrollIndicator` |

### Brave Camp registration (`669:447` → `Section/BraveCamp`)
| id | current | → suggested |
|---|---|---|
| 669:447 | Group 141 | `Section/BraveCamp` |
| 669:448 | Brave Camp Registration | `Section/BraveCamp-Card` |
| 669:450 | (text) | `Section/BraveCamp-Title` |
| 669:451 | (text) | `Section/BraveCamp-Body` |
| 669:452/453 | Watch Now ×2 | `Section/BraveCamp-Button-Watch1/2` |
| 669:454 | BRAVE CAMP_23 | `Section/BraveCamp-Image` |

### Media bands (`669:457`, `669:592`)
| id | current | → suggested |
|---|---|---|
| 669:457 | Group 93 | `Section/BraveCampGif-1` |
| 669:592 | Group 97 | `Section/BraveCampGif-2` |
> These two are identical → make ONE component `Section/MediaBand`.

### OUR ACTION
| id | current | → suggested |
|---|---|---|
| 669:585 | Group 142 | `Section/OurAction-HeadingGroup` |
| 669:587 | OUR | `Section/OurAction-Eyebrow` |
| 669:586 | ACTION | `Section/OurAction-Title` |
| 669:588 | (text) | `Section/OurAction-Subhead` |
| 669:701 | Actions | `Section/OurAction-Cards` |
| 669:727 | Project Angel Food | `Card/Action-ProjectAngelFood` |
| 669:722 | 100 Roofs Project | `Card/Action-100Roofs` |
| 669:717 | Brave Day at CHLA | `Card/Action-BraveDayCHLA` |
| 669:702 | Shine On Seirra Leone | `Card/Action-ShineOnSierraLeone` |
| 669:707 | Healing Night of Comedy | `Card/Action-HealingComedy` |
| 669:712 | Brave Speaker Series | `Card/Action-BraveSpeaker` |
| 669:590 | View All | `Section/OurAction-Button-ViewAll` |
> All 6 cards are 427×622 with identical internals → ONE component `Card/Action` (props: title, image, link).

### THEIR STORIES
| id | current | → suggested |
|---|---|---|
| 669:699 | THEIR | `Section/TheirStories-Eyebrow` |
| 669:698 | STORIES | `Section/TheirStories-Title` |
| 669:732 | Group 110 | `Section/TheirStories-Cards` |
| 669:733 | Ron Finely | `Card/Story-RonFinley` |
| 669:740 | Hannah Fraiser | `Card/Story-HannahFraser` |
| 669:747 | Rosie Perez | `Card/Story-RosiePerez` |
| 669:754 | Breana Schroeder | `Card/Story-BreanaSchroeder` |
| 669:807 | View All | `Section/TheirStories-Button-ViewAll` |
> All 4 cards 874×347 identical → ONE component `Card/Story` (props: name, role, image, video link).

### PRESS
| id | current | → suggested |
|---|---|---|
| 669:595 | Group 82 | `Section/Press` |
| 669:597 | PRESS | `Section/Press-Title` |
| 669:761 | Group 123 | `Section/Press-Cards` |
| 669:762 | Group 119 | `Card/Press-NBCNews` |
| 669:773 | Group 120 | `Card/Press-Forbes` |
| 669:784 | Group 122 | `Card/Press-LBBOnline` |
| 669:795 | Group 121 | `Card/Press-CBSNews` |
| 669:600 | View All | `Section/Press-Button-ViewAll` |
> 4 cards ~650×597 identical → ONE component `Card/Press` (props: outlet, blurb, image, link).

### FRIENDS / PARTNERS
| id | current | → suggested |
|---|---|---|
| 669:602 | Group 83 | `Section/Friends` |
| 669:604 | (text) | `Section/Friends-Heading` |
| 669:605 | Group 163 | `Section/Friends-LogoGrid` |
| 669:607–624 | Rectangle 100–117 | `Card/PartnerLogo-01…18` |
> 18 identical 203×199 tiles → ONE component `Card/PartnerLogo` in a 6×3 grid.

### CTA (`669:625` → `Section/CTA`)
| id | current | → suggested |
|---|---|---|
| 669:625 | Group 85 | `Section/CTA` |
| 669:627 | Group 84 | `Section/CTA-Card` |
| 669:629 | Subtract | `Section/CTA-Button-Partner` |
| 669:632 | Subtract | `Section/CTA-Button-Donate` |
| 669:635 | (text) | `Section/CTA-Heading` |

### Footer (`669:639` → `Footer`)
| id | current | → suggested |
|---|---|---|
| 669:639 | Group 86 | `Footer` |
| 669:687 | TIB Logo | `Footer/Logo` |
| 669:642 | Group 128 | `Footer/SocialLinks` |
| 669:643–646 | Facebook/X/Instagram/YouTube | `Footer/Social-*` |
| 669:696 | (text) | `Footer/Phone` |
| 669:641 | (text) | `Footer/Address` |
| 669:647 | Layer_1 | `Footer/Badge` (501c3 seal) |
| 669:697 | (text) | `Footer/LegalDisclaimer` |

### Cleanup
- `669:806` Subtract (0×0 at 0,0) — empty, likely **delete**.
- `669:455` Subtract (0×0) — empty mask — **review/delete**.

---

## 2. Components to create (dedupe copies → instances)

| Component | Count | Node ids | Props |
|---|---|---|---|
| `Card/Action` | 6 | 669:702/707/712/717/722/727 | title, image, watch link |
| `Card/Story` | 4 | 669:733/740/747/754 | name, role, image, video link |
| `Card/Press` | 4 | 669:762/773/784/795 | outlet, blurb, image, learn-more link |
| `Card/PartnerLogo` | 18 | 669:607–624 | logo image |
| `Section/MediaBand` | 2 | 669:457/592 | media (gif) |
| `Button/WatchNow` | 13 | already instances | size variant (111 / 139) |
| `Button/ViewAll` | 3 | 669:590/600/807 | — |
| `Button/LearnMore` | 4 | 669:772/783/794/805 | — |
| `Nav` + `Nav/Button` | — | 669:808 (+ dup nav above frame) | links, CTA |

---

## 3. Auto Layout pass
- Wrap each `Section/*` in vertical Auto Layout: padding `60px` sides, set vertical gaps.
- Card grids (`Section/OurAction-Cards`, `-Press-Cards`, `Friends-LogoGrid`) → Auto Layout
  with wrap, fixed gap (currently absolute-positioned).
- Each card interior → Auto Layout so text/image/button stack with real spacing.

## 4. Responsive — deferred (desktop 1440 only for now)
Scope for this phase is **desktop 1440px only**. A responsive pass comes later.

Two things to set up *now* so that later pass is cheap (note: Next.js does NOT provide
responsiveness — it comes from the CSS layer, e.g. Tailwind breakpoints / fluid `clamp()`):
- **Use Auto Layout with fill/hug**, not fixed pixel widths, so sections already flex to a
  max-width container instead of hard-coding 1440.
- **Keep each `Section/*` self-contained** so adding breakpoints later is a local change.
No mobile/tablet frames needed yet — just don't bake in absolute positioning that blocks reflow.

## 5. Pages & cover
- One Figma page per site page: Home, Action, Stories, Press, Brave Camp/Partners.
- Add `🎨 Foundations` (tokens) and `🧩 Components` pages.
- Add a cover/README frame: live URL, status, breakpoints, font names, links.

## 6b. Interactions / states

> Source: component variants in the file (the Dev Mode connection cannot read prototype
> wiring — triggers, navigate targets, transitions). State visuals below are confirmed from
> variant screenshots; **flow items marked (CONFIRM) need the designer's input.**

### Hover convention (confirmed) — color inversion
Every interactive control swaps to **black + its brand color** on hover:
| Element | Default | Hover / alt |
|---|---|---|
| Register for Brave Camp | yellow bg / black text | black bg / yellow text |
| Donate | blue bg / black text | black bg / blue text |
| Nav link (`Hero Navigation Button`) | black bg / white text | pink bg / black text |
| `Today, I'm Brave` logo | static (`Default`) | `Play` variant — animated/video play state |
| "global non-profit" inline word | black + underline + globe | light-blue text (`Variant2`) — animated emphasis |

Implement as one shared hover rule per button (invert fill ↔ text to black + brand color).
Variant components carrying these states: Registration `669:958`, Donate `669:965`,
Hero Navigation Button `669:950`, TIB logo `669:981`, hero highlight `669:822`.

### Flow (CONFIRM with designer — not readable from file)
- Nav links → smooth-scroll within Home, or navigate to Action/Stories/Press pages?
- View All buttons → Action / Stories / Press pages?
- Register / Donate / Watch Now / Learn More → external link, modal, or video overlay?
- Scroll-triggered animations or page-transition style?
- Prototype start frame: Home Page (`669:429`).

## 6. Dev Mode prep
- Mark final frames **Ready for Dev**.
- Annotate: link targets, hover/focus states, image alt text, which sections are CMS-driven
  (Press cards, Action cards, Story cards, Partner logos) vs static.
- Confirm asset exports: logo as SVG (`TIB_Logos-02`), social icons SVG, image export scale.
