export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Games", href: "/games" },
  { label: "How it works", href: "/product" },
  { label: "For schools", href: "/schools" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const headerCta: NavItem = { label: "Get Kalqy", href: "/product#download" };

export const footerGroups: { title: string; links: NavItem[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Games", href: "/games" },
      { label: "How it works", href: "/product" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Families & schools",
    links: [
      { label: "For parents", href: "/product#parents" },
      { label: "For schools & educators", href: "/schools" },
      { label: "About Kalqy", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalNav: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
