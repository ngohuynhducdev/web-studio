import type { PageSection } from "@/types";
import type { TemplateSlug } from "@/lib/templates";
import { DEFAULT_SECTIONS as THAI_SPA_SECTIONS } from "./thai-spa";
import { DEFAULT_SECTIONS as BACH_THAO_SECTIONS } from "./bach-thao";
import { DEFAULT_SECTIONS as SUOI_MAY_SECTIONS } from "./suoi-may";

// Data-only map (no React/component imports) — safe to use from Sanity Studio
// components and API routes alike. `satisfies` enforces an entry for every
// slug in TEMPLATE_MANIFEST, so adding a template without defaults fails to compile.
export const DEFAULT_SECTIONS_MAP: Record<string, PageSection[]> = {
  "thai-spa":     THAI_SPA_SECTIONS,
  "bach-thao":    BACH_THAO_SECTIONS,
  "suoi-may":     SUOI_MAY_SECTIONS,
} satisfies Record<TemplateSlug, PageSection[]>;
