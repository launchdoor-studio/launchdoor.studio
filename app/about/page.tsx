import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { whyLaunchdoor, audience, techCapability } from "@/data/capabilities";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Launchdoor is an independent software studio focused on building useful products and helping ambitious businesses move faster through technology.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-12 sm:pt-16 md:pt-28 pb-10 md:pb-16">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">About Launchdoor</span>
            <h1 className="mt-5 text-display-lg text-balance">
              An independent software studio building useful{" "}
              <span className="font-display italic font-normal text-brand">
                products
              </span>
              .
            </h1>
            <p className="mt-6 text-[16.5px] leading-relaxed text-ink-muted text-pretty">
              Launchdoor is an independent software studio focused on building
              useful products and helping ambitious businesses move faster
              through technology.
            </p>
            <p className="mt-4 text-[16.5px] leading-relaxed text-ink-muted text-pretty">
              We combine engineering discipline with product thinking to create
              software that is practical, scalable, and built to last.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Stat label="Real products shipped" value="5+" caption="and counting" />
            <Stat
              label="Focus"
              value="Product-first"
              caption="engineering with real craft"
            />
            <Stat
              label="Preference"
              value="Self-hosted"
              caption="and open-source where it matters"
            />
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-24 bg-surface-sunken/60">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            <div className="md:col-span-5">
              <span className="eyebrow">Principles</span>
              <h2 className="mt-5 text-display-md text-balance">
                How we think about the work.
              </h2>
            </div>
            <div className="md:col-span-7">
              <ul className="divide-y divide-surface-border">
                {whyLaunchdoor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-brand shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    </span>
                    <span className="text-[15.5px] text-ink leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            <div className="md:col-span-5">
              <span className="eyebrow">Who we work with</span>
              <h2 className="mt-5 text-display-md text-balance">
                Founders, teams, and businesses ready to ship.
              </h2>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {audience.map((a) => (
                <div
                  key={a.title}
                  className="flex flex-col rounded-2xl bg-surface-raised ring-1 ring-surface-border p-6"
                >
                  <h3 className="text-[16px] font-medium tracking-tight text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-24 bg-surface-sunken/60">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            <div className="md:col-span-5">
              <span className="eyebrow">Capability</span>
              <h2 className="mt-5 text-display-md text-balance">
                What we cover, end-to-end.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
                Frontend, backend, mobile, AI, cloud, and product architecture —
                under one team so there are fewer handoffs.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink hover:text-brand transition-colors"
              >
                See our services
                <ArrowUpRight size={14} strokeWidth={2} />
              </Link>
            </div>
            <div className="md:col-span-7">
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {techCapability.map((c) => (
                  <li
                    key={c}
                    className="rounded-xl bg-surface-raised ring-1 ring-surface-border px-4 py-3 text-[13.5px] text-ink"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}

function Stat({
  label,
  value,
  caption,
}: {
  label: string;
  value: string;
  caption: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-surface-raised ring-1 ring-surface-border p-5 sm:p-6 md:p-7">
      <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-subtle">
        {label}
      </span>
      <span className="mt-5 sm:mt-6 text-[28px] sm:text-[34px] md:text-[40px] font-medium tracking-tight text-ink leading-none">
        {value}
      </span>
      <span className="mt-3 text-[13px] sm:text-[13.5px] text-ink-muted leading-relaxed">
        {caption}
      </span>
    </div>
  );
}
