import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/ai-supply";

const nextConfig: NextConfig = {
  basePath,
  trailingSlash: true,
  output: "standalone",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  allowedDevOrigins: [
    "stargazyp.com",
    "www.stargazyp.com",
    "jangdonggun.iptime.org",
    "192.168.0.9",
  ],
};

export default nextConfig;
