import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function BookingCTA() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,#088199_0%,transparent_50%)] opacity-20" />

      <Container className="py-28">
        <AnimatedSection>
          <div className="grid lg:grid-cols-12 items-center gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs tracking-[0.3em] uppercase text-white/30 font-sans">
                Ready when you are
              </p>
              <div className="mt-4 h-px w-12 bg-white/10" />
              <h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-white">
                Your pet&apos;s next visit<br />starts here
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Button href="/booking" variant="outline" size="lg" className="w-full sm:w-auto lg:w-full">
                Book Appointment
              </Button>
              <Button href="/contact" variant="ghost" size="md" className="text-white/50 hover:text-white border-white/15 hover:border-white/30 w-full sm:w-auto lg:w-full justify-center">
                Get in Touch
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>

      {/* Top and bottom thin rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </section>
  );
}
