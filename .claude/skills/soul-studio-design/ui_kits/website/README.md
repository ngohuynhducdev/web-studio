# SOUL STUDIO — Website UI Kit

A hi-fi single-page recreation of the SOUL STUDIO Thai massage website per the moodboard. Open `index.html` to see the full scroll. Components are factored into individual JSX files (no build step — Babel-in-browser).

## Components

| File | What it renders |
|---|---|
| `Header.jsx`       | Wordmark + nav links + dark pill hamburger |
| `Hero.jsx`         | Headline w/ italic, sub, primary CTA, meditation portrait |
| `LovingTouch.jsx`  | Full-bleed massage image with translucent dark copy card |
| `Benefits.jsx`     | "Massage Can Help You If You:" — 5-card image+title grid |
| `HarmonyIntro.jsx` | Centered "A Place Where Stress Fades…" + sub |
| `AfterMassage.jsx` | 4-image mosaic with numbered overlay cards (01-04) |
| `Founder.jsx`      | Portrait + bio + bulleted credentials + social row |
| `Testimonials.jsx` | "Client Testimonials" — 4-card row |
| `Pricing.jsx`      | Three plan cards (Basic / Standart / Premium) |
| `Offer.jsx`        | "Enjoy 10% Off" form + couple portrait |
| `Footer.jsx`       | Wordmark + tagline + address + contact + link list |
| `Buttons.jsx`      | `<PrimaryCta>` shared pill component |
| `Icon.jsx`         | Inline SVG helpers (Lucide subset) |

## Stack

- React 18 (UMD), Babel standalone
- Single shared stylesheet: `../../colors_and_type.css`
- Photography pulled directly from `assets/moodboard/`
- No interactive state beyond hover / submit-flow toast on the offer form

## Caveats

- Spelling kept verbatim from the moodboard, including "Standart Plan" (likely a typo in source — flag for client).
- The four-card testimonial row uses lifted moodboard quotes verbatim where legible; one is paraphrased where the source image was cropped.
- Social glyphs are Lucide (`facebook`, `instagram`) plus two generic stand-ins for the second pair (the source frame only legibly resolves the first two).
