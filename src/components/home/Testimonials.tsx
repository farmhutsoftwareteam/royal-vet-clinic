import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <AnimatedSection>
          <p className="text-xs tracking-[0.25em] uppercase text-warm-gray/50 font-sans">
            What clients say
          </p>
          <div className="mt-4 h-px w-12 bg-navy/15" />
        </AnimatedSection>

        {/* Editorial quote layout — one large, rest smaller */}
        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          {/* Featured quote — large */}
          <AnimatedSection className="lg:col-span-7">
            <blockquote>
              <p className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] tracking-tight text-navy">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="h-px w-8 bg-navy/20" />
                <div>
                  <p className="text-sm font-medium text-navy font-sans">{testimonials[0].name}</p>
                  <p className="text-xs text-warm-gray font-sans">
                    {testimonials[0].petName} the {testimonials[0].petType} &middot; {testimonials[0].location}
                  </p>
                </div>
              </footer>
            </blockquote>
          </AnimatedSection>

          {/* Secondary quotes — smaller, stacked */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-12">
            {testimonials.slice(1, 4).map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.15} direction="right">
                <blockquote className="border-l border-navy/10 pl-6">
                  <p className="text-sm text-warm-gray leading-relaxed font-sans italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-4">
                    <p className="text-xs font-medium text-navy font-sans">{t.name}</p>
                    <p className="text-xs text-warm-gray/60 font-sans">
                      {t.petName} &middot; {t.location}
                    </p>
                  </footer>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
