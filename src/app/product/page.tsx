import { Icon } from "@/components/common/Icon";
import { LinkButton } from "@/components/common/LinkButton";
import { VideoEmbed } from "@/components/common/VideoEmbed";
import { DownloadPanel } from "@/components/home/DownloadPanel";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { site } from "@/data/site";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "How Kalqy works",
  "See how Kalqy works: download for Windows or Mac, allow your webcam, choose a game and move to play. Includes a Mac install guide.",
  "/product",
);

const macSteps = [
  { t: "Download the Mac build", d: "Open the downloaded file and move KalqyGames to your Applications folder." },
  { t: "If macOS blocks it", d: "On first launch macOS may say it could not verify the app. This is a standard check for apps downloaded outside the App Store. Close the message." },
  { t: "Open System Settings", d: "Choose Apple menu → System Settings → Privacy & Security." },
  { t: "Click “Open Anyway”", d: "Scroll to the Security section, click Open Anyway next to the KalqyGames message, then confirm with your password or Touch ID." },
  { t: "Allow camera access", d: "When Kalqy asks to use your camera, click Allow. The movement games use it to see you play." },
];

export default function ProductPage() {
  return (
    <>
      <section className="section page-hero" style={{ paddingBottom: 24 }}>
        <div className="container">
          <SectionHeading
            as="h1"
            eyebrow="Product"
            title="How Kalqy works"
            intro="Kalqy uses your webcam and computer vision to follow a child's movement, so the whole body becomes the controller."
          />
        </div>
      </section>

      <HowItWorks heading={false} />

      <section className="section section--white section--sheet" aria-labelledby="watch-title">
        <div className="container split">
          <div className="stack" data-reveal>
            <h2 id="watch-title">Watch it in action</h2>
            <p className="lead">A short video from Kalqy shows the experience.</p>
          </div>
          <VideoEmbed youtubeId={site.demoVideo.youtubeId} title={site.demoVideo.title} />
        </div>
      </section>

      <section id="download" className="section" aria-labelledby="download-title">
        <div className="container">
          <SectionHeading id="download-title" eyebrow="Get started" title="Download Kalqy" intro="Kalqy runs on Windows and Mac computers with a webcam." />
          <DownloadPanel />
        </div>
      </section>

      <section className="section section--mint section--sheet" aria-labelledby="mac-title">
        <div className="container">
          <SectionHeading id="mac-title" eyebrow="Mac guide" title="Installing on a Mac takes under a minute" intro="Follow these steps if macOS blocks Kalqy the first time." />
          <ol className="steps" data-stagger>
            {macSteps.map((s) => (
              <li className="step" key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
          <p className="note" style={{ marginTop: 24, maxWidth: "70ch" }}>
            <strong>Shortcut:</strong> Control-click (right-click) KalqyGames in Applications and choose Open → Open to skip the warning.
          </p>
        </div>
      </section>

      <section id="parents" className="section" aria-labelledby="parents-title">
        <div className="container split">
          <div className="stack" data-reveal>
            <span className="eyebrow">For parents</span>
            <h2 id="parents-title">Playing at home</h2>
            <p className="lead">Set Kalqy up on a computer with a webcam, give your child some space to move, and join in.</p>
            <ul className="check-list">
              <li>Clear a safe area in front of the webcam so children can move freely.</li>
              <li>Choose a game together from the games page.</li>
              <li>Kalqy describes progress insights for parents, such as strengths and areas to practise.</li>
            </ul>
            <div className="btn-row">
              <LinkButton href="/games" variant="primary">
                Explore games
              </LinkButton>
              <LinkButton href="/privacy" variant="secondary" icon="shield">
                How data is handled
              </LinkButton>
            </div>
          </div>
          <div className="card" data-reveal="right">
            <div className="card__icon card__icon--mint">
              <Icon name="chart" />
            </div>
            <h3>Safety note</h3>
            <p>
              Kalqy&apos;s terms say educators and supervising adults are responsible for a safe movement space and for making sure
              children are physically able to take part. Please supervise young children while they play.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
