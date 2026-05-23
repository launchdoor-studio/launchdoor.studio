import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="py-14 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink text-white px-6 py-10 sm:px-8 sm:py-14 md:px-14 md:py-20">
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
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 md:items-end">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 text-[11.5px] sm:text-[12.5px] uppercase tracking-[0.14em] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                Let’s build
              </span>
              <h2 className="mt-4 sm:mt-5 text-display-lg text-white text-balance">
                Have an idea, product, or business problem{" "}
                <span className="font-display italic font-semibold text-brand-200">
                  worth solving
                </span>
                ?
              </h2>
              <p className="mt-4 sm:mt-5 max-w-xl text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/70">
                Let’s talk about how Launchdoor can help you build it. Tell us
                about your goals and we’ll get back within one business day.
              </p>
            </div>
            <div className="md:col-span-5 w-full md:flex md:flex-col md:items-end md:gap-3">
              <div className="flex flex-col gap-2 md:hidden">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13.5px] font-medium text-ink hover:bg-brand-100 transition-colors w-full"
                >
                  Start a Conversation
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full ring-1 ring-white/15 px-5 py-3 text-[13.5px] font-medium text-white/85 hover:text-white hover:ring-white/35 transition-colors w-full"
                >
                  <Mail size={15} strokeWidth={1.75} className="text-white/55" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </div>

              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink hover:bg-brand-100 transition-colors"
              >
                Start a Conversation
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <p className="hidden md:block text-[13px] text-white/50 text-right">
                or email{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/85 underline decoration-white/25 underline-offset-[3px] hover:decoration-white/60 hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
