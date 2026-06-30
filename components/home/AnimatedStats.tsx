"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Years in distribution" },
  { value: 40, suffix: "+", label: "Countries supplied" },
  { value: 1200, suffix: "+", label: "SKUs in catalogue" },
  { value: 99.6, suffix: "%", label: "On-time delivery rate" },
];

function CountUpStat({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);
  const isDecimal = !Number.isInteger(stat.value);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, stat.value, {
      duration: 1.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [isInView, stat.value, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {isDecimal ? display.toFixed(1) : Math.round(display)}
      {stat.suffix}
    </span>
  );
}

export default function About() {
  return (
    <section className="bg-parchment-100 section-py">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Left — narrative */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-6"
          >
            <span className="eyebrow mb-5 block">Who we are</span>

            <h2 className="max-w-lg font-[var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-charcoal-900 sm:text-4xl">
              Sourced in Kenya, supplied to the world.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-charcoal-700 sm:text-lg">
              Epione Health sources, warehouses, and distributes
              quality-assured pharmaceuticals from Nairobi to hospitals,
              clinics, and wholesalers across Africa and beyond — built on
              dependable supply chains and regulatory rigour at every step.
            </p>

            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-[var(--font-display)] text-sm font-semibold text-forest-500 transition-colors hover:text-forest-700"
            >
              Learn more about our supply chain
              <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>

          {/* Right — stats */}
          <div className="lg:col-span-6 lg:col-start-7">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * i,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="border-l-2 border-gold-400 pl-5"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-[var(--font-display)] text-4xl font-bold leading-none text-forest-700 sm:text-5xl">
                    <CountUpStat stat={stat} delay={0.1 * i} />
                  </dd>
                  <p className="mt-3 text-sm font-medium text-charcoal-600 sm:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}