import type { PageSection } from "@/types";
import type { TemplateSlug } from "@/lib/templates";
import ShizenSpaTemplate from "@/components/templates/shizen-spa";
import ZenWellnessTemplate from "@/components/templates/zen-wellness";
import ThaiSpaTemplate from "@/components/templates/thai-spa";
import BachThaoTemplate from "@/components/templates/bach-thao";
import SuoiMayTemplate from "@/components/templates/suoi-may";

// Data-only map lives in @/data/templates (usable from Studio components
// without pulling template React components into the bundle). Re-exported
// here so server code can keep importing everything from the registry.
export { DEFAULT_SECTIONS_MAP } from "@/data/templates";

export type TemplateProps = {
  sections?: PageSection[];
  businessName?: string;
  brandColor?: string;
};

// To add a new template: add the slug to TEMPLATE_MANIFEST (lib/templates.ts), then map
// the component here. `satisfies` ensures every slug in the manifest has a component
// (a missing/extra key fails the build), while still allowing string-based lookup.

export const TEMPLATE_COMPONENTS: Record<string, React.ComponentType<TemplateProps>> = {
  "shizen-spa":   ShizenSpaTemplate,
  "zen-wellness": ZenWellnessTemplate,
  "thai-spa":     ThaiSpaTemplate,
  "bach-thao":    BachThaoTemplate,
  "suoi-may":     SuoiMayTemplate,
} satisfies Record<TemplateSlug, React.ComponentType<TemplateProps>>;
