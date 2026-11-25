import { Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

const steps = [
  ["01", "Concept", "“Reading comprehension adventures with a flying dragon.” — public game summary."],
  ["02", "Interaction", "Children move their bodies to take part as the story unfolds."],
  ["03", "Learning intention", "Learning focus: reading comprehension."],
];

const facts = [
  ["01", "Whole-body play, not just tapping", "Smart movement tracking turns every jump and reach into play."],
  ["02", "A published game library", "Experiences span English, science, maths, colours, music and calm sensory play."],
  ["03", "Made for young children", "Designed for young children aged 3 to 5."],
  ["04", "A place in learning settings", "Kalqy is built for schools and preschools, with trained adults guiding every session."],
];

export function PurposeReading() {
  return (
    <section className="rd-sec rd-bgsec rd-purpose" style={{ "--rd-bg": 'url("/images/redesign/bg-purpose.webp")' }} aria-labelledby="purpose-title">
      <div className="rd-split">
        <Stagger className="rd-purpose__story" gap={0.1}>
          <StaggerItem as="h2" id="purpose-title" className="rd-h2">
            Every experience starts with curiosity.
          </StaggerItem>
          <StaggerItem as="p" className="rd-lead">
            A closer look at Sky Reader Quest.
          </StaggerItem>
          <StaggerItem
            as="img"
            className="rd-purpose__art"
            src="/images/redesign/purpose-illustration.jpg"
            alt="Illustration of the Sky Reader Quest game"
            width={616}
            height={250}
            loading="lazy"
            decoding="async"
          />
        </Stagger>
        <Stagger as="ol" className="rd-purpose__steps" gap={0.12}>
          {steps.map(([n, title, text]) => (
            <StaggerItem as="li" key={n}>
              <h3>
                <span>{n}</span>
                {title}
              </h3>
              <p>{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function KalqyDifference() {
  return (
    <section className="rd-sec rd-bgsec rd-diff" style={{ "--rd-bg": 'url("/images/redesign/bg-diff.webp")' }} aria-labelledby="diff-title">
      <Parallax
        as="img"
        speed={0.12}
        className="rd-diff__tortoise"
        src="/images/redesign/difference-tortoise.webp"
        width={309}
        height={463}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className="rd-diff__inner">
        <Reveal as="header">
          <p className="rd-eyebrow rd-eyebrow--mint">THE KALQY DIFFERENCE</p>
          <h2 id="diff-title" className="rd-h2">
            Movement is part
            <br />
            of the experience.
          </h2>
        </Reveal>
        <Stagger as="ul" className="rd-diff__grid" gap={0.1}>
          {facts.map(([n, title, text]) => (
            <StaggerItem as="li" key={n}>
              <span className="rd-diff__n">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
