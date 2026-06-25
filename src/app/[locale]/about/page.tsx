import { notFound } from "next/navigation";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData } from "@/graphql/cms/queries/page";
import PageHeader from "@/components/sections/PageHeader";
import CtaSection from "@/components/sections/CtaSection";
import { FadeIn } from "@/components/motion/FadeIn";
import { Award, Users, Wrench, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бидний тухай",
  description:
    "EOSS Mongolia - Монгол дахь Европын инженерийн шийдлийн түнш",
};

export default async function AboutPage({
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
  const page = data?.cpPages?.find((p: { slug?: string }) => p.slug === "about");
  if (!page) notFound();

  const values = [
    {
      icon: Award,
      title: locale === "mn" ? "Чанар" : "Quality",
      text:
        locale === "mn"
          ? "Дэлхийд хүлээн зөвшөөрөгдсөн бренд, стандартад нийцсэн бүтээгдэхүүн."
          : "Globally recognized brands and standards-compliant products.",
    },
    {
      icon: Users,
      title: locale === "mn" ? "Мэргэжлийн баг" : "Expert Team",
      text:
        locale === "mn"
          ? "Туршлагатай инженерүүд, зөвлөхүүд таны бизнесийг дэмжинэ."
          : "Experienced engineers and consultants support your business.",
    },
    {
      icon: Wrench,
      title: locale === "mn" ? "Засвар үйлчилгээ" : "Service",
      text:
        locale === "mn"
          ? "Суурилуулалт, засвар, сэлбэгийн хурдан шуурхай үйлчилгээ."
          : "Fast installation, repair and spare parts service.",
    },
    {
      icon: Globe,
      title: locale === "mn" ? "Олон улсын холбоо" : "Global Network",
      text:
        locale === "mn"
          ? "Европын үйлдвэрлэгчдийн албан ёсны төлөөлөгч."
          : "Official representative of European manufacturers.",
    },
  ];

  return (
    <>
      <PageHeader title={page.name ?? ""} description={page.description} />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div
              className="prose prose-base max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: page.content ?? "" }}
            />
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground">
              {locale === "mn" ? "Үнэт зүйлс" : "Our Values"}
            </h2>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="bg-background p-6">
                  <value.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
