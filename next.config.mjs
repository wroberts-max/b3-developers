/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // enables static export
  images: { unoptimized: true },// required for GitHub Pages
  trailingSlash: true,          // helps avoid routing issues
};

export default nextConfig;