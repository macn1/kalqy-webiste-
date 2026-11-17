import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import { LinkButton } from "@/components/common/LinkButton";
import { GamesGrid } from "@/components/games/GamesGrid";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { games, getGame } from "@/data/games";
import { downloads } from "@/data/site";
import { pageMeta } from "@/utils/metadata";
/** Route-level metadata; called with the route params by the router's Page wrapper. */
export const metadata = ({ slug }) => {
  const game = getGame(slug);
  if (!game) return { title: "Page not found" };
  return pageMeta(
    game.name,
    `${game.name}: ${game.description} A Kalqy movement-based game played with a webcam.`,
    `/games/${game.slug}`,
  );
};
export default function GamePage() {
  const { slug } = useParams();
  const game = getGame(slug);
  if (!game) return <NotFound />;
  const others = games.filter((g) => g.slug !== game.slug).slice(0, 4);
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
            <Link href="/games" className="back-link">
              ← All games
            </Link>
          </nav>
          <div className="split">
            <div className="stack" data-reveal>
              <span className="badge">{game.category}</span>
              <h1>{game.name}</h1>
              <p className="lead">{game.description}</p>
              <div className="note">
                <strong>How you play:</strong> this game uses your webcam to follow your movement. No extra hardware is required.
              </div>
              <div className="btn-row">
                <LinkButton href={downloads.windows.href} variant="primary" icon="download">
                  Get Kalqy for Windows
                </LinkButton>
                <LinkButton href={downloads.mac.href} variant="blue" icon="download">
                  Get Kalqy for Mac
                </LinkButton>
              </div>
              <p className="figure-caption">
                Age guidance, levels and gameplay footage for individual games have not been published yet.
              </p>
            </div>
            <div className={`game-hero-art tone-${game.tone}`}>
              <Image
                src={game.image}
                alt={`${game.name} character artwork`}
                width={560}
                height={560}
                priority
                sizes="(min-width: 900px) 400px, 80vw"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section section--white section--sheet" aria-labelledby="more-games">
        <div className="container">
          <SectionHeading id="more-games" title="More games to try" />
          <GamesGrid games={others} />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
