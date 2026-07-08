import type { PageSection } from "@/types";
import type { TemplateSlug } from "@/lib/templates";
import { DEFAULT_SECTIONS as THAI_SPA_SECTIONS } from "./thai-spa";
import { DEFAULT_SECTIONS as SHIZEN_SECTIONS } from "./shizen-spa";
import { DEFAULT_SECTIONS as SWEET_CORNER_SECTIONS } from "./sweet-corner";
import { DEFAULT_SECTIONS as URBAN_BREW_SECTIONS } from "./urban-brew";
import { DEFAULT_SECTIONS as ZEN_WELLNESS_SECTIONS } from "./zen-wellness";
import { DEFAULT_SECTIONS as LUA_NAIL_SECTIONS } from "./lua-nail";
import { DEFAULT_SECTIONS as BACH_THAO_SECTIONS } from "./bach-thao";
import { DEFAULT_SECTIONS as TSUKI_COFFEE_SECTIONS } from "./tsuki-coffee";
import { DEFAULT_SECTIONS as SUOI_MAY_SECTIONS } from "./suoi-may";

// Data-only map (no React/component imports) — safe to use from Sanity Studio
// components and API routes alike. `satisfies` enforces an entry for every
// slug in TEMPLATE_MANIFEST, so adding a template without defaults fails to compile.
export const DEFAULT_SECTIONS_MAP: Record<string, PageSection[]> = {
  "thai-spa":     THAI_SPA_SECTIONS,
  "shizen-spa":   SHIZEN_SECTIONS,
  "sweet-corner": SWEET_CORNER_SECTIONS,
  "urban-brew":   URBAN_BREW_SECTIONS,
  "zen-wellness": ZEN_WELLNESS_SECTIONS,
  "lua-nail":     LUA_NAIL_SECTIONS,
  "bach-thao":    BACH_THAO_SECTIONS,
  "tsuki-coffee": TSUKI_COFFEE_SECTIONS,
  "suoi-may":     SUOI_MAY_SECTIONS,
} satisfies Record<TemplateSlug, PageSection[]>;
