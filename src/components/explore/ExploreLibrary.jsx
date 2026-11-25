import { useMemo, useState } from "react";
import { AnimatePresence, m as M } from "framer-motion";
import { Words } from "@/components/motion/playful";
import { ExploreBg, light } from "./ExploreBg";
import { ExploreCard } from "./ExploreCard";
import { ExploreTools } from "./ExploreTools";
import { experiences } from "./exploreData";

/** Discovery tools + the published experience library (one stateful unit so search and chips filter the cards). */
export function ExploreLibrary() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("");
  const q = query.trim().toLowerCase();
  const shown = useMemo(
    () => experiences.filter((g) => (!topic || g.topic === topic) && (!q || g.name.toLowerCase().includes(q))),
    [topic, q],
  );
  const showStory = !topic && !q;

  return (
    <>
      <section className="hw-sec ex-discovery" aria-label="Find an experience">
        <ExploreBg wave="discovery-wave.svg" lights={[light("light-discovery.svg", 900, -260, 620, 0.2742)]} />
        <ExploreTools query={query} onQuery={setQuery} topic={topic} onTopic={setTopic} />
      </section>

      <section className="hw-sec ex-library" aria-labelledby="ex-lib-title">
        <ExploreBg wave="library-wave.svg" lights={[light("light-library.svg", -200, -260, 620, 0.2742)]} />
        <div className="ex-library__head">
          <Words as="h2" id="ex-lib-title" className="ex-library__title">
            All Games
          </Words>
          {/* the count flips like a scoreboard whenever the filter changes */}
          <span className="ex-library__count" role="status" aria-live="polite">
            <span className="ex-library__num">
              <AnimatePresence mode="popLayout" initial={false}>
                <M.b
                  key={shown.length}
                  initial={{ y: "80%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-80%", opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  {shown.length}
                </M.b>
              </AnimatePresence>
            </span>{" "}
            {shown.length === 1 ? "experience" : "experiences"}
          </span>
        </div>

        <M.div className="ex-grid">
          <AnimatePresence>
            {shown.map((g, i) => (
              <ExploreCard key={g.slug} game={g} index={i} />
            ))}
          </AnimatePresence>
          <AnimatePresence>
            {showStory && (
              <M.div
                key="story"
                layout
                className="ex-story"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0, transition: { type: "spring", stiffness: 90, damping: 18 } }}
                viewport={{ once: true, amount: 0.3 }}
                exit={{ opacity: 0, x: 40, transition: { duration: 0.18 } }}
              >
                <h2>
                  Every game has a character.
                  <br />
                  Every character has a story.
                </h2>
                <p className="hw-lead hw-lead--18">
                  From Egg Game’s cheerful chick to Marble Madness’s young wizard, Kalqy’s characters invite children to move, play
                  and learn.
                </p>
                <p className="hw-lead">Sea Sparkle and Zen Zone offer calmer, sensory play for quieter moments.</p>
              </M.div>
            )}
          </AnimatePresence>
        </M.div>

        <AnimatePresence>
          {shown.length === 0 && (
            <M.div
              className="ex-empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
            >
              <M.span aria-hidden="true" className="ex-empty__icon" animate={{ rotate: [0, -12, 12, -8, 0] }} transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2 }}>
                🔍
              </M.span>
              <p>No experiences match that search. Try another name or topic.</p>
              <button
                type="button"
                className="ex-empty__reset"
                onClick={() => {
                  setQuery("");
                  setTopic("");
                }}
              >
                Show all experiences
              </button>
            </M.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
