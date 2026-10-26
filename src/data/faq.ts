export type FaqEntry = { q: string; a: string; confirm?: string };

/**
 * Answers are drawn from kalqy.in and its privacy policy and terms.
 * Entries with `confirm` are shown publicly without the note, but listed in docs/product-facts.md.
 */
export const faqs: FaqEntry[] = [
  {
    q: "What is Kalqy?",
    a: "Kalqy is a movement-based learning platform for young children. Games use a webcam and computer vision to follow a child's body movement, so children learn by moving instead of tapping or swiping.",
  },
  {
    q: "Which ages is Kalqy designed for?",
    a: "Kalqy's product description and privacy policy describe it as designed for children aged 3 to 5.",
    confirm: "kalqy.in metadata says PreK-5 and the web demo says 3-6. Confirm the official range.",
  },
  {
    q: "How does the movement-based experience work?",
    a: "The games use your device's webcam to track hand, pose and body movement in real time. Children jump, reach, point and move to play. Kalqy's privacy policy says video is processed primarily on the device to produce movement coordinates, and that webcam data is not used for facial recognition or identification.",
  },
  {
    q: "Which devices are supported?",
    a: "Kalqy is available for Windows (Microsoft Store) and Mac (a downloadable app). It needs a computer with a webcam.",
    confirm: "Minimum system requirements are not published. Confirm Mac chip support and Windows versions.",
  },
  {
    q: "How do I download or install Kalqy?",
    a: "Use the Windows or Mac download buttons on the How it works page. On Mac, the first launch may be blocked by macOS because the app is downloaded outside the App Store; the install guide on that page explains how to allow it.",
  },
  {
    q: "Is any additional hardware required?",
    a: "Kalqy's own description says no special hardware is required beyond a webcam.",
  },
  {
    q: "Can parents use Kalqy at home?",
    a: "Parents can download Kalqy and play at home. Kalqy's terms say access for parents is intended where it has been approved by the school, so please check with Kalqy about home access for your situation.",
    confirm: "Terms describe school-managed access; the site promotes parent insights. Confirm the home-use model.",
  },
  {
    q: "Can schools and educators use Kalqy?",
    a: "Yes. Kalqy is built for classrooms, preschools and early learning centers, and its terms describe school accounts, supervision by educators and school-managed access. Use the schools page to ask about a demo.",
  },
  {
    q: "How is children's information handled?",
    a: "Kalqy's published privacy policy lists what is collected, why, and with whom it is shared (including Google Firebase for authentication, storage, analytics and crash reporting). It states personal information, including webcam-derived data, is not sold. Please read the full policy on the Privacy page.",
  },
  {
    q: "Where can I get support?",
    a: "Email info@kalqy.in or call +91 8943000243. You can also reach Kalqy on WhatsApp from the Contact page.",
  },
];
