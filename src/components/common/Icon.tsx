import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  move: (
    <>
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 7v6m0 0l-3.5 7M12 13l3.5 7M5 10l7-1 7 1" />
    </>
  ),
  brain: <path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 006 1V4a3 3 0 00-3 0zm6 0a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-6 1" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
  palette: <path d="M12 3a9 9 0 100 18c1.5 0 2-1 1.5-2s0-2 1.5-2h2a3 3 0 003-3A9 9 0 0012 3zM7.5 11h.01M10 7.5h.01M14.5 7.5h.01" />,
  book: <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zm0 14V5m5-2v10l2.5-2L14 13V3" />,
  camera: <path d="M4 8h3l1.5-2h7L17 8h3v11H4zM12 16.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />,
  school: <path d="M3 10l9-5 9 5-9 5zm4 2v5c0 1 2.2 2 5 2s5-1 5-2v-5" />,
  home: <path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z" />,
  chart: <path d="M4 20V4m0 16h16M8 16v-4m4 4V8m4 8v-6" />,
  download: <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14" />,
  play: <path d="M8 5l11 7-11 7z" fill="currentColor" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />,
  mail: <path d="M3 6h18v12H3zm0 1l9 7 9-7" />,
  phone: <path d="M6 3h3l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v3a3 3 0 01-3 3A15 15 0 013 6a3 3 0 013-3z" />,
  pin: <path d="M12 21s-6-5.5-6-11a6 6 0 0112 0c0 5.5-6 11-6 11zm0-8a3 3 0 100-6 3 3 0 000 6z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  external: <path d="M14 4h6v6m0-6L10 14M18 14v6H4V6h6" />,
  group: <path d="M9 11a3 3 0 100-6 3 3 0 000 6zm7 1a2.5 2.5 0 100-5M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6m1-5.5c2.8 0 5 1.8 5 4.5" />,
};

export type IconName = keyof typeof paths;

/** Decorative by default (aria-hidden). Pair with visible text or an aria-label on the parent control. */
export function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
