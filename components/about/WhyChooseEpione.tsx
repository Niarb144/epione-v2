"use client";

import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  Snowflake,
  Factory,
  Truck,
  Headset,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: ShieldCheck,
    title: "Licensed Pharmaceutical Supplier",
    description:
      "Fully registered and audited under Kenya's Pharmacy and Poisons Board, with every shipment traceable end to end.",
  },
  {
    icon: Snowflake,
    title: "Cold Chain Logistics",
    description:
      "Purpose-built refrigerated storage and transport keeps vaccines, biologics, and temperature-sensitive medicines viable.",
  },
  {
    icon: Factory,
    title: "Trusted Manufacturers",
    description:
      "We source exclusively from WHO-prequalified and internationally certified manufacturing partners.",
  },
  {
    icon: Truck,
    title: "Reliable Distribution",
    description:
      "A dedicated fleet and regional warehousing network keep delivery windows tight, even in last-mile locations.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Every partner is assigned an account team for procurement planning, order tracking, and emergency restocks.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Compliance",
    description:
      "Rigorous batch testing and documentation aligned with GDP and ISO standards at every stage of handling.",
  },
];

const smoothEase = [0.16, 1, 0.3, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: (i % 3) * 0.1, ease: smoothEase },
  }),
};

export function WhyChooseEpione() {
  return (
    <section className="bg-parchment py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Why Choose Epione
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            A Supply Partner Built for Healthcare's Highest Standards
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70">
            Hospitals and health programs choose Epione because we treat
            every shipment as if a patient's care depends on it &mdash;
            because it does.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="group rounded-[24px] border border-charcoal/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest/10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-parchment">
                <reason.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2.5 font-display text-base font-semibold text-charcoal">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/65">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}