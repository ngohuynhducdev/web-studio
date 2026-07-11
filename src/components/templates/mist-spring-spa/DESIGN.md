# DESIGN.md — Mist Spring Spa

> Design-system doc for **one** template: `mist-spring-spa`.
> This is NOT the site's shared design system. This file only describes the visual world
> of Mist Spring Spa.
>
> Token source: `MistSpringSpa.module.css` + the components (single source of truth).
> When changing a value, update the CSS/component first, then update this file — don't let them drift.

---

## 1. Visual Theme & Atmosphere

**Archetype: Bright, elegant, warm spa — a clone of the Lumera (ThemeForest) layout.**

It should feel like stepping into an upscale daytime spa: bright, clean, warm, with generous
breathing room. The hero is a **sharp, well-lit** spa photograph with white text placed in the
lower-left corner; the rest of the page alternates between cream and white backgrounds, with a
restrained copper accent.

- Mood: elegant, warm, calm, trustworthy.
- Lighting: high-key for the page body; the hero is a photo with a dark scrim; Booking is a
  dark rounded panel.
- Motion: slow, soft (fade-up, gentle reveal) — never jarring.
- One sentence to remember it by: *"early morning at the spa, white towels and warm candles."*

> Historical note: Mist Spring Spa was originally a "dark cinematic onsen" template, then became a
> "bright spa with onsen touches" (a 湯 seal stamp, hot–cold Ritual, a "Private Onsen" rail). Per
> client request (2026-06), all onsen/Japanese motifs were **removed entirely** and the template was
> rebuilt to **closely follow Lumera**: sharp hero photography, a "Quiet Refuge" intro, a treatment
> card grid, starred Reviews, a Booking (dark panel), and a bold footer. No more 湯/Ritual. Later
> (again per client request) it pivoted into a **mini-website**: **Services** = 3 signature cards
> (price + steps shown by default); **Price List** split into its own `menuSection` styled like a
> printed menu (dotted leader); **Gallery** added; Team + Stats removed (face/fake numbers). Address/
> hours moved to the Footer (address links → Google Maps); no separate "Directions" section. Booking
> is still Zalo-only (no online booking).

## 2. Color Palette & Roles

All defined inside `.page { ... }` in `MistSpringSpa.module.css`.
Token prefix `--sm-`. **Do not use** the site's `--color-brand-*`.

| Token | Value | Role |
|---|---|---|
| `--sm-bg` | `#f1e9dc` | Main background (warm cream) |
| `--sm-bg2` | `#ffffff` | Raised surface — cards, panels, bright sections |
| `--sm-bg0` | `#2c2823` | Dark band — announcement bar + footer |
| `--sm-ivory` | `#2e2a24` | **Primary text** (deep brown on cream) |
| `--sm-light` | `#f4ede2` | Light text for dark bands / hero / Booking |
| `--sm-accent` | `#a9854f` | Copper/gold — eyebrow, CTA, price, numbers, italic emphasis. **Client-overridable via `brandColor`** |
| `--sm-accent-10…50` | `color-mix(... var(--sm-accent) X%)` | *Faded* copper tint (borders/accent backgrounds). Follows `--sm-accent` |
| `--sm-muted` | `rgba(46,42,36,0.62)` | Secondary text, descriptions |
| `--sm-faint` | `rgba(46,42,36,0.45)` | Faint labels |
| `--sm-line` | `rgba(46,42,36,0.14)` | Hairline, borders, dividers |

**Color rules:**
- Bright backgrounds (cream/white) dominate; dark tones only appear on the announcement bar,
  **Booking** (dark panel), and the footer.
- Copper accent is the *only* hot spot — use it sparingly (CTA, price, a single italic word, round icon).
- `--sm-ivory` = dark text (on bright backgrounds); `--sm-light` = light text (on dark/hero
  backgrounds). Do NOT mix them up.
- `--sm-accent` can be overridden by the client via CMS `brandColor`. Every faded copper tint must
  use the `--sm-accent-XX` tokens.

## 3. Typography Rules

Loaded via `next/font` in `index.tsx`, exposed as variables.

- **Display:** Cormorant Garamond → `var(--sm-font-display)` → used via `--sm-serif`. Weight 300/400/500, has italic.
- **Body:** Manrope → `var(--sm-font-body)`. Weight 300–600.

| Role | Font | Size | Notes |
|---|---|---|---|
| Hero title (`.heroH1`) | serif 300 | `clamp(2.7rem,7vw,4.6rem)` | line-height 1.02, **light**-colored text over the photo |
| Section heading (`.secH2`) | serif 300 | `clamp(2rem,4vw,3.1rem)` | centered, em = italic + accent |
| Eyebrow (`.secEyebrow`/`.heroLede`) | body | `0.7rem` | UPPERCASE, letter-spacing `0.26em`, accent color, has a hairline |
| Card title (`.trName`) | serif 400 | `1.2–1.35rem` | treatment name |
| Body / sub | body | `0.86–1rem` | line-height 1.7–1.85, muted color |
| Price (`.menuPrice`) / review quote | serif italic 300 | — | price in accent color; quote in ivory/90 |

**Typography rules:**
- Headings are ALWAYS a thin serif weight (300), never bold.
- Emphasis = a single `<em>` word, **italic only, no color change**. Each text block uses only ONE
  color (never highlight a single word in a different color within a sentence).
- Section headers are **centered** (eyebrow with hairlines on both sides + heading + sub). Hero &
  Intro are left-aligned instead.
- Don't use the em dash "—" inside UI copy (use commas / short sentences).

## 4. Component Stylings

| Component | Main style |
|---|---|
| **Header** | Dark announcement bar + nav on a cream `bg/95` blur background, centered serif logo, gold-underline link when active, "Book Now" CTA pill |
| **Hero** | **Carousel** (swiper, fade). Slides come from CMS `heroSection.slides` (each slide: image + eyebrow + heading + subtitle); **≥2 slides** enables autoplay + dots + arrows (≥48rem), **0–1 slide** = static hero. Each slide: full-bleed image + `.heroScrim` (dark gradient on the left) + **light**-colored text, **center-left** aligned; gold pill + **outline pill** (UPPERCASE). Height via `clamp` (~70vh, short like Lumera). NO seal, NO stats |
| **Intro** (Quiet Refuge, `#about`) | Left: a cluster of 2 layered images (`.introImg1`/`.introImg2`). Right: eyebrow + heading + paragraph + 4-point checklist (accent round icon) + gold pill |
| **Services** (`servicesSection`, `#services`) | **3 signature cards** (`.trCard`, image + **price chip** top corner + icon + name + description + "Book This Treatment →") — `.trGrid` 1→2→3 columns. Inside the card body, **shown by default** (no hover) "What's Included" + the steps (`includes`, gold dot) → guests immediately see *what they get for X*; CTA bottom-aligned (`.trLink margin-top:auto`). |
| **Menu / Price List** (`menuSection`, `#menu`) | Its own section, white background. Header centered. Price list styled like a **printed menu**: balanced multi-column (`.mnGrid` `column-count:2` + `break-inside:avoid`), each group = serif name + accent underline; each row = `name · duration` ……**dotted leader**…… gold serif-italic price (`.mnLeader`/`.mnPrice`). Note at the end. |
| **Gallery** (`gallerySection`, `#gallery`) | CMS-driven. 2→3-column image grid (`.galGrid`), `wide` items span 2 columns; rounded corners, hover zoom, caption chip in the bottom-left corner. |
| **Reviews** (`#reviews`) | 3 even white cards: 5-star accent row → serif-italic quote → divider → monogram avatar circle + name + service |
| **Booking** (`.bkInner`, `#booking`) | **Dark rounded panel** (`--sm-bg0`) on a cream background (set apart from the footer), 2 columns: left = eyebrow + heading + sub + **Zalo pill** + call button (outline) + 3 "perks" with gold checkmarks (no deposit / same-day response / first-visit discount); right = a warm spa photo. Mobile stacks vertically, CTA first. Uses `bookingSection`. |
| **Footer** | Dark `--sm-bg0` band, 4 columns: brand+social, "Explore", "Contact" (address/phone/**opening hours** + Zalo pill), copyright bar |
| **Header (nav)** | `sticky top-0` (works because `.page` uses `overflow-x: clip` instead of `hidden`). Inline nav + "Book Now" button shown from `≥64rem` (lg); below that, a hamburger (mobile menu has every item). Nav has an item for **every section** (`#about/#services/#menu/#gallery/#reviews`) — **scroll-spy** underlines whichever item matches the section currently in view. |
| **Hamburger** | 3 `--sm-ivory` bars, animates into an X |

## 5. Layout Principles

- Container: `max-width: 78rem`, padding `0 1.5rem` (mobile) → `0 2.5rem` (≥48rem). Class `.sectionInner`.
- Main breakpoint: `48rem`; extra treatment breakpoints at `40rem`/`64rem`; **the header nav shows
  inline from `64rem` (lg)**, hamburger below that. Mobile-first (`min-width`), no `max-width` queries.
- `scroll-margin-top: 5.25rem` on `section[id]` to clear the sticky header.
- **Section headers are centered** (Lumera-style); Hero + Intro are left-aligned.
- **Color-blocking creates rhythm**: cream (`--sm-bg`) ↔ white (`--sm-bg2`) alternate, punctuated by
  dark tones (Booking panel + footer).

## 6. Depth & Elevation

Depth comes from **soft shadows + rounded corners + photography + scrim**, not a dark
vignette/grain:

- **Soft card shadow** in a warm tone (`rgba(46,42,36,...)`), lifts slightly on hover (treatment
  image zoom).
- **Consistent rounding** (`0.9rem`).
- **Very light grain** (`.page::after` opacity `0.03`) like a paper texture.
- **Image scrim**: `.heroScrim` (dark in the lower-left corner) so light text stands out over the
  hero photo.

**Signature (code-only, part of the identity — clients CANNOT edit via CMS):**
- **Hero carousel** (swiper fade; slides from CMS `heroSection.slides`, ≥2 enables controls).
- **Layered intro imagery** (`.introImg1`/`.introImg2`) + checklist.
- **Booking** — dark rounded panel (`.bkInner`) on a cream background.

## 7. Do's & Don'ts

**DO**
- Keep bright backgrounds (cream/white); copper accent is the only hot spot.
- Use sharp photography + a scrim in the hero → light text stands out clearly.
- White rounded cards + soft shadows; round accent icons on treatment cards.
- Emphasize with 1 italic word in the **same color** (no gold highlighting); thin serif headings.
  Each text block uses only ONE color.
- Don't use the "—" dash in UI copy.
- Dark text = `--sm-ivory`; text on dark/hero backgrounds = `--sm-light`; borders use `--sm-line`.
- Respect `prefers-reduced-motion`.

**DON'T**
- ❌ Bring back onsen/Japanese motifs (a 湯 seal stamp, hot–cold Ritual, a "Private Onsen" rail) —
  fully removed.
- ❌ Bring back a full dark-page background / vignette / heavy film grain (the old onsen-noir
  version).
- ❌ Use the site's `--color-brand-*` or inline styles (except a dynamic CSS var like `--sm-accent`).
- ❌ Flood the page with accent color, or use bold instead of italic-accent.

## 8. Responsive Behavior

- Mobile-first; base = mobile, expands at `≥40/48/64rem`.
- Hero: 3-slide carousel, text aligned **center-left** (vertical center). Height
  `clamp(30rem,80vh,40rem)` (mobile) → `clamp(34rem,70vh,45rem)` (≥48rem). Arrows hidden on mobile
  (swipe + dots only).
- Intro: layered images on top → copy below (mobile) → 2 columns (lg).
- Treatment grid: 1 → 2 (`≥40rem`) → 3 (`≥64rem`).

## 9. Agent Prompt Guide

When asking an AI to build/change UI for Mist Spring Spa, paste this summary:

> Mist Spring Spa = **a clone of the Lumera layout** — bright, elegant spa. Cream background
> `#f1e9dc`, white cards, deep brown text `#2e2a24`, copper accent `#a9854f` (used sparingly).
> Display = thin Cormorant Garamond (300), body = Manrope. Hero: **sharp full-bleed** spa
> photography, dark scrim in the lower-left corner, **light**-colored text aligned **center-left**
> (vertical center), gold pill + outline pill (UPPERCASE). Page body: Intro "Quiet Refuge" (2 layered
> images + checklist), **Services = 3 signature cards** (price + steps shown by default), **Price
> List** = its own section styled like a printed menu (dotted leader, balanced multi-column),
> **Gallery** of the space, **Reviews** 3 cards with 5 stars + monogram avatar, **Booking** (dark CTA
> panel) + Zalo, bold 4-column footer (with opening hours). This is a **mini-website** (fully
> informative) but booking is Zalo-ONLY, NO online booking. Section headers centered. Emphasis = a
> single `<em>` italic word in the **same color** (each text block uses only ONE color, NO gold
> highlighting). Do NOT use the "—" dash. Absolutely NO onsen/Japanese motifs (湯, Ritual, rail), NO
> full dark-page background, NO `--color-brand-*`, NO inline styles (except the dynamic
> `--sm-accent`). Token prefix `--sm-`; dark text `--sm-ivory`; text on dark backgrounds `--sm-light`;
> all borders use `--sm-line`. Respect `prefers-reduced-motion`.
> English for UI text, English for code comments.

**Quick reference:** background `--sm-bg #f1e9dc` · card `--sm-bg2 #fff` · text `--sm-ivory #2e2a24` ·
accent `--sm-accent #a9854f` · dark band `--sm-bg0 #2c2823` · line
`--sm-line` · container `78rem` · main breakpoint `48rem`.
