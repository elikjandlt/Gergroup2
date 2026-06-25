"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/cms";

export function MobileNav({
  items,
  locale,
}: {
  items: NavItem[];
  locale: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        aria-label={locale === "mn" ? "Цэс нээх" : "Open menu"}
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center p-2 text-foreground md:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-foreground/40"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-background shadow-lg"
            >
              <div className="flex items-center justify-between border-b border-border p-5">
                <span className="font-bold text-lg">EOSS Mongolia</span>
                <button
                  type="button"
                  aria-label={locale === "mn" ? "Цэс хаах" : "Close menu"}
                  onClick={() => setOpen(false)}
                  className="p-2 text-foreground"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="flex flex-col p-5 gap-4">
                {items.map((item) => (
                  <li key={item._id}>
                    <Link
                      href={item.url}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block text-base transition-colors hover:text-primary",
                        pathname === item.url
                          ? "text-primary font-semibold"
                          : "text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
