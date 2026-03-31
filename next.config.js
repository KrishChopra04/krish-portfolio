/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.squarespace-cdn.com'],
  },
}

module.exports = nextConfig
