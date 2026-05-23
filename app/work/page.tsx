import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ProductPreview } from "@/components/sections/product-preview";
import { products } from "@/data/products";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products, tools, and systems built by Launchdoor. Each one started as a problem worth solving.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-12 sm:pt-16 md:pt-28 pb-10 md:pb-16">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">Our work</span>
            <h1 className="mt-5 text-display-lg text-balance">
              Real software, shipped to{" "}
              <span className="font-display italic font-semibold text-brand">
                real users
              </span>
              .
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-muted text-pretty">
              Every product below is live, maintained, and built by Launchdoor. We
              continuously build and test new tools in AI, productivity,
              automation, and business software.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-12 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

      <ContactCTA />
    </>
  );
}
