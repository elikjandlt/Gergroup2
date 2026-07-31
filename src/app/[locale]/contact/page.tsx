import { safeQuery } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData, type Page } from "@/graphql/cms/queries/page";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Холбоо барих",
  description: "EOSS Mongolia - бидэнтэй холбоо барих, үнийн санал авах",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isMn = locale === "mn";
  const data = await safeQuery<CpPagesData>(CP_PAGES, { language: locale });
  const page =
    data?.cpPages?.find((p) => p.slug === "contact") ??
    ({
      _id: "fallback-contact",
      name: isMn ? "Холбоо барих" : "Contact",
      slug: "contact",
    } as Page);

  return (
    <>
      <PageHeader
        title={page.name ?? ""}
        description={
          isMn
            ? "Бидэнтэй холбоо бариж, үнийн санал аваарай"
            : "Get in touch and request a quote"
        }
        image="/images/hero-1.png"
      />

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-10">
              <h2 className="text-3xl font-bold text-foreground">
                {isMn ? "Холбоо барих мэдээлэл" : "Contact Information"}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">{isMn ? "Хаяг" : "Address"}</p>
                    <p className="text-muted-foreground">
                      {isMn
                        ? "Улаанбаатар, Сүхбаатар, Энхтайвны өргөн чөлөө 18"
                        : "18 Enkhtaivny Avenue, Sukhbaatar, Ulaanbaatar"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">{isMn ? "Утас" : "Phone"}</p>
                    <p className="text-muted-foreground">+976 7711 2233</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">{isMn ? "И-мэйл" : "Email"}</p>
                    <p className="text-muted-foreground">info@eoss.mn</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">{isMn ? "Ажлын цаг" : "Working hours"}</p>
                    <p className="text-muted-foreground">
                      {isMn ? "Да-Ба 09:00 - 18:00" : "Mon-Fri 09:00 - 18:00"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F7FA] p-8 lg:p-12">
              <h2 className="mb-8 text-2xl font-bold text-foreground">
                {isMn ? "Үнийн санал авах" : "Request a Quote"}
              </h2>
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
