import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to `out/` for cPanel hosting (no Node.js there).
  output: "export",
  // /about -> /about/index.html, which Apache serves without extra rewrite rules.
  trailingSlash: true,
  // The default image optimizer needs a server.
  images: { unoptimized: true },
  // Lets app/global-not-found.tsx render /404.html despite the separate root layouts.
  experimental: { globalNotFound: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
