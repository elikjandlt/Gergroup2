"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ locales }: { locales: readonly string[] }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-sm font-medium text-foreground">
      {locales.map((l, index) => (
        <span key={l} className="flex items-center">
          <Link
            href={pathname}
            locale={l}
            className={cn(
              "px-1 transition-colors hover:text-primary",
              l === locale ? "text-primary font-semibold" : "text-foreground/70"
            )}
          >
            {l.toUpperCase()}
          </Link>
          {index < locales.length - 1 && (
            <span className="text-foreground/40">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
