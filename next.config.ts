import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizations for production
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Strict TypeScript checking
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
