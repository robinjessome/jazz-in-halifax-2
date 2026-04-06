import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // Omitting 'search' allows all query params (w, h, rect, etc.)
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;