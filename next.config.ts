import type { NextConfig } from "next";

// Baseline security headers, applied to every response.
//
// Deliberately NOT here:
// - A full Content-Security-Policy. Next injects inline bootstrap scripts and
//   the embedded Sanity Studio evaluates its own bundles, so a real policy
//   needs per-request nonces — which opts every page out of static rendering.
//   Only `frame-ancestors` is set, since that directive cannot be expressed
//   via a <meta> tag and does not constrain scripts.
// - `X-Frame-Options`. It is superseded by `frame-ancestors` and its DENY
//   value would break the Studio previewing the site in an iframe.
// - `includeSubDomains` on HSTS. Customer sites are served on their own apex
//   domains through proxy.ts; forcing HTTPS on subdomains we do not control
//   (mail., webmail., ...) could take a client's other services offline.
const securityHeaders = [
  { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async redirects() {
    return [
      { source: '/pricing', destination: '/#pricing', permanent: false },
      // /projects was removed — send old links home
      { source: '/projects', destination: '/', permanent: true },
      { source: '/projects/:slug', destination: '/', permanent: true },
      // template slugs renamed to English (2026-07)
      { source: '/templates/suoi-may', destination: '/templates/mist-spring-spa', permanent: true },
      { source: '/templates/bach-thao', destination: '/templates/herbal-grove-spa', permanent: true },
      { source: '/preview/suoi-may', destination: '/preview/mist-spring-spa', permanent: true },
      { source: '/preview/bach-thao', destination: '/preview/herbal-grove-spa', permanent: true },
    ];
  },
};

export default nextConfig;
