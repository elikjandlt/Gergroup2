import { notFound } from "next/navigation";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { safeQuery } from "@/lib/apollo/server-client";
import { CP_POSTS, CP_POST, type CpPostData, type CpPostsData } from "@/graphql/cms/queries/post";
import { routing } from "@/i18n/routing";
import PageHeader from "@/components/sections/PageHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Metadata } from "next";

function makeStaticClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://temuulenenkhmaa.next.erxes.io/gateway/graphql",
      headers: {
        "x-app-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6IjhyZnBUaU9sRUYyZjEzcGxpaFRoRCIsImlhdCI6MTc4MjIxNTM5Mn0.lcC911AjgC0w0YR_GEDSzIbWEakXkCOauWT43vgiBuw",
      },
    }),
  });
}

export async function generateStaticParams() {
  try {
    const results = await Promise.all(
      routing.locales.map(async (locale) => {
        const client = makeStaticClient();
        const { data } = await client.query<CpPostsData>({
          query: CP_POSTS,
          variables: { language: locale, status: "published" },
        });
        return (data?.cpPosts ?? []).map((post) => ({
          locale,
          slug: post.slug,
        }));
      })
    );
    return results.flat();
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = await safeQuery<CpPostData>(CP_POST, {
    slug,
    language: locale,
  });
  const post = data?.cpPost;
  return {
    title: post?.title,
    description: post?.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const data = await safeQuery<CpPostData>(CP_POST, {
    slug,
    language: locale,
  });
  const post = data?.cpPost;
  if (!post) notFound();

  return (
    <>
      <PageHeader title={post.title ?? ""} description="Нүүр / Мэдээлэл" />
      <article className="bg-background py-16 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div
              className="prose prose-base max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
            />
          </FadeIn>
        </div>
      </article>
    </>
  );
}
