import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData } from "@/graphql/cms/queries/page";
import { getHeroSlides, getStats, getProducts } from "@/lib/mock/data";
import HeroSlider from "@/components/sections/HeroSlider";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import ProductGrid from "@/components/sections/ProductGrid";
import CtaSection from "@/components/sections/CtaSection";
import type { CmsPage } from "@/types/cms";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPagesData>({
    query: CP_PAGES,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const pages = (data?.cpPages ?? []) as CmsPage[];
  const getPage = (slug: string) => pages.find((p) => p.slug === slug);

  const slides = getHeroSlides(locale);
  const stats = getStats(locale);
  const products = getProducts(locale);

  return (
    <>
      <HeroSlider slides={slides} />
      <AboutSection page={getPage("about")} />
      <StatsSection stats={stats} />
      <ProductGrid
        products={products.slice(0, 4)}
        title={locale === "mn" ? "Бүтээгдэхүүн" : "Products"}
        viewAllLabel={locale === "mn" ? "Бүгдийг харах" : "View all"}
      />
      <CtaSection locale={locale} />
    </>
  );
}
