import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import type { PricingPackage as PricingPackageType } from "@/data/services";

interface PricingPackageProps {
  pkg: PricingPackageType;
  index: number;
}

export default function PricingPackage({ pkg, index }: PricingPackageProps) {
  return (
    <AnimatedSection delay={index * 0.12}>
      <div
        className={`relative border p-8 transition-colors duration-300 ${
          pkg.popular
            ? "border-navy bg-navy text-white"
            : "border-charcoal/10 bg-white hover:border-charcoal/20"
        }`}
      >
        {pkg.popular && (
          <p className="absolute -top-3 left-8 bg-teal px-3 py-0.5 text-[10px] tracking-widest uppercase text-white font-sans">
            Popular
          </p>
        )}

        <p className="text-xs tracking-[0.2em] uppercase font-sans opacity-40">
          {pkg.period}
        </p>
        <h3 className={`mt-4 text-xl ${pkg.popular ? "text-white" : "text-navy"}`}>
          {pkg.name}
        </h3>
        <p className={`mt-2 text-sm font-sans ${pkg.popular ? "text-white/60" : "text-warm-gray"}`}>
          {pkg.description}
        </p>

        <p className={`mt-6 text-3xl font-sans font-medium ${pkg.popular ? "text-white" : "text-navy"}`}>
          {pkg.price}
        </p>

        <div className={`mt-6 h-px ${pkg.popular ? "bg-white/10" : "bg-charcoal/5"}`} />

        <ul className="mt-6 space-y-2.5">
          {pkg.features.map((feature) => (
            <li
              key={feature}
              className={`flex items-baseline gap-3 text-sm font-sans ${
                pkg.popular ? "text-white/70" : "text-warm-gray"
              }`}
            >
              <span className={pkg.popular ? "text-white/30" : "text-teal/60"}>&mdash;</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button
            href="/booking"
            variant={pkg.popular ? "outline" : "primary"}
            className="w-full"
          >
            Book Now
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
