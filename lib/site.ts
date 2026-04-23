export const siteConfig = {
  name: "Growvth",
  domain: "growvth.com",
  url: "https://growvth.com",
  description:
    "Growvth is a modern software studio building products, apps, and AI systems for businesses that want to move fast.",
  tagline: "A modern software studio.",
  email: "hello@growvth.com",
  altEmail: "aftaab@aftaab.dev",
  social: {
    github: "https://github.com/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
