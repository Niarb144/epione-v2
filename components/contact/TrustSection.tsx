"use client";

import { motion, type Variants } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: smoothEase } },
};

const trustBadges = [
  { label: "WHO-GMP", sub: "Certified" },
  { label: "ISO 9001", sub: "Quality Management" },
  { label: "PPB", sub: "Kenya Compliant" },
  { label: "NDA", sub: "Uganda Registered" },
  { label: "TFDA", sub: "Tanzania Registered" },
  { label: "NAFDAC", sub: "Nigeria Compliant" },
  { label: "EFMHACA", sub: "Ethiopia Compliant" },
  { label: "ISO 13485", sub: "Medical Devices" },
];

const affiliations = [
  "Kenya Association of Pharmaceutical Industry",
  "East African Community Health",
  "African Medicines Agency",
  "International Federation of Pharmaceutical Manufacturers",
  "Kenya Healthcare Federation",
  "Pan-African Health Organisation",
];

export default function TrustSection() {
  const doubled = [...trustBadges, ...trustBadges];

  return (
    <section aria-label="Trust, certifications and affiliations" className="bg-[#EDF4F7]/50 py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#1976D2]">Trust & Compliance</p>
          <h2 className="font-['Poppins',sans-serif] text-3xl font-bold text-[#253746] sm:text-4xl">
            Trusted by Healthcare Professionals
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-[#253746]/60">
            Our operations meet the highest standards set by international and regional regulatory bodies.
          </p>
        </motion.div>

        {/* Certification carousel */}
        <div className="relative mb-14">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F3F8FA] to-transparent z-10" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F3F8FA] to-transparent z-10" aria-hidden="true" />

          <div
            className="flex gap-4"
            style={{
              animation: "marquee 28s linear infinite",
              width: "max-content",
            }}
            aria-label="Certifications carousel"
          >
            {doubled.map((badge, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-1 rounded-2xl bg-white border border-[#EDF4F7] px-8 py-5 shadow-[0_2px_12px_rgba(37,55,70,0.05)] min-w-[140px]"
                aria-label={`${badge.label} ${badge.sub}`}
              >
                <span className="font-['Poppins',sans-serif] text-base font-bold text-[#1976D2]">{badge.label}</span>
                <span className="text-[10px] font-medium text-[#253746]/50 text-center">{badge.sub}</span>
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @media (prefers-reduced-motion: reduce) {
              div[style*="marquee"] {
                animation: none;
                flex-wrap: wrap;
                width: auto;
              }
            }
          `}</style>
        </div>

        {/* Affiliations */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="mb-6 text-center text-sm font-semibold text-[#253746]/50 uppercase tracking-wide">Industry Affiliations</p>
          <div className="flex flex-wrap justify-center gap-3">
            {affiliations.map((aff) => (
              <span
                key={aff}
                className="rounded-full bg-white border border-[#EDF4F7] px-5 py-2.5 text-xs font-medium text-[#253746]/70 shadow-sm"
              >
                {aff}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Compliance statement */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-white border border-[#EDF4F7] p-6 text-center shadow-[0_2px_12px_rgba(37,55,70,0.04)] max-w-2xl mx-auto"
        >
          <p className="text-sm leading-relaxed text-[#253746]/65">
            Every product distributed by Epione Health is subject to rigorous quality control, including batch testing, cold chain verification, and documentation review in line with{" "}
            <strong className="text-[#253746]">WHO-GMP</strong> and regional regulatory requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}