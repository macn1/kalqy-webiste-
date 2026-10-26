import { games as allGames, type Game } from "@/data/games";
import { GameCard } from "./GameCard";

type Props = { games?: Game[]; comingSoon?: boolean; /** Swipeable rail on phones, normal grid from tablet up. */ rail?: boolean };

export function GamesGrid({ games = allGames, comingSoon = false, rail = false }: Props) {
  return (
    <ul className={`games-grid${rail ? " games-grid--rail" : ""}`} data-stagger>
      {games.map((g, i) => (
        <li key={g.slug}>
          <GameCard game={g} priority={i < 4} />
        </li>
      ))}
      {comingSoon && (
        <li>
          <div className="coming-card">
            <div>
              <h3 style={{ marginBottom: 4 }}>More adventures</h3>
              <p style={{ margin: 0 }}>Kalqy lists more games as &ldquo;coming soon&rdquo;.</p>
            </div>
          </div>
        </li>
      )}
    </ul>
  );
}
