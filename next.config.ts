import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes a fully static site to out/, which
  // .github/workflows/publish.yml pushes to the gh-pages branch for GitHub
  // Pages to serve. No API routes / SSR.
  output: "export",
  // Served at the custom domain sham.dev (see public/CNAME), not under a
  // /www subpath, so no basePath is needed here (unlike a project page
  // served at <user>.github.io/<repo>/).
  images: {
    unoptimized: true, // next/image's optimizer needs a server; static export has none.
  },
};

export default nextConfig;
