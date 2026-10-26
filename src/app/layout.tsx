import type { Metadata, Viewport } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/tokens.css";
import "@/styles/global.css";
import "@/styles/components.css";
import "@/styles/experience.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { site } from "@/data/site";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", display: "swap", weight: ["500", "600", "700"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Kalqy — Movement-based learning games for young children", template: "%s | Kalqy" },
  description:
    "Kalqy turns your webcam into a playground: movement-based learning games where children jump, reach and point to play and learn.",
  openGraph: { siteName: "Kalqy", type: "website", locale: "en_IN" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FFF9ED" };

// Structured data limited to facts published on kalqy.in.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", streetAddress: "G.K Building, Kochalummoodu-Pandalam Road, Vettiyar", addressLocality: "Alappuzha", addressRegion: "Kerala", postalCode: "690558", addressCountry: "IN" },
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body>
        {/* Enables scroll-reveal styles before first paint; MotionRoot removes it for reduced-motion users. */}
        <script dangerouslySetInnerHTML={{ __html: "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')" }} />
        <div className="scroll-progress" aria-hidden="true" />
        <MotionRoot />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main" tabIndex={-1} style={{ outline: "none" }}>
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
