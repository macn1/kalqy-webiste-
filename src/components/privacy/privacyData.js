export const PRIVACY_IMG = "/images/privacy";
export const lastUpdated = "Public policy last updated 11 August 2026";

export const privacyExtras = {
  source: "Current source context: kalqy.in/privacy.html",
  calloutTitle: "Read the full current policy.",
  calloutText:
    "Source context only: the public policy describes video processing primarily on-device, no facial recognition or identification, possible gameplay-data sync and Firebase providers. This is not a statement of zero data collection and is not a substitute for the approved policy.",
  calloutNote: "The notes above summarise supplied research; they are not newly authored legal commitments.",
  contactTitle: "Contact Kalqy",
  contactNote: "[CLIENT/LEGAL APPROVAL REQUIRED: confirm privacy-specific contact and process]",
  showAddress: false,
};

// Section copy is the placeholder text from the approved layout draft; the legal owner replaces it with the approved policy text.
export const sections = [
  {
    id: "scope",
    toc: "Scope & responsibility",
    title: "Scope & responsibility",
    paras: [
      "[INSERT CLIENT-APPROVED PRIVACY TEXT: scope, responsible legal entity and policy applicability.]",
      "[INSERT CLIENT-APPROVED TEXT: school, authorised staff, supervised student and parent contexts.]",
    ],
  },
  {
    id: "collection",
    toc: "Information & collection",
    title: "Information & collection",
    paras: [
      "[INSERT CLIENT-APPROVED PRIVACY TEXT: information categories and when information is collected.]",
      "[INSERT CLIENT-APPROVED TEXT: camera permission, device information and gameplay-data handling.]",
    ],
  },
  {
    id: "camera",
    toc: "Camera & movement processing",
    title: "Camera & movement processing",
    paras: [
      "[INSERT CLIENT-APPROVED PRIVACY TEXT: video and body-tracking processing, including applicable on-device and other processing.]",
      "[INSERT CLIENT-APPROVED TEXT: facial recognition / identification statement and its precise scope.]",
    ],
  },
  {
    id: "use",
    toc: "Use of information",
    title: "Use of information",
    paras: [
      "[INSERT CLIENT-APPROVED PRIVACY TEXT: purposes of processing and any applicable legal bases.]",
      "[INSERT CLIENT-APPROVED TEXT: permitted operational uses, account access and school responsibilities.]",
    ],
  },
  {
    id: "sharing",
    toc: "Providers & data sharing",
    title: "Providers & data sharing",
    paras: [
      "[INSERT CLIENT-APPROVED PRIVACY TEXT: service providers, including Firebase where applicable.]",
      "[INSERT CLIENT-APPROVED TEXT: gameplay sync, recipients and cross-border handling if applicable.]",
    ],
  },
  {
    id: "retention",
    toc: "Retention & security",
    title: "Retention & security",
    paras: [
      "[INSERT CLIENT-APPROVED PRIVACY TEXT: retention periods or criteria, deletion and security measures.]",
      "[INSERT CLIENT-APPROVED TEXT: limitations, safeguards and responsibilities. No new commitment is drafted here.]",
    ],
  },
  {
    id: "children",
    toc: "Children, choices & rights",
    title: "Children, choices & rights",
    paras: [
      "[INSERT CLIENT-APPROVED PRIVACY TEXT: children’s information, school-approved access and adult responsibilities.]",
      "[INSERT CLIENT-APPROVED TEXT: available rights, requests, permission choices and how to exercise them.]",
    ],
  },
  {
    id: "updates",
    toc: "Updates & contact",
    title: "Updates & contact",
    paras: [
      "[INSERT CLIENT-APPROVED PRIVACY TEXT: policy updates, effective dates and contact process.]",
      "[INSERT CLIENT-APPROVED TEXT: request handling details and any required privacy contact information.]",
    ],
  },
];
