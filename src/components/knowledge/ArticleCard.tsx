import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <article className="group cursor-pointer">
        {/* Image placeholder */}
        <div className="aspect-[16/10] bg-navy overflow-hidden">
          <div className="h-full w-full bg-gradient-to-br from-navy to-teal/30 transition-transform duration-700 group-hover:scale-105" />
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] tracking-widest uppercase text-teal font-sans font-medium">
              {article.category}
            </span>
            <span className="text-[10px] text-warm-gray/30 font-sans">
              {article.readTime}
            </span>
          </div>

          <h3 className="text-lg text-navy leading-snug group-hover:text-teal transition-colors duration-300">
            {article.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-warm-gray/70 font-sans line-clamp-2">
            {article.excerpt}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-charcoal/5" />
            <p className="text-[11px] text-warm-gray/40 font-sans">
              {article.author} &middot;{" "}
              {new Date(article.date).toLocaleDateString("en-ZA", {
                day: "numeric",
                month: "short",
              })}
            </p>
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}
