import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

interface CtaSectionProps {
  locale: string;
}

export default function CtaSection({ locale }: CtaSectionProps) {
  const isMn = locale === "mn";
  const title = isMn
    ? "Төслөө эхлүүлэхэд бэлэн үү?"
    : "Ready to start your project?";
  const subtitle = isMn
    ? "Манай багтай холбогдож, дэлгэрэнгүй үнийн санал аваарай."
    : "Get in touch with our team for a detailed quotation.";
  const cta = isMn ? "Холбоо барих" : "Contact Us";

  return (
    <section className="bg-primary py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <div className="text-white">
              <h2 className="mb-5 text-3xl font-extrabold leading-tight lg:text-5xl">{title}</h2>
              <p className="text-lg text-white/90">{subtitle}</p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-secondary px-10 py-4 text-sm font-bold text-white transition-colors hover:bg-secondary/90"
                >
                  {cta}
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-6 text-white">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-white/70">{isMn ? "И-мэйл" : "Email"}</p>
                  <p className="font-medium">info@eoss.mn</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-white/70">{isMn ? "Утас" : "Phone"}</p>
                  <p className="font-medium">+976 7711 2233</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-white/70">{isMn ? "Хаяг" : "Address"}</p>
                  <p className="font-medium">
                    {isMn
                      ? "Улаанбаатар, Сүхбаатар, Энхтайвны өргөн чөлөө 18"
                      : "18 Enkhtaivny Avenue, Sukhbaatar, Ulaanbaatar"}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
