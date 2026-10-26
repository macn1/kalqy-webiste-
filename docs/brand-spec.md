# Kalqy brand specification

## 1. Verified existing brand assets (from kalqy.in)
- **Logo**: multicolor "KALQY" wordmark on yellow/pink/green/blue blocks (`kalqy_favicon.png`, 250×76). Used as-is, unmodified. A separate blue "K + kalqy" mark appears on the classroom screen image.
- **Site type**: Fredoka (playful), Plus Jakarta Sans (body), Bricolage Grotesque (display). The new site keeps **Fredoka + Plus Jakarta Sans**.
- **Characters**: hero scene, mascot and tortoise, and 7 game characters (original Kalqy art).
- **Existing colors (kalqy.in Tailwind config)**: cyan `#00D4FF`, orange `#FF6B35`, yellow `#FFD93D`, magenta `#FF006E`, purple `#8338EC`, light `#F8F9FA`, dark `#0F172A`.

## 2. Proposed palette: Playful Adventure
Adventure Blue `#39A9F9` · Sunshine Yellow `#FFD34E` · Playful Coral `#FF8C78` · Fresh Mint `#B9E8C9` · Warm Cream `#FFF9ED` · Deep Play Navy `#20304A` · White. Centralised in `src/styles/tokens.css`.

## 3. Difference from the existing brand ⚠ decision needed
The proposed palette is **softer and warmer** than kalqy.in (cyan, orange, magenta, purple on a dark-navy base). Its blue and yellow are close to the logo's blue and yellow blocks and the in-product blue, but the logo's **pink/magenta has no counterpart**. The palette was applied as instructed; **please confirm it is authoritative**. Swapping later is a one-file change.

## 4. Contrast (computed, `node scripts/contrast.mjs`)
| Pair | Ratio | Decision |
|---|---|---|
| White on Adventure Blue | **2.56 ✗** | never used. Blue fills carry **navy** text (5.19) |
| Adventure Blue text on Cream | **2.44 ✗** | links/eyebrows use `--color-brand-text` `#0B6AAE` (5.43) |
| Navy on Sunshine Yellow | 9.27 | primary buttons |
| Navy on Coral / Mint | 5.86 / 9.76 | card art areas and tags |
| Secondary text `#4B5A70` on Cream / White | 6.68 / 7.01 | body secondary |
| Coral text on Cream | **fails** | `--color-coral-text` `#B8412C` (5.23) where needed |
| Navy on Cream | 12.65 | body text |

## 5. Components
- **Buttons**: pill, ≥48 px high (44 px "small"), Fredoka 600. Primary = yellow, secondary = white + navy outline, blue = navy text, dark = navy.
- **Cards**: 24 px radius, white, 1 px warm border, soft navy shadow, lift on hover.
- **Focus**: 3 px navy outline + 6 px yellow halo (white on dark sections).
- **Sections** alternate cream / white / mint / navy; each uses one dominant accent (the full palette is not shown at once).

## 6. Imagery
Kalqy's own character art on flat palette-colored tiles. The classroom image is labelled "illustrative". No stock photos, no Plazmo assets.

## 7. Motion and visual identity (experience layer)
`src/styles/experience.css` holds the "sticker-book" identity (navy outlines, hard offset shadows, stacked rounded section sheets, chunky Fredoka) and all motion. No animation library: CSS keyframes plus one small client controller (`MotionRoot`) that adds `.is-in` to `[data-reveal]` / `[data-stagger]` elements and drives `[data-parallax]` decor layers.
- Hero entrance, floating chips/blobs, ticker band, scroll reveals with staggered cards, parallax blobs, sliding nav pill, page-enter transition (`template.tsx`), scroll-progress bar (CSS scroll timeline), button press and card hover.
- `prefers-reduced-motion`: `motion` class is never set, reveals stay visible, ticker becomes a static wrapped list, hover transforms are off. Content is never hidden without JS.
- Video never autoplays; it starts only after a click.

## 8. Accessibility
Skip link, landmarks, one H1 per page, WCAG-checked contrast, visible focus, labelled form fields with `aria-invalid`/`aria-describedby`, `role="status"` form messages, ARIA accordion, menu with Escape/focus return/focus trap, 44 px+ touch targets, decorative images `alt=""`.
