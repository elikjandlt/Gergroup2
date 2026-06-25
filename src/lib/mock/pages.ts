import type { CmsPage } from "@/types/cms";

const pagesByLocale: Record<string, CmsPage[]> = {
  mn: [
    {
      _id: "page-home-mn",
      name: "Нүүр",
      slug: "home",
      description: "EOSS Mongolia - Монгол дахь албан ёсны төлөөлөгч",
      content: "<p>EOSS Mongolia нь Европын өндөр чанарын инженерийн бүтээгдэхүүнийг Монголын зах зээлд нийлүүлж, уул уурхай, барилга, дэд бүтэц, аж үйлдвэрийн салбарт шийдэл санал болгодог.</p>",
      status: "published",
    },
    {
      _id: "page-about-mn",
      name: "Бидний тухай",
      slug: "about",
      description:
        "EOSS Mongolia нь 2010 онд байгуулагдсан, инженерийн тоног төхөөрөмж, дагалдах хэрэгсэл нийлүүлэлтээрээ Монголын зах зээлд тэргүүлэгч компаниудын нэг болно.",
      content:
        "<p>Бид олон улсын стандартад нийцсэн, найдвартай бүтээгдэхүүнээр дамжуулан харилцагчдынхаа ажлын бүтээмжийг дээшлүүлэхийг зорьдог. Манай баг инженерүүд танд тохирох шийдэл, суурилуулалт, засвар үйлчилгээний дэмжлэг үзүүлэхэд бэлэн.</p><p>EOSS брэнд нь Герман, Австри, Итали зэрэг улсуудад үйлдвэрлэгдсэн өндөр чанарын техник, тоног төхөөрөмжийг хамардаг бөгөөд уул уурхай, барилга, зам гүүрийн салбарт өргөн хэрэглэгддэг.</p>",
      status: "published",
    },
    {
      _id: "page-products-mn",
      name: "Бүтээгдэхүүн",
      slug: "products",
      description:
        "Уул уурхай, барилга, аж үйлдвэрийн зориулалттай Европын өндөр чанарын тоног төхөөрөмж, дагалдах хэрэгсэл.",
      content:
        "<p>Бидний санал болгож буй бүтээгдэхүүнүүд нь дэлхийн шилдэг үйлдвэрлэгчдийн стандартыг хангасан, хүнд нөхцөлд тэсвэртэй, урт хугацааны баталгаатай.</p>",
      status: "published",
    },
    {
      _id: "page-projects-mn",
      name: "Төслүүд",
      slug: "projects",
      description:
        "Монгол улсад хэрэгжүүлсэн томоохон инженерийн төслүүд болон үйлчлүүлэгчдийн амжилттай жишээнүүд.",
      content:
        "<p>Бид олон жилийн турш уул уурхай, барилга, дэд бүтцийн томоохон төслүүдэд тоног төхөөрөмж нийлүүлж, найдвартай түншлэлийг бүтээсэн.</p>",
      status: "published",
    },
    {
      _id: "page-blog-mn",
      name: "Мэдээлэл",
      slug: "blog",
      description:
        "Салбарын шинэ мэдээ, технологийн тренд, компанийн мэдээллийг эндээс хүлээн авна уу.",
      content:
        "<p>Манай мэдээллийн хуудаснаас та инженерийн шийдэл, бүтээгдэхүүний шинэчлэл, салбарын хөгжлийн талаарх хамгийн сүүлийн үеийн нийтлэлүүдийг унших боломжтой.</p>",
      status: "published",
    },
    {
      _id: "page-contact-mn",
      name: "Холбоо барих",
      slug: "contact",
      description:
        "Бидэнтэй холбоо барих, үнийн санал авах, бүтээгдэхүүний мэдээлэл авах бол доорх маягтыг бөглөнө үү.",
      content:
        "<p>Утас: +976 7711 2233<br/>Имэйл: info@eoss.mn<br/>Хаяг: Улаанбаатар хот, Сүхбаатар дүүрэг, Энхтайваны өргөн чөлөө 18.</p>",
      status: "published",
    },
  ],
  en: [
    {
      _id: "page-home-en",
      name: "Home",
      slug: "home",
      description: "EOSS Mongolia - Official representative in Mongolia",
      content:
        "<p>EOSS Mongolia supplies European engineering products to the Mongolian market, offering solutions for mining, construction, infrastructure and industrial sectors.</p>",
      status: "published",
    },
    {
      _id: "page-about-en",
      name: "About Us",
      slug: "about",
      description:
        "Founded in 2010, EOSS Mongolia is a leading supplier of engineering equipment and spare parts in Mongolia.",
      content:
        "<p>We aim to increase our customers' productivity by supplying reliable, internationally certified products. Our engineering team is ready to provide tailored solutions, installation and after-sales support.</p><p>The EOSS brand covers high-quality machinery and equipment manufactured in Germany, Austria and Italy, widely used in mining, construction and road-bridge sectors.</p>",
      status: "published",
    },
    {
      _id: "page-products-en",
      name: "Products",
      slug: "products",
      description:
        "European-grade equipment and spare parts for mining, construction and industrial applications.",
      content:
        "<p>Our product range meets world-leading manufacturer standards, is built for harsh conditions and comes with long-term warranties.</p>",
      status: "published",
    },
    {
      _id: "page-projects-en",
      name: "Projects",
      slug: "projects",
      description:
        "Major engineering projects completed across Mongolia and success stories from our clients.",
      content:
        "<p>For many years we have supplied equipment to large-scale mining, construction and infrastructure projects, building reliable partnerships.</p>",
      status: "published",
    },
    {
      _id: "page-blog-en",
      name: "News",
      slug: "blog",
      description:
        "Latest industry news, technology trends and company updates.",
      content:
        "<p>On our news page you can read the latest articles on engineering solutions, product updates and industry developments.</p>",
      status: "published",
    },
    {
      _id: "page-contact-en",
      name: "Contact",
      slug: "contact",
      description:
        "Get in touch with us for quotations, product information or support.",
      content:
        "<p>Phone: +976 7711 2233<br/>Email: info@eoss.mn<br/>Address: 18 Enkhtaivny Avenue, Sukhbaatar District, Ulaanbaatar.</p>",
      status: "published",
    },
  ],
};

export function getPages(locale: string): CmsPage[] {
  return pagesByLocale[locale] ?? pagesByLocale.mn;
}

export function getPageBySlug(locale: string, slug: string): CmsPage | undefined {
  return getPages(locale).find((page) => page.slug === slug);
}
