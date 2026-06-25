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
  description: "Монгол улсад хэрэгжүүлсэн инженерийн төслүүд",
};

export default async function ProjectsPage({
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
    (p: { slug?: string }) => p.slug === "projects"
  );
  if (!page) notFound();

  const projects = getProjects(locale);

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
      <ProjectGrid projects={projects} />
      <CtaSection locale={locale} />
    </>
  );
}
