/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,  // already set, good — required for static export
  },
  output: 'export',   // ← change from 'standalone' to 'export'
}

export default nextConfig
