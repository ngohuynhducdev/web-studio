# SOUL STUDIO — Design System

A complete brand & UI system for **SOUL STUDIO**, a premium Thai massage studio. The system translates the physical sensation of a Thai spa — warm woods, candlelight, soft linen, the warmth of human touch — into a digital environment. The visual motto is **"Tactile Serenity."**

> _"A sanctuary of balance where traditional Eastern practices meet a professional medical approach."_

## Sources

This system was derived entirely from a moodboard / brand-direction set provided by the user. All 15 reference images live in `assets/moodboard/`. No codebase or Figma file was attached. Brand direction credited to **Alina Ilchenko (2026 Thai Massage Project)** on the cover frame.

Key references used:
- `assets/moodboard/about-project.webp` — project description, scope, "About SOUL STUDIO" copy
- `assets/moodboard/typography-and-colors.webp` — typography + hex palette source-of-truth
- `assets/moodboard/grid-system-1200.webp` — 1200px desktop grid (margins 26 / gaps 25 / 10)
- `assets/moodboard/sitemap.webp` — IA: Home → Experience, Services, About, Benefits, Therapist, Reviews, Pricing, Offer, Contact
- `assets/moodboard/full-website-layout.webp` — full desktop + mobile screen stack
- `assets/moodboard/hero-laptop-meditation.webp`, `laptop-loving-touch.webp`, `tablet-after-massage.webp`, `tablet-sophia-brown.webp`, `phone-massage-can-help.webp`, `phone-offer-form.webp`, `phone-and-tablet.webp` — individual screen reference
- `assets/moodboard/moodboard-page.webp` — visual moodboard (minimalism, spa aesthetics, natural textures, wood/stones/water, warm earthy tones)
- `assets/moodboard/thank-you-meditation.webp` — display typography treatment at its biggest

## Index — what lives where

| Path | What it is |
|---|---|
| `README.md` | This file. Read first. |
| `SKILL.md` | Front-matter for Claude Code / Agent SKills compatibility. |
| `colors_and_type.css` | CSS custom properties + base element styles (the **tokens**). Import this. |
| `assets/moodboard/` | Original reference frames provided by the user. |
| `assets/imagery/` | Re-usable spa photography croppings (placeholder/lifted from moodboard). |
| `assets/icons/` | Hairline line-icon set (Lucide). |
| `preview/` | Small HTML cards that render in the Design System tab. |
| `ui_kits/website/` | The flagship UI kit — React/JSX recreations of every core section. Open `index.html`. |
| `ui_kits/tablet/` | iPad-frame tablet view. |
| `ui_kits/mobile/` | iPhone-frame mobile view (dedicated mobile components). |
| `ui_kits/showcase/` | Side-by-side responsive showcase. |
| `nextjs-handoff/` | **Production-ready Next.js + Tailwind starter** — copy these files into your app. See [`nextjs-handoff/README.md`](nextjs-handoff/README.md). |

### UI Kits

| Kit | Path | Components |
|---|---|---|
| **Website** (single-page scroll) | `ui_kits/website/` | Header · Hero · LovingTouch · Benefits · HarmonyIntro · AfterMassage · Founder · Testimonials · Pricing · Offer · Footer · shared `Buttons.jsx` + `Icon.jsx` |
| **Tablet** (iPad 820×1180) | `ui_kits/tablet/` | Reuses all website components — responsive grids reflow at 820. Wrapped in an iPad bezel + status bar. |
| **Mobile** (390-wide, iPhone frame) | `ui_kits/mobile/` | MobileHeader (w/ slide-down sheet menu) · MobileHero · MobileLovingTouch · MobileBenefits · MobileAfterMassage · MobileFounder · MobileTestimonials (snap carousel) · MobilePricing (snap carousel) · MobileOffer · MobileFooter |
| **Responsive Showcase** | `ui_kits/showcase/` | Side-by-side Desktop / Tablet / Phone preview. Click any frame to open at full size. |


## The brand in one paragraph

SOUL STUDIO is a sanctuary, not a service. The visual language is **breathable, generous, organic**. The palette is four colors only: **Ivory**, **Sand Beige**, **Deep Wine**, **Espresso Brown** — nothing brighter, nothing cooler. Typography pairs a **classical English serif** for everything that wants to feel sacred (Playfair Display) with a **humble, quiet sans-serif** for body (Source Sans 3 — substituted for the moodboard's "Source Sans Pro"). Shapes are **pills and soft rectangles**; corners are big and forgiving. Imagery is **always warm, always candlelit, always close-up on hands, linens, lotus, stones, or stillness**. Animations are **slow fades and gentle reveals** — never bouncy, never snappy.

---

## CONTENT FUNDAMENTALS — How copy is written

**Voice.** Reverent, slow, sensory. Marketing copy reads more like a poem or an intention than a pitch. The brand says less, not more — entire sections survive on a single sentence.

**Tone.** Calm-luxury. Hospitable but never breezy. Confident but never pushy. We're a therapist, not a salesperson.

**Person.** Second-person ("You", "Your") for intimacy. The studio refers to itself either as **"SOUL STUDIO"** (uppercase, two words) or **"the studio"**. The therapist is named directly: **Sophia Brown, Studio Founder**.

**Casing.**
- **Title Case** for headings — every meaningful word capitalized:
  - "Immerse _Yourself_ In The Atmosphere Of Thai Relaxation And Harmony"
  - "A Place Where Stress Fades And Harmony Begins"
  - "After Your Massage"
  - "Flexible Rates For Thai Massage Sessions"
- **Sentence case** for short interior text & form labels ("Fill out the form and I'll contact you").
- **UPPERCASE small-tracked** for labels, eyebrows, navbar wordmarks: `SOUL STUDIO`, `LOCATION`, `CONTACT`.

**Italics.** Used surgically inside headlines to lift one word out of the line — e.g. "Immerse _Yourself_ In The Atmosphere…", "Begin a _New_ Chapter". Playfair's italic is the device; this is a signature.

**Numbering.** Steps are zero-padded: `01`, `02`, `03`, `04`. Rates are written `$60 / session` (with spaces around the slash). Bullets use `•`.

**Emoji.** Never. Not in body, not in headings, not in CTAs. Same for emoticons and exclamation points — the brand is too quiet for exclamation.

**Examples (verbatim from moodboard, the canonical voice):**

> Hero: "Immerse _Yourself_ In The Atmosphere Of Thai Relaxation And Harmony"
> Sub: "SOUL STUDIO Thai Massage offers you unique treatments and a true journey into the world of Thai culture and healing."
> CTA: "Begin a New Chapter"

> Section: "Loving Through Touch"
> Body: "A professional massage therapist with extensive experience is ready to care for your physical and emotional well-being."

> Section: "Massage Can Help You If You:"
> Card: "Feel Lighter & More Flexible — Want a flexible, healthy, and supple body"
> Card: "Enjoy Pain-Free Living — Living with physical ailments or chronic conditions"

> Offer: "Enjoy 10% Off Your First Massage"
> Sub: "Fill out the form and I'll contact you"

The brand never says "click here", "buy now", "limited time", or anything else that puts pressure on the reader.

---

## VISUAL FOUNDATIONS

### Color — the four-color discipline

The moodboard fixes the entire palette at four hexes:

| Token | Hex | Use |
|---|---|---|
| **Ivory** | `#FFF8F1` | Page background, card surfaces. The default canvas. |
| **Sand Beige** | `#E3D4C5` | Secondary surfaces — sand sections, alternating bands, image card mats. |
| **Deep Wine** | `#23060B` | The single CTA color. Buttons. Highlight pills. |
| **Espresso Brown** | `#1D110C` | Primary text on light. Dark hero backgrounds. The deepest dark. |

Derived neutrals (`--clay`, `--bark`, `--sand-deep`, `--ivory-soft`) exist to handle 2nd/3rd-level text and dividers without breaking discipline. **No greens. No blues. No status colors.** If a "success" or "error" must exist (form validation), use **Deep Wine** for both, distinguished by an inline icon or text — color alone never carries semantic weight here.

Imagery is **warm and tonally consistent** with the palette: dim interiors, candlelight, dark wood, beige linen, soft skin tones. Never use cool, blue, or high-contrast photography. Never grayscale. Never grain or filter overlay — the photography stands as it is.

### Typography

| Family | Where it's used | Weights |
|---|---|---|
| **Playfair Display** (serif) | All headings, hero display, big italic flourishes, founder name. | 400, 500, 600, 700, 800 + italics |
| **Source Sans 3** (sans) | Body text, navigation, buttons, form fields, captions. | 300, 400, 500, 600 |

> ⚠️ **Substitution flag:** The moodboard names **"Source Sans Pro"**. That family is now superseded by **Source Sans 3** on Google Fonts — metrics are essentially identical and we've used the v3 family. If you have the original Pro font files, drop them into `fonts/` and they'll be picked up automatically. Playfair Display is unchanged.

**Hierarchy.**
- **Display** — `clamp(48px, 6vw, 96px)`, Playfair 500, very tight tracking. For "Thank You For Watching" / hero-billboard moments.
- **H1 (hero)** — `clamp(40px, 4.4vw, 64px)`, Playfair 500, line-height 1.08. One italic word allowed.
- **H2 (section)** — `clamp(28px, 2.6vw, 40px)`, Playfair 500, centered or left-aligned.
- **H3** — 22px, Playfair 500. Card titles ("Feel Lighter & More Flexible").
- **Body** — 16px, Source Sans 3, line-height 1.55. Color `--bark` (not pure black) so it sits softly on ivory.
- **Eyebrow** — 12px, Source Sans 3, `letter-spacing: 0.18em`, UPPERCASE, weight 500. The wordmark, section markers, footer labels.

### Layout & grid

- **Container**: 1200px max-width.
- **Side margins**: 26px on tablet/mobile, scales up via container centering on desktop.
- **Column gap**: 25px standard; tight 10px for sub-grids.
- **Vertical rhythm**: extremely generous — sections breathe at 96–128px vertical padding (`--s-9`/`--s-10`). The brand depends on whitespace.
- **Alignment**: section titles are typically **centered**, with body copy left-aligned beneath. Two-column hero (text left / image right). On mobile, everything collapses to a single column.

### Backgrounds

- **Solid only.** No gradients except the most subtle vertical vignette (used twice in the moodboard, on dark deep-brown sections).
- The **default page** is `--ivory`. Alternating sections drop into `--sand-beige`. Hero footer / contact strip can drop to `--espresso` with ivory text.
- **No patterns, no textures, no grain.** The texture comes from the photography.
- Full-bleed photography is allowed but always with rounded corners (24–48px) — never sharp-cornered edge-to-edge.

### Corners & radii

- **Pills (`999px`)**: every button, every navigation chip, every form field, the wordmark in the header.
- **Soft cards (`24–36px`)**: every content card, every image frame.
- **Big rounds (`36–48px`)**: full-width image panels, hero photo, founder portrait frame.
- **Never sharp corners.** Not on dividers, not on inputs, not on the smallest tag. The brand reads "rounded" the way Apple reads "white".

### Shadows & elevation

- **Soft, warm-tinted shadows** built from `rgba(35,6,11,…)` — never pure black.
- Three levels: hairline (`--shadow-1`), card lift (`--shadow-2`), elevated overlay (`--shadow-3`).
- A signature **"candle-glow"** soft halo (`--shadow-glow`) is used sparingly behind illuminated moments (hero photo on dark bg).
- No inner shadows. No neumorphism. No glass blur.

### Borders

- 1px, low-contrast `rgba(35,6,11,0.10)`. Used to separate form fields and footer.
- Inputs are **fully-rounded pills** with a 1px stroke; they swap to ivory-fill + dark-stroke on focus.

### Transparency & blur

- Used sparingly. The "Loving Through Touch" image has a translucent dark card overlay (`rgba(0,0,0,0.55)` w/ no blur) for the copy panel.
- Never use frosted glass / backdrop-filter — too modern, too cold for the brand.

### Animation

- **Slow.** Default duration `260ms`. Section reveals can go to `520ms`.
- **Eased, never bouncy.** `cubic-bezier(0.22, 0.61, 0.36, 1)` is the workhorse.
- **Fades and gentle translations** (8–16px Y). No springs, no scale-from-0, no shimmer, no parallax beyond very subtle (≤ 20px).
- Buttons: 150ms color shift on hover, 0.98 scale on press.
- Images: 600ms ease-out scale-from-1.02 to 1.00 on first reveal.

### Hover / press states

- **Hover (light buttons / ghost)**: bg → `rgba(35,6,11,0.04)`.
- **Hover (primary CTA)**: bg → `--action-hover` (`#350D14`, slightly lifted).
- **Press**: `transform: scale(0.98)` + `--action-press` (`#170307`, slightly deeper).
- **Links**: underline appears on hover only, with a `--bark` color shift.
- **Image cards**: a 2–4% upward translate + slight shadow lift on hover, never a scale.

### Fixed layout rules

- Nav is **not sticky** by default — the brand asks you to commit to scrolling, not skim. If a CTA-pinned nav is needed (booking flow), it drops to a thin ivory bar with a single Deep Wine pill on the right.
- Footer always carries: wordmark + tagline ("Thai Massage"), location, contact, an inline link list, and a small full-bleed dim photograph behind it.

---

## ICONOGRAPHY

The moodboard ships **almost no icons**. The brand is text-first and image-first; iconography is reserved for utility and never for decoration.

**Where icons appear in the references:**
- Bulleted lists in the Sophia Brown bio (`•` bullet, not an SVG)
- A small hamburger (≡) in the mobile/desktop header
- Social row in the founder section (Facebook, Instagram, Telegram, plus a fourth — kept as simple line glyphs)
- A "next/forward" arrow inside the white circular dot on the CTA pill ("Begin a New Chapter")
- Pricing-tier bullet-points (◯ small open circles before each feature)

**Our approach.**
- **Lucide** (`lucide.dev`) — picked because its **1.75px hairline weight** matches the quiet, drawn-not-stamped feel of the brand. Available as both `lucide-static` (raw SVGs) and the `lucide` CDN web-font / icon-component.
- Loaded from CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.js` for runtime, or per-icon SVG files in `assets/icons/` for static use.
- **Stroke**: 1.5–1.75px. Colored with `currentColor` so they inherit the surrounding text color (`--fg-1` on light, `--ivory` on dark).
- **Size**: 16–20px in body, 24px in buttons (inside the white circle dot), 32–40px for feature blocks.
- **No filled icons.** Only outlined.
- **Never use emoji** in any context — body, headings, micro-copy, badges. The brand reads emoji as noise.
- **Unicode** is used sparingly: `•` (bullet) and `—` (em dash) are part of the typographic vocabulary; `★` / `☆` are not (use Lucide `Star` outlined if a rating is ever needed).

We've copied a small starter set into `assets/icons/`. To add more, pull them straight from `https://unpkg.com/lucide-static@latest/icons/<name>.svg`.

---

## Caveats & open questions

- **Fonts**: We've substituted **Source Sans 3** for **Source Sans Pro** (Adobe deprecated Pro on Google Fonts). If you have the original Pro `.otf`/`.woff2` files, drop them into `fonts/` and update the `@font-face` block in `colors_and_type.css`.
- **Logo**: SOUL STUDIO uses a **pure-typographic wordmark** (Playfair Display, all caps, tracked) — no glyph or icon mark exists in the moodboard. If a glyph mark is needed (favicon, app icon), we'd recommend a stylized lotus or a single soft circle (candle) but this should be a separate conversation.
- **Photography**: All imagery in the moodboard appears to be AI-generated stock; for production we'd recommend commissioning a real photo shoot using the brief in this README (warm interior, candlelight, close-up linen + lotus + stones, two-tone wardrobe in ivory/beige).
- **Sitemap** lists nine pages (Experience, Services, About, Benefits, Therapist, Reviews, Pricing, Offer, Contact) but the moodboard's "full layout" is a single-page scroll. We've built the UI kit assuming single-page scroll with anchor sections, matching the moodboard. If multi-page is needed, the same components apply.
