import Link from "next/link";
import { ArrowUpRight, Box } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { products, type Product } from "@/data/products";
import { ProductMark } from "@/components/sections/product-preview";

export function FeaturedWork() {
  return (
    <section className="py-14 md:py-28 bg-surface-sunken/60">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
          <SectionHeader
            eyebrow="Built inside the studio"
            title={
              <>
                Tools that keep our product thinking
                {" "}
                <span className="font-display italic font-semibold">
                  practical
                </span>
                .
              </>
            }
            description="We build and operate our own software alongside client work. The point is not a portfolio wall; it is proof that the same team scopes, ships, maintains, and learns from real products."
          />
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink hover:text-brand transition-colors"
          >
            See studio products
            <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-3">
          {products.map((product) => (
            <ProjectProofCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectProofCard({ product }: { product: Product }) {
  const host = new URL(product.link).host.replace(/^www\./, "");
  const isWip = product.status.toLowerCase().includes("work in progress");

  return (
    <Link
      href={`/work/${product.slug}`}
      className="group flex min-h-[184px] flex-col rounded-lg bg-surface-raised ring-1 ring-surface-border p-5 sm:p-6 hover:ring-ink/25 transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <ProductMark product={product} size={40} />
          <div className="min-w-0">
            <h3 className="text-[17px] sm:text-[18px] font-medium tracking-tight text-ink truncate">
              {product.name}
            </h3>
            <p className="mt-1 text-[12.5px] text-ink-subtle">
              {product.category}
            </p>
          </div>
        </div>
        <span
          className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-medium ${
            isWip
              ? "bg-amber-500/10 text-amber-700"
              : "bg-brand/10 text-brand"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {product.status}
        </span>
      </div>

      <p className="mt-5 text-[14px] sm:text-[14.5px] leading-relaxed text-ink-muted">
        {product.short}
      </p>

      <div className="mt-auto pt-6 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-[12.5px] text-ink-subtle">
          <Box size={14} strokeWidth={1.75} />
          Built by Launchdoor
        </span>
        <span className="inline-flex items-center gap-1.5 text-[12.5px] font-mono text-ink-muted group-hover:text-brand transition-colors">
          {host}
          <ArrowUpRight
            size={13}
            strokeWidth={2}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </span>
      </div>
    </Link>
  );
}
