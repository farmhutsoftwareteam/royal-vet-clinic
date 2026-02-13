"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-offwhite/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      {/* Thin bottom border when scrolled */}
      {isScrolled && <div className="absolute bottom-0 left-0 right-0 h-px bg-charcoal/5" />}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo — typographic, no icon bubble */}
        <Link href="/" className="group">
          <span
            className={`text-lg tracking-[0.08em] uppercase transition-colors duration-300 font-sans font-medium ${
              isScrolled ? "text-navy" : "text-white"
            }`}
          >
            Royal<span className="font-normal opacity-50">vet</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.1em] uppercase transition-colors duration-300 font-sans ${
                isScrolled
                  ? "text-warm-gray hover:text-navy"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/booking" size="sm">
            Book
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col gap-1.5 lg:hidden cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-5 transition-all duration-300 ${
              isMobileMenuOpen
                ? "translate-y-[3.5px] rotate-45 bg-navy"
                : isScrolled
                ? "bg-navy"
                : "bg-white"
            }`}
          />
          <span
            className={`h-px w-5 transition-all duration-300 ${
              isMobileMenuOpen
                ? "-translate-y-[3.5px] -rotate-45 bg-navy"
                : isScrolled
                ? "bg-navy"
                : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-offwhite lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6 border-t border-charcoal/5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 text-sm text-warm-gray transition-colors hover:text-navy font-sans border-b border-charcoal/5 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6">
                <Button href="/booking" className="w-full">
                  Book Appointment
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
