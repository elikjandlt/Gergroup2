import { safeQuery } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData, type Page } from "@/graphql/cms/queries/page";
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
  const isMn = locale === "mn";
  const [pagesRes, postsRes] = await Promise.all([
    safeQuery<CpPagesData>(CP_PAGES, { language: locale }),
    safeQuery<CpPostsData>(CP_POSTS, { language: locale, status: "published" }),
  ]);

  const page =
    pagesRes?.cpPages?.find((p) => p.slug === "blog") ??
    ({
      _id: "fallback-blog",
      name: isMn ? "Мэдээлэл" : "News",
      slug: "blog",
    } as Page);

  const posts = postsRes?.cpPosts ?? [];

  return (
    <>
      <PageHeader
        title={page.name ?? ""}
        description={
          isMn
            ? "Салбарын мэдээ, технологийн тренд, компанийн мэдээлэл"
            : "Industry news, tech trends and company updates"
        }
        image="/images/hero-3.png"
      />
      <BlogGrid posts={posts} />
    </>
  );
}
