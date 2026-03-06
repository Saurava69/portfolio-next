/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages deployment configuration
  basePath: process.env.GITHUB_ACTIONS ? '/portfolio-next' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/portfolio-next/' : '',
  trailingSlash: true,
};

export default nextConfig;