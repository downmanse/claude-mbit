const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "claude-mbit";

/** @type {import('next').NextConfig} */
const nextConfig = isGithubPages
  ? {
      output: "export",
      basePath: `/${repoName}`,
      assetPrefix: `/${repoName}/`,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
