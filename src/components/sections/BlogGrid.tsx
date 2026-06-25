import { Link } from "@/i18n/routing";
import Image from "@/components/common/Image";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

interface BlogGridPost {
  readonly _id: string;
  readonly title?: string;
  readonly slug?: string;
  readonly excerpt?: string;
  readonly categories?: readonly { name?: string }[];
  readonly category?: { name?: string };
  readonly thumbnail?: { url?: string } | null;
  readonly featuredImage?: { url?: string } | null;
}

interface BlogGridProps {
  posts: BlogGridPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const category =
              post.category?.name ?? post.categories?.[0]?.name ?? "";
            const image =
              post.thumbnail?.url ?? post.featuredImage?.url ?? null;
            return (
              <StaggerItem key={post._id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden border border-border bg-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={image}
                      alt={post.title ?? ""}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                      {category}
                    </p>
                    <h3 className="mb-3 text-lg font-semibold text-card-foreground line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
