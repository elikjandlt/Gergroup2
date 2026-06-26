"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import { FadeIn } from "@/components/motion/FadeIn";
import { cardHover } from "@/lib/motion";
import type { Product } from "@/lib/mock/data";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <section className="bg-background py-10 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {products.map((product, index) => (
            <FadeIn key={product._id} delay={index * 0.1}>
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F7FA]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                    {product.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
