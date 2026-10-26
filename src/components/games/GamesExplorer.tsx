"use client";

import { useState } from "react";
import { GamesGrid } from "./GamesGrid";
import { games } from "@/data/games";

const categories = ["All", ...Array.from(new Set(games.map((g) => g.category)))];

/** Filter chips over the real game list. Keyed on the filter so the grid replays its staggered entrance. */
export function GamesExplorer() {
  const [category, setCategory] = useState("All");
  const shown = category === "All" ? games : games.filter((g) => g.category === category);
  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter games by learning area">
        {categories.map((c) => (
          <button key={c} type="button" className="chip-btn" aria-pressed={category === c} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </div>
      <p className="visually-hidden" role="status">
        Showing {shown.length} {shown.length === 1 ? "game" : "games"}
      </p>
      <div key={category} className="is-in-now">
        <GamesGrid games={shown} comingSoon={category === "All"} />
      </div>
    </>
  );
}
