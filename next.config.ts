// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    allowedDevOrigins: [
      "http://localhost:3000",
      "http://10.10.240.23:3000",
    ],
  },
};

export default nextConfig;
