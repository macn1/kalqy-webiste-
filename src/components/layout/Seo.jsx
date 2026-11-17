import { site } from "@/data/site";

const DEFAULT_TITLE = "Kalqy — Movement-based learning games for young children";
const DEFAULT_DESC =
  "Kalqy turns your webcam into a playground: movement-based learning games where children jump, reach and point to play and learn.";

/** React 19 hoists <title>, <meta> and <link> rendered anywhere into <head>. Titles get the " | Kalqy" suffix. */
export function Seo({ meta = {} }) {
  const title = meta.title ? `${meta.title} | Kalqy` : DEFAULT_TITLE;
  const description = meta.description ?? DEFAULT_DESC;
  const url = meta.alternates?.canonical ? `${site.url}${meta.alternates.canonical}` : undefined;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:site_name" content="Kalqy" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={meta.openGraph?.title ?? title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
    </>
  );
}
