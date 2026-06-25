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
    "Уул уурхай, барилгын зориулалттай Европын өндөр чанарын тоног төхөөрөмж",
};

export default async function ProductsPage({
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
  const page = data?.cpPages?.find(
    (p: { slug?: string }) => p.slug === "products"
  );
  if (!page) notFound();

  const products = getProducts(locale);

  return (
    <>
      <PageHeader title={page.name ?? ""} description={page.description} />
      <section className="bg-muted py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <div
              className="prose prose-base max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: page.content ?? "" }}
            />
          </FadeIn>
        </div>
      </section>
      <ProductList products={products} />
      <CtaSection locale={locale} />
    </>
  );
}
