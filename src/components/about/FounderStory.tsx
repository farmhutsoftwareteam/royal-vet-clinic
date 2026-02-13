import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FounderStory() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* Portrait placeholder */}
          <AnimatedSection className="lg:col-span-5" direction="left">
            <div className="relative">
              <div className="aspect-[3/4] bg-navy" />
              <div className="mt-3 flex items-baseline justify-between">
                <p className="text-xs tracking-[0.15em] uppercase text-warm-gray/50 font-sans">
                  Dr. Rightwell Munyuki
                </p>
                <p className="text-xs text-warm-gray/30 font-sans">BVSc, MBA</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Story */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-12">
            <AnimatedSection direction="right">
              <p className="text-xs tracking-[0.25em] uppercase text-warm-gray/50 font-sans">
                The Founder
              </p>
              <div className="mt-4 h-px w-12 bg-navy/15" />

              <h2 className="mt-8 text-3xl text-navy sm:text-4xl leading-[1.15] tracking-tight">
                A practice built on<br />first principles
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-10 space-y-5 text-warm-gray leading-relaxed font-sans text-[15px]">
                <p>
                  Dr. Munyuki&apos;s path wasn&apos;t conventional. After qualifying as a
                  veterinarian, he spent years in practice — then stepped back to
                  study an MBA, not to leave medicine, but to understand how to build
                  a clinic that genuinely works for patients and the people who love them.
                </p>
                <p>
                  The result is Royal Vet: a practice where diagnostic investment
                  comes first, where consults aren&apos;t rushed, and where the team
                  actually knows your pet&apos;s name. His work with Cape Dachshund
                  Rescue isn&apos;t marketing — it&apos;s a reflection of why he does this work.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <blockquote className="mt-10 border-l border-navy/15 pl-6">
                <p className="text-lg text-navy leading-relaxed italic">
                  &ldquo;Good medicine isn&apos;t about having the fanciest equipment.
                  It&apos;s about using the right tools at the right time, with genuine
                  care behind every decision.&rdquo;
                </p>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
