"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Globe2, Building2, Handshake, Truck, ShieldCheck } from "lucide-react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: smoothEase } },
};

const pillars = [
  {
    icon: Building2,
    title: "Hospitals & Clinics",
    text: "Reliable pharmaceutical supply agreements with guaranteed lead times, cold chain integrity, and quality documentation.",
  },
  {
    icon: Globe2,
    title: "NGOs & Multilaterals",
    text: "Flexible supply arrangements supporting humanitarian programmes and national health initiatives across Africa.",
  },
  {
    icon: Truck,
    title: "Manufacturers",
    text: "Market access, regulatory support, and last-mile distribution into East Africa and beyond for your products.",
  },
  {
    icon: ShieldCheck,
    title: "Governments",
    text: "Compliant bulk procurement, public tender response, and national stockpile supply for Ministries of Health.",
  },
  {
    icon: Handshake,
    title: "Distributors",
    text: "Sub-distribution agreements enabling wider geographic reach with competitive margins and full logistics support.",
  },
  {
    icon: Globe2,
    title: "International Buyers",
    text: "Sourcing pharmaceutical products from our Kenyan-origin supply chain for markets across Africa, the Middle East, and Europe.",
  },
];

export default function GlobalPartnershipSection() {
  return (
    <section aria-label="Global partnership opportunities" className="bg-[#F8FCFD] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-2 w-fit rounded-full border border-[#7AC943]/25 bg-[#7AC943]/8 px-4 py-1.5 text-xs font-semibold tracking-[0.1em] uppercase text-[#4CAF50]">
              <Globe2 className="h-3.5 w-3.5" />
              Global Partnerships
            </span>

            <h2 className="font-['Poppins',sans-serif] text-3xl font-bold leading-tight text-[#253746] sm:text-4xl lg:text-[2.6rem]">
              Partner With{" "}
              <span className="text-[#1976D2]">Epione Health</span>
            </h2>

            <p className="text-base leading-relaxed text-[#253746]/65 max-w-lg">
              Epione Health is building Africa&rsquo;s most trusted pharmaceutical supply chain — originating from Kenya and reaching the world. We partner with organisations that share our commitment to quality healthcare access, compliance, and operational excellence.
            </p>

            <p className="text-base leading-relaxed text-[#253746]/65 max-w-lg">
              Our partnership model is flexible, from strategic supplier agreements and co-distribution arrangements to joint healthcare programme delivery and market-entry support for international manufacturers.
            </p>

            <Link
              href="#contact-form"
              className="group mt-2 inline-flex w-fit items-center gap-2.5 rounded-full bg-[#4CAF50] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(76,175,80,0.3)] transition-all duration-200 hover:bg-[#388E3C] hover:scale-[1.03] hover:shadow-[0_6px_24px_rgba(76,175,80,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2"
            >
              Become a Partner
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Pillars grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: smoothEase }}
                  className="group rounded-2xl bg-white p-5 border border-[#EDF4F7] shadow-[0_2px_12px_rgba(37,55,70,0.05)] hover:shadow-[0_8px_28px_rgba(25,118,210,0.09)] transition-shadow duration-200"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1976D2]/8 mb-3">
                    <Icon className="h-4.5 w-4.5 text-[#1976D2]" aria-hidden="true" />
                  </div>
                  <h3 className="font-['Poppins',sans-serif] text-sm font-bold text-[#253746] mb-1.5">{pillar.title}</h3>
                  <p className="text-xs leading-relaxed text-[#253746]/60">{pillar.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}