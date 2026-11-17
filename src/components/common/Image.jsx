/** Plain <img> with the small subset of next/image props the site used (priority, width/height, sizes). */
export default function Image({ priority, loading, decoding = "async", alt = "", ...rest }) {
  return (
    <img
      alt={alt}
      {...rest}
      loading={priority ? "eager" : (loading ?? "lazy")}
      fetchPriority={priority ? "high" : undefined}
      decoding={decoding}
    />
  );
}
