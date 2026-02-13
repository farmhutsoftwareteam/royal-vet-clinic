import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import TeamPreview from "@/components/home/TeamPreview";
import WelfareGallery from "@/components/home/WelfareGallery";
import Testimonials from "@/components/home/Testimonials";
import BookingCTA from "@/components/home/BookingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <TeamPreview />
      <WelfareGallery />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
