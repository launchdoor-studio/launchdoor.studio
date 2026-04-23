import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { ProductMockup } from "@/components/product-ui";

const accentBg: Record<Product["accent"], string> = {
  blue: "from-brand/[0.07] via-brand/[0.02] to-transparent",
  emerald: "from-emerald-500/[0.08] via-emerald-500/[0.02] to-transparent",
  violet: "from-violet-500/[0.08] via-violet-500/[0.02] to-transparent",
  amber: "from-amber-500/[0.09] via-amber-500/[0.02] to-transparent",
  slate: "from-ink/[0.05] via-ink/[0.015] to-transparent",
};

export function ProductPreview({
  product,
  size = "md",
  className,
}: {
  product: Product;
  size?: "md" | "lg";
  className?: string;
}) {
  const host = new URL(product.link).host.replace(/^www\./, "");
  return (
    <Link
      href={`/work/${product.slug}`}
      className={cn(
        "group relative flex flex-col rounded-2xl bg-surface-raised ring-1 ring-surface-border overflow-hidden hover:ring-ink/25 transition-all",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full",
          size === "lg"
            ? "aspect-[16/8] sm:aspect-[16/7]"
            : "aspect-[16/10]",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            accentBg[product.accent],
          )}
        />
        <BrowserFrame product={product} host={host} />
      </div>

      <div
        className={cn(
          "flex items-start justify-between gap-4 p-6 md:p-7",
          size === "lg" && "md:p-8",
        )}
      >
        <div className="flex items-start gap-4 min-w-0">
          <ProductMark product={product} />
          <div className="min-w-0">
            <h3 className="text-[19px] md:text-[21px] font-medium tracking-tight text-ink leading-tight">
              {product.name}
            </h3>
            <p className="mt-1.5 text-[14px] text-ink-muted leading-relaxed">
              {product.tagline}
            </p>
          </div>
        </div>
        <div className="shrink-0 inline-flex items-center gap-1 text-[13px] font-medium text-ink-muted group-hover:text-brand transition-colors pt-1">
          Case study
          <ArrowUpRight
            size={14}
            strokeWidth={2}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}

function BrowserFrame({
  product,
  host,
}: {
  product: Product;
  host: string;
}) {
  return (
    <div className="absolute inset-5 md:inset-8 rounded-xl bg-surface-raised ring-1 ring-surface-border shadow-raised overflow-hidden flex flex-col">
      <div className="relative flex items-center px-3 py-2 border-b border-surface-border bg-surface">
        <div className="flex gap-1.5 z-[1]">
          <span className="h-2.5 w-2.5 rounded-full bg-surface-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-surface-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-surface-border" />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-[min(240px,calc(100%-5.5rem))] rounded-md bg-surface-sunken px-2 text-[10.5px] text-ink-subtle font-mono flex items-center justify-center">
          <span className="truncate">{host}</span>
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden bg-white">
        <ProductMockup slug={product.slug} />
      </div>
    </div>
  );
}

export function ProductMark({
  product,
  size = 44,
  className,
}: {
  product: Product;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "shrink-0 rounded-xl bg-surface-sunken ring-1 ring-surface-border overflow-hidden flex items-center justify-center",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Image
        src={product.logo}
        alt=""
        width={size}
        height={size}
        className="h-[72%] w-[72%] object-contain"
      />
    </div>
  );
}
