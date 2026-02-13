import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LocationCard from "@/components/contact/LocationCard";
import ContactForm from "@/components/contact/ContactForm";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Contact | Royal Veterinary Clinic",
  description:
    "Find our Diep River and N1 City clinics. Opening hours, directions, and send us a message.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 font-sans">
              Get in Touch
            </p>
            <div className="mt-4 h-px w-12 bg-white/10" />
            <h1 className="mt-8 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight text-white max-w-lg">
              We&apos;re here when you need us
            </h1>
          </AnimatedSection>
        </Container>
      </section>

      {/* Emergency banner */}
      <section className="bg-red py-4">
        <Container>
          <div className="flex items-center gap-3 text-white font-sans text-sm">
            <span className="text-xs tracking-widest uppercase opacity-70">Emergency</span>
            <span className="opacity-30">|</span>
            <a href="tel:+27217120001" className="hover:underline opacity-90">
              Diep River: +27 21 712 0001
            </a>
            <span className="opacity-30">|</span>
            <a href="tel:+27215950002" className="hover:underline opacity-90">
              N1 City: +27 21 595 0002
            </a>
          </div>
        </Container>
      </section>

      {/* Locations */}
      <section className="py-28 bg-offwhite">
        <Container>
          <AnimatedSection>
            <SectionHeading
              label="Visit Us"
              title="Two clinics, one standard"
              description="Southern Suburbs or Northern Suburbs — quality care is always close."
            />
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            {locations.map((loc, i) => (
              <LocationCard key={loc.id} location={loc} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Contact form */}
      <section className="py-28 bg-white">
        <Container>
          <div className="mx-auto max-w-2xl">
            <AnimatedSection>
              <SectionHeading
                label="Message"
                title="Drop us a line"
                description="We respond within 24 hours."
                align="center"
              />
            </AnimatedSection>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
