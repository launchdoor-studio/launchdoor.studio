export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  items?: NavItem[];
};

export const primaryNav: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    items: [
      {
        label: "Web Development",
        href: "/services/web-development",
        description: "Dashboards, portals, SaaS, internal tools.",
      },
      {
        label: "Mobile Apps",
        href: "/services/mobile-apps",
        description: "iOS and Android apps built for growth.",
      },
      {
        label: "AI Systems",
        href: "/services/ai-systems",
        description: "Copilots, automations, and ML-powered features.",
      },
      {
        label: "MVP Launches",
        href: "/services/mvp-launches",
        description: "Validate fast without compromising quality.",
      },
      {
        label: "Dedicated Build Partner",
        href: "/services/dedicated-build-partner",
        description: "A long-term execution team for your roadmap.",
      },
    ],
  },
  {
    label: "Work",
    href: "/work",
    items: [
      {
        label: "Products",
        href: "/work",
        description: "Products built and shipped by Launchdoor.",
      },
      {
        label: "Botttle",
        href: "/work/botttle",
        description: "A client portal you actually own.",
      },
      {
        label: "Queriously",
        href: "/work/queriously",
        description: "Research copilot for technical PDFs.",
      },
      {
        label: "OpenConduit",
        href: "/work/openconduit",
        description: "Self-hosted WhatsApp CRM.",
      },
      {
        label: "Foliomint",
        href: "/work/foliomint",
        description: "Turn your resume into a portfolio.",
      },
      {
        label: "Rezumate",
        href: "/work/rezumate",
        description: "AI-powered resume intelligence.",
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Apps", href: "/services/mobile-apps" },
    { label: "AI Systems", href: "/services/ai-systems" },
    { label: "MVP Launches", href: "/services/mvp-launches" },
    { label: "Dedicated Build Partner", href: "/services/dedicated-build-partner" },
  ],
  Work: [
    { label: "All Products", href: "/work" },
    { label: "Botttle", href: "/work/botttle" },
    { label: "Queriously", href: "/work/queriously" },
    { label: "OpenConduit", href: "/work/openconduit" },
    { label: "Foliomint", href: "/work/foliomint" },
    { label: "Rezumate", href: "/work/rezumate" },
  ],
} as const;
