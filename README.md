# Kalqy website (new, independent project)

A new marketing site for Kalqy, built with Next.js 15 (App Router) and TypeScript. It is separate from the existing kalqy.in site: that site was only read, never modified.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # production build (static pages)
npm start        # serve the production build
```
Requires Node 20+. Fonts are fetched from Google Fonts at build time.

## Configure
Copy `.env.example` to `.env.local`.
- `NEXT_PUBLIC_SITE_URL`: final domain (canonical URLs, sitemap, Open Graph).
- `NEXT_PUBLIC_FORM_ENDPOINT`: optional. JSON POST endpoint for the contact and school forms. If unset, the forms validate and open the visitor's email app, and never claim a send.

## Where things live
| Need to change | File |
|---|---|
| Colors, radii, shadows, spacing | `src/styles/tokens.css` |
| Contact details, download links, team, demo video | `src/data/site.ts` |
| Games | `src/data/games.ts` (add a game and its page, card and sitemap entry appear) |
| FAQ / navigation / testimonials | `src/data/faq.ts`, `navigation.ts`, `testimonials.ts` |
| Page copy | `src/app/*/page.tsx`, `src/components/home/*` |

Testimonials stay empty until real, approved ones are added (`approved: true`).

## Docs
`docs/product-facts.md` (verified facts and open questions), `docs/design-reference.md`, `docs/brand-spec.md`.
Open questions must be resolved before launch, especially the palette decision, age range, legal review and asset approval.

## Deploy
Static output; any Node or static host works (e.g. Vercel). Set the env vars above. No secrets are required.
