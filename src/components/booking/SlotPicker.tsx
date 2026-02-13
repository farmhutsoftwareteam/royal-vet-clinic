import { useState } from "react";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface SlotPickerProps {
  selectedDate: string | null;
  selectedTime: string | null;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
}

function getNextDays(count: number) {
  const days: { date: string; label: string; day: string }[] = [];
  const now = new Date();
  for (let i = 1; days.length < count; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    if (d.getDay() === 0) continue;
    days.push({
      date: d.toISOString().split("T")[0],
      label: d.toLocaleDateString("en-ZA", { day: "numeric", month: "short" }),
      day: d.toLocaleDateString("en-ZA", { weekday: "short" }),
    });
  }
  return days;
}

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00",
];

export default function SlotPicker({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
  onNext,
  onBack,
}: SlotPickerProps) {
  const [days] = useState(() => getNextDays(7));

  return (
    <div>
      <p className="text-xs tracking-[0.2em] uppercase text-warm-gray/50 font-sans mb-1">
        Step 2
      </p>
      <h2 className="text-2xl text-navy mb-8">Pick a date &amp; time</h2>

      <AnimatedSection>
        <div className="mb-10">
          <p className="text-xs tracking-wider uppercase text-warm-gray/40 font-sans mb-4">
            Date
          </p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {days.map((d) => (
              <button
                key={d.date}
                onClick={() => onSelectDate(d.date)}
                className={`flex shrink-0 cursor-pointer flex-col items-center border px-5 py-4 transition-all duration-200 ${
                  selectedDate === d.date
                    ? "border-navy bg-navy text-white"
                    : "border-charcoal/10 bg-white text-charcoal hover:border-charcoal/20"
                }`}
              >
                <span className="text-[10px] tracking-wider uppercase font-sans opacity-60">{d.day}</span>
                <span className="mt-1 text-lg font-sans">{d.label.split(" ")[0]}</span>
                <span className="text-[10px] font-sans opacity-60">{d.label.split(" ")[1]}</span>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {selectedDate && (
        <AnimatedSection>
          <div>
            <p className="text-xs tracking-wider uppercase text-warm-gray/40 font-sans mb-4">
              Time
            </p>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => onSelectTime(time)}
                  className={`cursor-pointer border py-3 text-sm font-sans transition-all duration-200 ${
                    selectedTime === time
                      ? "border-navy bg-navy text-white"
                      : "border-charcoal/10 bg-white text-charcoal hover:border-charcoal/20"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      <div className="mt-10 flex items-center justify-between">
        <Button onClick={onBack} variant="ghost">
          Back
        </Button>
        <Button onClick={onNext} disabled={!selectedDate || !selectedTime}>
          Continue
        </Button>
      </div>
    </div>
  );
}
