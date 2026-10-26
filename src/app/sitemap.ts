import type { MetadataRoute } from "next";
import { games } from "@/data/games";
import { site } from "@/data/site";

const routes = ["", "/about", "/games", "/product", "/schools", "/testimonials", "/faq", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...games.map((g) => `/games/${g.slug}`)].map((path) => ({ url: `${site.url}${path}` }));
}
