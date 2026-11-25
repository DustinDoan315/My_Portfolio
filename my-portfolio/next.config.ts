import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Old URLs from the previous site, so indexed links don't 404.
  async redirects() {
    return [
      { source: '/projects/:path*', destination: '/apps', permanent: true },
      { source: '/blogs/:path*', destination: '/', permanent: true },
      { source: '/tools/:path*', destination: '/', permanent: true },
      { source: '/contact', destination: '/about#contact', permanent: true },
    ];
  },
};

export default nextConfig;
