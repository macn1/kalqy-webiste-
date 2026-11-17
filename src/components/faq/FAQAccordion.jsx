import { useId, useRef, useState } from "react";
import { Icon } from "@/components/common/Icon";
/** WAI-ARIA accordion: buttons inside headings, aria-expanded/aria-controls, Up/Down/Home/End move between triggers. */
export function FAQAccordion({ items }) {
  const base = useId();
  const [openIndex, setOpenIndex] = useState(null);
  const triggers = useRef([]);
  const onKeyDown = (e, i) => {
    const last = items.length - 1;
    const map = { ArrowDown: i === last ? 0 : i + 1, ArrowUp: i === 0 ? last : i - 1, Home: 0, End: last };
    if (e.key in map) {
      e.preventDefault();
      triggers.current[map[e.key]]?.focus();
    }
  };
  return (
    <div className="faq">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className="faq-item" key={item.q}>
            <h3>
              <button
                ref={(el) => {
                  triggers.current[i] = el;
                }}
                type="button"
                className="faq-trigger"
                id={`${base}-t${i}`}
                aria-expanded={open}
                aria-controls={`${base}-p${i}`}
                onClick={() => setOpenIndex(open ? null : i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                <span>{item.q}</span>
                <span className="faq-icon">
                  <Icon name="plus" size={16} />
                </span>
              </button>
            </h3>
            <div id={`${base}-p${i}`} role="region" aria-labelledby={`${base}-t${i}`} hidden={!open} className="faq-panel">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
