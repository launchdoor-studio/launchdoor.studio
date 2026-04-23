import type { Metadata } from "next";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have an idea, product, or business problem worth solving? Let’s talk about how Growvth can help you build it.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-14 md:pb-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <span className="eyebrow">Contact</span>
              <h1 className="mt-5 text-display-lg text-balance">
                Let’s{" "}
                <span className="font-display italic font-normal text-brand">
                  start a conversation
                </span>
                .
              </h1>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-muted text-pretty">
                Have an idea, product, or business problem worth solving? Tell
                us about your goals and we’ll get back within one business day.
              </p>

              <div className="mt-10 flex flex-col gap-3">
                <ContactRow
                  icon={<Mail size={16} strokeWidth={1.75} />}
                  label="Email"
                  value={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                />
                <ContactRow
                  icon={<MessageSquare size={16} strokeWidth={1.75} />}
                  label="Alternate"
                  value={siteConfig.altEmail}
                  href={`mailto:${siteConfig.altEmail}`}
                />
              </div>

              <div className="mt-10 rounded-2xl bg-surface-sunken p-5">
                <h2 className="text-[14px] font-medium text-ink">
                  What we’re best at
                </h2>
                <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[13.5px] text-ink-muted">
                  <li>Web applications</li>
                  <li>Mobile apps</li>
                  <li>AI systems</li>
                  <li>MVP launches</li>
                  <li>SaaS platforms</li>
                  <li>Internal tools</li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between gap-4 rounded-xl bg-surface-raised ring-1 ring-surface-border px-4 py-3 hover:ring-ink/25 transition-all"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand">
          {icon}
        </span>
        <div className="flex flex-col">
          <span className="text-[11.5px] uppercase tracking-[0.14em] text-ink-subtle">
            {label}
          </span>
          <span className="text-[14px] text-ink">{value}</span>
        </div>
      </div>
      <ArrowUpRight
        size={15}
        strokeWidth={1.75}
        className="text-ink-subtle group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
      />
    </a>
  );
}
