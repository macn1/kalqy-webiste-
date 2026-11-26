import { DriftLight } from "@/components/motion/playful";

export const IMG = "/images/how";

/** Premium section background: wave-shaped gradient fill plus soft lights (they drift slowly) clipped to the same wave. */
export function HowBg({ wave, lights = [], clip = true, base = IMG }) {
  return (
    <div className="hw-bg" aria-hidden="true" style={{ "--hw-wave": `url(${base}/${wave})` }}>
      {clip && <span className="hw-bg__fill" />}
      <span className={clip ? "hw-bg__lights" : "hw-bg__lights hw-bg__lights--open"}>
        {lights.map(([src, x, y], i) => (
          <DriftLight key={src} i={i} src={`${IMG}/${src}`} style={{ left: x, top: y }} />
        ))}
      </span>
    </div>
  );
}

// [file, x, y, size, inset] straight from the Figma "Soft light" layers; the image is larger than the layer by the inset.
export const light = (file, x, y, size, inset) => [file, x - size * inset, y - size * inset];
