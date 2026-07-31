import { safeQuery } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData } from "@/graphql/cms/queries/page";
import { getHeroSlides, getStats, getProducts } from "@/lib/mock/data";
import HeroSlider from "@/components/sections/HeroSlider";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import ProductGrid from "@/components/sections/ProductGrid";
import CtaSection from "@/components/sections/CtaSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await safeQuery<CpPagesData>(CP_PAGES, { language: locale });

  const pages = data?.cpPages ?? [];
  const aboutPage = pages.find((p) => p.slug === "about");
  void aboutPage;

  const slides = getHeroSlides(locale);
  const stats = getStats(locale);
  const products = getProducts(locale);

  return (
    <>
      <HeroSlider
        slides={slides}
        keywords={
          locale === "mn"
            ? ["Чанар", "Инновац", "Дэмжлэг"]
            : ["Quality", "Innovation", "Support"]
        }
      />
      <AboutSection />
      <ProductGrid
        products={products}
        title={locale === "mn" ? "Бүтээгдэхүүн" : "Products"}
        viewAllLabel={locale === "mn" ? "Бүгдийг харах" : "View all"}
      />
      <StatsSection stats={stats} />
      <CtaSection locale={locale} />
    </>
  );
}
