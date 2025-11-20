import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/vertex-solutions",
      },
    ];
  },
};

export default nextConfig;
