import { notFound } from "next/navigation";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData } from "@/graphql/cms/queries/page";
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
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPagesData>({
    query: CP_PAGES,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });
  const page = data?.cpPages?.find((p) => p.slug === "projects");
  if (!page) notFound();

  const projects = getProjects(locale);

  return (
    <>
      <PageHeader title={page.name ?? ""} description="Нүүр / Төслүүд" />

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
