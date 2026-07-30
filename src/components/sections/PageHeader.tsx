import { FadeIn } from "@/components/motion/FadeIn";
import Image from "@/components/common/Image";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  if (image) {
    return (
      <section className="bg-[#F5F7FA] pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
            <FadeIn>
              <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-[42px]">
                {title}
              </h1>
              {description && (
                <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                  {description}
                </p>
              )}
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F5F7FA] pb-16 pt-32">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-[42px]">
            {title}
          </h1>
        </FadeIn>
        {description && (
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              {description}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
