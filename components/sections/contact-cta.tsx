import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink text-white px-8 py-14 md:px-14 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(1px 1px at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse at 100% 0%, black 0%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 100% 0%, black 0%, transparent 70%)",
            }}
          />
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.14em] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                Let’s build
              </span>
              <h2 className="mt-5 text-display-lg text-white text-balance">
                Have an idea, product, or business problem{" "}
                <span className="font-display italic font-normal text-brand-200">
                  worth solving
                </span>
                ?
              </h2>
              <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/70">
                Let’s talk about how Launchdoor can help you build it. Tell us
                about your goals and we’ll get back within one business day.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-3 md:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink hover:bg-brand-100 transition-colors"
              >
                Start a Conversation
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[13.5px] text-white/60 hover:text-white transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
