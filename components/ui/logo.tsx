import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "blue",
  withWordmark = true,
  className,
  size = 28,
}: {
  variant?: "blue" | "white";
  withWordmark?: boolean;
  className?: string;
  size?: number;
}) {
  const src =
    variant === "blue" ? "/logos/growvth-blue.svg" : "/logos/growvth-white.svg";
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md",
        className,
      )}
      aria-label="Growvth home"
    >
      <Image
        src={src}
        alt=""
        width={size}
        height={(size * 59) / 62}
        priority
        className="shrink-0"
      />
      {withWordmark ? (
        <span
          className={cn(
            "text-[17px] font-semibold tracking-tight",
            variant === "white" ? "text-white" : "text-ink",
          )}
        >
          Growvth
        </span>
      ) : null}
    </Link>
  );
}
