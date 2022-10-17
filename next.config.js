/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CI: false,
    GENERATE_SOURCEMAP: false
  }
}

module.exports = nextConfig
