# DESIGN.md — Herbal Grove Spa

> Design-system doc for **one** template: `herbal-grove-spa`.
> This is NOT the site's shared design system. This file only describes the visual world
> of Herbal Grove Spa.
>
> Token source: `HerbalGroveSpa.module.css` + the components (single source of truth).
> When changing a value, update the CSS/component first, then update this file — don't let them drift.

---

## 1. Visual Theme & Atmosphere

**Archetype: Vietnamese folk / handcrafted — printed on paper, not rendered on glass.**

The whole page sits under a **fixed sepia paper grain**, so every surface reads as handmade paper
rather than a clean digital plane. Type is old-book: Cormorant Garamond throughout, with italic
serif small-caps standing in for the usual tracked-sans micro-labels. Ornament is botanical — a leaf
mark in the wordmark, a repeating leaf border, a wax-seal medallion. Color is kraft cream against
deep forest green, with muted bronze as the single accent.

The **layout skeleton** is borrowed from Velura (a luxury-spa reference) — hero with an info bar,
service rows, a pricing list with category tabs, an arched portrait, a marquee strip. The folk
material treatment is what makes it not read as another luxury-spa clone.

- Mood: warm, herbal, traditional, handmade.
- Lighting: cream page punctuated by deep-green bands (offer strip, story, booking, footer).
- Motion: **this template moves.** Hero staggers in, sections reveal on scroll, the gallery scales
  in item by item, a marquee scrolls, images zoom on hover. All of it is disabled under
  `prefers-reduced-motion`, and a `<noscript>` block keeps reveal elements visible without JS.
- One sentence to remember it by: *"a herbal apothecary's ledger — pressed leaves, kraft paper, a wax seal."*

## 2. Color Palette & Roles

All defined inside `.page { ... }` in `HerbalGroveSpa.module.css`. Token prefix `--bt-`
(historical — kept because every class and component already uses it; renaming it buys nothing).
**Do not use** the site's `--color-brand-*`.

| Token | Value | Role |
|---|---|---|
| `--bt-bg` | `#f2e9d8` | Kraft/handmade-paper cream — page background |
| `--bt-bg-alt` | `#e8dcc4` | Deeper kraft — alternating sections, arched-photo backing |
| `--bt-dark` | `#1e3a31` | Deep forest green — dark bands, footer, solid CTA |
| `--bt-dark-raised` | `#264a3d` | Elevated green surface, dark-button hover |
| `--bt-amber` | `#a9824f` | Muted gold/bronze — the only accent. **Client-overridable via `brandColor`** |
| `--bt-amber-light` | `#c19a64` | Lighter bronze — hover, and accent **on** dark green |
| `--bt-amber-pale` | `rgba(169,130,79,0.13)` | Faint accent fill |
| `--bt-ink` | `#2b3a33` | Primary text on cream (green-charcoal, not black) |
| `--bt-ink-mid` / `--bt-ink-soft` | `#4f5f56` / `#41514a` | Secondary text / body copy |
| `--bt-muted` | `#8b8478` | Placeholder, tertiary |
| `--bt-light` | `#f5efe4` | Cream text and surfaces on dark green |
| `--bt-line` / `--bt-line-soft` | `rgba(43,58,51,0.14 / 0.07)` | Hairlines on cream |
| `--bt-border-dark` | `rgba(245,239,228,0.12)` | Hairline on dark green |

**Color rules:**
- Text on cream is `--bt-ink` — a green-charcoal, never pure black. That tint is what keeps the
  page warm.
- Bronze is an accent for **marks and hovers**, not for buttons. `.btnSolidDark` exists precisely so
  the primary CTA can be forest green instead: gold buttons push the template toward generic
  "luxury spa".
- On dark green use `--bt-amber-light`, not `--bt-amber` — the darker bronze muddies against it.
- `brandColor` overrides `--bt-amber` only. Forest green and kraft cream are the identity.

## 3. Typography Rules

Loaded via `next/font` in `index.tsx`, exposed as variables. Both load the `vietnamese` subset.

- **Display:** Cormorant Garamond → `var(--bt-font-display)`. Weights 400/500/600, has italic.
- **Body:** Mulish → `var(--bt-font-body)`. Weights 400–700.

| Role | Font | Size | Notes |
|---|---|---|---|
| Hero title (`.heroTitle`) | display 500 | `clamp(56px,8.5vw,104px)` | line-height 1.02, cream, **uniform color** |
| Section heading (`.h2`) | display 500 | `clamp(40px,5.2vw,64px)` | line-height 1.08, `text-wrap: balance` |
| `.h2OnDark` | display 500 | — | same heading, cream, for green bands |
| Old-book label (`.bookLabel`) | display **italic** 600 | 13px | letter-spacing `0.05em` — replaces tracked-sans micro-labels |
| Lede (`.lede`) | body 400 | 16px | line-height 1.75, `max-width: 54ch` |
| Buttons | body 600 | 11–13px | UPPERCASE, letter-spacing `0.14–0.16em` |
| Wax seal (`.studioSealText`) | body 700 | 8.4px | UPPERCASE, letter-spacing 1.4px, set on a circular SVG path |

**Typography rules:**
- **Headings are one color.** `.h2 em` inherits the heading ink and `.heroTitle em` resets to
  normal — the italic-plus-gold-word pattern is deliberately switched off here. `.h2Plain` /
  `.h2OnDarkPlain` go further and remove the italic too.
- The old-book italic serif label (`.bookLabel`) is the template's voice for small text. Reaching
  for a bold tracked sans label instead is the single easiest way to break the folk character.
- Page-level `letter-spacing: -0.005em` slightly tightens body text — part of the printed feel.

## 4. Component Stylings

| Component | Main style |
|---|---|
| **Paper grain** (`.page::after`) | `position: fixed`, `feTurbulence` fractal noise pushed through a **sepia color matrix**, `opacity: 0.1`, `mix-blend-mode: multiply`, 180px tile. Fixed, not absolute, so the texture stays put while content scrolls |
| **Header** | `fixed`, transparent over the hero and switching to a solid cream bar on scroll (`onDark` flips every text color). Wordmark = `LeafIcon` + serif name + `.bookLabel` tagline stacked. Inline nav from `lg`; hamburger animates into an X |
| **Hero** | Full-bleed photo under `.heroScrim` — a **four-stop warm-brown gradient** (dark top, light middle, dark bottom) that keeps the photo readable rather than flattening it. Huge cream serif title, staggered entrance (`.heroAnim` + `.hd2/.hd3/.hd4`). `.heroInfoBar` at the base: 3 cells (label + value) with hairline dividers. Side arrows appear only `≥1024px` |
| **TrustBar** | 1 → 4 column grid at `900px`, bronze icon + `.trustLabel` |
| **Services** (`.velRow`) | Full-width **rows**, not cards: thumbnail (zooms 1.08 on hover) + serif name (turns bronze on hover) + description + `.velPill2` meta pill with the price in ink. `.velOval` / `.velCircle` are the round meta chips |
| **OfferStrip** | Dark green band inside `.offerFrame` — a **dashed hairline frame**, a 100° green scrim over the photo, and a 108px cream **circle badge** carrying the offer. Below it, `.marquee` scrolls uppercase micro-copy on a 22s loop |
| **Pricing** | `.priceTabs` category tabs (active = filled) over a printed-menu list: `.priceName` … `.priceDots` **dotted leader** … `.priceVal`. Featured row gets `.priceItemFeatured` + `.priceBadge`; rows can carry a thumbnail |
| **About / story** | Dark green section with `.archedPhoto` — `border-radius: 9999px 9999px 28px 28px`, a cathedral arch — and the `.studioSeal`: a 100px cream **wax-seal medallion** overlapping the photo's top-left corner, text set around a circular SVG path |
| **Gallery** | Grid of `.galleryItem` cells that scale in with a per-child stagger (`nth-child` delays to 6), image zoom on hover |
| **Reviews** | Card row. The round `.reviewArrow` buttons are **decorative only** — `aria-hidden`, `tabIndex={-1}`, shown from `lg`. They frame the row as a carousel without claiming an interaction that does not exist |
| **Booking** | Dark green, Zalo-first |
| **Footer** | Dark green. `.newsletter` fuses input and SUBSCRIBE button into one unit; `.footSocial` round outline icons; links underlined with a hairline that turns bronze on hover |
| **FloatingActions** | Floating Zalo button with `.floatZaloRing` — a bronze ring that pulses **3 times and stops** (`2s` delay, `forwards`), so it draws the eye once instead of nagging |

## 5. Layout Principles

- Container: `max-w-container`, padding `px-5` → `md:px-10`.
- Rhythm: cream (`--bt-bg`) with `--bt-bg-alt` for adjacent sections, interrupted by full-width
  **deep-green bands** — offer strip, story, booking, footer. The green bands are the structure.
- Section order is fixed in `index.tsx`: hero → trust → services → offer → pricing → story →
  gallery → reviews → booking → footer. Herbs / Process / Interstitial sections exist in the data
  model but are deliberately not rendered.
- Sections are picked with `pickType` (each `_type` is unique in this template) — unlike thai-spa,
  which needs `pick` by `_key`.
- `scroll-margin-top: 5rem` on `section[id]` clears the fixed header.
- Breakpoints: `768px` for most layout, `900px` for the trust grid, `lg` for the nav, `1024px` for
  the hero arrows. Mobile-first (`min-width`), no `max-width` queries.

## 6. Depth & Elevation

Depth comes from **texture and arcs**, not shadow stacks:

- The fixed paper grain sits above everything at `z-index: 998` and multiplies over it.
- Rounded-arch silhouettes (`.archedPhoto`, `.offerCircle`, `.studioSeal`, `.velOval`) do the work
  that drop shadows usually do.
- Shadows are rare and deep-set (`0 18px 40px -20px rgba(0,0,0,0.5)`), used only to lift the offer
  circle and the wax seal off their photos.
- Hairlines (`--bt-line` on cream, `--bt-border-dark` on green) separate everything else.

**Signature (code-only, part of the identity — clients CANNOT edit via CMS):**
- **Paper grain overlay** (`.page::after`).
- **`.archedPhoto`** and the **`.studioSeal`** medallion.
- **`.offerFrame` + `.offerCircle`** and the **`.marquee`**.
- **`.floatZaloRing`** three-pulse attention ring.

## 7. Do's & Don'ts

**DO**
- Keep the paper grain. It is the template.
- Use `.bookLabel` (italic serif) for small labels.
- Keep headings a single ink color — no gold word inside a heading.
- Use forest green for primary CTAs and bronze for marks and hovers.
- Use `--bt-amber-light` for accents on dark green.
- Add every new animation to the `prefers-reduced-motion` block, and keep the `<noscript>` fallback
  covering any new reveal class.

**DON'T**
- ❌ Make a gold button. `.btnSolidDark` exists so the primary CTA is green.
- ❌ Replace `.bookLabel` with a bold tracked sans micro-label.
- ❌ Use pure black or a cool grey for text — ink is `#2b3a33`, a green-charcoal.
- ❌ Let `brandColor` reach forest green or kraft cream. It maps to `--bt-amber` only.
- ❌ Remove the grain to "clean it up", or swap the arch shapes for plain rounded rectangles.
- ❌ Use the site's `--color-brand-*` or inline styles (except the dynamic `--bt-amber`).
- ❌ Reuse another template's imagery. Herbal Grove Spa has its own Unsplash set.

## 8. Responsive Behavior

- Mobile-first. Hero title scales `clamp(56px,8.5vw,104px)`; its info bar stacks to one column and
  becomes 3 columns at `768px`.
- Hero side arrows are hidden below `1024px` — swipe only.
- Service rows stack thumbnail-over-copy on mobile and go horizontal at `768px`; the meta chips grow
  (`.velOval` 172×76, `.velCircle` 90px) at the same breakpoint.
- Trust bar: 1 column → 4 at `900px`.
- Nav is inline from `lg`; below that the hamburger opens a cream panel with serif 24px links and a
  full-width green CTA.

## 9. Agent Prompt Guide

When asking an AI to build/change UI for Herbal Grove Spa, paste this summary:

> Herbal Grove Spa = **Vietnamese folk / handcrafted**, printed on paper rather than rendered on
> glass. Kraft cream `#f2e9d8` page under a **fixed sepia paper grain** (`feTurbulence` + sepia color
> matrix, `opacity 0.1`, `mix-blend-mode: multiply`) — the grain is the template, never remove it.
> Deep forest green `#1e3a31` full-width bands (offer, story, booking, footer), green-charcoal ink
> `#2b3a33` (never pure black), muted bronze `#a9824f` as the **only** accent. Display = Cormorant
> Garamond 500, body = Mulish, both with the Vietnamese subset; small labels use `.bookLabel`, an
> **italic serif** treatment that replaces tracked-sans micro-labels. **Headings are a single ink
> color** — no gold word inside a heading. **Primary CTAs are forest green, never gold**
> (`.btnSolidDark`); bronze is for marks and hovers, and on green it becomes `--bt-amber-light`.
> Signature pieces: `.archedPhoto` cathedral arch
> (`9999px 9999px 28px 28px`), the cream `.studioSeal` wax medallion, the dashed `.offerFrame` with a
> cream circle badge, the 22s `.marquee`, and the Zalo ring that pulses 3 times then stops. The layout
> skeleton follows Velura; the material treatment is what keeps it from reading as another luxury-spa
> clone. This template animates — every new animation must be added to the `prefers-reduced-motion`
> block and covered by the `<noscript>` fallback. Token prefix `--bt-`. `brandColor` overrides
> `--bt-amber` only. NO `--color-brand-*`, NO inline styles (except the dynamic `--bt-amber`).
> English for UI text, English for code comments.

**Quick reference:** background `--bt-bg #f2e9d8` · alt `--bt-bg-alt #e8dcc4` · dark band
`--bt-dark #1e3a31` · text `--bt-ink #2b3a33` · accent `--bt-amber #a9824f` (on dark:
`--bt-amber-light #c19a64`) · cream on dark `--bt-light #f5efe4` · breakpoints `768` / `900` / `lg` /
`1024`.
