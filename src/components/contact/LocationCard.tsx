import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Location } from "@/data/locations";

interface LocationCardProps {
  location: Location;
  index: number;
}

export default function LocationCard({ location, index }: LocationCardProps) {
  return (
    <AnimatedSection delay={index * 0.15}>
      <div className="border border-charcoal/10 bg-white overflow-hidden">
        {/* Map placeholder */}
        <div className="aspect-[16/9] bg-navy/5 flex items-center justify-center">
          <p className="text-xs text-warm-gray/30 font-sans tracking-wider uppercase">Map</p>
        </div>

        <div className="p-8">
          <h3 className="text-xl text-navy">{location.name}</h3>

          <div className="mt-6 space-y-4 font-sans text-sm">
            <div>
              <p className="text-charcoal">{location.address}</p>
              <p className="text-warm-gray/60">{location.suburb}</p>
            </div>

            <div className="h-px bg-charcoal/5" />

            <div className="flex flex-col gap-2">
              <a href={`tel:${location.phone}`} className="text-charcoal hover:text-teal transition-colors">
                {location.phone}
              </a>
              <a href={`mailto:${location.email}`} className="text-warm-gray/60 hover:text-teal transition-colors text-xs">
                {location.email}
              </a>
            </div>

            <div className="h-px bg-charcoal/5" />

            <div className="text-xs text-warm-gray/50 space-y-0.5">
              <p>{location.hours.weekdays}</p>
              <p>{location.hours.saturday}</p>
              <p>{location.hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
