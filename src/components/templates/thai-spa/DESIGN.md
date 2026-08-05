# DESIGN.md — Thai Spa

> Design-system doc for **one** template: `thai-spa`.
> This is NOT the site's shared design system. This file only describes the visual world
> of Thai Spa.
>
> Token source: `ThaiSpa.module.css` + the components (single source of truth).
> When changing a value, update the CSS/component first, then update this file — don't let them drift.

---

## 1. Visual Theme & Atmosphere

**Archetype: Formal symmetric classic — a temple, not a boutique.**

Where Mist Spring Spa is asymmetric and photographic, Thai Spa is **built on a centre line**. The
header splits its nav in half around a centred wordmark, the hero is centred, every section title is
centred. Ornament is sparing and structural — gold hairlines, the framed LovingTouch band, the
arch-cropped Offer image — rather than applied trim. The page reads as ceremonial and composed
rather than casual.

- Mood: formal, warm, ceremonial, traditional.
- Lighting: bright and even — ivory and sand throughout, no dark page. Dark appears only in the
  footer and in the one scrimmed full-bleed image.
- Motion: minimal. No scroll-spy, no parallax, no reveal-on-scroll. Transitions are short (`260ms`)
  and limited to hovers and the mobile sheet. The one moving part is the shared `BannerCarousel`
  (5s autoplay), and its section ships `enabled: false` in `DEFAULT_SECTIONS` — the default page is
  still.
- One sentence to remember it by: *"a temple entrance — symmetrical, gold-trimmed, unhurried."*

## 2. Color Palette & Roles

All defined inside `.page { ... }` in `ThaiSpa.module.css`. Token prefix `--ts-`.
**Do not use** the site's `--color-brand-*`.

| Token | Value | Role |
|---|---|---|
| `--ts-ivory` | `#FFF8F1` | Page background, light text on dark |
| `--ts-ivory-soft` | `#FBF1E5` | Third background tone — Welcome section, form inputs |
| `--ts-sand` | `#E3D4C5` | Alternating section background, the warm counterweight to ivory |
| `--ts-sand-deep` | `#D2BFAB` | Deeper sand, sparing |
| `--ts-wine` | `#7A1F1F` | Deep temple red — primary CTA, link hover. **Client-overridable via `brandColor`** |
| `--ts-wine-hover` | `#5C1717` | CTA hover (also overridden by `brandColor`) |
| `--ts-gold` | `#C9982F` | Turmeric gold — frames, hairlines, featured badge |
| `--ts-gold-soft` | `#E4C878` | Lighter gold — link hover on the dark footer |
| `--ts-gold-text` | `#7D5C18` | Gold **as text** — eyebrows, step numerals. Darkened so it clears AA on ivory-soft |
| `--ts-espresso` | `#1D110C` | Primary text |
| `--ts-bark` | `#5C453A` | Body copy, secondary text |
| `--ts-clay` | `#7D6653` | Nav links, placeholders. Darkened from `#9E8472` (~3.3:1) to clear AA |
| `--ts-border` / `--ts-border-strong` | `rgba(35,6,11,0.10 / 0.22)` | Hairlines |
| `--ts-shadow-1/2/3` | warm-tinted | Card / image / mobile-sheet elevation |

**Color rules:**
- Gold is **ornament**, red is **action**. Never use gold for a button and never use red for a
  border or a rule — the split is what keeps the template from looking generic-festive.
- Gold as a *fill* (`--ts-gold`) and gold as *text* (`--ts-gold-text`) are different tokens. Text
  must use `--ts-gold-text`, or it fails contrast.
- Only `--ts-wine` follows the client's `brandColor`. Gold stays gold — it is the template's
  identity, not a theme slot.
- Backgrounds alternate ivory ↔ sand section by section; `--ts-ivory-soft` is the third tone and
  appears only where a section needs to sit between the two.

## 3. Typography Rules

Loaded via `next/font` in `index.tsx`, exposed as variables.

- **Display:** Playfair Display → `var(--ts-font-display)`. Weights 400–700, has italic.
- **Body:** Source Sans 3 → `var(--ts-font-body)`. Weights 300–600.
- Both load the `vietnamese` subset — this template is expected to render Vietnamese copy.

| Role | Font | Size | Notes |
|---|---|---|---|
| Hero title (`.heroTitle`) | display 500 | `clamp(34px,4.2vw,58px)` | line-height 1.06, centred, `text-wrap: balance` |
| Section title (`.sectionTitle`) | display 500 | `clamp(26px,2.6vw,38px)` | **centred**, 48px bottom margin |
| Harmony / Offer titles | display 500 | `clamp(28px,3.2vw,44px)` / `clamp(26px,2.8vw,38px)` | left-aligned inside their split layouts |
| Eyebrow (`.eyebrow`, `.heroEyebrow`) | body 500/600 | 11–12px | UPPERCASE, letter-spacing `0.16–0.18em`, `--ts-gold-text` |
| Step numeral (`.stepNum`) | display 500 | — | gold numerals in Welcome and AfterMassage |
| Logo (`.headerLogo` / `.footerLogo`) | display 500 | 14px / 26px | letter-spacing `0.22em` — wide tracking is part of the formality |
| Body | body 400 | 12–16px | line-height 1.45–1.65, `--ts-bark` |

**Typography rules:**
- Headings are display **500**, never 700 — weight comes from size and spacing, not boldness.
- Emphasis = one `<em>` word, **italic only, same color**. Every title in this template is built as
  `{headingMain} <em>{headingItalic}</em>`.
- Titles centre by default. Only Harmony and Offer break that, because each is a
  two-column split where centring would leave the text stranded.

## 4. Component Stylings

| Component | Main style |
|---|---|
| **Header** | `sticky top-0`, ivory. Grid `1fr auto 1fr`: nav links **split in half** left and right of the centred wordmark — the template's structural signature. Inline nav from `900px`; below that a round wine hamburger button |
| **Mobile sheet** | Full-width panel dropping from the top (`.mobileSheet`, 24px radius, `--ts-shadow-3`) over a dark backdrop. Links are display-font 22px, hairline-separated. Wrapper uses `inert` when closed |
| **Hero** (`#experience`) | Centred column, max 720px: gold eyebrow → display title with italic half → 440px sub → wine pill CTA. |
| **Button** (`.btn`) | Wine pill with an **ivory circle at the left end** holding the arrow, asymmetric padding (`10px 22px 10px 10px`). Distinctive; do not replace with a plain pill |
| **LovingTouch** (`#services`) | Full-bleed image band. Mobile: 360px tall, square, gold rule top and bottom, dark card pinned to the bottom. Desktop (`≥768px`): 460px, 36px radius, full gold border, card floats right and vertically centred over a right-side scrim |
| **Benefits** | Sand background. `auto-fit` card grid (min 180px), ivory cards, square image on top, small display title + 12px body. Images fall back to a fixed 5-image Unsplash set when the CMS supplies none |
| **Welcome** (`#welcome-ritual`) | The one section on `--ts-ivory-soft`. Ritual steps with gold `.stepNum` numerals |
| **HarmonyIntro / AfterMassage** | Sand, `pb-24` only — they read as continuations of the section above rather than new bands |
| **Testimonials** (`#reviews`) | Ivory, quote cards |
| **Pricing** (`#pricing`) | Sand. The featured tier gets `.pricingFeatured` (gold border) plus `.pricingBadge` — a gold pill notched into the top edge, espresso text |
| **Offer** (`#offer`) | Ivory. Pill-shaped inputs (`.offerInput`, 52px, ivory-soft fill, border darkens to espresso on focus) beside `.offerImage` — an **arch/dome blob** (`border-radius: 50% 50% 24px 24px / 60% 60% 24px 24px`) with a gold border |
| **Footer** (`#contact`) | Dark band, wide-tracked display logo |

## 5. Layout Principles

- Container: `max-w-container` with `26px` horizontal padding — the 26px is used consistently and is
  narrower than the site's own gutter.
- Symmetry first: header split-nav, centred hero, centred section titles. When a section must be
  asymmetric (Harmony, Offer) it becomes a clean two-column split, never an offset collage.
- Section rhythm is **ivory → sand → ivory**, with `--ts-ivory-soft` reserved for Welcome.
- Vertical rhythm: `py-24` for a full band, `pb-24` for a section that continues the one above it.
- Main breakpoint `768px`; the nav has its own at `900px`, chosen because six links plus a
  wide-tracked wordmark stop fitting before the usual `lg`.
- Mobile-first (`min-width`), no `max-width` queries.

## 6. Depth & Elevation

Depth is **linear**, not atmospheric — frames and rules rather than glow:

- **Gold hairlines**: the LovingTouch border, the blob border.
- **Warm shadows** (`--ts-shadow-1/2/3`) tinted `rgba(35,6,11,...)`, used sparingly: flat cards, a
  lifted image band, and the mobile sheet.
- **One scrim only** — LovingTouch's `linear-gradient(90deg, transparent 40%, rgba(20,8,8,0.55) 70%)`,
  so the dark card stays readable over the photo.
- No grain, no vignette, no glassmorphism.

**Signature (code-only, part of the identity — clients CANNOT edit via CMS):**
- **`.offerImage`** — the arch/dome blob radius.
- **`.btn`** — the wine pill with the inset ivory arrow circle.

## 7. Do's & Don'ts

**DO**
- Keep the centre line: split nav, centred hero, centred section titles.
- Use gold for ornament and wine for action, and keep them separate.
- Use `--ts-gold-text` whenever gold is type; `--ts-clay` for nav and placeholder text (both are
  already tuned to clear AA).
- Alternate ivory and sand to mark sections; use `pb-24` when a section should read as a continuation.
- Emphasize with one italic `<em>` word in the same color.

**DON'T**
- ❌ Add a gold button or a red hairline — it collapses the ornament/action split.
- ❌ Let `brandColor` reach gold. It maps to `--ts-wine` and `--ts-wine-hover` only.
- ❌ Use `--ts-gold` (#C9982F) as text on ivory — that is what `--ts-gold-text` exists for.
- ❌ Introduce heavy motion (parallax, autoplay carousels, scroll-spy). Stillness is the point.
- ❌ Use the site's `--color-brand-*` or inline styles (except the dynamic `--ts-wine`).
- ❌ Reuse another template's imagery. Thai Spa has its own Unsplash set.

## 8. Responsive Behavior

- Mobile-first; base = mobile, main expansion at `≥768px`, nav at `≥900px`.
- LovingTouch is the biggest shift: square full-bleed band with a bottom card → rounded 36px card
  floating right and vertically centred.
- Benefits uses `auto-fit`/`minmax(180px,1fr)`, so column count follows width with no breakpoints.
- Mobile nav is a top sheet, not a drawer or a full-screen overlay.

## 9. Agent Prompt Guide

When asking an AI to build/change UI for Thai Spa, paste this summary:

> Thai Spa = **formal symmetric classic**, a temple rather than a boutique. Ivory `#FFF8F1`
> background alternating with sand `#E3D4C5`, espresso text `#1D110C`, deep temple red `#7A1F1F` for
> **every CTA**, turmeric gold `#C9982F` for **every ornament** — never swap those two roles.
> Display = Playfair Display 500 (italic for the emphasized half of each title), body = Source Sans 3;
> both load the Vietnamese subset. Structure is symmetric: header splits its nav left/right around a
> centred wide-tracked wordmark, hero is centred, section titles are centred. Signature ornament: the arch/dome blob crop on the Offer image, and the
> wine pill button with an inset ivory arrow circle. Motion is minimal — no parallax, no autoplay, no
> scroll-spy. Gold as type must use `--ts-gold-text #7D5C18` and nav/placeholder text `--ts-clay
> #7D6653` (both tuned for AA). `brandColor` overrides `--ts-wine` only. NO `--color-brand-*`, NO
> inline styles (except the dynamic `--ts-wine`), NO grain or vignette.
> English for UI text, English for code comments.

**Quick reference:** background `--ts-ivory #FFF8F1` · alt band `--ts-sand #E3D4C5` · text
`--ts-espresso #1D110C` · action `--ts-wine #7A1F1F` · ornament `--ts-gold #C9982F` · gold-as-text
`--ts-gold-text #7D5C18` · container `max-w-container` + `26px` gutter · breakpoints `768px` /
`900px` (nav).
