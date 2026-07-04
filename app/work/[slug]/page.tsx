import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { products, productsBySlug, type Product } from "@/data/products";
import { ContactCTA } from "@/components/sections/contact-cta";
import { ProductMark } from "@/components/sections/product-preview";
import { ProductMockup } from "@/components/product-ui";

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

export default async function ProductNotesPage({
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
      <section className="pt-10 sm:pt-12 md:pt-20 pb-4 md:pb-6">
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[13.5px] text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            Studio products
          </Link>
        </Container>
      </section>

      <section className="pb-12 md:pb-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
            <div className="md:col-span-7 min-w-0">
              <div className="flex items-center gap-3">
                <ProductMark product={product} size={48} />
                <div className="flex flex-col min-w-0">
                  <h1 className="text-display-lg text-balance leading-[1.02] break-words">
                    {product.name}
                  </h1>
                </div>
              </div>
              <p className="mt-5 font-display italic font-semibold text-[19px] sm:text-[22px] md:text-[24px] text-ink-muted leading-snug">
                {product.tagline}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-[12px] sm:text-[12.5px]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-brand font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {product.status}
                </span>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 rounded-full bg-surface-raised ring-1 ring-surface-border px-2.5 py-1 text-ink-muted font-mono hover:text-brand transition-colors max-w-full truncate"
                >
                  <span className="truncate">{host}</span>
                  <ArrowUpRight size={12} strokeWidth={2} className="shrink-0" />
                </a>
              </div>
              <p className="mt-7 sm:mt-8 max-w-2xl text-[15.5px] sm:text-[16.5px] leading-relaxed text-ink-muted text-pretty">
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

            <div className="md:col-span-5">
              <ProductHeroImage product={product} />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            <div className="md:col-span-4">
              <span className="eyebrow">Key features</span>
              <h2 className="mt-5 text-display-md text-balance">
                What {product.name} does.
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

      <section className="py-12 md:py-20 bg-surface-sunken/60">
        <Container>
          <span className="eyebrow">Product notes</span>
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            <CaseBlock label="Problem" content={product.caseStudy.challenge} />
            <CaseBlock label="Approach" content={product.caseStudy.solution} />
            <CaseBlock label="What it proves" content={product.caseStudy.impact} />
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
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
                    className="flex flex-col sm:grid sm:grid-cols-4 gap-3 sm:gap-4 py-5 first:pt-0"
                  >
                    <dt className="text-[12.5px] sm:text-[13px] text-ink-subtle sm:col-span-1 font-mono">
                      {group.label}
                    </dt>
                    <dd className="sm:col-span-3 flex flex-wrap gap-1.5 sm:gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-full bg-surface-raised ring-1 ring-surface-border px-2.5 py-1 text-[12px] sm:text-[12.5px] text-ink"
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

const accentBg: Record<Product["accent"], string> = {
  blue: "from-brand/[0.1] via-brand/[0.02] to-transparent",
  emerald: "from-emerald-500/[0.1] via-emerald-500/[0.02] to-transparent",
  violet: "from-violet-500/[0.1] via-violet-500/[0.02] to-transparent",
  amber: "from-amber-500/[0.12] via-amber-500/[0.02] to-transparent",
  slate: "from-ink/[0.08] via-ink/[0.02] to-transparent",
};

function ProductHeroImage({ product }: { product: Product }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ring-1 ring-surface-border bg-gradient-to-br ${accentBg[product.accent]}`}
    >
      <div className="relative p-5 md:p-7">
        <div className="rounded-xl bg-surface-raised ring-1 ring-surface-border shadow-raised overflow-hidden flex flex-col">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-surface-border bg-surface">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-surface-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-surface-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-surface-border" />
            </div>
            <div className="ml-2 h-5 flex-1 rounded-md bg-surface-sunken px-2 text-[10.5px] text-ink-subtle font-mono flex items-center truncate">
              {new URL(product.link).host.replace(/^www\./, "")}
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-white overflow-hidden">
            <ProductMockup slug={product.slug} />
          </div>
        </div>
      </div>
    </div>
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
    <section className="py-12 md:py-20">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
          <h2 className="text-display-md">More from Launchdoor</h2>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[13.5px] text-ink-muted hover:text-brand transition-colors"
          >
            All products
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
              <div className="flex items-center gap-3">
                <ProductMark product={p} size={36} />
                <span className="font-mono text-[11.5px] text-ink-subtle">
                  {new URL(p.link).host.replace(/^www\./, "")}
                </span>
              </div>
              <h3 className="mt-5 text-[18px] font-medium tracking-tight text-ink">
                {p.name}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                {p.tagline}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-ink-muted group-hover:text-brand transition-colors">
                Product notes
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
