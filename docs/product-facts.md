# Kalqy product facts (Milestone 1)

Source: public pages of https://kalqy.in inspected on 2026-10-13 (home, games, privacy, terms, page assets). Read-only: nothing on the existing site was changed.
**Verified** = read on kalqy.in. **Confirm** = needs a decision from the product owner before launch.

## Verified
| Topic | Fact | Source |
|---|---|---|
| What it is | Movement-based learning platform; webcam + computer vision / body tracking; no tap/swipe | home |
| Audience | Children aged 3–5 (home + privacy policy); schools, preschools, nurseries, early learning centers; parents | home, privacy |
| Hardware | "No fancy hardware required, just a webcam" | home |
| Platforms | Windows (Microsoft Store listing), Mac (zip download) | home |
| Games (7) | Sky Reader Quest, Rhythm Rebel, Sea Sparkle, Marble Madness, Zen Zone, Egg Game, Power Plant; "More Adventures – Coming Soon" | games page |
| School workflow | Select games (NEP goals) → real-time analytics → tune difficulty → export/share → access from any browser | home |
| Company | Kalqy Global Edventures Private Limited, Alappuzha, Kerala | privacy, terms |
| Contact | info@kalqy.in · +91 8943000243 · WhatsApp 8129637556 · address in `src/data/site.ts` | home |
| Social | Instagram @kalqyglobal, LinkedIn /company/kalqy, YouTube @KalqyGlobal | home |
| Team | Arun (Founder & CEO), Prince (COO), Abhiraman G (CTO) | home |
| Legal | Privacy, Terms, Disclaimer, Cookie pages exist | footer |
| Data (policy) | Video processed mainly on-device; no facial recognition; Firebase used; data not sold; deletion within 180 days | privacy |
| Demo video | YouTube `8nTC5YWqbks` "KALQY - Bringing Revolution" resolves (oEmbed 200) | home |
| Asset URLs | Logo, hero, 7 game images, classroom image, zip all return HTTP 200 | tested |

## Confirm before launch (unresolved)
1. **Age range.** Home copy + privacy policy say 3–5; page meta says "PreK-5"; the Vercel web demo says "3–6". The new site uses **3 to 5**.
2. **"10k+ / Trusted by 200+ Schools" and "98% Engagement" (kalqy.in hero).** No evidence is published. **Not used** on the new site. Provide evidence if they should appear.
3. **Testimonials / "As featured on Manorama Elevate".** No approved testimonials found. The Manorama claim is on kalqy.in but not verified here, so it was **left out**. Testimonials page shows an honest empty state.
4. **Game metadata conflicts:** Marble Madness ("Colors" on home vs "Math" on games page); Egg Game ("English" vs "Sensory", with a near-duplicate description); Power Plant vs "Plant Power" ("Science" vs "Sensory"). Games page values are used.
5. **Mac downloads.** Both "Apple Silicon" and "Intel" buttons on kalqy.in point at the same `builds/KalqyGames.zip` (~380 MB). New site has one Mac button. Confirm it is a universal build.
6. **Windows link.** The kalqy.in `href` contains stray text after the URL; the clean Microsoft Store URL is used. It returns 403 to scripts, so confirm it opens in a browser.
7. **System requirements** (OS versions, camera, CPU) are not published; FAQ says so.
8. **Parent progress insights / student dashboard.** Home page describes them, but the dashboard shows sample numbers (12-day streak, 24,500 score). Treated as unverified: new site mentions insights only as "Kalqy describes…". Confirm whether this is live.
9. **Home use.** Terms describe school-managed access; the site also promotes parent use. Confirm the home-use model and any pricing (none is published, so none is shown).
10. **Legal pages.** `/privacy` and `/terms` are *summaries* that link to the official text; they need legal review. Policy says "Last updated" nowhere.
11. **Social-preview image** `https://kalqy.in/images/social-preview.png` returns **404** on the existing site (an existing-site bug, not changed).
12. **Classroom imagery.** `b2b5.png` (shows a Kalqy screen) is used and labelled "illustrative". `b2b4.png` shows an "EdMotion" banner and garbled text; `b2b6.png` has no Kalqy branding. Neither is used. Both look AI-generated, so confirm licensing/approval for `b2b5`.
13. **Game artwork** is Kalqy's own (copied from kalqy.in) and assumed approved for reuse. Confirm. Backgrounds `*_bg.webp` carry baked-in titles and were not used.
14. **Deployment domain** is not confirmed: canonical/sitemap use `NEXT_PUBLIC_SITE_URL`.
15. **Favicon source** is only 67×67 px; the generated 256 px icon is soft. Provide a vector or large logo.
