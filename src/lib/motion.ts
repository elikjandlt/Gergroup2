import type { Variants, Transition } from "framer-motion";
import { motionTokens } from "./tokens";

function buildTransition(
  duration: number,
  ease: number[]
): Transition {
  return {
    duration,
    ease: ease as [number, number, number, number],
  };
}

export const transitions = {
  default: buildTransition(
    motionTokens.duration.normal,
    motionTokens.easing.default
  ),
  fast: buildTransition(
    motionTokens.duration.fast,
    motionTokens.easing.default
  ),
  slow: buildTransition(
    motionTokens.duration.slow,
    motionTokens.easing.decelerate
  ),
  entrance: buildTransition(
    motionTokens.duration.entrance,
    motionTokens.easing.decelerate
  ),
};

function buildVariant(name: keyof typeof motionTokens.variants): Variants {
  const raw = motionTokens.variants[name];
  if (!raw) return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  return raw as Variants;
}

export const fadeInUp = buildVariant("fadeInUp");
export const staggerContainer = buildVariant("staggerContainer");
export const heroText = buildVariant("heroText");
export const imageZoom = buildVariant("imageZoom");

export const cardHover: Variants = {
  rest: { y: 0, scale: 1, transition: transitions.default },
  hover: { y: -8, scale: 1.01, transition: transitions.default },
};

export const pageFade: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: transitions.default },
  exit: { opacity: 0, transition: transitions.fast },
};

export function withReducedMotion<T extends Variants>(variant: T): T {
  const reduced: Variants = {};
  for (const key of Object.keys(variant)) {
    reduced[key] = { ...variant[key], transition: { duration: 0 } };
  }
  return reduced as T;
}
