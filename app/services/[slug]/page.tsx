import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Code2,
  Smartphone,
  Sparkles,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { services, servicesBySlug } from "@/data/services";
import { ContactCTA } from "@/components/sections/contact-cta";
import { process } from "@/data/capabilities";

type Params = { slug: string };

const iconFor: Record<string, LucideIcon> = {
  "web-development": Code2,
  "mobile-apps": Smartphone,
  "ai-systems": Sparkles,
  "mvp-launches": Rocket,
  "dedicated-build-partner": Users,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) notFound();

  const Icon = iconFor[service.slug];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="pt-16 md:pt-20 pb-6">
        <Container>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[13.5px] text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            All services
          </Link>
        </Container>
      </section>

      <section className="pb-14 md:pb-16">
        <Container>
          <div className="max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              {Icon ? <Icon size={20} strokeWidth={1.75} /> : null}
            </div>
            <h1 className="mt-7 text-display-lg text-balance">
              {service.title}
            </h1>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-muted text-pretty">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-medium text-white hover:bg-ink-soft transition-colors"
              >
                Discuss a project
                <ArrowUpRight size={15} strokeWidth={2} />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-5 py-2.5 text-[13.5px] font-medium text-ink ring-1 ring-surface-border hover:bg-white transition-colors"
              >
                See our products
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <span className="eyebrow">Outcomes</span>
              <h2 className="mt-5 text-display-md text-balance">
                What you can expect.
              </h2>
            </div>
            <div className="md:col-span-7">
              <ul className="divide-y divide-surface-border">
                {service.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-4 py-4 first:pt-0"
                  >
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-brand shrink-0">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    <span className="text-[15.5px] leading-relaxed text-ink">
                      {o}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20 bg-surface-sunken/60">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <span className="eyebrow">Deliverables</span>
              <h2 className="mt-5 text-display-md text-balance">
                What we build for you.
              </h2>
            </div>
            <div className="md:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="rounded-2xl bg-surface-raised ring-1 ring-surface-border p-5 text-[14.5px] text-ink leading-relaxed"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <span className="eyebrow">Process</span>
              <h2 className="mt-5 text-display-md text-balance">
                Honest timelines. Clear cadence.
              </h2>
            </div>
            <div className="md:col-span-7">
              <ol className="divide-y divide-surface-border">
                {process.map((step) => (
                  <li
                    key={step.step}
                    className="flex items-start gap-6 py-5 first:pt-0"
                  >
                    <span className="font-mono text-[12.5px] text-brand tracking-tight shrink-0 pt-0.5">
                      / {step.step}
                    </span>
                    <div>
                      <h3 className="text-[16px] font-medium text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-ink-muted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20 bg-surface-sunken/60">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <span className="eyebrow">Typical stack</span>
              <h2 className="mt-5 text-display-md text-balance">
                Proven tools. Maintainable systems.
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-muted">
                We pick tools for reliability and long-term maintenance, not
                trend cycles.
              </p>
            </div>
            <div className="md:col-span-7 flex flex-wrap gap-2">
              {service.stack.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-surface-raised ring-1 ring-surface-border px-3.5 py-1.5 text-[13px] text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-display-md">Other services</h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-[13.5px] text-ink-muted hover:text-brand transition-colors"
            >
              All services
              <ArrowUpRight size={14} strokeWidth={2} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {others.map((o) => {
              const OIcon = iconFor[o.slug];
              return (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}`}
                  className="group flex flex-col rounded-2xl bg-surface-raised ring-1 ring-surface-border p-6 hover:ring-ink/25 transition-all"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    {OIcon ? <OIcon size={16} strokeWidth={1.75} /> : null}
                  </div>
                  <h3 className="mt-5 text-[16px] font-medium tracking-tight text-ink">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                    {o.summary}
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
