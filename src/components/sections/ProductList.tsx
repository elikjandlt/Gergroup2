"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "@/components/common/Image";
import { FadeIn } from "@/components/motion/FadeIn";
import type { ProductCategory, ProductItem } from "@/lib/mock/data";

interface ProductListProps {
  categories: ProductCategory[];
  items: ProductItem[];
  locale: string;
}

const PAGE_LIMIT = 9;

export default function ProductList({
  categories,
  items,
  locale,
}: ProductListProps) {
  const isMn = locale === "mn";
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    categories.forEach((cat) => {
      if (cat.subcategories && cat.subcategories.length > 0) {
        initial.add(cat.slug);
      }
    });
    return initial;
  });
  const [page, setPage] = useState(1);

  const labels = {
    allCategories: isMn ? "Бүх ангилал" : "All categories",
    openingModes: isMn ? "Нээлтийн горим:" : "Opening Modes:",
    viewDetails: isMn ? "Дэлгэрэнгүй" : "View Details",
    results: (count: number) =>
      isMn ? `${count} бүтээгдэхүүн` : `${count} products`,
    previous: isMn ? "Өмнөх" : "Previous",
    next: isMn ? "Дараах" : "Next",
  };

  const filteredItems = useMemo(() => {
    if (!selectedCategory) return items;
    return items.filter((item) => {
      if (item.categorySlug !== selectedCategory) return false;
      if (selectedSubcategory && item.subcategorySlug !== selectedSubcategory)
        return false;
      return true;
    });
  }, [items, selectedCategory, selectedSubcategory]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_LIMIT));
  const safePage = Math.min(page, totalPages);
  const pagedItems = filteredItems.slice(
    (safePage - 1) * PAGE_LIMIT,
    safePage * PAGE_LIMIT
  );

  const activeCategory = selectedCategory
    ? categories.find((c) => c.slug === selectedCategory)
    : null;
  const activeSubcategory =
    selectedCategory && selectedSubcategory
      ? activeCategory?.subcategories?.find(
          (s) => s.slug === selectedSubcategory
        )
      : null;

  const handleCategoryClick = (slug: string, hasSubcats: boolean) => {
    setSelectedCategory(slug);
    setSelectedSubcategory(null);
    setPage(1);
    if (hasSubcats) {
      setExpanded((prev) => {
        const next = new Set(prev);
        if (next.has(slug)) next.delete(slug);
        else next.add(slug);
        return next;
      });
    }
  };

  const handleSubcategoryClick = (categorySlug: string, subSlug: string) => {
    setSelectedCategory(categorySlug);
    setSelectedSubcategory(subSlug);
    setExpanded((prev) => new Set(prev).add(categorySlug));
    setPage(1);
  };

  const handleAllCategories = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setPage(1);
  };

  const toggleExpand = (slug: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  return (
    <section className="bg-background py-10 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-72">
            <div className="border border-border bg-background">
              <div className="border-b border-border bg-[#F5F7FA] px-5 py-4">
                <h3 className="text-base font-bold text-foreground">
                  {isMn ? "Бүтээгдэхүүний ангилал" : "Product Series"}
                </h3>
              </div>
              <nav aria-label={isMn ? "Бүтээгдэхүүний шүүлтүүр" : "Product filter"}>
                <button
                  onClick={handleAllCategories}
                  className={`flex w-full items-center border-b border-border px-5 py-3 text-left text-sm font-medium transition-colors ${
                    selectedCategory === null
                      ? "border-l-4 border-l-primary bg-[#F5F7FA] text-primary"
                      : "border-l-4 border-l-transparent text-foreground hover:bg-muted"
                  }`}
                >
                  {labels.allCategories}
                </button>
                {categories.map((category) => {
                  const isActive = selectedCategory === category.slug;
                  const isExpanded = expanded.has(category.slug);
                  const hasSubcats =
                    category.subcategories && category.subcategories.length > 0;

                  return (
                    <div key={category._id} className="border-b border-border">
                      <div className="flex items-stretch">
                        <button
                          onClick={() =>
                            handleCategoryClick(category.slug, !!hasSubcats)
                          }
                          className={`flex flex-1 items-center px-5 py-3 text-left text-sm font-medium transition-colors ${
                            isActive && !selectedSubcategory
                              ? "border-l-4 border-l-primary bg-[#F5F7FA] text-primary"
                              : "border-l-4 border-l-transparent text-foreground hover:bg-muted"
                          }`}
                        >
                          {category.title}
                        </button>
                        {hasSubcats && (
                          <button
                            onClick={() => toggleExpand(category.slug)}
                            aria-expanded={isExpanded}
                            className="flex items-center justify-center px-3 text-muted-foreground hover:text-primary"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>
                      {hasSubcats && isExpanded && (
                        <div className="bg-background">
                          {category.subcategories!.map((sub) => (
                            <button
                              key={sub.slug}
                              onClick={() =>
                                handleSubcategoryClick(category.slug, sub.slug)
                              }
                              className={`flex w-full px-8 py-2.5 text-left text-sm transition-colors ${
                                selectedSubcategory === sub.slug
                                  ? "text-primary"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {sub.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main grid */}
          <div className="min-w-0 flex-1">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-bold text-foreground">
                {activeSubcategory
                  ? activeSubcategory.title
                  : activeCategory
                    ? activeCategory.title
                    : labels.allCategories}
              </h2>
              <p className="text-sm text-muted-foreground">
                {labels.results(filteredItems.length)}
              </p>
            </div>

            {pagedItems.length === 0 ? (
              <div className="border border-border bg-[#F5F7FA] py-16 text-center">
                <p className="text-muted-foreground">
                  {isMn
                    ? "Энэ ангилалд бүтээгдэхүүн олдсонгүй."
                    : "No products found in this category."}
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {pagedItems.map((item) => (
                    <Link
                      key={item._id}
                      href={`/products/${item.slug}`}
                      className="group block overflow-hidden border border-border bg-background transition-shadow duration-300 hover:shadow-md"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F7FA]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col p-5">
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                          <span className="font-medium text-foreground">
                            {labels.openingModes}
                          </span>{" "}
                          {item.openingModes}
                        </p>
                        <div className="mt-auto">
                          <span className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark">
                            {labels.viewDetails}
                            <ChevronDown className="ml-1 h-4 w-4 -rotate-90" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {totalPages > 1 && (
                  <FadeIn className="mt-12">
                    <div className="flex items-center justify-center gap-2">
                      <PageButton
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={safePage === 1}
                      >
                        {labels.previous}
                      </PageButton>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (p) => (
                          <PageButton
                            key={p}
                            active={p === safePage}
                            onClick={() => setPage(p)}
                          >
                            {p}
                          </PageButton>
                        )
                      )}
                      <PageButton
                        onClick={() =>
                          setPage((p) => Math.min(totalPages, p + 1))
                        }
                        disabled={safePage === totalPages}
                      >
                        {labels.next}
                      </PageButton>
                    </div>
                  </FadeIn>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PageButton({
  active,
  disabled,
  children,
  onClick,
}: {
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        "flex h-10 min-w-10 items-center justify-center border px-3 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:border-primary hover:text-primary",
        disabled ? "cursor-not-allowed opacity-50" : "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
