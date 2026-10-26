/**
 * Verified facts about Kalqy, sourced from the public kalqy.in site (inspected 2026-10-13).
 * Anything marked `confirm` is unresolved and listed in docs/product-facts.md.
 */
export const site = {
  name: "Kalqy",
  legalName: "Kalqy Global Edventures Private Limited",
  /** Deployment domain is not confirmed, so no canonical/sitemap host is hard-coded. Set NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "info@kalqy.in",
  phone: "+91 8943000243",
  phoneHref: "tel:+918943000243",
  address: "G.K Building, Kochalummoodu-Pandalam Road, Vettiyar, Alappuzha, Kerala, India 690558",
  whatsapp: "https://wa.me/8129637556",
  social: {
    instagram: "https://www.instagram.com/kalqyglobal/",
    linkedin: "https://www.linkedin.com/company/kalqy",
    youtube: "https://www.youtube.com/@KalqyGlobal",
  },
  /** Age range per the product description and privacy policy. The site's meta tags say "PreK-5" -> confirm. */
  ageRange: "3 to 5",
  /** Muted looping YouTube video behind the home hero (desktop only). Set to null to use the bundled /video/kalqy-hero.webm. */
  heroVideoYoutubeId: "7u2Tw7K01uE" as string | null,
  demoVideo: { youtubeId: "8nTC5YWqbks", title: "KALQY - Bringing Revolution" },
  /** Full legal text lives on the existing site and is the authoritative version until reviewed. */
  officialLegal: {
    privacy: "https://kalqy.in/privacy.html",
    terms: "https://kalqy.in/terms.html",
    disclaimer: "https://kalqy.in/disclaimer.html",
    cookies: "https://kalqy.in/cookies.html",
  },
} as const;

/**
 * Download destinations found on kalqy.in. Both Mac buttons there point to the same zip, so a single
 * Mac link is offered here. `confirm` items must be checked by the product owner before launch.
 */
export const downloads = {
  windows: {
    label: "Windows",
    href: "https://apps.microsoft.com/detail/9ng8k0m86860",
    note: "Microsoft Store listing (returns HTTP 403 to scripted requests; confirm it opens in a browser).",
  },
  mac: {
    label: "Mac",
    href: "https://kalqy.in/builds/KalqyGames.zip",
    note: "About 380 MB zip. Apple Silicon and Intel buttons on kalqy.in link to this same file; confirm it is a universal build.",
  },
  webDemo: { label: "Web demo", href: "https://kids-game-mu.vercel.app/" },
} as const;

export const standardsReferenced = [
  { label: "NEP 2020", href: "https://static.pib.gov.in/WriteReadData/userfiles/NEP_Final_English_0.pdf" },
  { label: "PEGI 3 guidelines", href: "https://pegi.info/page/pegi-age-ratings" },
  { label: "Depth of Knowledge framework", href: "https://www.structural-learning.com/post/webbs-depth-of-knowledge" },
] as const;

export const team = [
  { name: "Arun", role: "Founder & CEO", bio: "Serial entrepreneur, ACCA, MBA (IIM Ranchi)" },
  { name: "Prince", role: "COO", bio: "Serial entrepreneur, B.Tech EEE" },
  { name: "Abhiraman G", role: "CTO", bio: "Serial entrepreneur, MSc CS" },
] as const;
