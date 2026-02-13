import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const galleryItems = [
  { title: "Cape Dachshund Rescue", subtitle: "Ongoing partnership since 2020", tall: true },
  { title: "Community Vaccination Drives", subtitle: "Free access for underserved areas" },
  { title: "Shelter Partnerships", subtitle: "Reduced-cost care for rescue animals" },
  { title: "Wildlife Rehabilitation", subtitle: "Supporting indigenous species recovery" },
];

export default function WelfareGallery() {
  return (
    <section className="py-28 bg-offwhite">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="Beyond the Clinic"
            title="The work that doesn't show up on an invoice"
            description="Rescue partnerships, community drives, wildlife rehab — care doesn't stop at our doors."
          />
        </AnimatedSection>

        <div className="grid gap-3 md:grid-cols-3">
          {/* Feature item — spans 2 rows */}
          <AnimatedSection className="md:row-span-2" delay={0}>
            <div className="group relative h-full min-h-[400px] bg-navy overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,#088199_0%,transparent_70%)] opacity-50" />
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <p className="text-xs tracking-[0.2em] uppercase text-white/40 font-sans">
                  {galleryItems[0].subtitle}
                </p>
                <h3 className="mt-2 text-2xl text-white leading-tight">
                  {galleryItems[0].title}
                </h3>
              </div>
            </div>
          </AnimatedSection>

          {/* Remaining items */}
          {galleryItems.slice(1).map((item, i) => (
            <AnimatedSection key={item.title} delay={(i + 1) * 0.1}>
              <div className="group relative min-h-[200px] bg-navy/5 overflow-hidden border border-charcoal/5">
                <div className="flex h-full flex-col justify-end p-6">
                  <p className="text-xs tracking-[0.15em] uppercase text-warm-gray/50 font-sans">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 text-lg text-navy group-hover:text-teal transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
