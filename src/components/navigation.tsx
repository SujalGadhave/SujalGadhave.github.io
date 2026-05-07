"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
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
              "rounded-full px-3 py-1.5 text-sm transition-colors",
              isActive ? "bg-white/15 text-white" : "text-slate-300 hover:text-white"
            )}
          >
            {item.label}
          </a>
        );
      }),
    [activeSection, items]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-8">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 backdrop-blur-xl">
        <Link href="#home" className="text-sm font-semibold tracking-wide text-white">
          SG
        </Link>

        <div className="hidden items-center gap-1 md:flex">{desktopItems}</div>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/10 bg-slate-950/95 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="grid gap-2">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "rounded-xl px-4 py-2 text-sm",
                    activeSection === item.id
                      ? "bg-white/15 text-white"
                      : "text-slate-300 hover:bg-white/10"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

