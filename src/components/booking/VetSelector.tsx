import { teamMembers } from "@/data/team";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface VetSelectorProps {
  selectedVet: string | null;
  onSelect: (vetId: string) => void;
  onNext: () => void;
}

export default function VetSelector({ selectedVet, onSelect, onNext }: VetSelectorProps) {
  const vets = teamMembers.filter((m) => m.role.toLowerCase().includes("veterinarian"));

  return (
    <div>
      <p className="text-xs tracking-[0.2em] uppercase text-warm-gray/50 font-sans mb-1">
        Step 1
      </p>
      <h2 className="text-2xl text-navy mb-8">Choose your veterinarian</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vets.map((vet, i) => (
          <AnimatedSection key={vet.id} delay={i * 0.08}>
            <button
              onClick={() => onSelect(vet.id)}
              className={`w-full cursor-pointer border p-6 text-left transition-all duration-300 ${
                selectedVet === vet.id
                  ? "border-navy bg-navy text-white"
                  : "border-charcoal/10 bg-white hover:border-charcoal/20"
              }`}
            >
              <div className={`mb-3 h-16 w-16 ${selectedVet === vet.id ? "bg-white/10" : "bg-navy/5"}`} />
              <h3 className={`text-lg ${selectedVet === vet.id ? "text-white" : "text-navy"}`}>
                {vet.name}
              </h3>
              <p className={`text-xs font-sans mt-0.5 ${selectedVet === vet.id ? "text-white/50" : "text-warm-gray/50"}`}>
                {vet.qualifications}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-2">
                {vet.specialties.slice(0, 2).map((s) => (
                  <span key={s} className={`text-[11px] font-sans ${selectedVet === vet.id ? "text-white/30" : "text-warm-gray/30"}`}>
                    {s}
                  </span>
                ))}
              </div>
            </button>
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <Button onClick={onNext} disabled={!selectedVet}>
          Continue
        </Button>
      </div>
    </div>
  );
}
