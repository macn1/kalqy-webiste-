import Image from "@/components/common/Image";

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
        <div className="rd-purpose__story">
          <h2 id="purpose-title" className="rd-h2">
            Every experience starts with curiosity.
          </h2>
          <p className="rd-lead">A closer look at Sky Reader Quest.</p>
          <Image
            className="rd-purpose__art"
            src="/images/redesign/purpose-illustration.jpg"
            alt="Illustration of the Sky Reader Quest game"
            width={616}
            height={250}
          />
        </div>
        <ol className="rd-purpose__steps">
          {steps.map(([n, title, text]) => (
            <li key={n}>
              <h3>
                <span>{n}</span>
                {title}
              </h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function KalqyDifference() {
  return (
    <section className="rd-sec rd-bgsec rd-diff" style={{ "--rd-bg": 'url("/images/redesign/bg-diff.webp")' }} aria-labelledby="diff-title">
      <Image className="rd-diff__tortoise" src="/images/redesign/difference-tortoise.webp" width={309} height={463} />
      <div className="rd-diff__inner">
        <header>
          <p className="rd-eyebrow rd-eyebrow--mint">THE KALQY DIFFERENCE</p>
          <h2 id="diff-title" className="rd-h2">
            Movement is part
            <br />
            of the experience.
          </h2>
        </header>
        <ul className="rd-diff__grid">
          {facts.map(([n, title, text]) => (
            <li key={n}>
              <span className="rd-diff__n">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
