import Link from "next/link";
import {
  Code2,
  Smartphone,
  Sparkles,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/data/services";

const iconFor: Record<string, LucideIcon> = {
  "web-development": Code2,
  "mobile-apps": Smartphone,
  "ai-systems": Sparkles,
  "mvp-launches": Rocket,
  "dedicated-build-partner": Users,
};

export function ServicesGrid() {
  return (
    <section className="pt-10 pb-14 md:py-28">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
          <SectionHeader
            eyebrow="What we do"
            title={
              <>
                Product engineering, built with
                {" "}
                <span className="font-display italic font-normal">
                  real craft
                </span>
                .
              </>
            }
            description="From idea to launch. We build complete products with scalable architecture and clean user experiences."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink hover:text-brand transition-colors"
          >
            Explore all services
            <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, i) => {
            const Icon = iconFor[service.slug];
            const featured = i === 0;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative flex flex-col rounded-2xl bg-surface-raised ring-1 ring-surface-border p-6 sm:p-7 hover:ring-ink/25 transition-all ${
                  featured ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  {Icon ? <Icon size={18} strokeWidth={1.75} /> : null}
                </div>
                <h3 className="mt-5 sm:mt-6 text-[17.5px] sm:text-[19px] font-medium tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-ink-muted">
                  {service.summary}
                </p>
                <div className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-muted group-hover:text-brand transition-colors">
                  Learn more
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2}
                    className="translate-y-[0.5px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
