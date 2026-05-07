"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/portfolio";

interface NavigationProps {
  activeSection: string;
  items: NavItem[];
}

export function Navigation({ activeSection, items }: NavigationProps) {
  const [open, setOpen] = useState(false);

  const desktopItems = useMemo(
    () =>
      items.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "rounded-full px-3 py-2 text-sm transition-all",
              isActive
                ? "bg-[var(--surface-strong)] text-[var(--text-primary)] shadow-[0_8px_30px_rgba(8,15,34,0.45)]"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            )}
          >
            {item.label}
          </a>
        );
      }),
    [activeSection, items]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex w-full max-w-[1120px] items-center justify-between rounded-full border border-[var(--border-subtle)] bg-[color:var(--surface-glass)] px-4 py-2 backdrop-blur-xl">
        <Link
          href="#home"
          className="text-base font-semibold tracking-wide text-[var(--text-primary)]"
          data-cursor="interactive"
        >
          SG
        </Link>

        <div className="hidden items-center gap-1 lg:flex">{desktopItems}</div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-strong)] text-[var(--text-primary)] lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          data-cursor="interactive"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-[1120px] rounded-2xl border border-[var(--border-subtle)] bg-[color:var(--surface-glass)] p-3 backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-1">
              {items.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-2 text-sm",
                      isActive
                        ? "bg-[var(--surface-strong)] text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
                    )}
                    data-cursor="interactive"
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
