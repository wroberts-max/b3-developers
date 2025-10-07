/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // 👇 change this to your actual repo name EXACTLY as it appears on GitHub
  basePath: "/<b3-developers>",
  assetPrefix: "/<b3-developers>/",
};

export default nextConfig;
