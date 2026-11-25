import { useId } from "react";
import { m as M } from "framer-motion";
import { topics } from "./exploreData";

const tools = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const pop = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 130, damping: 16 } },
};
const chipIn = {
  hidden: { opacity: 0, scale: 0.7, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 15 } },
};

function Chip({ active, onClick, children }) {
  return (
    <M.button
      type="button"
      className={`rd-btn hw-btn ex-chip${active ? " is-on" : ""}`}
      aria-pressed={active}
      onClick={onClick}
      variants={chipIn}
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.93 }}
    >
      {/* one blue pill slides from chip to chip (shared layout animation) */}
      {active && <M.span layoutId="ex-chip-pill" className="ex-chip__pill" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
      <span className="ex-chip__label">{children}</span>
    </M.button>
  );
}

/** Search box + topic chips. Fully controlled by ExploreLibrary. */
export function ExploreTools({ query, onQuery, topic, onTopic }) {
  const id = useId();
  return (
    <M.div className="ex-tools" variants={tools} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
      <M.div className="ex-search" variants={pop}>
        <label htmlFor={id}>Search experiences</label>
        <div className="ex-search__field">
          <input
            id={id}
            type="search"
            value={query}
            placeholder="Search by game name"
            autoComplete="off"
            onChange={(e) => onQuery(e.target.value)}
          />
          <M.span
            className="ex-search__icon"
            aria-hidden="true"
            animate={query ? { rotate: [0, -18, 18, 0], scale: 1.15 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            🔍
          </M.span>
        </div>
      </M.div>
      <M.div className="ex-topics" variants={pop}>
        <p id={`${id}-t`}>Browse by topic</p>
        <M.div className="ex-topics__row" role="group" aria-labelledby={`${id}-t`} variants={tools}>
          <Chip active={topic === ""} onClick={() => onTopic("")}>
            All experiences{" "}
            <M.span aria-hidden="true" className="ex-chip__arrow" animate={{ x: topic === "" ? 2 : 0, y: topic === "" ? -2 : 0 }}>
              ↗
            </M.span>
          </Chip>
          {topics.map((t) => (
            <Chip key={t} active={topic === t} onClick={() => onTopic(topic === t ? "" : t)}>
              {t}
            </Chip>
          ))}
        </M.div>
      </M.div>
    </M.div>
  );
}
