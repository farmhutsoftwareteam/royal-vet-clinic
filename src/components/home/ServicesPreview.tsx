import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const previewServices = [
  {
    title: "Digital X-Ray",
    description: "High-resolution imaging. Results in minutes, not days.",
    num: "01",
  },
  {
    title: "Ultrasound",
    description: "Non-invasive soft tissue and cardiac assessment.",
    num: "02",
  },
  {
    title: "Dental Care",
    description: "From routine scaling to oral surgery — complete dental health.",
    num: "03",
  },
  {
    title: "Wellness Programmes",
    description: "Preventive care tailored to your pet\u2019s life stage.",
    num: "04",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-28 bg-offwhite">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left — heading */}
          <div className="lg:col-span-4">
            <AnimatedSection direction="left">
              <SectionHeading
                label="What We Do"
                title="Comprehensive care, considered approach"
                description="We invest in diagnostics so we can treat with precision — not guesswork."
              />
              <Button href="/services" variant="ghost">
                All Services
              </Button>
            </AnimatedSection>
          </div>

          {/* Right — services list (not cards, editorial list) */}
          <div className="lg:col-span-7 lg:col-start-6">
            {previewServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.12}>
                <div className="group border-t border-charcoal/10 py-8 flex items-start gap-6 cursor-default">
                  <span className="text-xs text-warm-gray/50 font-sans tabular-nums mt-1.5">
                    {service.num}
                  </span>
                  <div>
                    <h3 className="text-2xl text-navy group-hover:text-teal transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-warm-gray font-sans leading-relaxed max-w-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            <div className="border-t border-charcoal/10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
