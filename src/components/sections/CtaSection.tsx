import { Link } from "@/i18n/routing";
import { Phone, Mail } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

interface CtaSectionProps {
  locale: string;
}

export default function CtaSection({ locale }: CtaSectionProps) {
  const title =
    locale === "mn" ? "Үнийн санал авахыг хүсэж байна уу?" : "Request a Quote";
  const subtitle =
    locale === "mn"
      ? "Бид танд тохирох бүтээгдэхүүн, шийдлийн талаар зөвлөгөө өгөхөд бэлэн."
      : "We are ready to advise you on the right products and solutions.";
  const cta = locale === "mn" ? "Холбоо барих" : "Contact Us";

  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="text-primary-foreground">
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">{title}</h2>
              <p className="text-lg opacity-90">{subtitle}</p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
                >
                  {cta}
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-5 border-l-2 border-white/20 pl-8 text-primary-foreground">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5" />
                <span className="font-medium">+976 7711 2233</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                <span className="font-medium">info@eoss.mn</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
