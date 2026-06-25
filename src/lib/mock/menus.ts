import type { NavItem } from "@/types/cms";

const headerByLocale: Record<string, NavItem[]> = {
  mn: [
    { _id: "nav-home", label: "Нүүр", url: "/", order: 1 },
    { _id: "nav-products", label: "Бүтээгдэхүүн", url: "/products", order: 2 },
    { _id: "nav-about", label: "Бидний тухай", url: "/about", order: 3 },
    { _id: "nav-projects", label: "Төслүүд", url: "/projects", order: 4 },
    { _id: "nav-blog", label: "Мэдээлэл", url: "/blog", order: 5 },
    { _id: "nav-contact", label: "Холбоо барих", url: "/contact", order: 6 },
  ],
  en: [
    { _id: "nav-home", label: "Home", url: "/", order: 1 },
    { _id: "nav-products", label: "Products", url: "/products", order: 2 },
    { _id: "nav-about", label: "About", url: "/about", order: 3 },
    { _id: "nav-projects", label: "Projects", url: "/projects", order: 4 },
    { _id: "nav-blog", label: "News", url: "/blog", order: 5 },
    { _id: "nav-contact", label: "Contact", url: "/contact", order: 6 },
  ],
};

const footerByLocale: Record<string, NavItem[]> = {
  mn: [
    { _id: "f-products", label: "Бүтээгдэхүүн", url: "/products", order: 1 },
    { _id: "f-about", label: "Бидний тухай", url: "/about", order: 2 },
    { _id: "f-projects", label: "Төслүүд", url: "/projects", order: 3 },
    { _id: "f-blog", label: "Мэдээлэл", url: "/blog", order: 4 },
    { _id: "f-contact", label: "Холбоо барих", url: "/contact", order: 5 },
  ],
  en: [
    { _id: "f-products", label: "Products", url: "/products", order: 1 },
    { _id: "f-about", label: "About", url: "/about", order: 2 },
    { _id: "f-projects", label: "Projects", url: "/projects", order: 3 },
    { _id: "f-blog", label: "News", url: "/blog", order: 4 },
    { _id: "f-contact", label: "Contact", url: "/contact", order: 5 },
  ],
};

export function getHeaderMenu(locale: string): NavItem[] {
  return headerByLocale[locale] ?? headerByLocale.mn;
}

export function getFooterMenu(locale: string): NavItem[] {
  return footerByLocale[locale] ?? footerByLocale.mn;
}
