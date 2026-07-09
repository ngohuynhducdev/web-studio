// Single source of truth for template list (defined by code).
// Contains only pure data — NO React/CSS imports — so Sanity schema can import safely.
// To add new template: add one line here, then register component in templateRegistry.ts.
export const TEMPLATE_MANIFEST = [
  { slug: "thai-spa", label: "Thai Spa", tagline: "Thai spa & massage" },
  { slug: "shizen-spa", label: "Shizen Spa", tagline: "Japanese-style spa" },
  { slug: "zen-wellness", label: "Zen Wellness", tagline: "Spa / Wellness" },
  { slug: "bach-thao", label: "Herbal Grove Spa", tagline: "Herbal spa" },
  { slug: "suoi-may", label: "Mist Spring Spa", tagline: "Spa / Private onsen" },
] as const;

export type TemplateSlug = (typeof TEMPLATE_MANIFEST)[number]["slug"];

export const TEMPLATE_SLUGS: readonly TemplateSlug[] = TEMPLATE_MANIFEST.map((t) => t.slug);
