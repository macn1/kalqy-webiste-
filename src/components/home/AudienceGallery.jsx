import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { site } from "@/data/site";

const parentSteps = [
  ["01", "Understand the experience", "Movement games make every lesson active."],
  ["02", "Know what to expect", "All it takes is a computer and room to move. Our team will help you get set up."],
  ["03", "Make an informed choice", "Kalqy is used in schools and preschools. Ask us how your family can take part."],
];

export function ParentsSection() {
  return (
    <section className="rd-sec rd-bgsec rd-parents" id="parent-info" style={{ "--rd-bg": 'url("/images/redesign/bg-parents.webp")' }} aria-labelledby="parents-title">
      <div className="rd-split">
        <div className="rd-parents__invite">
          <p className="rd-eyebrow rd-eyebrow--blue">FOR PARENTS</p>
          <h2 id="parents-title" className="rd-h2">
            More confidence in every experience.
          </h2>
          <p className="rd-lead">
            A clear starting point for grown-ups: understand the experience, the equipment and how access works.
          </p>
          <Link href="/product#parents" className="rd-btn rd-btn--outline-violet">
            Information for Parents
          </Link>
        </div>
        <ol className="rd-parents__card">
          {parentSteps.map(([n, title, text]) => (
            <li key={n}>
              <span className="rd-parents__marker" aria-hidden="true">
                {n}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function EducatorsSection() {
  return (
    <section className="rd-sec rd-bgsec rd-educators" style={{ "--rd-bg": 'url("/images/redesign/bg-educators.webp")' }} aria-labelledby="educators-title">
      <div className="rd-split">
        <figure className="rd-educators__media">
          <div className="rd-educators__poster">
            <Image src="/images/redesign/educators-demo.jpg" alt="Children and educators trying Kalqy at a live demonstration" width={616} height={360} />
          </div>
          <figcaption>Children and educators trying Kalqy at a live demonstration.</figcaption>
        </figure>
        <div className="rd-educators__copy">
          <p className="rd-eyebrow rd-eyebrow--blue">FOR EDUCATORS</p>
          <h2 id="educators-title" className="rd-h2">
            Bring a new dimension to learning.
          </h2>
          <p className="rd-lead">
            Explore movement games made for schools and preschools. Kalqy runs on Windows and Mac, and our team will help
            with setup and supervised sessions.
          </p>
          <div className="rd-educators__actions">
            <Link href="/schools" className="rd-btn rd-btn--primary rd-btn--sm">
              Discuss Kalqy for Your School <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/schools#demo" className="rd-btn rd-btn--mint rd-btn--sm">
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="rd-sec rd-bgsec rd-gallery" style={{ "--rd-bg": 'url("/images/redesign/bg-gallery.webp")' }} aria-labelledby="gallery-title">
      <div className="rd-gallery__inner">
        <header>
          <h2 id="gallery-title" className="rd-h2">
            See learning come to life.
          </h2>
          <p>Moments of movement, play and learning from classrooms and live demos.</p>
        </header>
        <div className="rd-gallery__row">
          <article className="rd-didac">
            <div className="rd-didac__photo">
              <Image src="/images/redesign/gallery-didac.jpg" alt="Educators trying Kalqy at the DIDAC expo" width={426} height={190} />
              <span className="rd-didac__tag">LIVE DEMO</span>
            </div>
            <div className="rd-didac__text">
              <h3>Showcased at DIDAC</h3>
              <p>
                Educators tried Kalqy hands-on at Asia’s largest edtech expo, moving, playing and learning in front of the
                screen.
              </p>
              <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">
                Watch the DIDAC highlights ↗<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </div>
          </article>
          <div className="rd-gallery__poster">
            <Image src="/images/redesign/gallery-poster.jpg" alt="A child playing a Kalqy balloon game" width={800} height={323} />
          </div>
        </div>
        <Image
          className="rd-gallery__wide"
          src="/images/redesign/gallery-illustration.jpg"
          alt="Illustration of children moving together in front of a Kalqy game"
          width={1280}
          height={360}
        />
      </div>
    </section>
  );
}
