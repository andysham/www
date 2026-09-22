import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes a fully static site to out/, which
  // .github/workflows/publish.yml pushes to the gh-pages branch for GitHub
  // Pages to serve. No API routes / SSR.
  output: "export",
  // Served at https://andysham.github.io/www/ — a GitHub Pages *project*
  // page, i.e. under a /www subpath, not at a custom domain root. Without
  // basePath, every asset (_next/*, public/*) is emitted as a root-absolute
  // URL and 404s once deployed. assetPrefix isn't needed separately — it
  // defaults to basePath. Revisit this if sham.dev's DNS ever gets pointed
  // at GitHub Pages (would need public/CNAME back and no basePath).
  basePath: "/www",
  images: {
    unoptimized: true, // next/image's optimizer needs a server; static export has none.
  },
};

export default nextConfig;
