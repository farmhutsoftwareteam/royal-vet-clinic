"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <AnimatedSection>
        <div className="border border-charcoal/10 p-12 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-teal font-sans mb-4">Sent</p>
          <h3 className="text-2xl text-navy">Thank you</h3>
          <p className="mt-3 text-sm text-warm-gray font-sans">
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="border border-charcoal/10 p-8 bg-white"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-xs tracking-wider uppercase text-warm-gray/50 font-sans mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full border-b border-charcoal/10 pb-3 text-sm transition-colors focus:border-teal focus:outline-none font-sans bg-transparent"
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs tracking-wider uppercase text-warm-gray/50 font-sans mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full border-b border-charcoal/10 pb-3 text-sm transition-colors focus:border-teal focus:outline-none font-sans bg-transparent"
              placeholder="jane@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs tracking-wider uppercase text-warm-gray/50 font-sans mb-2">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full border-b border-charcoal/10 pb-3 text-sm transition-colors focus:border-teal focus:outline-none font-sans bg-transparent"
              placeholder="+27 82 123 4567"
            />
          </div>
          <div>
            <label htmlFor="pet" className="block text-xs tracking-wider uppercase text-warm-gray/50 font-sans mb-2">
              Pet&apos;s Name
            </label>
            <input
              id="pet"
              type="text"
              className="w-full border-b border-charcoal/10 pb-3 text-sm transition-colors focus:border-teal focus:outline-none font-sans bg-transparent"
              placeholder="Buddy"
            />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="message" className="block text-xs tracking-wider uppercase text-warm-gray/50 font-sans mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            required
            className="w-full border-b border-charcoal/10 pb-3 text-sm transition-colors focus:border-teal focus:outline-none resize-none font-sans bg-transparent"
            placeholder="How can we help?"
          />
        </div>

        <div className="mt-8">
          <Button type="submit">
            Send Message
          </Button>
        </div>
      </form>
    </AnimatedSection>
  );
}
