"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import Image from "@/components/common/Image";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { cardHover } from "@/lib/motion";
import type { Product } from "@/lib/mock/data";

interface ProductGridProps {
  products: Product[];
  title?: string;
  viewAllLabel?: string;
}

export default function ProductGrid({
  products,
  title,
  viewAllLabel,
}: ProductGridProps) {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">{title}</h2>
          </FadeIn>
        )}

        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <StaggerItem key={product._id}>
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
                className="group overflow-hidden border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {viewAllLabel && (
          <FadeIn className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              {viewAllLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
