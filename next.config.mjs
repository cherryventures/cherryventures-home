// next.config.mjs
const isProd = process.env.NODE_ENV === "production";

// If this is a **project page** (github.com/<user>/<repo>), set your repo name:
const repo = "cherryventures-home"; // <-- change to your repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export
  output: "export",

  // Next/Image without the image optimizer (required for static export)
  images: { unoptimized: true },

  // For GitHub **Project Pages** only (NOT needed for <user>.github.io root sites)
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  // Helps SSG produce folder-per-page (`index.html`)—better for GH Pages
  trailingSlash: true,
};

export default nextConfig;
