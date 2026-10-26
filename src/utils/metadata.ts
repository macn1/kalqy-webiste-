import type { Metadata } from "next";

/** Per-page metadata with a unique title and description. Titles get the site suffix from the layout template. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", siteName: "Kalqy" },
  };
}
