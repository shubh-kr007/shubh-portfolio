/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Ignores TS errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignores ESLint errors during build
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig