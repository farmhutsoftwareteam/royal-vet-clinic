import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="group border-b border-charcoal/10 pb-8 pt-8 first:pt-0 lg:border-b-0 lg:pb-0 lg:pt-0">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-xs text-warm-gray/40 font-sans tabular-nums">
            0{index + 1}
          </span>
          <h3 className="text-xl text-navy group-hover:text-teal transition-colors duration-300">
            {service.title}
          </h3>
        </div>

        <p className="text-sm text-warm-gray leading-relaxed font-sans mb-5 max-w-sm">
          {service.description}
        </p>

        <ul className="space-y-1.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-baseline gap-3 text-xs text-warm-gray/60 font-sans">
              <span className="text-teal/60">&mdash;</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
