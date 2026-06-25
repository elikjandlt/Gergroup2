import { notFound } from "next/navigation";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES, type CpPagesData } from "@/graphql/cms/queries/page";
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
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPagesData>({
    query: CP_PAGES,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });
  const page = data?.cpPages?.find(
    (p: { slug?: string }) => p.slug === "contact"
  );
  if (!page) notFound();

  const isMn = locale === "mn";

  return (
    <>
      <PageHeader title={page.name ?? ""} description={page.description} />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1 space-y-6">
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
                  <p className="font-medium">{isMn ? "Имэйл" : "Email"}</p>
                  <p className="text-muted-foreground">info@eoss.mn</p>
                </div>
              </div>
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
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">{isMn ? "Ажлын цаг" : "Working hours"}</p>
                  <p className="text-muted-foreground">
                    {isMn ? "Да-Ба 09:00 - 18:00" : "Mon-Fri 09:00 - 18:00"}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 bg-muted p-6 sm:p-8">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
