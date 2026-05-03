import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { footerNav } from "@/data/nav";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80 mt-16 md:mt-24">
      <Container className="py-12 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-12">
          <div className="md:col-span-5 max-w-md">
            <Logo variant="white" />
            <p className="mt-5 text-[14.5px] sm:text-[15px] leading-relaxed text-white/70">
              Launchdoor builds modern products, apps, and AI systems for
              businesses that want to move fast.
            </p>
            <div className="mt-6 flex flex-col gap-1.5 text-[13px] sm:text-[13.5px]">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white hover:text-brand-200 transition-colors break-all"
              >
                {siteConfig.email}
              </a>
              <a
                href={`mailto:${siteConfig.altEmail}`}
                className="text-white/60 hover:text-white transition-colors break-all"
              >
                {siteConfig.altEmail}
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(footerNav).map(([group, items]) => (
              <div key={group}>
                <div className="text-[11.5px] sm:text-[12px] uppercase tracking-[0.14em] text-white/45">
                  {group}
                </div>
                <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 text-[13.5px] sm:text-[14px]">
                  {items.map((i) => (
                    <li key={i.href}>
                      <Link
                        href={i.href}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-16 border-t border-white/10 pt-6 md:pt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 text-[12px] sm:text-[12.5px] text-white/50">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="max-w-md">
            Built by engineers who ship real products. Focused on quality,
            speed, and long-term value.
          </p>
        </div>
      </Container>
    </footer>
  );
}
