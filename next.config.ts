import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
