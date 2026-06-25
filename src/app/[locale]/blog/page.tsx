import { notFound } from "next/navigation";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData } from "@/graphql/cms/queries/page";
import { CP_POSTS, type CpPostsData } from "@/graphql/cms/queries/post";
import PageHeader from "@/components/sections/PageHeader";
import BlogGrid from "@/components/sections/BlogGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мэдээлэл",
  description: "Салбарын мэдээ, технологийн тренд, компанийн мэдээлэл",
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const client = await getServerApolloClient();

  const [pagesRes, postsRes] = await Promise.all([
    client.query<CpPagesData>({
      query: CP_PAGES,
      variables: { language: locale },
      context: { fetchOptions: { next: { revalidate: 60 } } },
    }),
    client.query<CpPostsData>({
      query: CP_POSTS,
      variables: { language: locale, status: "published" },
      context: { fetchOptions: { next: { revalidate: 60 } } },
    }),
  ]);

  const page = pagesRes.data?.cpPages?.find(
    (p) => p.slug === "blog"
  );
  if (!page) notFound();

  const posts = postsRes.data?.cpPosts ?? [];

  return (
    <>
      <PageHeader title={page.name ?? ""} description={page.description} />
      <BlogGrid posts={posts} />
    </>
  );
}
