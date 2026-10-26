import { GamesExplorer } from "@/components/games/GamesExplorer";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { games } from "@/data/games";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "Explore Kalqy games",
  `Browse all ${games.length} Kalqy movement-based learning games, from reading and math to music and calm sensory play. Played with a webcam.`,
  "/games",
);

export default function GamesPage() {
  return (
    <>
      <section className="section page-hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <SectionHeading
            as="h1"
            eyebrow="Game library"
            title="All your learning adventures"
            intro="Movement-based games for young children, powered by your webcam. No extra hardware required."
          />
        </div>
      </section>
      <section className="section" style={{ paddingTop: 24 }} aria-label="Games">
        <div className="container">
          <GamesExplorer />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
