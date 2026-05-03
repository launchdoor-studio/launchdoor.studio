"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { primaryNav, type NavGroup } from "@/data/nav";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

function NavDropdown({ group, active }: { group: NavGroup; active: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={group.href ?? "#"}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-2 text-[14px] text-ink-muted hover:text-ink transition-colors rounded-md",
          active && "text-ink",
        )}
        aria-expanded={open}
      >
        {group.label}
        <ChevronDown
          size={14}
          strokeWidth={2}
          className={cn(
            "transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </Link>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full pt-3 z-50"
          >
            <div className="w-[320px] rounded-2xl bg-surface-raised ring-1 ring-surface-border shadow-raised p-2">
              {group.items?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-surface-sunken transition-colors"
                >
                  <span className="text-[14px] font-medium text-ink">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="text-[13px] text-ink-muted leading-snug">
                      {item.description}
                    </span>
                  ) : null}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center px-3 py-2 text-[14px] text-ink-muted hover:text-ink transition-colors rounded-md",
        active && "text-ink",
      )}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-colors duration-300",
          scrolled
            ? "bg-surface/85 backdrop-blur-md border-b border-surface-border"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-1">
            {primaryNav.map((group) =>
              group.items ? (
                <NavDropdown
                  key={group.label}
                  group={group}
                  active={isActive(group.href ?? "#")}
                />
              ) : (
                <NavLink
                  key={group.label}
                  href={group.href!}
                  label={group.label}
                  active={isActive(group.href!)}
                />
              ),
            )}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white hover:bg-ink-soft transition-colors"
            >
              Start a Project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-ink hover:bg-surface-sunken"
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={1.75} />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[100] md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-surface shadow-raised flex flex-col"
            >
              <div className="h-16 shrink-0 px-5 flex items-center justify-between border-b border-surface-border">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md p-2 hover:bg-surface-sunken"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.75} />
                </button>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto px-3 py-4">
                {primaryNav.map((group) => (
                  <div key={group.label} className="mb-2">
                    {group.href ? (
                      <Link
                        href={group.href}
                        className="block rounded-lg px-3 py-3 text-[15px] font-medium text-ink"
                      >
                        {group.label}
                      </Link>
                    ) : (
                      <div className="px-3 py-3 text-[15px] font-medium text-ink">
                        {group.label}
                      </div>
                    )}
                    {group.items ? (
                      <div className="ml-2 border-l border-surface-border pl-3 mt-1 space-y-0.5">
                        {group.items.map((i) => (
                          <Link
                            key={i.href}
                            href={i.href}
                            className="block rounded-md px-3 py-2 text-[14px] text-ink-muted hover:text-ink hover:bg-surface-sunken"
                          >
                            {i.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="shrink-0 border-t border-surface-border p-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-white"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
