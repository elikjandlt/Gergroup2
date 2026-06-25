import type { Post, Category } from "@/types/cms";

const postsByLocale: Record<string, Post[]> = {
  mn: [
    {
      _id: "post-1-mn",
      title: "Уул уурхайн тоног төхөөрөмжийн шинэ стандартууд",
      slug: "uul-uurkhain-tokhoiroomj",
      excerpt:
        "Олон улсын стандарт, баталгаажуулалтын шаардлага уул уурхайн тоног төхөөрөмжид хэрхэн нөлөөлж байгаа талаар.",
      content:
        "<p>Уул уурхайн салбарт техникийн шинэчлэл хурдацтай явагдаж байна. Европын стандартад нийцсэн тоног төхөөрөмж нь аюулгүй байдал, бүтээмж, хүлэмжийн хий ялгаруулалтыг бууруулахад чухал үүрэгтэй.</p><p>EOSS Mongolia нь дэлхийд хүлээн зөвшөөрөгдсөн үйлдвэрлэгчдийн бүтээгдэхүүнээр дамжуулан Монголын уул уурхайн компаниудад стандартад нийцсэн шийдэл нийлүүлж байна.</p>",
      status: "published",
      publishedDate: "2025-06-10",
      featuredImage: { url: "/images/blog-placeholder.svg", altText: "" },
      category: { _id: "cat-1", name: "Салбар мэдээ", slug: "industry" },
    },
    {
      _id: "post-2-mn",
      title: "Барилгын салбарт Европын инженерийн шийдэл",
      slug: "barilgiin-salbar-shiidel",
      excerpt:
        "Барилгын тоног төхөөрөмж, технологийн шийдлүүдийг Монголын нөхцөлд хэрхэн ашиглах вэ?",
      content:
        "<p>Барилгын салбарт ажлын бүтээмжийг нэмэгдүүлэх, аюулгүй байдлыг сайжруулах зорилгоор Европын сүүлийн үеийн тоног төхөөрөмжийг нэвтрүүлж байна.</p>",
      status: "published",
      publishedDate: "2025-05-22",
      featuredImage: { url: "/images/blog-placeholder.svg", altText: "" },
      category: { _id: "cat-1", name: "Салбар мэдээ", slug: "industry" },
    },
    {
      _id: "post-3-mn",
      title: "EOSS Mongolia шинэ оффисоо нээлээ",
      slug: "shine-office-neelee",
      excerpt:
        "Харилцагчдадаа илүү ойртон, үйлчилгээгээ сайжруулах зорилгоор бид шинэ оффисоо нээлээ.",
      content:
        "<p>Шинэ оффис нь борлуулалт, засвар үйлчилгээ, сэлбэг хэрэгслийн нөөцийн төвийн үүргийг нэгтгэнэ.</p>",
      status: "published",
      publishedDate: "2025-04-15",
      featuredImage: { url: "/images/blog-placeholder.svg", altText: "" },
      category: { _id: "cat-2", name: "Компани", slug: "company" },
    },
  ],
  en: [
    {
      _id: "post-1-en",
      title: "New Standards for Mining Equipment",
      slug: "mining-equipment-standards",
      excerpt:
        "How international standards and certifications are impacting mining equipment today.",
      content:
        "<p>The mining sector is undergoing rapid technological change. Equipment that meets European standards plays a key role in safety, productivity and reducing emissions.</p><p>EOSS Mongolia supplies Mongolian mining companies with certified solutions from globally recognized manufacturers.</p>",
      status: "published",
      publishedDate: "2025-06-10",
      featuredImage: { url: "/images/blog-placeholder.svg", altText: "" },
      category: { _id: "cat-1", name: "Industry News", slug: "industry" },
    },
    {
      _id: "post-2-en",
      title: "European Engineering Solutions in Construction",
      slug: "construction-solutions",
      excerpt:
        "How to apply European construction equipment and technology solutions in Mongolian conditions.",
      content:
        "<p>The construction sector is adopting the latest European machinery to boost productivity and improve safety.</p>",
      status: "published",
      publishedDate: "2025-05-22",
      featuredImage: { url: "/images/blog-placeholder.svg", altText: "" },
      category: { _id: "cat-1", name: "Industry News", slug: "industry" },
    },
    {
      _id: "post-3-en",
      title: "EOSS Mongolia Opens New Office",
      slug: "new-office-opening",
      excerpt:
        "We opened a new office to be closer to our customers and improve service quality.",
      content:
        "<p>The new office consolidates sales, after-sales service and spare parts inventory under one roof.</p>",
      status: "published",
      publishedDate: "2025-04-15",
      featuredImage: { url: "/images/blog-placeholder.svg", altText: "" },
      category: { _id: "cat-2", name: "Company", slug: "company" },
    },
  ],
};

const categoriesByLocale: Record<string, Category[]> = {
  mn: [
    { _id: "cat-1", name: "Салбар мэдээ", slug: "industry" },
    { _id: "cat-2", name: "Компани", slug: "company" },
  ],
  en: [
    { _id: "cat-1", name: "Industry News", slug: "industry" },
    { _id: "cat-2", name: "Company", slug: "company" },
  ],
};

export function getPosts(locale: string): Post[] {
  return postsByLocale[locale] ?? postsByLocale.mn;
}

export function getPostBySlug(locale: string, slug: string): Post | undefined {
  return getPosts(locale).find((post) => post.slug === slug);
}

export function getCategories(locale: string): Category[] {
  return categoriesByLocale[locale] ?? categoriesByLocale.mn;
}
