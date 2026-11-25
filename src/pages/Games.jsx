import { useEffect } from "react";
import { ExploreIntro } from "@/components/explore/ExploreIntro";
import { ExploreLibrary } from "@/components/explore/ExploreLibrary";
import { ExploreClosing } from "@/components/explore/ExploreClosing";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "Explore Kalqy experiences",
  "Seven playful movement-based experiences across reading, science, music and more. Search by name or browse by topic.",
  "/games",
);

export default function GamesPage() {
  // Same hook the home page uses: it switches the shared header and footer to their tablet / mobile layouts.
  useEffect(() => {
    document.body.classList.add("home-tablet");
    return () => document.body.classList.remove("home-tablet");
  }, []);
  return (
    <div className="hw ex">
      <ExploreIntro />
      <ExploreLibrary />
      <ExploreClosing />
    </div>
  );
}
