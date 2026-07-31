import { safeQuery } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData, type Page } from "@/graphql/cms/queries/page";
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
  const data = await safeQuery<CpPagesData>(CP_PAGES, { language: locale });
  const page =
    data?.cpPages?.find((p) => p.slug === "products") ??
    ({
      _id: "fallback-products",
      name: isMn ? "Бүтээгдэхүүн" : "Products",
      slug: "products",
    } as Page);

  const categories = getProductCategories(locale);
  const items = getProductItems(locale);

  return (
    <>
      <PageHeader
        title={page.name ?? ""}
        description={
          isMn
            ? "Олон улсын шилдэг технологи, Монголын зах зээлд"
            : "World-class technology for the Mongolian market"
        }
        image="/images/hero-2.png"
      />
      <ProductList categories={categories} items={items} locale={locale} />
      <CtaSection locale={locale} />
    </>
  );
}
