import { DEFAULT_PRICING_PLANS } from "@/data/homepage";

// One price story for the whole site.
//
// Templates used to carry a `price` of their own (29 / 49 / 29) alongside the
// plans on the homepage (19 / 39 / 59), both labelled "/mo" and neither
// explaining the other. A visitor read $19 on the homepage and $29 on the
// template they liked, with nothing to tell them which one they would pay.
//
// Only the plans price anything: a template is a design, and what a client buys
// is a monthly plan (see PRODUCT.md). Cards quote the entry plan so the number
// on a card is a real number from the real price list.

/** Cheapest plan price — the "from" figure quoted on template cards. */
export function entryPlanPrice(): number {
  return Math.min(...DEFAULT_PRICING_PLANS.map((p) => p.price));
}

export function formatPrice(price: number): string {
  return `$${new Intl.NumberFormat("en-US").format(price)}`;
}

/** e.g. "from $19" — pair it with a "/mo" unit in the markup. */
export function fromEntryPrice(): string {
  return `from ${formatPrice(entryPlanPrice())}`;
}
