"use client";

import { useState, useMemo } from "react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ArticleCard from "@/components/knowledge/ArticleCard";
import { articles, categories } from "@/data/articles";

export default function KnowledgePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = activeCategory === "All" || a.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 font-sans">
              Learn
            </p>
            <div className="mt-4 h-px w-12 bg-white/10" />
            <h1 className="mt-8 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight text-white max-w-lg">
              Knowledge Hub
            </h1>
            <p className="mt-4 text-base text-white/40 font-sans max-w-md">
              Practical advice from our team to help you make informed decisions about your pet&apos;s health.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-charcoal/5 sticky top-[72px] z-40">
        <Container>
          <div className="py-5">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-b border-charcoal/10 pb-3 text-sm transition-colors focus:border-teal focus:outline-none font-sans bg-transparent mb-5"
            />

            <div className="flex gap-4 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 cursor-pointer text-xs tracking-wider uppercase font-sans transition-colors pb-1 ${
                    activeCategory === cat
                      ? "text-navy border-b border-navy"
                      : "text-warm-gray/40 hover:text-warm-gray"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Articles */}
      <section className="py-20 bg-offwhite">
        <Container>
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-sm text-warm-gray/40 font-sans">No articles match your search.</p>
            </div>
          ) : (
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
