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
    MARKETPLACE_URL: "https://marketplace.pokechain.games/",
    APP_URL: "https://app.pokechain.games/",
  }
}

module.exports = nextConfig
