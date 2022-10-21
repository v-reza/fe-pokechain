/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    CI: false,
    GENERATE_SOURCEMAP: false,
    MARKETPLACE_URL: "https://marketplace-pokechains.vercel.app/",
    APP_URL: "https://app-pokechain.vercel.app/",
  }
}

module.exports = nextConfig
