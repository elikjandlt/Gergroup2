"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LABELS: Record<string, string> = {
  mn: "МН",
  en: "EN",
};

export function LanguageSwitcher({ locales }: { locales: readonly string[] }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {locales.map((l, index) => (
        <span key={l} className="flex items-center gap-1">
          <Link
            href={pathname}
            locale={l}
            className={cn(
              "px-1.5 py-0.5 transition-colors hover:text-primary",
              l === locale
                ? "text-primary font-bold"
                : "text-foreground/60"
            )}
          >
            {LABELS[l] ?? l.toUpperCase()}
          </Link>
          {index < locales.length - 1 && (
            <span className="text-border">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
