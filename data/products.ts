export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  short: string;
  link: string;
  status: string;
  overview: string;
  features: { title: string; description: string }[];
  stack: { label: string; items: string[] }[];
  caseStudy: {
    challenge: string;
    solution: string;
    impact: string;
  };
  accent: "blue" | "emerald" | "violet" | "amber" | "slate";
  logo: string;
};

export const products: Product[] = [
  {
    slug: "botttle",
    name: "Botttle",
    category: "Client operations",
    tagline: "The client portal you actually own.",
    short:
      "Manage projects, invoices, time tracking, and client collaboration in one self-hosted workspace.",
    link: "https://botttle.dev",
    status: "Active Development",
    overview:
      "Botttle is a self-hosted client portal designed for freelancers and small studios who want to manage their entire business — projects, clients, and payments — in one place without relying on restrictive third-party SaaS platforms.",
    features: [
      {
        title: "Project Management",
        description:
          "Track milestones, tasks, and progress with a client-facing interface.",
      },
      {
        title: "Invoicing & Payments",
        description:
          "Professional PDF invoicing with built-in support for Lemon Squeezy and multiple currencies.",
      },
      {
        title: "Time Tracking",
        description:
          "Integrated timer with billable flags and CSV reporting for administrative transparency.",
      },
      {
        title: "Collaboration",
        description:
          "Project-scoped comments, file uploads, and a dedicated portal for clients to view their specific data.",
      },
      {
        title: "Self-Hosted",
        description: "Full data ownership with Docker deployment and PostgreSQL.",
      },
    ],
    stack: [
      { label: "Runtime", items: ["Bun", "Node.js"] },
      {
        label: "Frontend",
        items: ["React (Vite)", "Tailwind CSS", "shadcn/ui", "TanStack Query"],
      },
      { label: "Backend", items: ["Fastify", "Prisma ORM", "PostgreSQL"] },
      {
        label: "Infrastructure",
        items: ["Docker", "Redis (BullMQ)", "Resend"],
      },
    ],
    caseStudy: {
      challenge:
        "Freelancers are often forced to choose between heavyweight agency tools or rigid, expensive billing apps that lock their data behind a subscription.",
      solution:
        "We built Botttle to bridge this gap. It provides a SaaS-like experience that is entirely self-hosted. We focused on a minimal, productivity-first UI that makes both the freelancer and the client feel like they are using a premium, custom-built system.",
      impact:
        "Freelancers gain professional credibility with a custom-branded portal and save thousands in subscription fees by owning their infrastructure.",
    },
    accent: "blue",
    logo: "/product-logos/botttle.svg",
  },
  {
    slug: "cairnly",
    name: "Cairnly",
    category: "CRM",
    tagline: "The CRM that respects your data, taste, and time.",
    short:
      "A self-hosted relationship CRM with timelines, scheduling, forms, automations, reports, and optional local or BYOK AI.",
    link: "https://cairnly.app",
    status: "Active Development",
    overview:
      "Cairnly is a self-hosted CRM built around the full relationship timeline: contacts, deals, notes, email, calendar events, lead forms, booking pages, reports, and automations in one workspace. AI can run locally, with a user-provided key, or be turned off entirely.",
    features: [
      {
        title: "Relationship timelines",
        description:
          "Contacts, notes, emails, meetings, forms, bookings, and activity history stay attached to the person or company record.",
      },
      {
        title: "Deals and reporting",
        description:
          "Pipeline views, CSV exports, and opinionated reports for revenue, conversion, activity, aging deals, and more.",
      },
      {
        title: "Scheduling and forms",
        description:
          "Public booking pages, hosted lead forms, embeds, and webhook endpoints for external workflows.",
      },
      {
        title: "Email and calendar",
        description:
          "Gmail OAuth, SMTP/IMAP, Google Calendar, CalDAV, templates, sequences, and timeline-linked communication.",
      },
      {
        title: "AI on your terms",
        description:
          "Workspace-level AI modes for local models, bring-your-own provider keys, or fully disabled AI surfaces.",
      },
    ],
    stack: [
      { label: "App", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["tRPC", "Better Auth", "Drizzle ORM"] },
      { label: "Data", items: ["PostgreSQL", "pg-boss"] },
      { label: "Infrastructure", items: ["Docker Compose", "Caddy", "Astro"] },
    ],
    caseStudy: {
      challenge:
        "Most CRMs either hide useful relationship context behind tabs or push small teams into hosted platforms that own the workflow and the data.",
      solution:
        "Cairnly keeps the contact timeline as the center of the product and makes self-hosting a first-class path, while still supporting the automation, scheduling, email, calendar, and AI surfaces modern teams expect.",
      impact:
        "Teams get a capable CRM they can run on their own infrastructure, adapt to their process, and use without surrendering relationship data to a closed platform.",
    },
    accent: "emerald",
    logo: "/product-logos/cairnly.svg",
  },
  {
    slug: "foliomint",
    name: "Foliomint",
    category: "Portfolio publishing",
    tagline: "Your resume, turned into a portfolio you are proud to share.",
    short:
      "Turn your resume into a professional portfolio website instantly.",
    link: "https://foliomint.site",
    status: "Work in progress",
    overview:
      "FolioMint automates the process of creating a professional online presence. It takes a standard resume and transforms it into a polished, live portfolio website in minutes.",
    features: [
      {
        title: "Resume-to-Site",
        description:
          "Instant generation of a personal site from a PDF or text resume.",
      },
      {
        title: "Live Editor",
        description:
          "A guided wizard-style editor with a live preview of the site.",
      },
      {
        title: "Custom Themes",
        description:
          "Readability-focused themes designed to showcase personality and skills.",
      },
      {
        title: "Blog & Content",
        description:
          "Integrated blogging platform so builders can share their voice alongside their work.",
      },
      {
        title: "Scalable Hosting",
        description: "Built-in hosting and custom domain support.",
      },
    ],
    stack: [
      { label: "Framework", items: ["Next.js 14 (App Router)"] },
      { label: "Language", items: ["TypeScript"] },
      { label: "Styling", items: ["Tailwind CSS", "Framer Motion"] },
      { label: "Database", items: ["Drizzle ORM", "SQLite / PostgreSQL"] },
    ],
    caseStudy: {
      challenge:
        "For most students and career-changers, building a personal portfolio is a side quest that takes weeks of fighting templates or learning complex web builders.",
      solution:
        "FolioMint solves the blank-page problem. By using the resume as the source of truth, we eliminate the friction of starting. The live-preview editor allows for rapid refinement, so users spend less time building and more time applying for opportunities.",
      impact:
        "Users go from a static PDF to a live, professional web presence in under five minutes, significantly improving their personal brand and job-market competitiveness.",
    },
    accent: "emerald",
    logo: "/product-logos/foliomint.svg",
  },
  {
    slug: "openconduit",
    name: "OpenConduit",
    category: "WhatsApp CRM",
    tagline: "The open-source, self-hostable WhatsApp CRM.",
    short: "A self-hosted WhatsApp CRM built for solo operators and small teams.",
    link: "https://openconduit.dev",
    status: "Pre-release / Active Development",
    overview:
      "OpenConduit is a privacy-first CRM built specifically for businesses that use WhatsApp as their primary communication channel. It provides a professional interface for managing conversations and leads via the official WhatsApp Business API.",
    features: [
      {
        title: "WhatsApp Integration",
        description: "Connects via Meta Cloud API, 360dialog, or Twilio.",
      },
      {
        title: "Lead Pipeline",
        description:
          "A Kanban-style pipeline to track contacts from New Lead to Converted.",
      },
      {
        title: "Auto-Tagging",
        description:
          "Automatically tag contacts based on keywords in inbound messages.",
      },
      {
        title: "24h Session Window",
        description:
          "Visual cues and enforcement for WhatsApp’s messaging policies.",
      },
      {
        title: "Zero Telemetry",
        description:
          "Fully self-contained software — no customer data ever leaves your infrastructure.",
      },
    ],
    stack: [
      { label: "Backend", items: ["Node.js", "Fastify / Express", "Prisma"] },
      { label: "Frontend", items: ["React", "Tailwind CSS"] },
      {
        label: "Infrastructure",
        items: ["Docker Compose", "Caddy (Automatic TLS)", "Redis"],
      },
    ],
    caseStudy: {
      challenge:
        "Small businesses in emerging markets rely heavily on WhatsApp but lack a central way to manage leads. Existing CRMs are either too expensive or compromise data privacy by routing messages through their own servers.",
      solution:
        "We developed OpenConduit as a solo-first, team-ready utility. By making it self-hostable and open-source, we give businesses full control over their most sensitive customer data while providing a high-end CRM experience.",
      impact:
        "Small businesses can now scale their WhatsApp operations with professional lead tracking and automated workflows without the risk of vendor lock-in or per-seat pricing.",
    },
    accent: "violet",
    logo: "/product-logos/openconduit.svg",
  },
  {
    slug: "queriously",
    name: "Queriously",
    category: "Research tooling",
    tagline: "Research copilot and technical document reader.",
    short:
      "A PDF reader with research copilot capabilities for faster learning and document workflows.",
    link: "https://queriously.app",
    status: "Beta",
    overview:
      "Queriously is a local-first desktop application designed for deep engagement with technical literature. It combines a high-performance PDF reader with a sidecar AI service to help researchers, students, and engineers understand complex documents faster.",
    features: [
      {
        title: "Marginalia Engine",
        description:
          "AI-generated notes, contradictions, and simplifications rendered directly in the margins of the PDF.",
      },
      {
        title: "Research Sessions",
        description:
          "Named investigations that synthesize findings across multiple papers.",
      },
      {
        title: "Grounded QA",
        description:
          "A RAG-based chat engine with source-cited responses and page-level accuracy.",
      },
      {
        title: "Local-First Privacy",
        description:
          "All embeddings and AI processing (via Ollama) can run entirely offline.",
      },
      {
        title: "Equations & Plots",
        description:
          "Extracts and interprets complex equations and data plots from papers.",
      },
    ],
    stack: [
      { label: "Shell", items: ["Tauri 2 (Rust)"] },
      { label: "Frontend", items: ["React 18", "TypeScript", "Zustand"] },
      {
        label: "AI Backend",
        items: ["Python 3.11 Sidecar (FastAPI)", "LiteLLM", "ChromaDB"],
      },
      { label: "PDF Engine", items: ["pdfjs-dist", "PyMuPDF"] },
    ],
    caseStudy: {
      challenge:
        "Traditional PDF readers are passive, and existing AI chat-with-PDF tools are disconnected from the reading experience, leading to context-switching fatigue.",
      solution:
        "Queriously was built to be a participant in the reading process. We moved the AI from a sidebar chat into the Marginalia — whispering insights in the margins exactly where the user is reading. Local-first architecture protects researchers’ intellectual property.",
      impact:
        "Researchers synthesize information across dozens of papers faster, with grounded AI assistance that reduces the cognitive load of reading dense technical literature.",
    },
    accent: "amber",
    logo: "/product-logos/queriously.png",
  },
  {
    slug: "rezumate",
    name: "Rezumate",
    category: "Resume tooling",
    tagline: "AI-powered resume intelligence for smarter hiring.",
    short:
      "A resume intelligence tool for analyzing, comparing, and improving resumes against job descriptions.",
    link: "https://resume.app",
    status: "Work in progress",
    overview:
      "Rezumate is a web-based intelligence tool that helps recruiters and job seekers analyze, compare, and rank resumes against specific job descriptions using high-performance AI.",
    features: [
      {
        title: "Intelligent Scoring",
        description:
          "Detailed analysis of a resume’s alignment with a job description, scored across multiple criteria.",
      },
      {
        title: "Side-by-Side Comparison",
        description:
          "Compare two candidates directly against a single role to identify the best fit.",
      },
      {
        title: "Bulk Ranking",
        description:
          "Upload and rank large pools of resumes to rapidly shortlist top candidates.",
      },
      {
        title: "AI Chat Assistant",
        description:
          "Interactive chat for personalized suggestions on how to improve a resume.",
      },
      {
        title: "High-Performance AI",
        description:
          "Powered by Groq for near-instant inference and analysis.",
      },
    ],
    stack: [
      { label: "Backend", items: ["Python", "FastAPI"] },
      { label: "Frontend", items: ["Jinja2 Templates", "Tailwind CSS"] },
      { label: "AI Engine", items: ["Groq (Llama 3)", "Pydantic"] },
      { label: "Environment", items: ["uv (Fast Python Package Manager)"] },
    ],
    caseStudy: {
      challenge:
        "Traditional Applicant Tracking Systems are often black boxes that filter candidates on keyword matching — leading to missed talent and frustrated job seekers who don’t understand why they weren’t selected.",
      solution:
        "Rezumate provides a transparent, intelligent layer for resume screening. By using LLMs to understand the context of experience rather than keywords, we provide actionable feedback. We optimized for speed with Groq’s Llama 3 API, making analysis feel instantaneous.",
      impact:
        "Recruiters reduce screening time by over 70% through automated ranking, while job seekers gain a clear roadmap for aligning their experience with the roles they want.",
    },
    accent: "slate",
    logo: "/product-logos/rezumate.png",
  },
];

export const productsBySlug: Record<string, Product> = Object.fromEntries(
  products.map((p) => [p.slug, p]),
);
