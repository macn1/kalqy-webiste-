import Image from "@/components/common/Image";
import Link from "@/components/common/Link";

const items = [
  {
    n: "01",
    title: "Kinesthetic toy kit",
    text: "Hands-on toys that get children jumping, balancing and reaching while they play.",
    note: "[List the toys in the kit]",
    bg: "#fff1d1",
    visual: "leo",
  },
  {
    n: "02",
    title: "Kalqy movement games",
    text: "Games across English, Maths, Science, Colours and Music that respond to every jump, reach and wave.",
    note: "[Number of games included]",
    bg: "#d9f5ea",
    visual: "games",
  },
  {
    n: "03",
    title: "Kalqy Parent App",
    text: "Follow your child’s progress, skills, streaks and milestones from your phone.",
    note: "[App access period, e.g. 12 months]",
    bg: "#f0edff",
    visual: "app",
  },
];

const includes = ["Kinesthetic toy kit", "Kalqy movement games", "Kalqy Parent App", "Easy setup with our team’s help"];
const setupTablet = "Easy setup with step-by-step instructions";

function Visual({ kind }) {
  if (kind === "leo") return <Image className="rd-item__leo" src="/images/redesign/character-leo.png" width={75} height={108} />;
  if (kind === "games")
    return (
      <>
        <Image className="rd-item__game rd-item__game--a" src="/images/redesign/game-1.png" width={72} height={72} />
        <Image className="rd-item__game rd-item__game--b" src="/images/redesign/game-2.png" width={72} height={72} />
        <Image className="rd-item__game rd-item__game--c" src="/images/redesign/game-3.png" width={72} height={72} />
      </>
    );
  return (
    <div className="rd-item__app">
      <div>
        <i style={{ width: 35, background: "var(--rd-primary)", top: 24 }} />
        <i style={{ width: 24, background: "var(--rd-mint)", top: 44 }} />
        <i style={{ width: 24, background: "#ffd166", top: 63 }} />
      </div>
    </div>
  );
}

export function LearningKitOffer() {
  return (
    <section className="rd-offer" aria-labelledby="offer-title">
      <header className="rd-offer__head">
        <span className="rd-chip rd-chip--yellow rd-tab-only">THE KALQY HOME LEARNING KIT</span>
        <h2 id="offer-title">
          Everything your child needs
          <span>to learn by moving.</span>
        </h2>
        <p>
          Three things that work together: hands-on toys, screen games that respond to every move, and an app that shows
          parents how their child is growing.
        </p>
      </header>
      <div className="rd-offer__grid">
        <ul className="rd-offer__items">
          {items.map((it) => (
            <li className="rd-item" style={{ "--item-bg": it.bg }} key={it.n}>
              <div className="rd-item__visual" aria-hidden="true">
                <Visual kind={it.visual} />
              </div>
              <div className="rd-item__copy">
                <h3>
                  <span>{it.n}</span> {it.title}
                </h3>
                <p>{it.text}</p>
                <p className="rd-item__note">{it.note}</p>
              </div>
            </li>
          ))}
        </ul>
        <aside className="rd-price" aria-label="Kalqy Home Kit offer">
          <span className="rd-chip rd-chip--pink">LIMITED-TIME OFFER</span>
          <h3>
            Kalqy Home <span className="rd-tab-only">Learning </span>Kit
          </h3>
          <p className="rd-price__was">
            Total value <s>₹20,000</s>
          </p>
          <div className="rd-price__row">
            <p className="rd-price__now">
              ₹4,999<span className="rd-tab-hide">/-</span>
            </p>
            <span className="rd-chip rd-chip--pink rd-tab-only">75% OFF</span>
          </div>
          <p className="rd-price__save rd-tab-only">You save ₹15,000</p>
          <hr />
          <ul className="rd-price__list">
            {includes.map((t) => (
              <li key={t}>
                <span aria-hidden="true">✓</span>
                {t === includes[3] ? (
                  <>
                    <em className="rd-tab-hide rd-price__plain">{t}</em>
                    <em className="rd-tab-only rd-price__plain">{setupTablet}</em>
                  </>
                ) : (
                  t
                )}
              </li>
            ))}
          </ul>
          <Link href="/product#download" className="rd-price__btn">
            <span>
              Get the <span className="rd-tab-hide">Kalqy</span>
              <span className="rd-tab-only">Learning</span> Kit for ₹4,999
            </span>
          </Link>
          <p className="rd-price__foot rd-tab-only">[Delivery time, payment options and offer end date]</p>
        </aside>
      </div>
    </section>
  );
}
