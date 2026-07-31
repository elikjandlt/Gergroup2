import { Link } from "@/i18n/routing";
import type { NavItem } from "@/types/cms";

interface FooterProps {
  menu: NavItem[];
  locale: string;
}

export default function FooterClient({ menu, locale }: FooterProps) {
  const isMn = locale === "mn";
  const productsLabel = isMn ? "Бүтээгдэхүүн" : "Products";
  const companyLabel = isMn ? "Компани" : "Company";
  const contactLabel = isMn ? "Холбоо барих" : "Contact";
  const rights = isMn
    ? "Бүх эрх хуулиар хамгаалагдсан"
    : "All rights reserved";

  const productItems = [
    { label: isMn ? "Шилэн фасад" : "Glass Facade", url: "/products" },
    { label: isMn ? "Метал цонх" : "Metal Windows", url: "/products" },
    { label: isMn ? "Слайд цонх" : "Sliding Windows", url: "/products" },
    { label: isMn ? "Онцлох сери" : "Featured Series", url: "/products" },
  ];

  const companyItems = [
    { label: isMn ? "Бидний тухай" : "About Us", url: "/about" },
    { label: isMn ? "Төслүүд" : "Projects", url: "/projects" },
    { label: isMn ? "Мэдээлэл" : "News", url: "/blog" },
  ];

  const contactItems = [
    { label: "+976 7711 2233", url: "tel:+97677112233" },
    { label: "info@eoss.mn", url: "mailto:info@eoss.mn" },
    {
      label: isMn
        ? "Улаанбаатар, Сүхбаатар, Энхтайвны өргөн чөлөө 18"
        : "18 Enkhtaivny Avenue, Sukhbaatar, Ulaanbaatar",
      url: "/contact",
    },
  ];

  return (
    <footer className="bg-[#353F4C] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex flex-col leading-none">
              <span className="text-[22px] font-extrabold text-primary">EOSS</span>
              <span className="text-[11px] font-semibold tracking-[0.04em] text-white">MONGOLIA</span>
            </div>
            <p className="text-sm text-white/60">
              {isMn
                ? "Хөнгөн цагаан цонх, хаалга, шилэн фасад системийн шийдэл."
                : "Aluminum windows, doors and glass facade system solutions."}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">{productsLabel}</h3>
            <ul className="space-y-2">
              {productItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.url}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">{companyLabel}</h3>
            <ul className="space-y-2">
              {companyItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.url}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">{contactLabel}</h3>
            <ul className="space-y-2">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.url}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} EOSS Mongolia. {rights}.
        </div>
      </div>
    </footer>
  );
}
