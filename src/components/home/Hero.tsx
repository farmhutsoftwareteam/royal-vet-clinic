"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy">
      {/* Atmospheric background — layered gradients, not a flat one */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,#088199_0%,transparent_50%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#003B4F_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content — editorial asymmetric layout */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-end px-4 pb-24 pt-40 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8 lg:pb-0">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans">
              Diep River &amp; N1 City, Cape Town
            </p>

            <div className="mt-6 h-px w-16 bg-white/20" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-8 text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight text-white"
          >
            Care that your
            <br />
            pets deserve
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 max-w-md text-base text-white/50 leading-relaxed font-sans"
          >
            Two clinics. One standard of care. From diagnostics to dental,
            we treat every patient with the attention we&apos;d want for our own.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex items-center gap-8"
          >
            <Button href="/booking" size="lg">
              Book a Visit
            </Button>
            <Button href="/services" variant="ghost" className="text-white/60 hover:text-white border-white/20 hover:border-white/40">
              Explore Services
            </Button>
          </motion.div>
        </div>

        {/* Right side — subtle editorial detail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:justify-end lg:pb-24"
        >
          <div className="text-right">
            <p className="text-xs tracking-[0.2em] uppercase text-white/25 font-sans">Est. 2018</p>
            <div className="mt-4 h-24 w-px bg-gradient-to-b from-white/20 to-transparent ml-auto" />
          </div>
        </motion.div>
      </div>

      {/* Bottom edge — thin gold line instead of bouncing scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>
    </section>
  );
}
