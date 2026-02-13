import AnimatedSection from "@/components/ui/AnimatedSection";
import type { TeamMember as TeamMemberType } from "@/data/team";

interface TeamMemberProps {
  member: TeamMemberType;
  index: number;
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="group">
        {/* Portrait placeholder */}
        <div className="aspect-[3/4] bg-navy overflow-hidden">
          <div className="h-full w-full bg-gradient-to-b from-navy to-navy-light transition-transform duration-700 group-hover:scale-105" />
        </div>

        <div className="mt-4">
          <h3 className="text-lg text-navy">{member.name}</h3>
          <p className="text-xs text-warm-gray/60 font-sans mt-0.5">
            {member.role} &middot; {member.qualifications}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-warm-gray font-sans">
            {member.bio}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
            {member.specialties.map((s) => (
              <span
                key={s}
                className="text-[11px] text-warm-gray/40 font-sans"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
