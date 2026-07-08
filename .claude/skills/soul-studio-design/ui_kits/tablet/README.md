# SOUL STUDIO — Tablet UI Kit

The tablet companion to the website + mobile kits. Renders inside an iPad-like device frame at **820×1180** (iPad portrait).

## How it's built

The tablet kit **shares the website kit's components** (`Header`, `Hero`, `Benefits`, `Pricing` etc.). Each desktop component uses **`grid-template-columns: repeat(auto-fit, minmax(N, 1fr))`** so the layout naturally reflows from 4–5 columns on desktop down to 2 columns on tablet — no separate codebase.

What changes at 820px:
- **Header**: links wrap onto a second line when the nav is tight; hamburger remains.
- **Hero**: portrait stacks under the headline.
- **Benefits**: 5 cards reflow to 2 columns.
- **After Your Massage**: mosaic from 4-col grid → 2-col mosaic.
- **Founder**: photo stacks above bio.
- **Testimonials**: 2 cards per row.
- **Pricing**: 2–3 cards per row depending on space.
- **Offer**: form stacks under image.
- **Footer**: columns reflow.

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | Device-framed render — open this. |
| `README.md`  | This file. |

The iPad bezel + status bar are drawn inline (no extra component).

## Notes

- This kit is mainly a **viewing context**, not a separate codebase. To change tablet layout, edit the website component's `minmax(...)` value.
- Width target: 820 (iPad 11"). Height capped at 1180.
- Scrolling lives inside the screen (`.ipad__screen { overflow: auto; }`).
