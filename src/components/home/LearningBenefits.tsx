import { Icon, type IconName } from "@/components/common/Icon";
import { SectionHeading } from "@/components/layout/SectionHeading";

const benefits: { icon: IconName; tone: string; title: string; text: string; tags: string[] }[] = [
  {
    icon: "brain",
    tone: "yellow",
    title: "Thinking & problem solving",
    text: "Games are designed to encourage memory, attention, pattern recognition and logical thinking at an age-appropriate pace.",
    tags: ["Memory", "Attention", "Patterns", "Problem solving"],
  },
  {
    icon: "move",
    tone: "blue",
    title: "Active, physical play",
    text: "Instead of sitting still, children move through every lesson, practising balance, coordination and body control.",
    tags: ["Gross motor", "Balance", "Coordination"],
  },
  {
    icon: "heart",
    tone: "coral",
    title: "Confidence & social-emotional skills",
    text: "Friendly characters celebrate achievements, designed to build confidence and keep learning rewarding rather than stressful.",
    tags: ["Confidence", "Patience", "Perseverance"],
  },
  {
    icon: "palette",
    tone: "mint",
    title: "Creativity & curiosity",
    text: "Magical worlds where children help animals, solve mysteries and restore nature, learning by doing.",
    tags: ["Exploring", "Storytelling", "Observation"],
  },
];

export function LearningBenefits() {
  return (
    <section className="section section--mint section--sheet" aria-labelledby="benefits-title">
      <div className="container">
        <SectionHeading
          id="benefits-title"
          eyebrow="Why Kalqy"
          title="Learning woven into play"
          intro="Kalqy covers alphabet and phonics, numbers and counting, shapes and colors, science basics, music and more, so it feels like an adventure, not homework."
        />
        <div className="grid grid--2x2" data-stagger>
          {benefits.map((b) => (
            <div className="card" key={b.title}>
              <div className={`card__icon card__icon--${b.tone === "yellow" ? "" : b.tone}`.trim()}>
                <Icon name={b.icon} />
              </div>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
              <ul className="tag-list" aria-label={`${b.title} focus areas`}>
                {b.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="note" style={{ marginTop: 28, maxWidth: "70ch" }} data-reveal>
          These describe what Kalqy&apos;s games are designed to encourage. They are not measured results, and Kalqy has not
          published independent evidence of developmental or academic outcomes.
        </p>
      </div>
    </section>
  );
}
