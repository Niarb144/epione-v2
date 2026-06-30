"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-forest via-forest to-[#0e2622] px-8 py-16 text-center sm:px-16 sm:py-20"
      >
        {/* Abstract medical graphics */}
        <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.08]">
          <svg className="absolute -left-10 -top-10 h-56 w-56" viewBox="0 0 100 100" fill="none">
            <path d="M50 10 V90 M10 50 H90" stroke="white" strokeWidth="6" strokeLinecap="round" />
          </svg>
          <svg className="absolute -bottom-16 -right-10 h-72 w-72" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" stroke="white" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="relative z-10">
          <h2 className="mx-auto mb-5 max-w-2xl font-display text-3xl font-bold leading-tight text-parchment sm:text-4xl">
            Let&apos;s Build Healthier Communities Together
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-parchment/75">
            Whether you&apos;re a manufacturer seeking distribution into East
            Africa or a healthcare provider in need of a reliable supply
            partner, we&apos;d like to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?type=partner"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal shadow-lg shadow-gold/20 transition-all duration-300 hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-parchment"
            >
              Become a Partner
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/contact?type=quote"
              className="group inline-flex items-center gap-2 rounded-full border border-parchment/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-parchment transition-all duration-300 hover:border-parchment/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-parchment"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Request a Quote
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}