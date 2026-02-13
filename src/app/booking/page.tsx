"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StepIndicator from "@/components/booking/StepIndicator";
import VetSelector from "@/components/booking/VetSelector";
import SlotPicker from "@/components/booking/SlotPicker";
import Confirmation from "@/components/booking/Confirmation";

const steps = ["Choose Vet", "Date & Time", "Confirm"];

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedVet, setSelectedVet] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <Container>
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 font-sans">
              Schedule
            </p>
            <div className="mt-4 h-px w-12 bg-white/10" />
            <h1 className="mt-8 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight text-white max-w-md">
              Book your visit
            </h1>
          </AnimatedSection>
        </Container>
      </section>

      {/* Booking flow */}
      <section className="py-16 bg-offwhite">
        <Container>
          <StepIndicator currentStep={currentStep} steps={steps} />

          <div className="mx-auto max-w-4xl">
            {currentStep === 1 && (
              <VetSelector
                selectedVet={selectedVet}
                onSelect={setSelectedVet}
                onNext={() => setCurrentStep(2)}
              />
            )}

            {currentStep === 2 && (
              <SlotPicker
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSelectDate={setSelectedDate}
                onSelectTime={setSelectedTime}
                onNext={() => setCurrentStep(3)}
                onBack={() => setCurrentStep(1)}
              />
            )}

            {currentStep === 3 && (
              <Confirmation
                vetId={selectedVet}
                date={selectedDate}
                time={selectedTime}
                onBack={() => setCurrentStep(2)}
              />
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
