import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_MENUS, type CpMenusData } from "@/graphql/cms/queries/menu";
import { Link } from "@/i18n/routing";
import { Phone, Mail, MapPin } from "lucide-react";

export default async function Footer({ locale }: { locale: string }) {
  const client = await getServerApolloClient();
  const { data } = await client.query<CpMenusData>({
    query: CP_MENUS,
    variables: { language: locale, kind: "footer" },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const menu = (data?.cpMenus ?? [])
    .map((item) => ({
      _id: item._id,
      label: item.label ?? "",
      url: item.url ?? "",
      order: item.order ?? 0,
      target: item.target,
    }))
    .sort((a, b) => a.order - b.order);

  const companyLabel = locale === "mn" ? "Компани" : "Company";
  const supportLabel = locale === "mn" ? "Дэмжлэг" : "Support";
  const rights =
    locale === "mn" ? "Бүх эрх хуулиар хамгаалагдсан" : "All rights reserved";

  return (
    <footer className="bg-footer-bg text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <span className="text-xl font-bold">EOSS Mongolia</span>
            <p className="text-sm text-white/70">
              {locale === "mn"
                ? "Европын инженерийн шийдэл, Монголын зах зээлд."
                : "European engineering solutions for the Mongolian market."}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {companyLabel}
            </h3>
            <ul className="space-y-2">
              {menu.slice(0, 3).map((item) => (
                <li key={item._id}>
                  <Link
                    href={item.url}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {supportLabel}
            </h3>
            <ul className="space-y-2">
              {menu.slice(3).map((item) => (
                <li key={item._id}>
                  <Link
                    href={item.url}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {locale === "mn" ? "Холбоо барих" : "Contact"}
            </h3>
            <div className="flex items-start gap-3 text-sm text-white/70">
              <Phone className="h-4 w-4 shrink-0 mt-0.5" />
              <span>+976 7711 2233</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/70">
              <Mail className="h-4 w-4 shrink-0 mt-0.5" />
              <span>info@eoss.mn</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/70">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>
                {locale === "mn"
                  ? "Улаанбаатар, Сүхбаатар, Энхтайвны өргөн чөлөө 18"
                  : "18 Enkhtaivny Avenue, Sukhbaatar, Ulaanbaatar"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} EOSS Mongolia. {rights}.
        </div>
      </div>
    </footer>
  );
}
