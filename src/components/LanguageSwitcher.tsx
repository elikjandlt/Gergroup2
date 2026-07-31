"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ locales }: { locales: readonly string[] }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3 text-sm font-medium">
      {locales.map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={cn(
            "px-2.5 py-1 transition-colors",
            l === locale
              ? "bg-primary font-semibold text-white"
              : "text-foreground/70 hover:text-primary"
          )}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
