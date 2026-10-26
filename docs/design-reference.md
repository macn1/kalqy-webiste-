# Plazmo design reference (Milestone 1)

Inspected: https://plazmo.in/ on 2026-10-13, via the served HTML (text, structure, asset list, metadata).
**Limit:** I did not open Plazmo in a browser, so layout, spacing, motion and responsive behavior below are **not verified visually**. Items are tagged **[V]** verified in the HTML or **[A]** assumption/inference.

## Observed, and how Kalqy translates it
| Plazmo pattern | Tag | Kalqy translation (original execution) |
|---|---|---|
| Sticky simple nav: Home / Shop / About / Support / Safety & Privacy + prominent "Pre-Order" CTA, duplicated in mobile menu | V | Sticky header, 6 links, yellow "Get Kalqy" CTA, accessible mobile menu |
| Hero: short bold headline ("Motion Gaming Console That Gets YOU Moving"), one-line value prop, primary CTA + "Watch Trailer" | V | "Big moves. Curious minds." + primary "Explore games" + secondary "Watch the demo" |
| Short slogan band ("YOU MOVE. THE GAME MOVES!") explaining the mechanic in one line | V | Demo section: "Learning that moves with them" + 3 plain facts |
| Games gallery with large per-game images and a count ("10+ games") | V | Colored game cards from real Kalqy art, count shown ("See all 7") |
| "For Parents" block with 5–6 short benefit cards (active, safe, private, offline, solo/multi) | V | Learning-benefits cards + separate parent and educator cards |
| Trust: customer videos, rating, named investors | V | **Not copied**: Kalqy has no verified equivalents. Replaced with transparent, checkable items |
| Pricing/reservation panel with repeated CTA | V | Not applicable (no published pricing) |
| FAQ accordion, ~7 questions | V | Accessible accordion (WAI-ARIA, arrow-key navigation) |
| Footer with legal, support, WhatsApp, social | V | Footer with real contact details and legal links |
| CTA repeated through the page | V | Header, hero, parents/educators, final band |
| Rounded cards, bright accents, large imagery, generous whitespace | A | Playful Adventure tokens: 24px cards, pill buttons, soft shadows |
| Scroll/hover animation | A | Only light float, rise-in and card lift; all disabled under `prefers-reduced-motion` |
| Tech: WordPress + WooCommerce, Astra theme | V | Not relevant; nothing reused |

## Not used
No Plazmo code, text, images, icons, fonts, branding or layout was copied. Plazmo's selling points (offline play, ad-free, on-device processing for a TV console) are **its** claims and were not applied to Kalqy.
