export type GameTone = "coral" | "mint" | "yellow" | "blue";

export type Game = {
  slug: string;
  name: string;
  /** Learning area as listed on kalqy.in/games. */
  category: string;
  /** Concept text taken from kalqy.in/games; no extra claims added. */
  description: string;
  image: string;
  tone: GameTone;
  /** True where kalqy.in is internally inconsistent about this game (see docs/product-facts.md). */
  needsConfirmation?: string;
};

/**
 * Seven games listed on kalqy.in/games. All use webcam-based movement tracking.
 * Per-game age guidance, levels and screenshots are not published, so none are shown.
 */
export const games: Game[] = [
  {
    slug: "sky-reader-quest",
    name: "Sky Reader Quest",
    category: "English",
    description: "Reading comprehension adventures with a flying dragon.",
    image: "/images/games/sky-reader-quest.webp",
    tone: "blue",
  },
  {
    slug: "rhythm-rebel",
    name: "Rhythm Rebel",
    category: "Music",
    description: "Repeat sequences of sounds and colors with rhythmic movements.",
    image: "/images/games/rhythm-rebel.webp",
    tone: "coral",
  },
  {
    slug: "sea-sparkle",
    name: "Sea Sparkle",
    category: "Sensory",
    description: "Interact with virtual sea life to regulate sensory input.",
    image: "/images/games/sea-sparkle.webp",
    tone: "mint",
  },
  {
    slug: "marble-madness",
    name: "Marble Madness",
    category: "Math",
    description: "Quickly identify larger quantities without counting.",
    image: "/images/games/marble-madness.webp",
    tone: "yellow",
    needsConfirmation: "The home page labels this game 'Colors'; the games page says 'Math'.",
  },
  {
    slug: "zen-zone",
    name: "Zen Zone",
    category: "Sensory",
    description: "A calming environment for focused sensory integration.",
    image: "/images/games/zen-zone.webp",
    tone: "mint",
  },
  {
    slug: "egg-game",
    name: "Egg Game",
    category: "Sensory",
    description: "A calming environment for focused sensory and language integration.",
    image: "/images/games/egg-game.webp",
    tone: "yellow",
    needsConfirmation:
      "The home page labels this game 'English'; the games page says 'Sensory' and reuses a near-duplicate description.",
  },
  {
    slug: "power-plant",
    name: "Power Plant",
    category: "Science",
    description: "A visual game to learn photosynthesis.",
    image: "/images/games/power-plant.webp",
    tone: "coral",
    needsConfirmation: "The home page calls it 'Plant Power' (Science); the games page calls it 'Power Plant' (Sensory).",
  },
];

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
