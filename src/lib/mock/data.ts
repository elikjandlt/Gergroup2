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

export interface ProductSubcategory {
  readonly slug: string;
  readonly title: string;
}

export interface ProductCategory {
  readonly _id: string;
  readonly slug: string;
  readonly title: string;
  readonly subcategories?: ProductSubcategory[];
}

export interface ProductItem {
  readonly _id: string;
  readonly slug: string;
  readonly title: string;
  readonly categorySlug: string;
  readonly subcategorySlug?: string;
  readonly openingModes: string;
  readonly image: string;
}

const categoryImageMap: Record<string, string> = {
  casement: "/images/product-1.png",
  sliding: "/images/product-2.png",
  featured: "/images/product-3.png",
  "curtain-wall": "/images/product-4.png",
  international: "/images/product-5.png",
};

const productImageMap: Record<string, string> = {
  "casement-es65": "/images/products/casement-es65.png",
  "casement-es70": "/images/products/casement-es70.png",
  "casement-es76": "/images/products/casement-es76.png",
  "casement-es81": "/images/products/casement-es81.png",
  "casement-es91": "/images/products/casement-es91.png",
  "casement-es100": "/images/products/casement-es100.png",
  "casement-es101": "/images/products/casement-es101.png",
  "sliding-es120": "/images/products/sliding-es120.png",
  "sliding-es152": "/images/products/sliding-es152.png",
  "sliding-es170": "/images/products/sliding-es170.png",
  "featured-es70-ventilation": "/images/products/featured-es70-ventilation.png",
  "featured-ef86w": "/images/products/featured-ef86w.png",
  "featured-ef106w": "/images/products/featured-ef106w.png",
  "featured-em86": "/images/products/featured-em86.png",
  "featured-em94": "/images/products/featured-em94.png",
  "featured-el86": "/images/products/featured-el86.png",
  "featured-el70": "/images/products/featured-el70.png",
  "featured-el88": "/images/products/featured-el88.png",
  "featured-el100": "/images/products/featured-el100.png",
  "featured-es153": "/images/products/featured-es153.png",
  "featured-es68-integrated": "/images/products/featured-es68-integrated.png",
  "featured-es70-integrated": "/images/products/featured-es70-integrated.png",
  "featured-es77-integrated": "/images/products/featured-es77-integrated.png",
  "featured-el110-integrated": "/images/products/featured-el110-integrated.png",
  "featured-es119-integrated": "/images/products/featured-es119-integrated.png",
  "featured-external-integrated": "/images/products/featured-external-integrated.jpg",
  "featured-classical-gauze": "/images/products/featured-classical-gauze.jpg",
  "featured-fixed-screen": "/images/products/featured-fixed-screen.jpg",
  "featured-simple-gauze": "/images/products/featured-simple-gauze.jpg",
  "featured-swinging-screen-door": "/images/products/featured-swinging-screen-door.jpg",
  "featured-sliding-screen-window": "/images/products/featured-sliding-screen-window.jpg",
  "featured-sliding-screen-door": "/images/products/featured-sliding-screen-door.jpg",
  "curtain-ef60hi": "/images/products/curtain-ef60hi.png",
  "curtain-ef87": "/images/products/curtain-ef87.jpg",
  "intl-es120-lift": "/images/products/intl-es120-lift.png",
  "intl-es127": "/images/products/intl-es127.png",
  "intl-es70-external": "/images/products/intl-es70-external.png",
  "intl-el70-bifold": "/images/products/intl-el70-bifold.png",
};

const productCategorySpecs = [
  {
    slug: "casement",
    titleMn: "Хөдөлгөөнт цонхны сери",
    titleEn: "Casement Series",
  },
  {
    slug: "sliding",
    titleMn: "Хөдөлгөөнт хаалганы сери",
    titleEn: "Sliding Series",
  },
  {
    slug: "featured",
    titleMn: "Онцлох сери",
    titleEn: "Featured Series",
    subcategories: [
      { slug: "ventilation", titleMn: "Агааржуулалтын цонх", titleEn: "Ventilation Window" },
      { slug: "parallel-outward", titleMn: "Хөндлөн гадна нээлттэй цонх", titleEn: "Parallel Outward Opening Window" },
      { slug: "tilt-slide", titleMn: "Хазайлгаан хаалгатай цонх", titleEn: "Tilt-and-Slide Window" },
      { slug: "concealed-sash", titleMn: "Далд жигнүүртэй цонх", titleEn: "Concealed Sash Window" },
      { slug: "bifold-door", titleMn: "Хуулдаг хаалга", titleEn: "Bifold Door" },
      { slug: "parallel-retraction", titleMn: "Хөндлөн шахагдах хаалга", titleEn: "Parallel Retraction Sliding Door" },
      { slug: "integrated-flyscreen", titleMn: "Савхат хаалттай цонх", titleEn: "Integrated Flyscreen Window" },
      { slug: "matching-flyscreen", titleMn: "Савхат хаалт", titleEn: "Matching Flyscreen" },
    ],
  },
  {
    slug: "curtain-wall",
    titleMn: "Шилэн фасад сери",
    titleEn: "Curtain Wall Series",
  },
  {
    slug: "international",
    titleMn: "Олон улсын сери",
    titleEn: "International Series",
    subcategories: [
      { slug: "sliding-stacking-doors", titleMn: "Слайд / хураах хаалга", titleEn: "Sliding/Stacking Doors" },
      { slug: "swing-door", titleMn: "Энгийн нээлттэй хаалга", titleEn: "Swing door" },
      { slug: "awning-window", titleMn: "Дээшээ нээлттэй цонх", titleEn: "Awning Window" },
      { slug: "bifold-door-intl", titleMn: "Хуулдаг хаалга", titleEn: "Bifold door" },
      { slug: "sliding", titleMn: "Слайд", titleEn: "Sliding" },
    ],
  },
];

const productItemSpecs = [
  // Casement
  { slug: "casement-es65", title: "ES65", categorySlug: "casement", openingMn: "Дотоод болон гадна хөдөлгөөнт цонх", openingEn: "Interior casement window, exterior casement window" },
  { slug: "casement-es70", title: "ES70", categorySlug: "casement", openingMn: "Дотоод болон гадна хөдөлгөөнт цонх", openingEn: "Interior casement window, exterior casement window" },
  { slug: "casement-es76", title: "ES76", categorySlug: "casement", openingMn: "Дотоод болон гадна хөдөлгөөнт цонх", openingEn: "Interior casement window, exterior casement window" },
  { slug: "casement-es81", title: "ES81", categorySlug: "casement", openingMn: "Дотоод болон гадна хөдөлгөөнт цонх", openingEn: "Interior casement window, exterior casement window" },
  { slug: "casement-es91", title: "ES91", categorySlug: "casement", openingMn: "Дотоод болон гадна хөдөлгөөнт цонх", openingEn: "Interior casement window, exterior casement window" },
  { slug: "casement-es100", title: "ES100", categorySlug: "casement", openingMn: "Дотоод болон гадна хөдөлгөөнт цонх", openingEn: "Interior casement window, exterior casement window" },
  { slug: "casement-es101", title: "ES101", categorySlug: "casement", openingMn: "Дотоод болон гадна хөдөлгөөнт цонх", openingEn: "Interior casement window, exterior casement window" },
  // Sliding
  { slug: "sliding-es120", title: "ES120", categorySlug: "sliding", openingMn: "Хөдөлгөөнт цонх", openingEn: "Sliding window" },
  { slug: "sliding-es152", title: "ES152", categorySlug: "sliding", openingMn: "Хөдөлгөөнт цонх", openingEn: "Sliding window" },
  { slug: "sliding-es170", title: "ES170", categorySlug: "sliding", openingMn: "Хөдөлгөөнт цонх", openingEn: "Sliding window" },
  // Featured - ventilation
  { slug: "featured-es70-ventilation", title: "ES70 Ventilation Window", categorySlug: "featured", subcategorySlug: "ventilation", openingMn: "Агааржуулалтын цонх", openingEn: "Ventilation window" },
  // Featured - parallel outward
  { slug: "featured-ef86w", title: "EF86W (ER86) Sliding window", categorySlug: "featured", subcategorySlug: "parallel-outward", openingMn: "Хөндлөн гадна нээлттэй цонх", openingEn: "Parallel outward opening window" },
  { slug: "featured-ef106w", title: "EF106W (ER106) Sliding window", categorySlug: "featured", subcategorySlug: "parallel-outward", openingMn: "Хөндлөн гадна нээлттэй цонх", openingEn: "Parallel outward opening window" },
  // Featured - tilt-slide
  { slug: "featured-em86", title: "EM86 drift window", categorySlug: "featured", subcategorySlug: "tilt-slide", openingMn: "Хазайлгаан хаалгатай цонх", openingEn: "Tilt-and-slide window" },
  { slug: "featured-em94", title: "EM94 drift window", categorySlug: "featured", subcategorySlug: "tilt-slide", openingMn: "Хазайлгаан хаалгатай цонх", openingEn: "Tilt-and-slide window" },
  // Featured - concealed sash
  { slug: "featured-el86", title: "EL86 Hidden Fan", categorySlug: "featured", subcategorySlug: "concealed-sash", openingMn: "Далд жигнүүртэй цонх", openingEn: "Concealed sash window" },
  // Featured - bifold door
  { slug: "featured-el70", title: "EL70 folding door", categorySlug: "featured", subcategorySlug: "bifold-door", openingMn: "Хуулдаг хаалга", openingEn: "Bifold door" },
  { slug: "featured-el88", title: "EL88 folding door", categorySlug: "featured", subcategorySlug: "bifold-door", openingMn: "Хуулдаг хаалга", openingEn: "Bifold door" },
  { slug: "featured-el100", title: "EL100 folding door", categorySlug: "featured", subcategorySlug: "bifold-door", openingMn: "Хуулдаг хаалга", openingEn: "Bifold door" },
  // Featured - parallel retraction
  { slug: "featured-es153", title: "ES153 side pressure door", categorySlug: "featured", subcategorySlug: "parallel-retraction", openingMn: "Хөндлөн шахагдах хаалга", openingEn: "Parallel retraction sliding door" },
  // Featured - integrated flyscreen
  { slug: "featured-es68-integrated", title: "ES68 window screen integrated", categorySlug: "featured", subcategorySlug: "integrated-flyscreen", openingMn: "Савхат хаалттай цонх", openingEn: "Integrated flyscreen window" },
  { slug: "featured-es70-integrated", title: "ES70 integrated window screen", categorySlug: "featured", subcategorySlug: "integrated-flyscreen", openingMn: "Савхат хаалттай цонх", openingEn: "Integrated flyscreen window" },
  { slug: "featured-es77-integrated", title: "ES77 integrated window screen", categorySlug: "featured", subcategorySlug: "integrated-flyscreen", openingMn: "Савхат хаалттай цонх", openingEn: "Integrated flyscreen window" },
  { slug: "featured-el110-integrated", title: "EL110 integrated window screen", categorySlug: "featured", subcategorySlug: "integrated-flyscreen", openingMn: "Савхат хаалттай цонх", openingEn: "Integrated flyscreen window" },
  { slug: "featured-es119-integrated", title: "ES119 integrated window screen", categorySlug: "featured", subcategorySlug: "integrated-flyscreen", openingMn: "Савхат хаалттай цонх", openingEn: "Integrated flyscreen window" },
  { slug: "featured-external-integrated", title: "Integrated external window screen", categorySlug: "featured", subcategorySlug: "integrated-flyscreen", openingMn: "Савхат хаалттай цонх", openingEn: "Integrated flyscreen window" },
  // Featured - matching flyscreen
  { slug: "featured-classical-gauze", title: "Classical gauze window", categorySlug: "featured", subcategorySlug: "matching-flyscreen", openingMn: "Савхат хаалт", openingEn: "Matching flyscreen" },
  { slug: "featured-fixed-screen", title: "Fixed window screen", categorySlug: "featured", subcategorySlug: "matching-flyscreen", openingMn: "Савхат хаалт", openingEn: "Matching flyscreen" },
  { slug: "featured-simple-gauze", title: "Simple gauze window", categorySlug: "featured", subcategorySlug: "matching-flyscreen", openingMn: "Савхат хаалт", openingEn: "Matching flyscreen" },
  { slug: "featured-swinging-screen-door", title: "Swinging screen door", categorySlug: "featured", subcategorySlug: "matching-flyscreen", openingMn: "Савхат хаалт", openingEn: "Matching flyscreen" },
  { slug: "featured-sliding-screen-window", title: "Sliding screen window", categorySlug: "featured", subcategorySlug: "matching-flyscreen", openingMn: "Савхат хаалт", openingEn: "Matching flyscreen" },
  { slug: "featured-sliding-screen-door", title: "Sliding screen door", categorySlug: "featured", subcategorySlug: "matching-flyscreen", openingMn: "Савхат хаалт", openingEn: "Matching flyscreen" },
  // Curtain wall
  { slug: "curtain-ef60hi", title: "EF60HI curtain wall", categorySlug: "curtain-wall", openingMn: "Шилэн фасад", openingEn: "Curtain wall" },
  { slug: "curtain-ef87", title: "EF87 Unitized curtain wall", categorySlug: "curtain-wall", openingMn: "Шилэн фасад", openingEn: "Curtain wall" },
  // International
  { slug: "intl-es120-lift", title: "ES120 Lift & Slide Door", categorySlug: "international", subcategorySlug: "sliding-stacking-doors", openingMn: "Слайд / хураах хаалга", openingEn: "Sliding/Stacking door" },
  { slug: "intl-es127", title: "ES127 Sliding/Stacking Door", categorySlug: "international", subcategorySlug: "sliding-stacking-doors", openingMn: "Слайд / хураах хаалга", openingEn: "Sliding/Stacking door" },
  { slug: "intl-es70-external", title: "ES70 External Opening Door", categorySlug: "international", subcategorySlug: "swing-door", openingMn: "Энгийн нээлттэй хаалга", openingEn: "Swing door" },
  { slug: "intl-es70-awning", title: "ES70 Awning Window", categorySlug: "international", subcategorySlug: "awning-window", openingMn: "Дээшээ нээлттэй цонх", openingEn: "Awning window" },
  { slug: "intl-el70-bifold", title: "EL70 Bifold door", categorySlug: "international", subcategorySlug: "bifold-door-intl", openingMn: "Хуулдаг хаалга", openingEn: "Bifold door" },
  { slug: "intl-stacking-doors", title: "Stacking Doors", categorySlug: "international", subcategorySlug: "sliding", openingMn: "Слайд хаалга", openingEn: "Sliding door" },
];

function buildProductData(locale: string): {
  categories: ProductCategory[];
  items: ProductItem[];
} {
  const isMn = locale === "mn";
  const categories: ProductCategory[] = productCategorySpecs.map((cat, index) => ({
    _id: `prod-cat-${index}`,
    slug: cat.slug,
    title: isMn ? cat.titleMn : cat.titleEn,
    subcategories: cat.subcategories?.map((sub) => ({
      slug: sub.slug,
      title: isMn ? sub.titleMn : sub.titleEn,
    })),
  }));

  const items: ProductItem[] = productItemSpecs.map((item, index) => ({
    _id: `prod-item-${index}`,
    slug: item.slug,
    title: item.title,
    categorySlug: item.categorySlug,
    subcategorySlug: item.subcategorySlug,
    openingModes: isMn ? item.openingMn : item.openingEn,
    image: productImageMap[item.slug] ?? categoryImageMap[item.categorySlug] ?? "/images/product-placeholder.svg",
  }));

  return { categories, items };
}

export function getProductCategories(locale: string): ProductCategory[] {
  return buildProductData(locale).categories;
}

export function getProductItems(locale: string): ProductItem[] {
  return buildProductData(locale).items;
}

export function getProductItemBySlug(
  locale: string,
  slug: string
): ProductItem | undefined {
  return getProductItems(locale).find((item) => item.slug === slug);
}

