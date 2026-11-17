/** Per-page metadata with a unique title and description. Titles get the site suffix from the layout template. */
export function pageMeta(title, description, path) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", siteName: "Kalqy" },
  };
}
