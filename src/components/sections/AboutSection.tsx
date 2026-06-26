import { FadeIn } from "@/components/motion/FadeIn";

export default function AboutSection() {
  return (
    <section className="bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            EOSS Mongolia
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Бид Монгол улс дахь аж үйлдвэрийн болон орон сууцны барилгуудад зориулсан эрчим хүчний хэмнэлттэй хөнгөн цагаан цонх, хаалга, фасад системийн шийдэл нийлүүлдэг.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
