import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LinkButton } from "@/components/common/LinkButton";
import { GamesGrid } from "@/components/games/GamesGrid";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { games, getGame } from "@/data/games";
import { downloads } from "@/data/site";
import { pageMeta } from "@/utils/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const game = getGame((await params).slug);
  if (!game) return {};
  return pageMeta(game.name, `${game.name}: ${game.description} A Kalqy movement-based game played with a webcam.`, `/games/${game.slug}`);
}

export default async function GamePage({ params }: { params: Promise<Params> }) {
  const game = getGame((await params).slug);
  if (!game) notFound();
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
              <Image src={game.image} alt={`${game.name} character artwork`} width={560} height={560} priority sizes="(min-width: 900px) 400px, 80vw" />
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
