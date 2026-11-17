export function SectionHeading({ eyebrow, title, intro, center, as: Tag = "h2", id }) {
  return (
    <div className={`section-heading${center ? " center" : ""}`} data-reveal>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag id={id}>{title}</Tag>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}
