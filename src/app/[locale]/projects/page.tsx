import { safeQuery } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData, type Page } from "@/graphql/cms/queries/page";
import { getProjects } from "@/lib/mock/data";
import PageHeader from "@/components/sections/PageHeader";
import ProjectGrid from "@/components/sections/ProjectGrid";
import CtaSection from "@/components/sections/CtaSection";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Төслүүд",
  description: "EOSS Mongolia-ийн системийг ашиглан баригдсан онцлох барилгууд",
};

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isMn = locale === "mn";
  const data = await safeQuery<CpPagesData>(CP_PAGES, { language: locale });
  const page =
    data?.cpPages?.find((p) => p.slug === "projects") ??
    ({
      _id: "fallback-projects",
      name: isMn ? "Төслүүд" : "Projects",
      slug: "projects",
    } as Page);

  const projects = getProjects(locale);

  return (
    <>
      <PageHeader
        title={page.name ?? ""}
        description={
          isMn
            ? "EOSS системээр баригдсан онцлох барилгууд"
            : "Notable buildings built with EOSS systems"
        }
        image="/images/product-4.png"
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
              {isMn ? "Сонгомол төслүүд" : "Selected Projects"}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground">
              {isMn
                ? "EOSS Mongolia-ийн системийг ашиглан баригдсан онцлох барилгууд."
                : "Notable buildings constructed using EOSS Mongolia systems."}
            </p>
          </FadeIn>
        </div>
      </section>

      <ProjectGrid projects={projects} />
      <CtaSection locale={locale} />
    </>
  );
}
