# SOUL STUDIO — Mobile UI Kit

The mobile companion to `ui_kits/website/`. Same brand, same sections, same content — re-laid for a 390-wide iPhone viewport.

Open `index.html` to see the kit inside a realistic iPhone 15 device frame. The home indicator and status bar come from the shared `ios-frame.jsx` starter.

## Components

| File | What it renders |
|---|---|
| `MobileHeader.jsx`        | Translucent ivory top bar, wordmark + sand pill hamburger; tap → full-screen sheet menu |
| `MobileHero.jsx`          | Stacked: heading → sub → CTA → tall portrait image |
| `MobileLovingTouch.jsx`   | Tall photo card with translucent dark caption pinned to the bottom |
| `MobileBenefits.jsx`      | 5 horizontal image-left / text-right rows (was a 5-across desktop grid) |
| `MobileAfterMassage.jsx`  | 2×2 grid mosaic of photo tiles + ivory caption cards (01–04) |
| `MobileFounder.jsx`       | Portrait + name + bulleted credentials + social row |
| `MobileTestimonials.jsx`  | Horizontal **scroll-snap carousel** of 78%-wide testimonial cards |
| `MobilePricing.jsx`       | Horizontal **scroll-snap carousel** of 3 plan cards |
| `MobileOffer.jsx`         | Arched-top portrait → title → form → submit (turns into thank-you state) |
| `MobileFooter.jsx`        | Centered wordmark over a dim photo, 2-col contact/location, inline link list |

Shares `Buttons.jsx` and `Icon.jsx` from `../website/`.

## Notes

- Viewport target: **390 × 844** (iPhone 14/15). Type and spacing tuned for that width.
- Carousels (testimonials, pricing) use **CSS scroll-snap** — no JS, drag with finger.
- Header is **sticky + frosted** — the only place in the brand we break the "no backdrop-filter" rule, because mobile system UI does the same.
- Open the hamburger to see the full-screen menu animation (260ms slide-in).
