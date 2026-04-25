import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { products } from "@/data/products";
import { ProductPreview } from "@/components/sections/product-preview";

export function FeaturedWork() {
  return (
    <section className="py-20 md:py-28 bg-surface-sunken/60">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeader
            eyebrow="Products by Launchdoor"
            title={
              <>
                Real products. Shipped,
                {" "}
                <span className="font-display italic font-normal">
                  in production
                </span>
                .
              </>
            }
            description="Everything below is live software, built and maintained by Launchdoor. Each one started as a problem we wanted to solve ourselves."
          />
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink hover:text-brand transition-colors"
          >
            View all products
            <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-3">
          {products.map((product, i) => (
            <ProductPreview
              key={product.slug}
              product={product}
              size={i === 0 ? "lg" : "md"}
              className={i === 0 ? "md:col-span-2" : ""}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
