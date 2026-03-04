/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Cloudflare Pages doesn't support trailing slashes by default
  trailingSlash: false,
};

export default nextConfig;
