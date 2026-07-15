import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Added for GitHub Pages static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Strict TypeScript checking
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;