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
  readonly icon: string;
}

const productsByLocale: Record<string, Product[]> = {
  mn: [
    {
      _id: "prod-1",
      slug: "shilen-fasad",
      title: "Шилэн фасад",
      description:
        "Орчин үеийн барилгын хараа зүйг тодорхойлдог, эрчим хүчний хэмнэлттэй шилэн фасад систем.",
      image: "/images/product-1.png",
    },
    {
      _id: "prod-2",
      slug: "metal-tsonkh",
      title: "Метал цонх",
      description:
        "Удаан эдэлгээтэй, дуу чимээ багатай, дулаан тусгаарлалт сайтай металл цонх.",
      image: "/images/product-2.png",
    },
    {
      _id: "prod-3",
      slug: "slaid-tsonkh",
      title: "Слайд цонх",
      description:
        "Зай хэмнэх, практик, орчин үеийн загварын слайд цонхны шийдэл.",
      image: "/images/product-3.png",
    },
    {
      _id: "prod-4",
      slug: "ontsloh-seri",
      title: "Онцлох сери",
      description:
        "Монголын уур амьсгалд зориулсан онцлох цонх, хаалганы сери.",
      image: "/images/product-4.png",
    },
    {
      _id: "prod-5",
      slug: "olon-ulsyn-seri",
      title: "Олон улсын сери",
      description:
        "Дэлхийн стандартад нийцсэн, өндөр чанарын олон улсын бүтээгдэхүүний сери.",
      image: "/images/product-5.png",
    },
  ],
  en: [
    {
      _id: "prod-1",
      slug: "shilen-fasad",
      title: "Glass Facade",
      description:
        "Energy-efficient glass facade systems that define the modern look of buildings.",
      image: "/images/product-1.png",
    },
    {
      _id: "prod-2",
      slug: "metal-tsonkh",
      title: "Metal Windows",
      description:
        "Durable, noise-reducing metal windows with excellent thermal insulation.",
      image: "/images/product-2.png",
    },
    {
      _id: "prod-3",
      slug: "slaid-tsonkh",
      title: "Sliding Windows",
      description:
        "Space-saving, practical, modern-style sliding window solutions.",
      image: "/images/product-3.png",
    },
    {
      _id: "prod-4",
      slug: "ontsloh-seri",
      title: "Featured Series",
      description:
        "Featured window and door series designed for Mongolia's climate.",
      image: "/images/product-4.png",
    },
    {
      _id: "prod-5",
      slug: "olon-ulsyn-seri",
      title: "International Series",
      description:
        "High-quality international-standard product series.",
      image: "/images/product-5.png",
    },
  ],
};

const projectsByLocale: Record<string, Project[]> = {
  mn: [
    {
      _id: "proj-1",
      slug: "business-tower",
      title: "Бизнес төвийн цамхаг",
      location: "Улаанбаатар",
      description:
        "Олон давхар бизнес төвийн шилэн фасад болон метал цонхны нийлүүлэлт.",
      image: "/images/product-1.png",
    },
    {
      _id: "proj-2",
      slug: "luxury-hotel",
      title: "Тансаг зочид буудал",
      location: "Улаанбаатар",
      description:
        "Зочид буудлын фасад, цонх, хаалганы бүрэн шийдэл.",
      image: "/images/product-2.png",
    },
    {
      _id: "proj-3",
      slug: "residential-complex",
      title: "Тэнгэрийн цэцэрлэгт хотхон",
      location: "Улаанбаатар",
      description:
        "Орон сууцны хотхоны цонх, хаалга, фасадын систем.",
      image: "/images/product-3.png",
    },
    {
      _id: "proj-4",
      slug: "shopping-center",
      title: "Худалдааны төвийн фасад",
      location: "Улаанбаатар",
      description:
        "Худалдааны төвийн шилэн фасад болон нэвтрэх хэсгийн шийдэл.",
      image: "/images/product-4.png",
    },
    {
      _id: "proj-5",
      slug: "industrial-admin",
      title: "Үйлдвэрийн админ барилга",
      location: "Улаанбаатар",
      description:
        "Үйлдвэрийн барилгын цонх, хаалга, фасадын нийлүүлэлт.",
      image: "/images/product-5.png",
    },
    {
      _id: "proj-6",
      slug: "international-project",
      title: "Олон улсын төсөл",
      location: "Бээжин",
      description:
        "Олон улсын стандартад нийцсэн фасад, цонхны шийдэл.",
      image: "/images/about-intro.png",
    },
  ],
  en: [
    {
      _id: "proj-1",
      slug: "business-tower",
      title: "Business Center Tower",
      location: "Ulaanbaatar",
      description:
        "Glass facade and metal window supply for a multi-storey business center.",
      image: "/images/product-1.png",
    },
    {
      _id: "proj-2",
      slug: "luxury-hotel",
      title: "Luxury Hotel",
      location: "Ulaanbaatar",
      description:
        "Complete facade, window and door solution for a hotel.",
      image: "/images/product-2.png",
    },
    {
      _id: "proj-3",
      slug: "residential-complex",
      title: "Sky Garden Residential Complex",
      location: "Ulaanbaatar",
      description:
        "Window, door and facade system for a residential complex.",
      image: "/images/product-3.png",
    },
    {
      _id: "proj-4",
      slug: "shopping-center",
      title: "Shopping Center Facade",
      location: "Ulaanbaatar",
      description:
        "Glass facade and entrance solution for a shopping center.",
      image: "/images/product-4.png",
    },
    {
      _id: "proj-5",
      slug: "industrial-admin",
      title: "Industrial Admin Building",
      location: "Ulaanbaatar",
      description:
        "Window, door and facade supply for an industrial building.",
      image: "/images/product-5.png",
    },
    {
      _id: "proj-6",
      slug: "international-project",
      title: "International Project",
      location: "Beijing",
      description:
        "Facade and window solution meeting international standards.",
      image: "/images/about-intro.png",
    },
  ],
};

const heroSlidesByLocale: Record<string, HeroSlide[]> = {
  mn: [
    {
      _id: "hero-1",
      title: "Хөнгөн цагаан бүтээгдэхүүний бүрэн шийдэл",
      subtitle:
        "Орчин үеийн барилгуудад зориулсан эрчим хүчний хэмнэлттэй цонх, хаалга, шилэн фасад",
      image: "/images/hero-1.png",
      cta: "Бүтээгдэхүүн харах",
      ctaUrl: "/products",
    },
    {
      _id: "hero-2",
      title: "Монголын барилгын салбарт итгэл үнэмшилтэй түнш",
      subtitle:
        "Дизайн зөвлөх үйлчилгээ, систем сонголт, нийлүүлэлт, угсралтын дэмжлэг",
      image: "/images/hero-2.png",
      cta: "Төслүүд үзэх",
      ctaUrl: "/projects",
    },
    {
      _id: "hero-3",
      title: "Олон улсын стандарт, Монголын нөхцөлд",
      subtitle:
        "Хөнгөн цагаан системийн технологийг Монголын уур амьсгалд зориулан нэвтрүүлж байна",
      image: "/images/hero-3.png",
      cta: "Холбоо барих",
      ctaUrl: "/contact",
    },
  ],
  en: [
    {
      _id: "hero-1",
      title: "Complete Aluminum Solutions",
      subtitle:
        "Energy-efficient windows, doors and glass facades for modern buildings",
      image: "/images/hero-1.png",
      cta: "View Products",
      ctaUrl: "/products",
    },
    {
      _id: "hero-2",
      title: "A Trusted Partner in Mongolia's Construction Sector",
      subtitle:
        "Design consulting, system selection, supply and installation support",
      image: "/images/hero-2.png",
      cta: "View Projects",
      ctaUrl: "/projects",
    },
    {
      _id: "hero-3",
      title: "International Standards for Mongolian Conditions",
      subtitle:
        "Adapting aluminum system technology for Mongolia's climate",
      image: "/images/hero-3.png",
      cta: "Contact Us",
      ctaUrl: "/contact",
    },
  ],
};

const statsByLocale: Record<string, Stat[]> = {
  mn: [
    { _id: "stat-1", value: "15+", label: "Жилийн туршлага", icon: "award" },
    { _id: "stat-2", value: "200+", label: "Гүйцэтгэсэн төсөл", icon: "building" },
    { _id: "stat-3", value: "50+", label: "Бүтээгдэхүүний сери", icon: "layers" },
    { _id: "stat-4", value: "2", label: "Улс орон", icon: "globe" },
  ],
  en: [
    { _id: "stat-1", value: "15+", label: "Years of experience", icon: "award" },
    { _id: "stat-2", value: "200+", label: "Projects completed", icon: "building" },
    { _id: "stat-3", value: "50+", label: "Product series", icon: "layers" },
    { _id: "stat-4", value: "2", label: "Countries", icon: "globe" },
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
