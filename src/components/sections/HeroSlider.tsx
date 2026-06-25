"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "@/components/common/Image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { imageZoom, heroText, fadeInUp } from "@/lib/motion";
import type { HeroSlide } from "@/lib/mock/data";

interface HeroSliderProps {
  slides: HeroSlide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[index];
  if (!current) return null;

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="relative flex min-h-[700px] h-screen max-h-[900px] items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current._id}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={prefersReduced ? { hidden: {}, visible: {} } : imageZoom}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current._id}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={prefersReduced ? { hidden: {}, visible: {} } : heroText}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {current.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl">
              {current.subtitle}
            </p>
            <motion.div
              variants={prefersReduced ? {} : fadeInUp}
              className="pt-4"
            >
              <Link
                href={current.ctaUrl}
                className="inline-flex items-center gap-2 bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                {current.cta}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 p-2 text-white/80 transition-colors hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-2 text-white/80 transition-colors hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide._id}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 w-8 transition-colors ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
