export const BLOG_FALLBACK_IMAGES = [
  "/images/hero-1.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
] as const;

export function fallbackBlogImage(slug?: string): string {
  const key = slug ?? "";
  const hash = [...key].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return BLOG_FALLBACK_IMAGES[hash % BLOG_FALLBACK_IMAGES.length];
}
