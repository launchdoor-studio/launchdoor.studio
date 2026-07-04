import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProductMark } from "@/components/sections/product-preview";
import { products, type Product } from "@/data/products";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Studio Products",
  description:
    "Products, tools, and systems built inside Launchdoor to sharpen our product thinking and engineering practice.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-12 sm:pt-16 md:pt-28 pb-10 md:pb-16">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">Studio products</span>
            <h1 className="mt-5 text-display-lg text-balance">
              Tools we build to keep our engineering{" "}
              <span className="font-display italic font-semibold text-brand">
                grounded
              </span>
              .
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-muted text-pretty">
              Launchdoor is a studio, not a portfolio shelf. These products are
              built in-house so we can test ideas, run real systems, and bring
              sharper judgment to client work.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-12 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-3">
            {products.map((product) => (
              <ProductRow key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}

function ProductRow({ product }: { product: Product }) {
  const host = new URL(product.link).host.replace(/^www\./, "");
  const isWip = product.status.toLowerCase().includes("work in progress");

  return (
    <Link
      href={`/work/${product.slug}`}
      className="group grid grid-cols-1 gap-5 rounded-lg bg-surface-raised ring-1 ring-surface-border p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_180px] md:items-center hover:ring-ink/25 transition-all"
    >
      <div className="flex items-start gap-4 min-w-0">
        <ProductMark product={product} size={48} />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-[20px] sm:text-[22px] font-medium tracking-tight text-ink">
              {product.name}
            </h2>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-medium ${
                isWip
                  ? "bg-amber-500/10 text-amber-700"
                  : "bg-brand/10 text-brand"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {product.status}
            </span>
          </div>
          <p className="mt-1 text-[12.5px] text-ink-subtle">
            {product.category}
          </p>
          <p className="mt-3 max-w-3xl text-[14.5px] sm:text-[15px] leading-relaxed text-ink-muted">
            {product.short}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 md:justify-end">
        <span className="font-mono text-[12.5px] text-ink-subtle">{host}</span>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-muted group-hover:text-brand transition-colors">
          Product notes
          <ArrowUpRight
            size={14}
            strokeWidth={2}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </span>
      </div>
    </Link>
  );
}
