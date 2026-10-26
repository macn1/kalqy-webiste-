import { downloads } from "@/data/site";
import { LinkButton } from "@/components/common/LinkButton";

/** Download destinations come from src/data/site.ts so they can be corrected in one place. */
export function DownloadPanel() {
  return (
    <div className="stack">
      <div className="btn-row">
        <LinkButton href={downloads.windows.href} variant="primary" icon="download">
          Download for Windows
        </LinkButton>
        <LinkButton href={downloads.mac.href} variant="blue" icon="download">
          Download for Mac
        </LinkButton>
        <LinkButton href={downloads.webDemo.href} variant="secondary" icon="external">
          Try the web demo
        </LinkButton>
      </div>
      <p className="figure-caption">
        Windows opens the Microsoft Store. The Mac download is a large file (about 380 MB). A webcam is needed to play.
      </p>
    </div>
  );
}
