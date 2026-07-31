import { notFound } from "next/navigation";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData } from "@/graphql/cms/queries/page";
import PageHeader from "@/components/sections/PageHeader";
import CtaSection from "@/components/sections/CtaSection";
import { FadeIn } from "@/components/motion/FadeIn";
import Image from "@/components/common/Image";
import { Award, Lightbulb, Clock, HeadphonesIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бидний тухай",
  description:
    "EOSS Mongolia - Монголын барилгын салбарт итгэл үнэмшилтэй түнш",
};

export default async function AboutPage({
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
  const page = data?.cpPages?.find((p) => p.slug === "about");
  if (!page) notFound();

  const values = [
    {
      icon: Award,
      title: isMn ? "Чанар" : "Quality",
      text: isMn
        ? "Олон улсын стандарт, тогтвортой бүтээгдэхүүн."
        : "International standards and durable products.",
    },
    {
      icon: Lightbulb,
      title: isMn ? "Инновац" : "Innovation",
      text: isMn
        ? "Орчин үеийн технологи, эрчим хүчний хэмнэлттэй шийдэл."
        : "Modern technology and energy-efficient solutions.",
    },
    {
      icon: Clock,
      title: isMn ? "Туршлага" : "Experience",
      text: isMn
        ? "15+ жилийн барилгын салбарын туршлага."
        : "15+ years of experience in construction.",
    },
    {
      icon: HeadphonesIcon,
      title: isMn ? "Дэмжлэг" : "Support",
      text: isMn
        ? "Төсөл эхлүүлэхээс дуусах хүртэлх бүрэн дэмжлэг."
        : "Full support from project start to completion.",
    },
  ];

  return (
    <>
      <PageHeader
        title={page.name ?? ""}
        description={
          isMn
            ? "Монголын барилгын салбарт итгэл үнэмшилтэй түнш"
            : "A Trusted Partner in Mongolia's Construction Sector"
        }
        image="/images/about-intro.png"
      />

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <div className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  {isMn ? "Бидний тухай" : "About Us"}
                </p>
                <h2 className="text-3xl font-bold leading-tight text-foreground lg:text-4xl">
                  {isMn
                    ? "Монголын барилгын салбарт итгэл үнэмшилтэй түнш"
                    : "A Trusted Partner in Mongolia's Construction Sector"}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {isMn
                    ? "EOSS Mongolia нь олон улсын хөнгөн цагаан системийн технологийг Монголын нөхцөлд зориулан нэвтрүүлж, орчин үеийн барилгын фасад, цонх, хаалгын бүрэн шийдэл нийлүүлдэг компани юм. Бид дизайн зөвлөх үйлчилгээ, систем сонголт, нийлүүлэлт, угсралтын дэмжлэг хүртэлх бүхий л үйлчилгээг нэг дороос өгдөг."
                    : "EOSS Mongolia adapts international aluminum system technology for Mongolian conditions, supplying complete facade, window and door solutions for modern buildings. We offer design consulting, system selection, supply and installation support all in one place."}
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about-intro.png"
                  alt={page.name ?? ""}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              {isMn ? "Бидний үнэ цэнэ" : "Our Values"}
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="bg-background p-8">
                  <value.icon className="mb-5 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-lg font-bold">{value.title}</h3>
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
