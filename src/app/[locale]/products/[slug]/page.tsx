import { notFound } from "next/navigation";
import { getProductItemBySlug } from "@/lib/mock/data";
import PageHeader from "@/components/sections/PageHeader";
import CtaSection from "@/components/sections/CtaSection";
import Image from "@/components/common/Image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isMn = locale === "mn";
  const item = getProductItemBySlug(locale, slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader
        title={item.title}
        description={`${isMn ? "Нүүр" : "Home"} / ${isMn ? "Бүтээгдэхүүн" : "Products"} / ${item.title}`}
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/products"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark"
            >
              <ArrowLeft className="h-4 w-4" />
              {isMn ? "Бүтээгдэхүүн рүү буцах" : "Back to products"}
            </Link>
          </FadeIn>

          <div className="grid gap-10 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F7FA]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <div className="flex flex-col justify-center">
              <FadeIn delay={0.1}>
                <h1 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                  {item.title}
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="mb-6 border-l-4 border-primary bg-[#F5F7FA] p-5">
                  <p className="text-sm font-semibold text-foreground">
                    {isMn ? "Нээлтийн горим:" : "Opening Modes:"}
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    {item.openingModes}
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="leading-relaxed text-muted-foreground">
                  {isMn
                    ? `${item.title} нь орчин үеийн барилгын шаардлагад нийцсэн, чанарын стандартад бүрэн нийцсэн шийдэл юм. Нэмэлт мэдээлэл авахыг хүсвэл бидэнтэй холбоо барина уу.`
                    : `${item.title} is a quality solution that meets the requirements of modern buildings and international standards. Contact us for more information.`}
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"
                >
                  {isMn ? "Үнийн санал авах" : "Request a quote"}
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
