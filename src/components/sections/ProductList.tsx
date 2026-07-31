"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "@/components/common/Image";
import { FadeIn } from "@/components/motion/FadeIn";
import type { ProductCategory, ProductItem } from "@/lib/mock/data";

interface ProductListProps {
  categories: ProductCategory[];
  items: ProductItem[];
  locale: string;
}

export default function ProductList({
  categories,
  items,
  locale,
}: ProductListProps) {
  const isMn = locale === "mn";
  const categoryMap = new Map(categories.map((c) => [c.slug, c]));

  return (
    <section className="bg-background py-16 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          {items.map((item, i) => {
            const category = categoryMap.get(item.categorySlug);
            const subcategory = category?.subcategories?.find(
              (s) => s.slug === item.subcategorySlug
            );
            return (
              <FadeIn key={item._id} delay={(i % 2) * 0.1}>
                <Link href={`/products/${item.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#F5F7FA]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                      <h3 className="text-2xl font-bold text-white sm:text-3xl">
                        {item.title}
                      </h3>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-white/85">
                        {isMn ? "Дэлгэрэнгүй" : "View Details"}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {isMn ? "Нээлтийн горим:" : "Opening Modes:"}
                    </span>{" "}
                    {item.openingModes}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category && (
                      <span className="rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                        {category.title}
                      </span>
                    )}
                    {subcategory && (
                      <span className="rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                        {subcategory.title}
                      </span>
                    )}
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
