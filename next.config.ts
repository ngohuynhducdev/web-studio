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
    ];
  },
};

export default nextConfig;
