/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  staticPageGenerationTimeout: 180,
  images: {
    domains: ['images.squarespace-cdn.com'],
  },
}

module.exports = nextConfig
