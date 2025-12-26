import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/tranchihieu.github.io',
  images: {
    unoptimized: true
  },
};

export default nextConfig;
