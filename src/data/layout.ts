// Single source of truth for the studio's own Zalo contact URL.
export const STUDIO_ZALO_URL = "https://zalo.me/0901234567";

// ── Navbar ───────────────────────────────────────────────────────────────────

export const DEFAULT_NAV = [
  { href: "/templates",    label: "mẫu" },
  { href: "/du-an",        label: "dự án" },
  { href: "/#bang-gia",    label: "bảng giá" },
  { href: "/ve-chung-toi", label: "về chúng mình" },
  { href: "/lien-he",      label: "liên hệ" },
];

// ── SiteHeader (Sanity document) ─────────────────────────────────────────────

export const DEFAULT_HEADER = {
  brandName: "tiệm web nhỏ",
  navLinks: [
    { _key: "n1", label: "mẫu",          href: "/templates" },
    { _key: "n2", label: "dự án",         href: "/du-an" },
    { _key: "n3", label: "bảng giá",      href: "/#bang-gia" },
    { _key: "n4", label: "về chúng mình", href: "/ve-chung-toi" },
    { _key: "n5", label: "liên hệ",       href: "/lien-he" },
  ],
  ctaLabel: "xem mẫu ngay",
  ctaHref:  "/templates",
};

// ── Footer ───────────────────────────────────────────────────────────────────

export const DEFAULT_SHOP_LINKS = [
  { href: "/templates",    label: "Templates" },
  { href: "/du-an",        label: "Dự án" },
  { href: "/ve-chung-toi", label: "Về chúng mình" },
  { href: "/lien-he",      label: "Liên hệ & Đặt mẫu" },
];

export const DEFAULT_FOOTER = {
  brandName:    "tiệm web nhỏ",
  tagline:      "web đẹp cho doanh nghiệp nhỏ.",
  description:  "một tiệm — không phải agency, không phải platform.\nlàm từng cái, tử tế từng cái.",
  shopLinks: [
    { _key: "s1", label: "Templates",          href: "/templates" },
    { _key: "s2", label: "Dự án",              href: "/du-an" },
    { _key: "s3", label: "Về chúng mình",      href: "/ve-chung-toi" },
    { _key: "s4", label: "Liên hệ & Đặt mẫu", href: "/lien-he" },
  ],
  email:        "hello@tiemwebnho.com",
  phone:        "0901 234 567",
  zaloUrl:      "https://zalo.me/0901234567",
  hours:        "Thứ 2 – Thứ 7, 9h–18h",
  facebookUrl:  "https://facebook.com/tiemwebnho",
  instagramUrl: "https://instagram.com/tiemwebnho",
  tiktokUrl:    "https://tiktok.com/@tiemwebnho",
  copyright:    "© 2025 Tiệm Web Nhỏ",
};
