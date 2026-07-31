import { notFound } from "next/navigation";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { safeQuery } from "@/lib/apollo/server-client";
import { CP_POSTS, CP_POST, type CpPostData, type CpPostsData } from "@/graphql/cms/queries/post";
import { routing } from "@/i18n/routing";
import PageHeader from "@/components/sections/PageHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { fallbackBlogImage } from "@/lib/blog-image";
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
  const isMn = locale === "mn";
  const data = await safeQuery<CpPostData>(CP_POST, {
    slug,
    language: locale,
  });
  const post = data?.cpPost;
  if (!post) notFound();

  const image =
    post.thumbnail?.url ??
    post.images?.[0]?.url ??
    fallbackBlogImage(post.slug ?? slug);
  const category = post.categories?.[0]?.name ?? "";
  const dateSource = post.publishedDate ?? post.createdAt;
  const date = dateSource
    ? new Date(dateSource).toLocaleDateString(isMn ? "mn-MN" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <PageHeader
        title={post.title ?? ""}
        description={category || (isMn ? "Мэдээлэл" : "News")}
        image={image}
      />
      <article className="bg-background py-16 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark"
            >
              <ArrowLeft className="h-4 w-4" />
              {isMn ? "Мэдээлэл рүү буцах" : "Back to news"}
            </Link>
          </FadeIn>
          {date && (
            <FadeIn delay={0.05}>
              <p className="mb-6 text-sm text-muted-foreground">{date}</p>
            </FadeIn>
          )}
          {post.excerpt && (
            <FadeIn delay={0.1}>
              <p className="mb-8 border-l-4 border-primary bg-[#F5F7FA] p-5 text-base leading-relaxed text-foreground">
                {post.excerpt}
              </p>
            </FadeIn>
          )}
          <FadeIn delay={0.15}>
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
