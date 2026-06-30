"use client";

import { motion, type Variants } from "framer-motion";
import {
  Target,
  Eye,
  Gem,
  ShieldCheck,
  Lightbulb,
  Award,
  Handshake,
  Leaf,
  Users,
  type LucideIcon,
} from "lucide-react";

const smoothEase = [0.16, 1, 0.3, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: smoothEase },
  }),
};

const values: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Award, label: "Excellence" },
  { icon: Handshake, label: "Reliability" },
  { icon: Leaf, label: "Sustainability" },
  { icon: Users, label: "Partnership" },
];

export function MissionVisionValues() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            What Drives Us
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            Mission, Vision &amp; Values
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Mission */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardVariants}
            className="rounded-[28px] bg-gradient-to-br from-forest to-[#1976D2] p-9 text-parchment shadow-xl shadow-forest/20"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <Target className="h-6 w-6 text-gold" aria-hidden="true" />
            </div>
            <h3 className="mb-4 font-display text-xl font-bold">Our Mission</h3>
            <p className="text-sm leading-relaxed text-parchment/80">
              To ensure every healthcare provider we serve has uninterrupted
              access to genuine, quality-assured medicines &mdash; delivered
              with the speed and reliability patients deserve.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardVariants}
            className="rounded-[28px] bg-gradient-to-br from-[#7AC943] to-[#4CAF50] p-9 text-charcoal shadow-xl shadow-gold/20"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/25">
              <Eye className="h-6 w-6 text-forest" aria-hidden="true" />
            </div>
            <h3 className="mb-4 font-display text-xl font-bold">Our Vision</h3>
            <p className="text-sm leading-relaxed text-charcoal/80">
              To be the most trusted pharmaceutical supply origin in East
              Africa &mdash; recognized globally for connecting manufacturers
              to the communities that need them, wherever they are.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardVariants}
            className="rounded-[28px] border border-charcoal/8 bg-parchment p-9 shadow-xl shadow-charcoal/5"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10">
              <Gem className="h-6 w-6 text-forest" aria-hidden="true" />
            </div>
            <h3 className="mb-5 font-display text-xl font-bold text-charcoal">
              Our Values
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {values.map((v) => (
                <li
                  key={v.label}
                  className="flex items-center gap-2 text-sm font-medium text-charcoal/75"
                >
                  <v.icon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {v.label}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}