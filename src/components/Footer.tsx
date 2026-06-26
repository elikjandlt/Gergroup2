import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_MENUS, type CpMenusData } from "@/graphql/cms/queries/menu";
import FooterClient from "./FooterClient";

export default async function Footer({ locale }: { locale: string }) {
  const client = await getServerApolloClient();
  const { data } = await client.query<CpMenusData>({
    query: CP_MENUS,
    variables: { language: locale, kind: "footer" },
    context: { fetchOptions: { next: { revalidate: 60 } } },
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
