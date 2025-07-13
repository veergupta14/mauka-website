/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // ✅ critical for recognizing /app directory
  },
};

export default nextConfig;
