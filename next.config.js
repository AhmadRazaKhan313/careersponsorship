/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",            // build static HTML into ./out
  trailingSlash: true,         // makes /about/ -> about/index.html (works on shared hosting)
  images: {
    unoptimized: true,         // required for static export (no Node image server)
    remotePatterns: [
      { protocol: "https", hostname: "flagcdn.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
