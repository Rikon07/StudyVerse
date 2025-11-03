import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["images.unsplash.com",
      "plus.unsplash.com", "img-c.udemycdn.com", 
    ], // ✅ add your external domain(s) here
  },
};

export default nextConfig;
