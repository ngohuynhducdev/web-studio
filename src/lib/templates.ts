// Single source of truth for template list (defined by code).
// Contains only pure data — NO React/CSS imports — so Sanity schema can import safely.
// To add a new template: add one line here, then follow the three compile errors
// it produces — a component in templateRegistry.ts, DEFAULT_SECTIONS in
// data/templates/, and a catalog entry in FALLBACK_CATALOG (data/homepage.ts).
export const TEMPLATE_MANIFEST = [
  { slug: "thai-spa", label: "Thai Spa", tagline: "Thai spa & massage" },
  { slug: "herbal-grove-spa", label: "Herbal Grove Spa", tagline: "Herbal spa" },
  { slug: "mist-spring-spa", label: "Mist Spring Spa", tagline: "Premium day spa" },
] as const;

export type TemplateSlug = (typeof TEMPLATE_MANIFEST)[number]["slug"];
