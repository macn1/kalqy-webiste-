import { DriftLight } from "@/components/motion/playful";

export const IMG = "/images/explore";

/** Section background from Figma: wave-shaped gradient fill plus soft lights (they drift slowly) clipped to the same wave. Styles live in how-it-works.css (.hw-bg). */
export function ExploreBg({ wave, lights = [], clip = true }) {
  return (
    <div className="hw-bg" aria-hidden="true" style={{ "--hw-wave": `url(${IMG}/${wave})` }}>
      {clip && <span className="hw-bg__fill" />}
      <span className={clip ? "hw-bg__lights" : "hw-bg__lights hw-bg__lights--open"}>
        {lights.map(([src, x, y], i) => (
          <DriftLight key={src} i={i} src={`${IMG}/${src}`} style={{ left: x, top: y }} />
        ))}
      </span>
    </div>
  );
}

// [file, x, y, size, inset] from the Figma "Soft light" layers; the image is larger than the layer by the inset.
export const light = (file, x, y, size, inset) => [file, x - size * inset, y - size * inset];
