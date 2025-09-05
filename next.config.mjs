const isProd = process.env.NODE_ENV === "production";
const repo = "cherryventures-home";

export default {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};
