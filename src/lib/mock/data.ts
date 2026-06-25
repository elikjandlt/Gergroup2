export interface Product {
  readonly _id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
}

export interface Project {
  readonly _id: string;
  readonly slug: string;
  readonly title: string;
  readonly location: string;
  readonly description: string;
  readonly image: string;
}

export interface HeroSlide {
  readonly _id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly image: string;
  readonly cta: string;
  readonly ctaUrl: string;
}

export interface Stat {
  readonly _id: string;
  readonly value: string;
  readonly label: string;
}

const productsByLocale: Record<string, Product[]> = {
  mn: [
    {
      _id: "prod-1",
      slug: "excavators",
      title: "Уул уурхайн экскаватор",
      description:
        "Хүнд нөхцөлд зориулсан, өндөр бүтээмжтэй, бага түлш хэрэглээтэй экскаваторууд.",
      image: "/images/product-placeholder.svg",
    },
    {
      _id: "prod-2",
      slug: "dump-trucks",
      title: "Автосамосвал",
      description:
        "Уул уурхай, карьерийн зориулалттай, өндөр даацын автосамосвалууд.",
      image: "/images/product-placeholder.svg",
    },
    {
      _id: "prod-3",
      slug: "drilling-rigs",
      title: "Өрөмдлөгийн төхөөрөмж",
      description:
        "Нарийн нягтшилтай, аюулгүй өрөмдлөг хийх боломжтой сүүлийн үеийн төхөөрөмж.",
      image: "/images/product-placeholder.svg",
    },
    {
      _id: "prod-4",
      slug: "crushers",
      title: "Бутлах тоног төхөөрөмж",
      description:
        "Чулуулаг, хүдэр бутлахад зориулсан, тогтвортой ажиллагаатай систем.",
      image: "/images/product-placeholder.svg",
    },
  ],
  en: [
    {
      _id: "prod-1",
      slug: "excavators",
      title: "Mining Excavators",
      description:
        "High-performance, fuel-efficient excavators built for harsh conditions.",
      image: "/images/product-placeholder.svg",
    },
    {
      _id: "prod-2",
      slug: "dump-trucks",
      title: "Dump Trucks",
      description:
        "Heavy-duty dump trucks for mining and quarry applications.",
      image: "/images/product-placeholder.svg",
    },
    {
      _id: "prod-3",
      slug: "drilling-rigs",
      title: "Drilling Rigs",
      description:
        "Modern rigs for precise and safe drilling operations.",
      image: "/images/product-placeholder.svg",
    },
    {
      _id: "prod-4",
      slug: "crushers",
      title: "Crushing Equipment",
      description:
        "Reliable crushing systems for rock and ore processing.",
      image: "/images/product-placeholder.svg",
    },
  ],
};

const projectsByLocale: Record<string, Project[]> = {
  mn: [
    {
      _id: "proj-1",
      slug: "oyu-tolgoi",
      title: "Оюу толгойн өргөтгөл",
      location: "Өмнөговь аймаг",
      description:
        "Уул уурхайн тоног төхөөрөмж нийлүүлэх, засвар үйлчилгээ үзүүлэх гэрээ.",
      image: "/images/project-placeholder.svg",
    },
    {
      _id: "proj-2",
      slug: "road-bridge",
      title: "Зам гүүрийн төсөл",
      location: "Төв аймаг",
      description:
        "Барилгын тоног төхөөрөмж, инженерийн шийдэл нийлүүлсэн.",
      image: "/images/project-placeholder.svg",
    },
    {
      _id: "proj-3",
      slug: "gold-mine",
      title: "Алтны уурхайн шинэчлэл",
      location: "Баянхонгор аймаг",
      description:
        "Бутлах, өрөмдлөгийн төхөөрөмж нийлүүлж, ашиглалтад оруулсан.",
      image: "/images/project-placeholder.svg",
    },
  ],
  en: [
    {
      _id: "proj-1",
      slug: "oyu-tolgoi",
      title: "Oyu Tolgoi Expansion",
      location: "Ömnögovi Province",
      description:
        "Supply and maintenance contract for mining equipment.",
      image: "/images/project-placeholder.svg",
    },
    {
      _id: "proj-2",
      slug: "road-bridge",
      title: "Road and Bridge Project",
      location: "Töv Province",
      description:
        "Supplied construction machinery and engineering solutions.",
      image: "/images/project-placeholder.svg",
    },
    {
      _id: "proj-3",
      slug: "gold-mine",
      title: "Gold Mine Modernization",
      location: "Bayankhongor Province",
      description:
        "Delivered crushing and drilling equipment into operation.",
      image: "/images/project-placeholder.svg",
    },
  ],
};

const heroSlidesByLocale: Record<string, HeroSlide[]> = {
  mn: [
    {
      _id: "hero-1",
      title: "Итгэл үнэмшилтэй инженерийн шийдэл",
      subtitle:
        "Европын өндөр чанарын тоног төхөөрөмж, Монголын зах зээлд",
      image: "/images/hero-1.svg",
      cta: "Бүтээгдэхүүн харах",
      ctaUrl: "/products",
    },
    {
      _id: "hero-2",
      title: "Уул уурхай, барилгын түнш тань",
      subtitle:
        "Тоног төхөөрөмж нийлүүлэлт, суурилуулалт, засвар үйлчилгээ",
      image: "/images/hero-2.svg",
      cta: "Төслүүд үзэх",
      ctaUrl: "/projects",
    },
    {
      _id: "hero-3",
      title: "Мэргэжлийн зөвлөгөө, найдвартай дэмжлэг",
      subtitle: "Бид таны бизнесийн өсөлтийн хамтрагч",
      image: "/images/hero-3.svg",
      cta: "Холбоо барих",
      ctaUrl: "/contact",
    },
  ],
  en: [
    {
      _id: "hero-1",
      title: "Trusted Engineering Solutions",
      subtitle: "European-grade equipment for the Mongolian market",
      image: "/images/hero-1.svg",
      cta: "View Products",
      ctaUrl: "/products",
    },
    {
      _id: "hero-2",
      title: "Your Mining & Construction Partner",
      subtitle: "Equipment supply, installation and after-sales service",
      image: "/images/hero-2.svg",
      cta: "View Projects",
      ctaUrl: "/projects",
    },
    {
      _id: "hero-3",
      title: "Professional Advice, Reliable Support",
      subtitle: "We are a partner in your business growth",
      image: "/images/hero-3.svg",
      cta: "Contact Us",
      ctaUrl: "/contact",
    },
  ],
};

const statsByLocale: Record<string, Stat[]> = {
  mn: [
    { _id: "stat-1", value: "15+", label: "Жилийн туршлага" },
    { _id: "stat-2", value: "200+", label: "Нийлүүлсэн төхөөрөмж" },
    { _id: "stat-3", value: "50+", label: "Төслийн түнш" },
    { _id: "stat-4", value: "24/7", label: "Дэмжлэг" },
  ],
  en: [
    { _id: "stat-1", value: "15+", label: "Years of experience" },
    { _id: "stat-2", value: "200+", label: "Equipment delivered" },
    { _id: "stat-3", value: "50+", label: "Project partners" },
    { _id: "stat-4", value: "24/7", label: "Support" },
  ],
};

export function getProducts(locale: string): Product[] {
  return productsByLocale[locale] ?? productsByLocale.mn;
}

export function getProjects(locale: string): Project[] {
  return projectsByLocale[locale] ?? projectsByLocale.mn;
}

export function getHeroSlides(locale: string): HeroSlide[] {
  return heroSlidesByLocale[locale] ?? heroSlidesByLocale.mn;
}

export function getStats(locale: string): Stat[] {
  return statsByLocale[locale] ?? statsByLocale.mn;
}
