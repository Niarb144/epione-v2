"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: smoothEase },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.3, ease: smoothEase },
  },
};

export default function ContactHero() {
  return (
    <section
      aria-label="Contact Epione Health hero"
      className="relative overflow-hidden bg-[#F8FCFD] pt-24 pb-20 lg:pt-18 lg:pb-28"
    >
      {/* Ambient background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-[#1976D2]/6 blur-3xl" />
        <div className="absolute -top-16 right-0 h-[400px] w-[400px] rounded-full bg-[#4FC3F7]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#7AC943]/6 blur-3xl" />
        {/* Abstract circles */}
        <svg className="absolute right-8 top-12 opacity-[0.05] hidden lg:block" width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="140" stroke="#1976D2" strokeWidth="1.5" />
          <circle cx="160" cy="160" r="100" stroke="#1976D2" strokeWidth="1" />
          <circle cx="160" cy="160" r="60" stroke="#1976D2" strokeWidth="0.75" />
          <line x1="0" y1="160" x2="320" y2="160" stroke="#1976D2" strokeWidth="1" />
          <line x1="160" y1="0" x2="160" y2="320" stroke="#1976D2" strokeWidth="1" />
        </svg>
        {/* Pulse line */}
        <svg className="absolute bottom-6 left-8 opacity-[0.06] hidden lg:block" width="480" height="60" viewBox="0 0 480 60" fill="none">
          <polyline points="0,30 60,30 90,8 120,52 150,8 180,52 210,30 480,30" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1976D2]/20 bg-[#1976D2]/6 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-[#1976D2]">
                <Globe2 className="h-3.5 w-3.5" />
                Contact Epione Health
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-['Poppins',sans-serif] text-4xl font-bold leading-[1.1] tracking-tight text-[#253746] sm:text-5xl lg:text-[3.5rem]">
              Let&rsquo;s Build Better{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#1976D2]">Healthcare</span>
                <span aria-hidden="true" className="absolute left-0 bottom-1 h-2.5 w-full rounded-full bg-[#4FC3F7]/25" />
              </span>{" "}
              Together
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-lg text-lg leading-relaxed text-[#253746]/70">
              Whether you&rsquo;re a hospital seeking a reliable pharmaceutical supplier, a manufacturer looking to reach global markets, a government agency managing procurement, or an NGO delivering healthcare access — our team is ready to help.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#contact-form"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#1976D2] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(25,118,210,0.35)] transition-all duration-200 hover:bg-[#0056B3] hover:scale-[1.03] hover:shadow-[0_6px_24px_rgba(25,118,210,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1976D2] focus-visible:ring-offset-2"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#1976D2] px-7 py-[13px] text-sm font-semibold text-[#1976D2] transition-all duration-200 hover:bg-[#1976D2]/5 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1976D2] focus-visible:ring-offset-2"
              >
                Become a Partner
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#EDF4F7] pt-6">
              {[
                { value: "24h", label: "Response time" },
                { value: "12+", label: "Countries served" },
                { value: "100%", label: "Compliant supply" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="font-['Poppins',sans-serif] text-2xl font-bold text-[#1976D2]">{stat.value}</span>
                  <span className="text-xs text-[#253746]/55 font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Illustration card */}
          <motion.div variants={imageVariants} initial="hidden" animate="visible" className="relative hidden lg:block">
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_24px_64px_rgba(25,118,210,0.12)] border border-white/80 bg-white">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#EAF4FF] via-[#F0F8FF] to-[#E8F5E9] flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 480 360" className="w-full h-full" aria-label="Global pharmaceutical supply originating from Kenya">
                  <defs>
                    <linearGradient id="heroGrad" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#EAF4FF" />
                      <stop offset="100%" stopColor="#E8F5E9" />
                    </linearGradient>
                    <linearGradient id="boxGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1976D2" />
                      <stop offset="100%" stopColor="#0056B3" />
                    </linearGradient>
                    <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7AC943" />
                      <stop offset="100%" stopColor="#4CAF50" />
                    </linearGradient>
                    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1976D2" floodOpacity="0.15" />
                    </filter>
                  </defs>
                  <rect width="480" height="360" fill="url(#heroGrad)" />
                  {/* Globe wireframe */}
                  <ellipse cx="240" cy="180" rx="135" ry="135" fill="none" stroke="#1976D2" strokeOpacity="0.07" strokeWidth="1" />
                  <ellipse cx="240" cy="180" rx="95" ry="135" fill="none" stroke="#1976D2" strokeOpacity="0.05" strokeWidth="1" />
                  <line x1="105" y1="180" x2="375" y2="180" stroke="#1976D2" strokeOpacity="0.07" strokeWidth="1" />
                  <line x1="240" y1="45" x2="240" y2="315" stroke="#1976D2" strokeOpacity="0.07" strokeWidth="1" />
                  <ellipse cx="240" cy="180" rx="135" ry="42" fill="none" stroke="#1976D2" strokeOpacity="0.05" strokeWidth="1" />
                  <ellipse cx="240" cy="180" rx="135" ry="90" fill="none" stroke="#1976D2" strokeOpacity="0.05" strokeWidth="1" />
                  {/* Nairobi hub */}
                  <circle cx="255" cy="198" r="22" fill="url(#boxGrad)" filter="url(#softShadow)" />
                  <circle cx="255" cy="198" r="10" fill="white" />
                  <circle cx="255" cy="198" r="5" fill="#1976D2" />
                  {/* Supply routes */}
                  <path d="M245 178 Q205 125 175 95" stroke="#1976D2" strokeWidth="1.8" strokeOpacity="0.4" strokeDasharray="5 3" fill="none" />
                  <circle cx="173" cy="93" r="7" fill="#4FC3F7" opacity="0.9" />
                  <path d="M275 192 Q315 155 338 132" stroke="#1976D2" strokeWidth="1.8" strokeOpacity="0.4" strokeDasharray="5 3" fill="none" />
                  <circle cx="340" cy="130" r="7" fill="#4FC3F7" opacity="0.9" />
                  <path d="M233 195 Q180 182 148 188" stroke="#7AC943" strokeWidth="1.8" strokeOpacity="0.55" strokeDasharray="5 3" fill="none" />
                  <circle cx="146" cy="188" r="7" fill="#7AC943" opacity="0.9" />
                  <path d="M255 220 Q252 255 245 278" stroke="#7AC943" strokeWidth="1.8" strokeOpacity="0.55" strokeDasharray="5 3" fill="none" />
                  <circle cx="244" cy="280" r="7" fill="#7AC943" opacity="0.9" />
                  <path d="M275 190 Q355 155 382 158" stroke="#1976D2" strokeWidth="1.8" strokeOpacity="0.35" strokeDasharray="5 3" fill="none" />
                  <circle cx="384" cy="158" r="7" fill="#4FC3F7" opacity="0.9" />
                  {/* Destination labels */}
                  <rect x="148" y="79" width="54" height="16" rx="8" fill="white" fillOpacity="0.88" />
                  <text x="175" y="91" textAnchor="middle" fill="#253746" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="600">Europe</text>
                  <rect x="314" y="117" width="58" height="16" rx="8" fill="white" fillOpacity="0.88" />
                  <text x="343" y="129" textAnchor="middle" fill="#253746" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="600">Middle East</text>
                  <rect x="112" y="175" width="54" height="16" rx="8" fill="white" fillOpacity="0.88" />
                  <text x="139" y="187" textAnchor="middle" fill="#253746" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="600">W. Africa</text>
                  <rect x="214" y="267" width="58" height="16" rx="8" fill="white" fillOpacity="0.88" />
                  <text x="243" y="279" textAnchor="middle" fill="#253746" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="600">S. Africa</text>
                  <rect x="350" y="144" width="60" height="16" rx="8" fill="white" fillOpacity="0.88" />
                  <text x="380" y="156" textAnchor="middle" fill="#253746" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="600">SE Asia</text>
                  {/* Med cross */}
                  <g transform="translate(58,55)">
                    <rect x="11" y="0" width="10" height="32" rx="3" fill="url(#greenGrad)" opacity="0.85" />
                    <rect x="0" y="11" width="32" height="10" rx="3" fill="url(#greenGrad)" opacity="0.85" />
                  </g>
                  {/* Pills */}
                  <ellipse cx="390" cy="95" rx="16" ry="8" fill="#7AC943" opacity="0.65" />
                  <ellipse cx="390" cy="95" rx="8" ry="8" fill="#4CAF50" opacity="0.65" />
                  <ellipse cx="92" cy="245" rx="13" ry="6.5" fill="#4FC3F7" opacity="0.65" />
                  <ellipse cx="92" cy="245" rx="6.5" ry="6.5" fill="#1976D2" opacity="0.65" />
                  {/* Nairobi label */}
                  <rect x="212" y="222" width="88" height="20" rx="10" fill="white" fillOpacity="0.92" />
                  <text x="256" y="236" textAnchor="middle" fill="#253746" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700">Nairobi, Kenya 🇰🇪</text>
                </svg>
              </div>
              <div className="px-6 py-4 bg-white border-t border-[#EDF4F7] flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#253746]">Global Pharmaceutical Supply</p>
                  <p className="text-xs text-[#253746]/50">Originating from Nairobi, Kenya</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7AC943]/10 px-3 py-1 text-[11px] font-semibold text-[#4CAF50]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                  Operational
                </span>
              </div>
            </div>

            {/* Floating badge: countries */}
            <div className="absolute -top-4 -right-5 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(25,118,210,0.12)] border border-[#EDF4F7]">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1976D2]/10">
                <Globe2 className="h-5 w-5 text-[#1976D2]" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#253746]">15+ Countries</p>
                <p className="text-[10px] text-[#253746]/50">Served worldwide</p>
              </div>
            </div>

            {/* Floating badge: certified */}
            <div className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(122,201,67,0.15)] border border-[#EDF4F7]">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7AC943]/10">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="#4CAF50">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#253746]">WHO-GMP Certified</p>
                <p className="text-[10px] text-[#253746]/50">Quality assured</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}