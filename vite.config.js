import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const routes = ["", "/about", "/games", "/product", "/schools", "/testimonials", "/faq", "/contact", "/privacy", "/terms"];

/** Emits robots.txt and sitemap.xml at build time (replaces Next's robots.ts / sitemap.ts). */
function seoFiles(siteUrl) {
  return {
    name: "kalqy-seo-files",
    async generateBundle() {
      const { games } = await import("./src/data/games.js");
      const urls = [...routes, ...games.map((g) => `/games/${g.slug}`)].map((p) => `${siteUrl}${p}`);
      this.emitFile({ type: "asset", fileName: "robots.txt", source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n` });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const siteUrl = (env.VITE_SITE_URL ?? "http://localhost:5173").replace(/\/$/, "");
  return {
    plugins: [react(), seoFiles(siteUrl)],
    resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  };
});
