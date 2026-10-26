import Image from "next/image";
import { LinkButton } from "@/components/common/LinkButton";

type Props = { title?: string; text?: string };

export function FinalCTA({
  title = "Ready to get moving?",
  text = "Download Kalqy for Windows or Mac, or talk to us about bringing it to your classroom.",
}: Props) {
  return (
    <section className="section" aria-labelledby="final-cta">
      <div className="container">
        <div className="cta-band" data-reveal="zoom">
          <span className="cta-band__orb cta-band__orb--a" aria-hidden="true" />
          <span className="cta-band__orb cta-band__orb--b" aria-hidden="true" />
          <div>
            <h2 id="final-cta">{title}</h2>
            <p>{text}</p>
            <div className="btn-row">
              <LinkButton href="/product#download" variant="primary" icon="download">
                Download Kalqy
              </LinkButton>
              <LinkButton href="/schools" variant="dark">
                Ask about a school demo
              </LinkButton>
            </div>
          </div>
          <div className="cta-band__chars" aria-hidden="true">
            <Image src="/images/brand/tortoise.webp" alt="" width={520} height={780} loading="lazy" />
            <Image src="/images/brand/kalqy-mascot.webp" alt="" width={520} height={780} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
