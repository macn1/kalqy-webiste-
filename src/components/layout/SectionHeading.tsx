import type { ReactNode } from "react";

type Props = { eyebrow?: string; title: ReactNode; intro?: ReactNode; center?: boolean; as?: "h1" | "h2"; id?: string };

export function SectionHeading({ eyebrow, title, intro, center, as: Tag = "h2", id }: Props) {
  return (
    <div className={`section-heading${center ? " center" : ""}`} data-reveal>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag id={id}>{title}</Tag>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}
