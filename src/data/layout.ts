// Single source of truth for the studio's own Zalo contact URL.
export const STUDIO_ZALO_URL = "https://zalo.me/0901234567";

// ── Navbar ───────────────────────────────────────────────────────────────────

export const DEFAULT_NAV = [
  { href: "/templates", label: "templates" },
  { href: "/projects",  label: "projects" },
  { href: "/#pricing",  label: "pricing" },
  { href: "/about",     label: "about" },
  { href: "/contact",   label: "contact" },
];

// ── SiteHeader (Sanity document) ─────────────────────────────────────────────

export const DEFAULT_HEADER = {
  brandName: "web studio",
  navLinks: [
    { _key: "n1", label: "templates", href: "/templates" },
    { _key: "n2", label: "projects",  href: "/projects" },
    { _key: "n3", label: "pricing",   href: "/#pricing" },
    { _key: "n4", label: "about",     href: "/about" },
    { _key: "n5", label: "contact",   href: "/contact" },
  ],
  ctaLabel: "see templates",
  ctaHref:  "/templates",
};

// ── Footer ───────────────────────────────────────────────────────────────────

export const DEFAULT_SHOP_LINKS = [
  { href: "/templates", label: "Templates" },
  { href: "/projects",  label: "Projects" },
  { href: "/about",     label: "About" },
  { href: "/contact",   label: "Contact & Order" },
];

export const DEFAULT_FOOTER = {
  brandName:    "web studio",
  tagline:      "beautiful websites for small businesses.",
  description:  "a studio — not an agency, not a platform.\nbuilt one at a time, with care.",
  shopLinks: [
    { _key: "s1", label: "Templates",        href: "/templates" },
    { _key: "s2", label: "Projects",         href: "/projects" },
    { _key: "s3", label: "About",            href: "/about" },
    { _key: "s4", label: "Contact & Order",  href: "/contact" },
  ],
  email:        "hello@webstudio.com",
  phone:        "0901 234 567",
  zaloUrl:      "https://zalo.me/0901234567",
  hours:        "Mon – Sat, 9am–6pm",
  facebookUrl:  "https://facebook.com/webstudio",
  instagramUrl: "https://instagram.com/webstudio",
  tiktokUrl:    "https://tiktok.com/@webstudio",
  copyright:    "© 2025 Web Studio",
};
