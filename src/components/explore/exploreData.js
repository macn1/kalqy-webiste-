/** The seven experiences in the Explore design. `topic` drives the filter; `label` is the eyebrow exactly as designed. */
export const experiences = [
  {
    slug: "sky-reader-quest",
    name: "Sky Reader Quest",
    topic: "English",
    label: "English",
    text: "Reading comprehension adventures with a flying dragon.",
    image: "sky-reader-quest.webp",
    photo: true,
  },
  {
    slug: "rhythm-rebel",
    name: "Rhythm Rebel",
    topic: "Music",
    label: "Music",
    text: "Repeat sequence of sounds and colors with rhythmic movements.",
    image: "rhythm-rebel.webp",
    photo: true,
  },
  { slug: "sea-sparkle", name: "Sea Sparkle", topic: "Sensory", label: "Sensory", image: "sea-sparkle.webp", photo: true },
  {
    slug: "marble-madness",
    name: "Marble Madness",
    topic: "Colours",
    label: "COLOURS",
    text: "Children learn to spot and compare quantities.",
    image: "marble-madness.webp",
    tint: "linear-gradient(147deg, #fff1d6 14%, #ffd38a 86%)",
  },
  { slug: "zen-zone", name: "Zen Zone", topic: "Sensory", label: "Sensory", image: "zen-zone.webp", photo: true },
  {
    slug: "egg-game",
    name: "Egg Game",
    topic: "English",
    label: "ENGLISH",
    text: "A playful English game with a cheerful chick who loves to move.",
    image: "egg-game.webp",
    tint: "linear-gradient(147deg, #e7f8df 14%, #b5e6a0 86%)",
    small: true,
  },
  {
    slug: "power-plant",
    name: "Plant Power",
    topic: "Science",
    label: "SCIENCE",
    text: "A visual game that helps children discover photosynthesis.",
    image: "plant-power.webp",
    tint: "linear-gradient(147deg, #e6eaff 14%, #b8c4ff 86%)",
  },
];

/** Filter chips shown in the design (plus "All experiences", which clears the filter). */
export const topics = ["English", "Music", "Sensory"];
