"use client";

import { motion, type Variants } from "framer-motion";
import { CountUp } from "./CountUp";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Healthcare Products" },
  { value: 300, suffix: "+", label: "Healthcare Partners" },
  { value: 20, suffix: "+", label: "Regions Served" },
  { value: 98, suffix: "%", label: "On-Time Delivery" },
];

const smoothEase = [0.16, 1, 0.3, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: smoothEase },
  }),
};

export function ImpactStatistics() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]">
        <svg className="h-full w-full" viewBox="0 0 800 400" fill="none">
          <circle cx="100" cy="80" r="160" stroke="white" strokeWidth="1" />
          <circle cx="700" cy="340" r="220" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={itemVariants}
              className="text-center"
            >
              <p className="mb-2 font-display text-4xl font-extrabold text-parchment sm:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-medium text-parchment/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}