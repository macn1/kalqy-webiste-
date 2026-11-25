import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

const callouts = [
  ["↗", "Hands-free interaction"],
  ["✦", "Movement-led play"],
  ["+", "Experiences to explore"],
];

export function SeeItInAction() {
  return (
    <section className="rd-sec rd-action" id="demo" aria-labelledby="action-title">
      <Reveal as="h2" id="action-title">
        More than a screen.
        <br />
        An experience.
      </Reveal>
      <Reveal className="rd-action__frame" y={36}>
        <Image src="/images/redesign/action-poster.jpg" alt="A child playing a Kalqy game by moving in front of the screen" width={1600} height={783} />
        <Link href="/product" className="rd-action__play" aria-label="Watch the demo">
          <span aria-hidden="true">▶</span>
        </Link>
      </Reveal>
      <p className="rd-action__cap rd-tab-only">Watch Kalqy in action.</p>
      <Stagger as="ul" className="rd-action__facts">
        {callouts.map(([icon, text]) => (
          <StaggerItem as="li" key={text} y={14}>
            <span aria-hidden="true" data-sparkle="">
              {icon}
            </span>
            {text}
          </StaggerItem>
        ))}
      </Stagger>
      <Link href="/product" className="rd-btn rd-btn--outline-violet">
        Watch the Demo
      </Link>
    </section>
  );
}
