import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { products, productsBySlug } from "@/data/products";
import { ContactCTA } from "@/components/sections/contact-cta";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productsBySlug[slug];
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.overview,
    alternates: { canonical: `/work/${product.slug}` },
  };
}

export default async function ProductCaseStudy({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = productsBySlug[slug];
  if (!product) notFound();

  const host = new URL(product.link).host;

  return (
    <>
      <section className="pt-16 md:pt-20 pb-6">
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[13.5px] text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            All work
          </Link>
        </Container>
      </section>

      <section className="pb-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-8">
              <div className="flex flex-wrap items-center gap-2 text-[12.5px]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-brand font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {product.status}
                </span>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 rounded-full bg-surface-raised ring-1 ring-surface-border px-2.5 py-1 text-ink-muted font-mono hover:text-brand transition-colors"
                >
                  {host}
                  <ArrowUpRight size={12} strokeWidth={2} />
                </a>
              </div>
              <h1 className="mt-6 text-display-lg text-balance">
                {product.name}
                <span className="block text-ink-muted font-display italic font-normal text-[60%] mt-2">
                  {product.tagline}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-ink-muted text-pretty">
                {product.overview}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-medium text-white hover:bg-ink-soft transition-colors"
                >
                  Visit {host}
                  <ArrowUpRight size={15} strokeWidth={2} />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-5 py-2.5 text-[13.5px] font-medium text-ink ring-1 ring-surface-border hover:bg-white transition-colors"
                >
                  Build something similar
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <span className="eyebrow">Key features</span>
              <h2 className="mt-5 text-display-md text-balance">
                What ships in {product.name}.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((f) => (
                  <li
                    key={f.title}
                    className="flex flex-col rounded-2xl bg-surface-raised ring-1 ring-surface-border p-5"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        size={16}
                        strokeWidth={1.75}
                        className="text-brand"
                      />
                      <h3 className="text-[14.5px] font-medium text-ink">
                        {f.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                      {f.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20 bg-surface-sunken/60">
        <Container>
          <span className="eyebrow">Case study</span>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            <CaseBlock label="Challenge" content={product.caseStudy.challenge} />
            <CaseBlock label="Solution" content={product.caseStudy.solution} />
            <CaseBlock label="Impact" content={product.caseStudy.impact} />
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <span className="eyebrow">Under the hood</span>
              <h2 className="mt-5 text-display-md text-balance">
                Tech stack.
              </h2>
            </div>
            <div className="md:col-span-8">
              <dl className="divide-y divide-surface-border">
                {product.stack.map((group) => (
                  <div
                    key={group.label}
                    className="grid grid-cols-3 sm:grid-cols-4 gap-4 py-5 first:pt-0"
                  >
                    <dt className="text-[13px] text-ink-subtle col-span-1 font-mono">
                      {group.label}
                    </dt>
                    <dd className="col-span-2 sm:col-span-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-full bg-surface-raised ring-1 ring-surface-border px-2.5 py-1 text-[12.5px] text-ink"
                        >
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <OtherProducts currentSlug={product.slug} />
      <ContactCTA />
    </>
  );
}

function CaseBlock({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-surface-raised ring-1 ring-surface-border p-6 md:p-7">
      <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-brand">
        {label}
      </span>
      <p className="mt-4 text-[14.5px] leading-relaxed text-ink">{content}</p>
    </div>
  );
}

function OtherProducts({ currentSlug }: { currentSlug: string }) {
  const others = products.filter((p) => p.slug !== currentSlug).slice(0, 3);
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-display-md">More from Growvth</h2>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[13.5px] text-ink-muted hover:text-brand transition-colors"
          >
            All work
            <ArrowUpRight size={14} strokeWidth={2} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group flex flex-col rounded-2xl bg-surface-raised ring-1 ring-surface-border p-6 hover:ring-ink/25 transition-all"
            >
              <span className="font-mono text-[11.5px] text-ink-subtle">
                {new URL(p.link).host}
              </span>
              <h3 className="mt-3 text-[18px] font-medium tracking-tight text-ink">
                {p.name}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                {p.tagline}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-ink-muted group-hover:text-brand transition-colors">
                Case study
                <ArrowUpRight
                  size={13}
                  strokeWidth={2}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
