// Nguồn sự thật DUY NHẤT cho danh sách template (do code định nghĩa).
// Chỉ chứa dữ liệu thuần — KHÔNG import React/CSS — để schema Sanity import an toàn.
// Thêm template mới: thêm 1 dòng ở đây, rồi đăng ký component trong templateRegistry.ts.
export const TEMPLATE_MANIFEST = [
  { slug: "thai-spa", label: "Thai Spa", tagline: "Spa / Massage Thái" },
  { slug: "shizen-spa", label: "Shizen Spa", tagline: "Spa / Phong cách Nhật" },
  { slug: "zen-wellness", label: "Zen Wellness", tagline: "Spa / Wellness" },
  { slug: "urban-brew", label: "Urban Brew", tagline: "Café đô thị" },
  { slug: "sweet-corner", label: "Sweet Corner", tagline: "Tiệm bánh & Café" },
  { slug: "lua-nail", label: "Lụa Nail Studio", tagline: "Nail studio" },
  { slug: "bach-thao", label: "Bách Thảo Spa", tagline: "Spa thảo mộc" },
  { slug: "tsuki-coffee", label: "Tsuki Coffee", tagline: "Café phong cách Nhật" },
  { slug: "suoi-may", label: "Suối Mây", tagline: "Spa / Private onsen" },
] as const;

export type TemplateSlug = (typeof TEMPLATE_MANIFEST)[number]["slug"];

export const TEMPLATE_SLUGS: readonly TemplateSlug[] = TEMPLATE_MANIFEST.map((t) => t.slug);
