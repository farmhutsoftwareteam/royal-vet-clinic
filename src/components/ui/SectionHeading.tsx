interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const labelColor = light ? "text-white/50" : "text-warm-gray";
  const titleColor = light ? "text-white" : "text-navy";
  const descColor = light ? "text-white/70" : "text-warm-gray";

  return (
    <div className={`mb-16 ${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-xl"}`}>
      {label && (
        <p className={`text-xs tracking-[0.25em] uppercase ${labelColor} mb-4 font-sans font-medium`}>
          {label}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-[3.25rem] ${titleColor} leading-[1.1] tracking-tight`}>
        {title}
      </h2>
      {description && (
        <>
          <div className={`mt-6 ${isCenter ? "mx-auto" : ""} w-12 h-px ${light ? "bg-white/20" : "bg-navy/15"}`} />
          <p className={`mt-6 text-base ${descColor} leading-relaxed font-sans`}>
            {description}
          </p>
        </>
      )}
    </div>
  );
}
