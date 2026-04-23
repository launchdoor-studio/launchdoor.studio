import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={cn(
          "mt-4 text-display-md text-balance",
          eyebrow && "mt-5",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-ink-muted text-[15px] leading-relaxed text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
