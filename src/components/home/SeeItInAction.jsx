import Image from "@/components/common/Image";
import Link from "@/components/common/Link";

const callouts = [
  ["↗", "Hands-free interaction"],
  ["✦", "Movement-led play"],
  ["+", "Experiences to explore"],
];

export function SeeItInAction() {
  return (
    <section className="rd-sec rd-action" id="demo" aria-labelledby="action-title">
      <h2 id="action-title">
        More than a screen.
        <br />
        An experience.
      </h2>
      <div className="rd-action__frame">
        <Image src="/images/redesign/action-poster.jpg" alt="A child playing a Kalqy game by moving in front of the screen" width={1600} height={783} />
        <Link href="/product" className="rd-action__play" aria-label="Watch the demo">
          <span aria-hidden="true">▶</span>
        </Link>
      </div>
      <ul className="rd-action__facts">
        {callouts.map(([icon, text]) => (
          <li key={text}>
            <span aria-hidden="true">{icon}</span>
            {text}
          </li>
        ))}
      </ul>
      <Link href="/product" className="rd-btn rd-btn--outline-violet">
        Watch the Demo
      </Link>
    </section>
  );
}
