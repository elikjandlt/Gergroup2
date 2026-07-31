"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/common/Image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { imageZoom, heroText } from "@/lib/motion";
import type { HeroSlide } from "@/lib/mock/data";

interface HeroSliderProps {
  slides: HeroSlide[];
  keywords: string[];
}

export default function HeroSlider({ slides, keywords }: HeroSliderProps) {
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

  return (
    <section className="relative flex min-h-[640px] h-screen max-h-[900px] items-center overflow-hidden bg-[#1A1A1A]">
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
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current._id}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={prefersReduced ? { hidden: {}, visible: {} } : heroText}
            className="flex max-w-4xl flex-col items-start"
          >
            <h1 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[72px]">
              {current.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/85 sm:text-lg">
              {current.subtitle}
            </p>
            <div className="mt-12 flex items-center gap-6 sm:gap-8">
              {keywords.map((keyword, i) => (
                <span key={keyword} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && <span className="h-px w-8 bg-white/50 sm:w-12" />}
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                    {keyword}
                  </span>
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-10 left-1/2 z-10 flex w-full max-w-7xl -translate-x-1/2 items-center gap-2 px-4 sm:px-6 lg:px-8">
          {slides.map((slide, i) => (
            <button
              key={slide._id}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1 transition-all ${
                i === index ? "w-10 bg-white" : "w-6 bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
