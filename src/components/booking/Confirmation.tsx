import { useState } from "react";
import { teamMembers } from "@/data/team";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface ConfirmationProps {
  vetId: string | null;
  date: string | null;
  time: string | null;
  onBack: () => void;
}

export default function Confirmation({ vetId, date, time, onBack }: ConfirmationProps) {
  const [confirmed, setConfirmed] = useState(false);
  const vet = teamMembers.find((m) => m.id === vetId);

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-ZA", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  if (confirmed) {
    return (
      <AnimatedSection>
        <div className="mx-auto max-w-md border border-charcoal/10 p-12 text-center bg-white">
          <p className="text-xs tracking-[0.2em] uppercase text-teal font-sans mb-4">Confirmed</p>
          <h2 className="text-2xl text-navy">You&apos;re all set</h2>
          <p className="mt-4 text-sm text-warm-gray font-sans">
            We&apos;ll send a confirmation to your email shortly.
          </p>
          <p className="mt-2 text-xs text-warm-gray/30 font-sans">
            (Demo only — no actual booking was made)
          </p>
          <div className="mt-8">
            <Button href="/">Return Home</Button>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <div>
      <p className="text-xs tracking-[0.2em] uppercase text-warm-gray/50 font-sans mb-1">
        Step 3
      </p>
      <h2 className="text-2xl text-navy mb-8">Confirm your appointment</h2>

      <AnimatedSection>
        <div className="mx-auto max-w-md border border-charcoal/10 bg-white p-8">
          <div className="space-y-5">
            {[
              { label: "Veterinarian", value: vet?.name || "Any available" },
              { label: "Date", value: formattedDate },
              { label: "Time", value: time },
              { label: "Consultation", value: "R650" },
            ].map((row) => (
              <div key={row.label} className="flex items-baseline justify-between border-b border-charcoal/5 pb-4 last:border-0">
                <span className="text-xs tracking-wider uppercase text-warm-gray/40 font-sans">
                  {row.label}
                </span>
                <span className="text-sm text-navy font-sans">{row.value}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[11px] text-warm-gray/30 text-center font-sans">
            Please arrive 10 minutes early. 24-hour cancellation policy applies.
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-10 flex items-center justify-between">
        <Button onClick={onBack} variant="ghost">
          Back
        </Button>
        <Button onClick={() => setConfirmed(true)}>
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}
