"use client";

import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";
import type { NavItem } from "@/types/cms";

export function HeaderShell({
  items,
  locale,
  locales,
}: {
  items: NavItem[];
  locale: string;
  locales: readonly string[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-30 transition-colors duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[30px] font-extrabold tracking-tight text-primary">
            EOSS
          </span>
          <span className="text-[13px] font-semibold tracking-[0.08em] text-foreground">
            MONGOLIA
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {items.map((item) => (
            <Link
              key={item._id}
              href={item.url}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.url ? "text-primary" : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageSwitcher locales={locales} />
          </div>
          <MobileNav items={items} locale={locale} />
        </div>
      </div>
    </header>
  );
}
