import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/layout/Seo";
import { ScrollManager } from "@/components/layout/ScrollManager";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { site } from "@/data/site";
import * as Home from "@/pages/Home";
import * as About from "@/pages/About";
import * as Contact from "@/pages/Contact";
import * as Faq from "@/pages/Faq";
import * as Games from "@/pages/Games";
import * as GameDetail from "@/pages/GameDetail";
import * as Privacy from "@/pages/Privacy";
import * as Product from "@/pages/Product";
import * as Schools from "@/pages/Schools";
import * as Terms from "@/pages/Terms";
import * as Testimonials from "@/pages/Testimonials";
import * as NotFound from "@/pages/NotFound";

// Structured data limited to facts published on kalqy.in.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "G.K Building, Kochalummoodu-Pandalam Road, Vettiyar",
    addressLocality: "Alappuzha",
    addressRegion: "Kerala",
    postalCode: "690558",
    addressCountry: "IN",
  },
  sameAs: Object.values(site.social),
};

/** Sets the page's <head> tags and re-mounts on every navigation, replaying the CSS page-enter animation. */
function Page({ mod }) {
  const params = useParams();
  const { pathname } = useLocation();
  const meta = typeof mod.metadata === "function" ? mod.metadata(params) : mod.metadata;
  const Component = mod.default;
  return (
    <div className="page" key={pathname}>
      <Seo meta={meta} />
      <Component />
    </div>
  );
}

const routes = [
  ["/", Home],
  ["/about", About],
  ["/contact", Contact],
  ["/faq", Faq],
  ["/games", Games],
  ["/games/:slug", GameDetail],
  ["/privacy", Privacy],
  ["/product", Product],
  ["/schools", Schools],
  ["/terms", Terms],
  ["/testimonials", Testimonials],
  ["*", NotFound],
];

export default function App() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <MotionRoot />
      <ScrollManager />
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1} style={{ outline: "none" }}>
        <Routes>
          {routes.map(([path, mod]) => (
            <Route key={path} path={path} element={<Page mod={mod} />} />
          ))}
        </Routes>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
    </>
  );
}
