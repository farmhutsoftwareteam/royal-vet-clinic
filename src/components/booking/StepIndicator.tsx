interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-6 mb-16">
      {steps.map((label, i) => {
        const step = i + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <div key={label} className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span
                className={`text-xs font-sans tabular-nums ${
                  isActive ? "text-navy" : isCompleted ? "text-teal" : "text-warm-gray/30"
                }`}
              >
                0{step}
              </span>
              <span
                className={`text-sm font-sans ${
                  isActive ? "text-navy" : isCompleted ? "text-teal" : "text-warm-gray/30"
                }`}
              >
                {label}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div className={`h-px w-12 ${isCompleted ? "bg-teal" : "bg-charcoal/10"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
