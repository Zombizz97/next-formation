import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || '',
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
  env: {
    PAGES_BASE_PATH: process.env.PAGES_BASE_PATH || 'http://localhost:3000',
  },
};

const withMDX = createMDX()

export default withMDX(nextConfig)
