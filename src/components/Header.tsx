import { safeQuery } from "@/lib/apollo/server-client";
import { CP_MENUS, type CpMenusData } from "@/graphql/cms/queries/menu";
import { HeaderShell } from "./HeaderShell";
import { routing } from "@/i18n/routing";
import type { NavItem } from "@/types/cms";

const FALLBACK_ITEMS: Record<string, NavItem[]> = {
  mn: [
    { _id: "f1", label: "Нүүр", url: "/", order: 1 },
    { _id: "f2", label: "Бидний тухай", url: "/about", order: 2 },
    { _id: "f3", label: "Бүтээгдэхүүн", url: "/products", order: 3 },
    { _id: "f4", label: "Төслүүд", url: "/projects", order: 4 },
    { _id: "f5", label: "Мэдээлэл", url: "/blog", order: 5 },
    { _id: "f6", label: "Холбоо барих", url: "/contact", order: 6 },
  ],
  en: [
    { _id: "f1", label: "Home", url: "/", order: 1 },
    { _id: "f2", label: "About", url: "/about", order: 2 },
    { _id: "f3", label: "Products", url: "/products", order: 3 },
    { _id: "f4", label: "Projects", url: "/projects", order: 4 },
    { _id: "f5", label: "News", url: "/blog", order: 5 },
    { _id: "f6", label: "Contact", url: "/contact", order: 6 },
  ],
};

export default async function Header({ locale }: { locale: string }) {
  const data = await safeQuery<CpMenusData>(CP_MENUS, {
    language: locale,
    kind: "header",
  });

  const items = data?.cpMenus?.length
    ? data.cpMenus
        .map((item) => ({
          _id: item._id,
          label: item.label ?? "",
          url: item.url ?? "",
          order: item.order ?? 0,
          target: item.target,
        }))
        .sort((a, b) => a.order - b.order)
    : (FALLBACK_ITEMS[locale] ?? FALLBACK_ITEMS.mn);

  return <HeaderShell items={items} locale={locale} locales={routing.locales} />;
}
