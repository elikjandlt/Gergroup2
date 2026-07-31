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
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden pt-20">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <FadeIn>
            <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-[48px]">
              {title}
            </h1>
          </FadeIn>
          {description && (
            <FadeIn delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-base font-light text-white/85 sm:text-lg">
                {description}
              </p>
            </FadeIn>
          )}
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
