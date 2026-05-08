import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Layers3, Rocket } from "lucide-react";
import { Container } from "@/components/ui/container";
import { capabilities } from "@/data/capabilities";

const heroStats = [
  { value: "Concept", label: "To launch" },
  { value: "AI", label: "Workflow systems" },
  { value: "Web", label: "SaaS platforms" },
] as const;

const deliverySteps = [
  {
    icon: Layers3,
    title: "Product scope",
    description: "Sharper requirements, technical path, and launch priorities.",
  },
  {
    icon: Code2,
    title: "Engineering build",
    description: "Clean app architecture, integrations, and production UI.",
  },
  {
    icon: Rocket,
    title: "Launch support",
    description: "Deployment, polish, and practical iteration after release.",
  },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-24 pb-10 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 1px 1px, rgba(17,24,39,0.14) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)",
        }}
      />

      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="max-w-[860px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-raised ring-1 ring-surface-border px-3 py-1 text-[11.5px] sm:text-[12.5px] text-ink-muted max-w-full">
              <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
              <span className="truncate sm:hidden">Software Studio · AI Systems</span>
              <span className="hidden sm:inline">Software Studio · Product Engineering · AI Systems</span>
            </div>

            <h1 className="mt-6 sm:mt-7 text-display-xl sm:text-balance">
              A modern software studio building{" "}
              <span className="font-display italic font-normal text-brand">
                products
              </span>
              ,{" "}
              <span className="font-display italic font-normal text-brand">
                apps
              </span>
              , and{" "}
              <span className="font-display italic font-normal text-brand">
                AI systems
              </span>{" "}
              for businesses that want to move fast.
            </h1>

            <p className="mt-5 sm:mt-6 max-w-[680px] text-[15px] sm:text-[16.5px] leading-relaxed text-ink-muted text-pretty">
              We help startups, founders, and growing businesses turn ideas into
              polished digital products through fast execution, strong
              engineering, and product-first thinking.
            </p>

            <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] font-medium text-white hover:bg-ink-soft transition-colors"
              >
                Start a Project
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] font-medium text-ink ring-1 ring-surface-border hover:bg-white transition-colors"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-col gap-4 sm:gap-5">
              <p className="text-[13px] text-ink-subtle max-w-xl leading-relaxed">
                Built by engineers who ship real products. Focused on quality,
                speed, and long-term value.
              </p>
              <ul className="flex flex-wrap gap-2">
                {capabilities.map((c) => (
                  <li
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full bg-surface-raised ring-1 ring-surface-border px-3 py-1.5 text-[12.5px] text-ink-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-ink-subtle" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="rounded-lg bg-surface-raised/82 p-4 ring-1 ring-surface-border shadow-raised backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3 border-b border-surface-border pb-4">
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink-subtle">
                    Build Focus
                  </p>
                  <h2 className="mt-2 font-sans text-[21px] font-medium tracking-tight text-ink">
                    Scope, build, launch.
                  </h2>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                  <CheckCircle2 size={19} strokeWidth={1.9} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg bg-surface-border my-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="bg-surface-raised px-3 py-3">
                    <div className="text-[19px] font-semibold tracking-tight text-ink">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[11.5px] leading-snug text-ink-subtle">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {deliverySteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                        <Icon size={16} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="font-sans text-[14px] font-medium tracking-normal text-ink">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[12.5px] leading-relaxed text-ink-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
