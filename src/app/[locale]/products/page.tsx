import { notFound } from "next/navigation";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData } from "@/graphql/cms/queries/page";
import { getProductCategories, getProductItems } from "@/lib/mock/data";
import PageHeader from "@/components/sections/PageHeader";
import ProductList from "@/components/sections/ProductList";
import CtaSection from "@/components/sections/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бүтээгдэхүүн",
  description:
    "Хөнгөн цагаан цонх, хаалга, шилэн фасад системийн шийдэл",
};

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isMn = locale === "mn";
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPagesData>({
    query: CP_PAGES,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });
  const page = data?.cpPages?.find((p) => p.slug === "products");
  if (!page) notFound();

  const categories = getProductCategories(locale);
  const items = getProductItems(locale);

  return (
    <>
      <PageHeader
        title={page.name ?? ""}
        description={isMn ? "Нүүр / Бүтээгдэхүүн" : "Home / Products"}
        image="/images/product-3.png"
      />
      <ProductList categories={categories} items={items} locale={locale} />
      <CtaSection locale={locale} />
    </>
  );
}
