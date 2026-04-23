import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Sparkles,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { services } from "@/data/services";
import { techCapability } from "@/data/capabilities";
import { ContactCTA } from "@/components/sections/contact-cta";

const iconFor: Record<string, LucideIcon> = {
  "web-development": Code2,
  "mobile-apps": Smartphone,
  "ai-systems": Sparkles,
  "mvp-launches": Rocket,
  "dedicated-build-partner": Users,
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product development, web applications, mobile apps, AI systems, MVP launches, and dedicated build partnerships by Growvth.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-14 md:pb-16">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">Services</span>
            <h1 className="mt-5 text-display-lg text-balance">
              Product engineering for businesses that want to{" "}
              <span className="font-display italic font-normal text-brand">
                move fast
              </span>
              .
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-muted text-pretty">
              From idea to launch. We build complete products with scalable
              architecture and clean user experiences — across web, mobile, and
              AI.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((s) => {
              const Icon = iconFor[s.slug];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col rounded-2xl bg-surface-raised ring-1 ring-surface-border p-7 md:p-9 hover:ring-ink/25 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      {Icon ? <Icon size={19} strokeWidth={1.75} /> : null}
                    </div>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.75}
                      className="text-ink-subtle group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <h2 className="mt-8 text-[22px] font-medium tracking-tight text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted max-w-md">
                    {s.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {s.stack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-surface-sunken px-2.5 py-1 text-[11.5px] text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-surface-sunken/60">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <span className="eyebrow">Capability</span>
              <h2 className="mt-5 text-display-md text-balance">
                Full-stack engineering across the product.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
                We cover the work end-to-end so there are fewer handoffs, fewer
                broken seams, and a clearer path to launch.
              </p>
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
