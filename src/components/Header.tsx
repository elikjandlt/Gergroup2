import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_MENUS, type CpMenusData } from "@/graphql/cms/queries/menu";
import { HeaderShell } from "./HeaderShell";
import { routing } from "@/i18n/routing";

export default async function Header({ locale }: { locale: string }) {
  const client = await getServerApolloClient();
  const { data } = await client.query<CpMenusData>({
    query: CP_MENUS,
    variables: { language: locale, kind: "header" },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const items = (data?.cpMenus ?? [])
    .map((item) => ({
      _id: item._id,
      label: item.label ?? "",
      url: item.url ?? "",
      order: item.order ?? 0,
      target: item.target,
    }))
    .sort((a, b) => a.order - b.order);

  return <HeaderShell items={items} locale={locale} locales={routing.locales} />;
}
