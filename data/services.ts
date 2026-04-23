export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Applications",
    short: "Web Apps",
    summary:
      "Dashboards, portals, admin systems, marketplaces, booking systems, and custom business software.",
    description:
      "We design and build modern web applications for teams that need reliable software to run real operations — not just marketing sites. Every surface is engineered for speed, clarity, and long-term maintainability.",
    outcomes: [
      "Clear information architecture",
      "Fast, responsive interfaces",
      "Scalable data and API layers",
      "Predictable release cadence",
    ],
    deliverables: [
      "Custom dashboards and admin panels",
      "Client and customer portals",
      "Marketplaces and booking systems",
      "Internal tooling and operations software",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Applications",
    short: "Mobile Apps",
    summary:
      "Modern iOS and Android apps designed for growth, usability, and long-term maintainability.",
    description:
      "From concept to store release. We build mobile apps that feel native, ship updates reliably, and hold up under real customer workloads.",
    outcomes: [
      "Native-feeling iOS and Android experiences",
      "Offline-capable data models",
      "Secure auth and payments",
      "Shippable release pipelines",
    ],
    deliverables: [
      "Cross-platform apps",
      "Native integrations",
      "Push notifications and analytics",
      "Store submission and release management",
    ],
    stack: ["React Native", "Expo", "Swift", "Kotlin", "Fastlane"],
  },
  {
    slug: "ai-systems",
    title: "AI Systems",
    short: "AI Integrations",
    summary:
      "AI copilots, automation tools, smart workflows, search systems, recommendation engines, and ML-powered features.",
    description:
      "Practical AI, not demos. We integrate language models, retrieval, and automation into the parts of a product that actually benefit from them — with clear evaluations and production safety built in.",
    outcomes: [
      "Grounded, source-cited responses",
      "Measured latency and cost",
      "Evaluated accuracy and failure modes",
      "Safe handling of user data",
    ],
    deliverables: [
      "Copilots inside existing products",
      "RAG and search systems",
      "Automations and agent workflows",
      "Embeddings and recommendation engines",
    ],
    stack: ["OpenAI", "Anthropic", "Ollama", "Chroma", "pgvector", "LiteLLM"],
  },
  {
    slug: "mvp-launches",
    title: "MVP Launches",
    short: "MVPs",
    summary:
      "Need to validate fast? We help founders launch MVPs quickly without compromising quality.",
    description:
      "A focused build sprint to take an idea from doc to a real product in the market. We cut scope ruthlessly, keep the architecture honest, and leave you with something you can grow into — not throw away.",
    outcomes: [
      "Shippable product in weeks, not quarters",
      "A validated core user flow",
      "A codebase you can keep building on",
      "Clear next milestones after launch",
    ],
    deliverables: [
      "Scoped MVP definition",
      "Core product build",
      "Deployment and monitoring",
      "Handoff and iteration plan",
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "Vercel", "Stripe"],
  },
  {
    slug: "dedicated-build-partner",
    title: "Dedicated Build Partner",
    short: "Build Partner",
    summary:
      "Need a reliable technical team? We work closely with businesses as long-term execution partners.",
    description:
      "For founders and teams who need ongoing engineering capacity without the overhead of hiring. We act as an embedded product team — planning, shipping, and iterating alongside you.",
    outcomes: [
      "Predictable engineering throughput",
      "Clear roadmap and sprint cadence",
      "Shared ownership of product quality",
      "Long-term system maintainability",
    ],
    deliverables: [
      "Roadmap and sprint planning",
      "Ongoing feature delivery",
      "Infrastructure and reliability work",
      "Hiring and handoff support",
    ],
    stack: ["Full-stack", "DevOps", "Product architecture"],
  },
];

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s]),
);
