import { FadeIn } from "@/components/motion/FadeIn";
import Image from "@/components/common/Image";
import type { CmsPage } from "@/types/cms";

interface AboutSectionProps {
  page?: CmsPage;
}

export default function AboutSection({ page }: AboutSectionProps) {
  const title = page?.name ?? "";
  const description = page?.description ?? "";
  const content = page?.content ?? "";

  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/project-placeholder.svg"
                alt={title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <div className="order-1 lg:order-2">
            <FadeIn>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                {title}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground lg:text-4xl">
                {description}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div
                className="prose prose-base max-w-none text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
