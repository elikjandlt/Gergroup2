import { notFound } from "next/navigation";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData } from "@/graphql/cms/queries/page";
import { getProducts } from "@/lib/mock/data";
import PageHeader from "@/components/sections/PageHeader";
import ProductList from "@/components/sections/ProductList";
import CtaSection from "@/components/sections/CtaSection";
import { FadeIn } from "@/components/motion/FadeIn";
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

  const products = getProducts(locale);

  return (
    <>
      <PageHeader title={page.name ?? ""} description="Нүүр / Бүтээгдэхүүн" />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
              {isMn
                ? "Барилгын бүрэн хийцийн шийдэл"
                : "Complete Building Envelope Solutions"}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground">
              {isMn
                ? "Бид фасадаас эхлээд цонх, хаалга хүртэлх олон төрлийн бүтээгдэхүүнийг санал болгодог."
                : "We offer a wide range of products from facades to windows and doors."}
            </p>
          </FadeIn>
        </div>
      </section>

      <ProductList products={products} />
      <CtaSection locale={locale} />
    </>
  );
}
