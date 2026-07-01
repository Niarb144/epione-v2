"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

export default function ContactCTA() {
  return (
    <section aria-label="Call to action" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1976D2] via-[#1565C0] to-[#4CAF50] px-8 py-16 text-center sm:px-12 lg:px-20"
        >
          {/* Background decoration */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
            <svg className="absolute right-0 top-0 h-full w-1/3 opacity-[0.05]" viewBox="0 0 200 400" fill="none">
              <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" />
              <circle cx="200" cy="200" r="130" stroke="white" strokeWidth="0.75" />
              <circle cx="200" cy="200" r="80" stroke="white" strokeWidth="0.5" />
              <line x1="20" y1="200" x2="380" y2="200" stroke="white" strokeWidth="0.75" />
              <line x1="200" y1="20" x2="200" y2="380" stroke="white" strokeWidth="0.75" />
            </svg>
            {/* Heartbeat line */}
            <svg className="absolute bottom-6 left-0 w-full h-12 opacity-[0.08]" viewBox="0 0 800 48" fill="none" preserveAspectRatio="none">
              <polyline points="0,24 100,24 140,6 180,42 220,6 260,42 300,24 800,24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {/* Medical cross */}
            <svg className="absolute left-8 top-8 opacity-[0.08]" width="48" height="48" viewBox="0 0 48 48">
              <rect x="16" y="0" width="16" height="48" rx="4" fill="white" />
              <rect x="0" y="16" width="48" height="16" rx="4" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
              Start a Conversation
            </p>

            <h2 className="font-['Poppins',sans-serif] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl max-w-2xl">
              Ready to Partner with Epione Health?
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-white/75">
              Join healthcare organisations across East Africa and beyond that trust Epione Health for pharmaceutical distribution, supply chain solutions, and dependable healthcare partnerships.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="#contact-form"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1976D2] shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-[#F8FCFD] hover:scale-[1.03] hover:shadow-[0_8px_28px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1976D2]"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-8 py-[15px] text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1976D2]"
              >
                Become a Partner
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-4 flex flex-wrap justify-center gap-6 text-xs text-white/55">
              {["WHO-GMP Certified", "ISO 9001 Quality", "24h Response", "15+ Countries"].map((s) => (
                <span key={s} className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-[#7AC943]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}