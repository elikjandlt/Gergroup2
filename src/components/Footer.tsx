import { safeQuery } from "@/lib/apollo/server-client";
import { CP_MENUS, type CpMenusData } from "@/graphql/cms/queries/menu";
import FooterClient from "./FooterClient";

export default async function Footer({ locale }: { locale: string }) {
  const data = await safeQuery<CpMenusData>(CP_MENUS, {
    language: locale,
    kind: "footer",
  });

  const menu = (data?.cpMenus ?? [])
    .map((item) => ({
      _id: item._id,
      label: item.label ?? "",
      url: item.url ?? "",
      order: item.order ?? 0,
      target: item.target,
    }))
    .sort((a, b) => a.order - b.order);

  return <FooterClient menu={menu} locale={locale} />;
}
