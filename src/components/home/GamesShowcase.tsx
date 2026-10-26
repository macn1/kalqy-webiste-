import { LinkButton } from "@/components/common/LinkButton";
import { GamesGrid } from "@/components/games/GamesGrid";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { games } from "@/data/games";

export function GamesShowcase() {
  return (
    <section className="section section--sheet" aria-labelledby="games-title">
      <div className="container">
        <SectionHeading
          id="games-title"
          eyebrow="The games"
          title="Choose your adventure"
          intro="Every game turns movement into a learning moment. Pick a topic and start playing."
        />
        <GamesGrid games={games.slice(0, 4)} rail />
        <div className="btn-row" style={{ marginTop: 36 }} data-reveal>
          <LinkButton href="/games" variant="dark">
            See all {games.length} games
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
