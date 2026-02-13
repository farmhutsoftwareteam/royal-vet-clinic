import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FounderStory from "@/components/about/FounderStory";
import TeamMember from "@/components/about/TeamMember";
import BookingCTA from "@/components/home/BookingCTA";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About | Royal Veterinary Clinic",
  description:
    "Meet Dr. Rightwell Munyuki and the Royal Vet team. Our mission, values, and commitment to animal care in Cape Town.",
};

const values = [
  {
    title: "Clinical rigour",
    description: "We invest in diagnostics and continuing education so our medicine stays sharp.",
  },
  {
    title: "Genuine care",
    description: "Every patient is someone\u2019s family. We treat them that way.",
  },
  {
    title: "Clear communication",
    description: "We explain what we find, what we recommend, and why. No jargon, no pressure.",
  },
  {
    title: "Community first",
    description: "Rescue partnerships, vaccination drives, shelter support — care extends beyond our doors.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 font-sans">
              Our Story
            </p>
            <div className="mt-4 h-px w-12 bg-white/10" />
            <h1 className="mt-8 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight text-white max-w-lg">
              The people behind the practice
            </h1>
          </AnimatedSection>
        </Container>
      </section>

      <FounderStory />

      {/* Values */}
      <section className="py-28 bg-offwhite">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <AnimatedSection direction="left">
                <SectionHeading
                  label="What We Value"
                  title="Four principles that guide every decision"
                />
              </AnimatedSection>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {values.map((value, i) => (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  <div className="border-t border-charcoal/10 py-8 flex items-start gap-6">
                    <span className="text-xs text-warm-gray/40 font-sans tabular-nums mt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl text-navy">{value.title}</h3>
                      <p className="mt-2 text-sm text-warm-gray font-sans leading-relaxed max-w-md">
                        {value.description}
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

      {/* Team */}
      <section className="py-28 bg-cream">
        <Container>
          <AnimatedSection>
            <SectionHeading
              label="The Team"
              title="Dedicated professionals, genuine people"
              description="Every member shares a commitment to care that goes beyond the clinical."
            />
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <TeamMember key={member.id} member={member} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Milestones */}
      <section className="py-28 bg-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <AnimatedSection direction="left">
                <SectionHeading
                  label="Timeline"
                  title="How we got here"
                />
              </AnimatedSection>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              {[
                { year: "2018", title: "Diep River opens", desc: "First clinic, Southern Suburbs. Dr. Munyuki goes solo." },
                { year: "2020", title: "Cape Dachshund Rescue", desc: "Formal partnership — discounted care for every rescue." },
                { year: "2022", title: "Digital diagnostics", desc: "Investment in X-ray and ultrasound equipment." },
                { year: "2024", title: "N1 City opens", desc: "Second location for the Northern Suburbs." },
              ].map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.1}>
                  <div className="border-t border-charcoal/10 py-6 flex items-baseline gap-8">
                    <span className="text-xs text-warm-gray/40 font-sans tabular-nums shrink-0">
                      {m.year}
                    </span>
                    <div>
                      <h3 className="text-lg text-navy">{m.title}</h3>
                      <p className="mt-1 text-sm text-warm-gray font-sans">{m.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
              <div className="border-t border-charcoal/10" />
            </div>
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
