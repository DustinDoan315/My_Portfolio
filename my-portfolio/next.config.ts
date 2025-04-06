/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Prevent hydration issues by disabling SSR for this client-heavy app
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
