import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'out',
  images: {
    domains: ["images.unsplash.com", "api.microlink.io", "res.cloudinary.com"], // Add the Unsplash domain here
  },
};

export default nextConfig;
