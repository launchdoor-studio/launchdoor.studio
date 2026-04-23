import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

const accentClasses: Record<Product["accent"], string> = {
  blue: "bg-brand/[0.08] text-brand ring-brand/15",
  emerald: "bg-emerald-500/10 text-emerald-700 ring-emerald-600/15",
  violet: "bg-violet-500/10 text-violet-700 ring-violet-600/15",
  amber: "bg-amber-500/10 text-amber-700 ring-amber-600/15",
  slate: "bg-ink/[0.06] text-ink ring-ink/15",
};

const accentBg: Record<Product["accent"], string> = {
  blue: "from-brand/[0.06] to-transparent",
  emerald: "from-emerald-500/[0.07] to-transparent",
  violet: "from-violet-500/[0.07] to-transparent",
  amber: "from-amber-500/[0.08] to-transparent",
  slate: "from-ink/[0.04] to-transparent",
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
  const host = new URL(product.link).host;
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
            ? "aspect-[16/7] sm:aspect-[16/6]"
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
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            <h3 className="text-[19px] md:text-[21px] font-medium tracking-tight text-ink">
              {product.name}
            </h3>
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1",
                accentClasses[product.accent],
              )}
            >
              {host}
            </span>
          </div>
          <p className="mt-2 text-[14.5px] text-ink-muted leading-relaxed">
            {product.tagline}
          </p>
        </div>
        <div className="shrink-0 inline-flex items-center gap-1 text-[13px] font-medium text-ink-muted group-hover:text-brand transition-colors">
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

function BrowserFrame({ product, host }: { product: Product; host: string }) {
  return (
    <div className="absolute inset-6 md:inset-10 rounded-xl bg-surface-raised ring-1 ring-surface-border shadow-raised overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-surface-border bg-surface">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-surface-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-surface-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-surface-border" />
        </div>
        <div className="ml-2 h-5 flex-1 rounded-md bg-surface-sunken px-2 text-[10.5px] text-ink-subtle font-mono flex items-center truncate">
          {host}
        </div>
      </div>
      <div className="relative h-full flex items-center justify-center p-6">
        <ProductGlyph accent={product.accent} label={product.name} />
      </div>
    </div>
  );
}

const accentFill: Record<Product["accent"], string> = {
  blue: "#145dfd",
  emerald: "#059669",
  violet: "#7c3aed",
  amber: "#d97706",
  slate: "#0b0d10",
};

function ProductGlyph({
  accent,
  label,
}: {
  accent: Product["accent"];
  label: string;
}) {
  const color = accentFill[accent];
  const initials = label.slice(0, 2).toUpperCase();
  return (
    <div className="flex items-center gap-4">
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl text-white text-[17px] font-semibold tracking-tight"
        style={{ backgroundColor: color }}
        aria-hidden
      >
        {initials}
      </div>
      <div className="flex flex-col gap-1.5">
        <div
          className="h-2.5 w-32 rounded-full"
          style={{ backgroundColor: color, opacity: 0.2 }}
        />
        <div className="h-2.5 w-24 rounded-full bg-surface-sunken" />
        <div className="h-2.5 w-20 rounded-full bg-surface-sunken" />
      </div>
    </div>
  );
}
