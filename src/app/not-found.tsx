import { LinkButton } from "@/components/common/LinkButton";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="section page-hero">
      <div className="container center stack" style={{ maxWidth: 640 }}>
        <span className="eyebrow">Error 404</span>
        <h1>Oops, this page wandered off</h1>
        <p className="lead" style={{ marginInline: "auto" }}>
          We couldn&apos;t find the page you were looking for. Let&apos;s get you moving again.
        </p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <LinkButton href="/" variant="primary">
            Go home
          </LinkButton>
          <LinkButton href="/games" variant="secondary">
            Explore games
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
