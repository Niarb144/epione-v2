"use client";

import { motion, type Variants } from "framer-motion";
import { Building2, TrendingUp, Snowflake, Globe2, Sparkles, type LucideIcon } from "lucide-react";

interface Milestone {
  year: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2010",
    icon: Building2,
    title: "Company Founded",
    description:
      "Epione Health opens its doors in Nairobi as a regional pharmaceutical wholesaler serving local pharmacies.",
  },
  {
    year: "2014",
    icon: TrendingUp,
    title: "Expansion",
    description:
      "Distribution network grows to cover hospitals and health centers across Kenya's major counties.",
  },
  {
    year: "2018",
    icon: Snowflake,
    title: "Cold Chain Investment",
    description:
      "Temperature-controlled warehousing and refrigerated fleet introduced to support vaccines and biologics.",
  },
  {
    year: "2022",
    icon: Globe2,
    title: "Regional Growth",
    description:
      "Partnerships extend across East Africa, supplying NGOs, government programs, and private health networks.",
  },
  {
    year: "Beyond",
    icon: Sparkles,
    title: "Future Vision",
    description:
      "Building a global supply corridor from Kenya, connecting manufacturers worldwide to healthcare systems everywhere.",
  },
];

const smoothEase = [0.16, 1, 0.3, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

export function JourneyTimeline() {
  return (
    <section className="bg-parchment py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Journey
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            Fifteen Years of Steady, Deliberate Growth
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-[42px] h-px bg-charcoal/10" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[42px] h-px bg-gold"
          />
          <div className="grid grid-cols-5 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={itemVariants}
                transition={{ delay: i * 0.12 }}
                className="relative pt-[88px] text-center"
              >
                <div className="absolute left-1/2 top-0 flex h-[84px] w-[84px] -translate-x-1/2 items-center justify-center rounded-full border-4 border-parchment bg-white shadow-lg shadow-forest/10">
                  <m.icon className="h-7 w-7 text-forest" aria-hidden="true" />
                </div>
                <p className="mb-1.5 font-display text-sm font-bold tracking-wide text-gold">
                  {m.year}
                </p>
                <h3 className="mb-2 font-display text-base font-semibold text-charcoal">
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/65">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet: vertical timeline */}
        <div className="relative space-y-10 lg:hidden">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-charcoal/10" />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={itemVariants}
              transition={{ delay: i * 0.08 }}
              className="relative flex gap-5 pl-0"
            >
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-parchment bg-white shadow-md shadow-forest/10">
                <m.icon className="h-5 w-5 text-forest" aria-hidden="true" />
              </div>
              <div className="pt-1.5">
                <p className="mb-1 font-display text-sm font-bold tracking-wide text-gold">
                  {m.year}
                </p>
                <h3 className="mb-1.5 font-display text-base font-semibold text-charcoal">
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/65">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}