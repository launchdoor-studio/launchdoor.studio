import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="pt-16 sm:pt-24 md:pt-36 pb-16 md:pb-24">
      <Container>
        <div className="max-w-xl">
          <span className="eyebrow">404</span>
          <h1 className="mt-5 text-display-lg text-balance">
            This page doesn’t exist — yet.
          </h1>
          <p className="mt-5 text-[15.5px] leading-relaxed text-ink-muted">
            The URL you followed doesn’t map to anything on our site. Head back
            home or explore our services.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-medium text-white hover:bg-ink-soft transition-colors"
            >
              Back to home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-5 py-2.5 text-[13.5px] font-medium text-ink ring-1 ring-surface-border hover:bg-white transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
