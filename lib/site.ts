export const siteConfig = {
  name: "Launchdoor",
  domain: "launchdoor.studio",
  url: "https://launchdoor.studio",
  description:
    "Launchdoor is a modern software studio building products, apps, and AI systems for businesses that want to move fast.",
  tagline: "A modern software studio.",
  email: "hello@launchdoor.studio",
  altEmail: "aftaab@aftaab.dev",
  social: {
    github: "https://github.com/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
