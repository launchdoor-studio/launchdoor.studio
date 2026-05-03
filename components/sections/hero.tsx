import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { capabilities } from "@/data/capabilities";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-28 pb-10 md:pb-24">
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
        <div className="max-w-4xl">
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

          <p className="mt-5 sm:mt-6 max-w-2xl text-[15px] sm:text-[16.5px] leading-relaxed text-ink-muted text-pretty">
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

          <div className="mt-8 sm:mt-14 flex flex-col gap-4 sm:gap-5">
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
      </Container>
    </section>
  );
}
