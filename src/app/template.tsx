/** Re-mounts on every navigation, which replays the short CSS page-enter animation (see experience.css). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page">{children}</div>;
}
