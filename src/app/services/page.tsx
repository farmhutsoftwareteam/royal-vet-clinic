import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceCard from "@/components/services/ServiceCard";
import PricingPackage from "@/components/services/PricingPackage";
import BookingCTA from "@/components/home/BookingCTA";
import { services, pricingPackages } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Royal Veterinary Clinic",
  description:
    "Digital X-ray, ultrasound, dental care, surgery, wellness plans, and emergency care. View our value packages and book today.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 font-sans">
              What We Do
            </p>
            <div className="mt-4 h-px w-12 bg-white/10" />
            <h1 className="mt-8 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight text-white max-w-lg">
              Services built around your pet&apos;s needs
            </h1>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services grid */}
      <section className="py-28 bg-offwhite">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing packages */}
      <section className="py-28 bg-white">
        <Container>
          <AnimatedSection>
            <SectionHeading
              label="Value Packages"
              title="Bundled care, better value"
              description="Save with curated packages designed for specific life stages and needs."
            />
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPackages.map((pkg, i) => (
              <PricingPackage key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
