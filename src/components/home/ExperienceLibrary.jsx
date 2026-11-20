import Image from "@/components/common/Image";
import Link from "@/components/common/Link";

const cards = [
  {
    n: "01",
    subject: "ENGLISH",
    title: "Egg Game",
    text: "A playful English game with a cheerful chick who loves to move.",
    char: "game-1.png",
    dot: "exp-dot-1.svg",
    tone: "amber",
  },
  {
    n: "02",
    subject: "SCIENCE",
    title: "Plant Power",
    text: "A visual game that helps children discover photosynthesis.",
    char: "game-3.png",
    dot: "exp-dot-2.svg",
    tone: "green",
  },
  {
    n: "03",
    subject: "COLOURS",
    title: "Marble Madness",
    text: "Children learn to spot and compare quantities.",
    char: "game-2.png",
    dot: "exp-dot-3.svg",
    tone: "violet",
  },
];

export function hereExperienceLibrary() {
  return (
    <section className="rd-sec rd-lib" aria-labelledby="lib-title">
      <div className="rd-lib__head">
        <div>
          <span className="rd-lib__pill rd-tab-only">NEW EXPERIENCES</span>
          <h2 id="lib-title">
            Something new to <span>discover.</span>
          </h2>
          <p>A first look at three Kalqy experiences and the characters children meet along the way.</p>
        </div>
        <Link href="/games" className="rd-lib__cta">
          Explore All Experiences <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <ul className="rd-lib__cards">
        {cards.map((c) => (
          <li className={`rd-xcard rd-xcard--${c.tone}`} key={c.n}>
            <span className="rd-xcard__arch" aria-hidden="true" />
            <Image className="rd-xcard__light" src="/images/redesign/exp-portal-light.svg" width={180} height={180} />
            <Image className="rd-xcard__shadow" src="/images/redesign/exp-char-shadow.svg" width={170} height={26} />
            <Image className="rd-xcard__char" src={`/images/redesign/${c.char}`} width={300} height={300} />
            <span className="rd-xcard__n" aria-hidden="true">
              {c.n}
            </span>
            <div className="rd-xcard__body">
              <span className="rd-xcard__chip">
                <Image src={`/images/redesign/${c.dot}`} width={7} height={7} />
                {c.subject}
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
            <Link href="/games" className="rd-xcard__action" aria-label={`Explore experience: ${c.title}`}>
              <span>Explore experience</span>
              <i>
                <Image src="/images/redesign/exp-arrow.svg" width={20} height={20} />
              </i>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Alias so the home page import keeps working (the function above was renamed to hereExperienceLibrary).
export { hereExperienceLibrary as ExperienceLibrary };
