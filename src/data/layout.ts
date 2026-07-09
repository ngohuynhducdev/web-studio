// Single source of truth for the studio's own Zalo contact URL.
export const STUDIO_ZALO_URL = "https://zalo.me/0901234567";

// ── Navbar ───────────────────────────────────────────────────────────────────

export const DEFAULT_NAV = [
  { href: "/templates", label: "mẫu" },
  { href: "/projects",  label: "dự án" },
  { href: "/#pricing",  label: "bảng giá" },
  { href: "/about",     label: "về chúng mình" },
  { href: "/contact",   label: "liên hệ" },
];

// ── SiteHeader (Sanity document) ─────────────────────────────────────────────

export const DEFAULT_HEADER = {
  brandName: "web studio",
  navLinks: [
    { _key: "n1", label: "mẫu",          href: "/templates" },
    { _key: "n2", label: "dự án",         href: "/projects" },
    { _key: "n3", label: "bảng giá",      href: "/#pricing" },
    { _key: "n4", label: "về chúng mình", href: "/about" },
    { _key: "n5", label: "liên hệ",       href: "/contact" },
  ],
  ctaLabel: "xem mẫu ngay",
  ctaHref:  "/templates",
};

// ── Footer ───────────────────────────────────────────────────────────────────

export const DEFAULT_SHOP_LINKS = [
  { href: "/templates", label: "Templates" },
  { href: "/projects",  label: "Dự án" },
  { href: "/about",     label: "Về chúng mình" },
  { href: "/contact",   label: "Liên hệ & Đặt mẫu" },
];

export const DEFAULT_FOOTER = {
  brandName:    "web studio",
  tagline:      "web đẹp cho doanh nghiệp nhỏ.",
  description:  "một tiệm — không phải agency, không phải platform.\nlàm từng cái, tử tế từng cái.",
  shopLinks: [
    { _key: "s1", label: "Templates",          href: "/templates" },
    { _key: "s2", label: "Dự án",              href: "/projects" },
    { _key: "s3", label: "Về chúng mình",      href: "/about" },
    { _key: "s4", label: "Liên hệ & Đặt mẫu", href: "/contact" },
  ],
  email:        "hello@webstudio.com",
  phone:        "0901 234 567",
  zaloUrl:      "https://zalo.me/0901234567",
  hours:        "Thứ 2 – Thứ 7, 9h–18h",
  facebookUrl:  "https://facebook.com/webstudio",
  instagramUrl: "https://instagram.com/webstudio",
  tiktokUrl:    "https://tiktok.com/@webstudio",
  copyright:    "© 2025 Web Studio",
};
