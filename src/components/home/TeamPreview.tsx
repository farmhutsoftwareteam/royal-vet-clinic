import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function TeamPreview() {
  return (
    <section className="py-28 bg-cream">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* Portrait placeholder — with editorial framing */}
          <AnimatedSection className="lg:col-span-5" direction="left">
            <div className="relative">
              <div className="aspect-[3/4] bg-navy" />
              {/* Caption bar — like a magazine spread */}
              <div className="mt-4 flex items-baseline justify-between">
                <p className="text-xs tracking-[0.15em] uppercase text-warm-gray/60 font-sans">
                  Dr. Rightwell Munyuki
                </p>
                <p className="text-xs text-warm-gray/40 font-sans">
                  BVSc, MBA
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content — offset for asymmetry */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
            <AnimatedSection direction="right">
              <p className="text-xs tracking-[0.25em] uppercase text-warm-gray/50 font-sans">
                The Founder
              </p>
              <div className="mt-4 h-px w-12 bg-navy/15" />
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <blockquote className="mt-10">
                <p className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.3] tracking-tight text-navy">
                  &ldquo;I built this clinic to be the one I&apos;d trust
                  with my own animals — where the medicine is sharp
                  and the care is genuine.&rdquo;
                </p>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="mt-10 text-warm-gray leading-relaxed font-sans">
                From clinical training in South Africa to an MBA that sharpened
                how he thinks about patient experience, Dr. Munyuki brings
                both precision and perspective. His work with Cape Dachshund
                Rescue isn&apos;t a side project — it&apos;s core to who he is.
              </p>

              <div className="mt-10">
                <Button href="/about" variant="ghost">
                  Read the full story
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
