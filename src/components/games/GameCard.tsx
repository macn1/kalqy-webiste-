import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/data/games";

const badgeFor: Record<string, string> = { English: "badge--blue", Music: "badge--coral", Sensory: "badge--mint", Math: "", Science: "badge--mint" };

/** Presentational only: all content comes from src/data/games.ts. The whole card is one link (via ::after). */
export function GameCard({ game, priority }: { game: Game; priority?: boolean }) {
  return (
    <article className="game-card">
      <div className={`game-card__art tone-${game.tone}`}>
        <Image src={game.image} alt="" width={560} height={560} sizes="(min-width: 900px) 260px, 60vw" priority={priority} />
      </div>
      <div className="game-card__body">
        <h3>
          <Link href={`/games/${game.slug}`} className="game-card__link">
            {game.name}
          </Link>
        </h3>
        <p>{game.description}</p>
        <div className="game-card__meta">
          <span className={`badge ${badgeFor[game.category] ?? ""}`}>{game.category}</span>
          <span className="game-card__cta">View game<span aria-hidden="true"> →</span></span>
        </div>
      </div>
    </article>
  );
}
