/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tekup.vn",
        port: "",
        pathname: "wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
