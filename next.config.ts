import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes a fully static site to out/, which
  // .github/workflows/publish.yml pushes to the gh-pages branch for GitHub
  // Pages to serve. No API routes / SSR.
  output: "export",
  // Served at the root of sham.dev (a GitHub Pages custom domain, via
  // public/CNAME), not under a /www subpath — so no basePath here.
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    unoptimized: true, // next/image's optimizer needs a server; static export has none.
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
