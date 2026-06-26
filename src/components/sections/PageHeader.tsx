import { FadeIn } from "@/components/motion/FadeIn";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
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
