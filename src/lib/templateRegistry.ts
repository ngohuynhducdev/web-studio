import type { PageSection } from "@/types";
import type { TemplateSlug } from "@/lib/templates";
import ShizenSpaTemplate from "@/components/templates/shizen-spa";
import SweetCornerTemplate from "@/components/templates/sweet-corner";
import UrbanBrewTemplate from "@/components/templates/urban-brew";
import ZenWellnessTemplate from "@/components/templates/zen-wellness";
import ThaiSpaTemplate from "@/components/templates/thai-spa";
import LuaNailTemplate from "@/components/templates/lua-nail";
import BachThaoTemplate from "@/components/templates/bach-thao";
import TsukiCoffeeTemplate from "@/components/templates/tsuki-coffee";
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

// Thêm template mới: thêm slug vào TEMPLATE_MANIFEST (lib/templates.ts), rồi map
// component ở đây. `satisfies` đảm bảo mọi slug trong manifest đều có component
// (thiếu/thừa key đều báo lỗi compile), nhưng kiểu vẫn cho tra cứu bằng string.

export const TEMPLATE_COMPONENTS: Record<string, React.ComponentType<TemplateProps>> = {
  "shizen-spa":   ShizenSpaTemplate,
  "sweet-corner": SweetCornerTemplate,
  "urban-brew":   UrbanBrewTemplate,
  "zen-wellness": ZenWellnessTemplate,
  "thai-spa":     ThaiSpaTemplate,
  "lua-nail":     LuaNailTemplate,
  "bach-thao":    BachThaoTemplate,
  "tsuki-coffee": TsukiCoffeeTemplate,
  "suoi-may":     SuoiMayTemplate,
} satisfies Record<TemplateSlug, React.ComponentType<TemplateProps>>;
