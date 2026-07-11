import type { PageSection } from "@/types";
import type { TemplateSlug } from "@/lib/templates";
import { DEFAULT_SECTIONS as THAI_SPA_SECTIONS } from "./thai-spa";
import { DEFAULT_SECTIONS as HERBAL_GROVE_SPA_SECTIONS } from "./herbal-grove-spa";
import { DEFAULT_SECTIONS as MIST_SPRING_SPA_SECTIONS } from "./mist-spring-spa";

// Data-only map (no React/component imports) — safe to use from Sanity Studio
// components and API routes alike. `satisfies` enforces an entry for every
// slug in TEMPLATE_MANIFEST, so adding a template without defaults fails to compile.
export const DEFAULT_SECTIONS_MAP: Record<string, PageSection[]> = {
  "thai-spa":     THAI_SPA_SECTIONS,
  "herbal-grove-spa":    HERBAL_GROVE_SPA_SECTIONS,
  "mist-spring-spa":     MIST_SPRING_SPA_SECTIONS,
} satisfies Record<TemplateSlug, PageSection[]>;
