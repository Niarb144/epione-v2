"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Truck, BadgeCheck, MapPinned, type LucideIcon } from "lucide-react";

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: ShieldCheck,
    title: "Licensed Supplier",
    description:
      "Fully licensed by the Pharmacy and Poisons Board of Kenya, operating in strict accordance with national pharmaceutical regulations.",
  },
  {
    icon: Truck,
    title: "Reliable Distribution",
    description:
      "A dedicated fleet and cold-chain infrastructure ensure medicines arrive intact, on schedule, and exactly where they're needed.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assured",
    description:
      "Every product passes through rigorous quality checks aligned with WHO and GDP standards before it leaves our warehouses.",
  },
  {
    icon: MapPinned,
    title: "Regional Coverage",
    description:
      "Serving hospitals, pharmacies, and health programs across Kenya and East Africa, with a growing footprint beyond the region.",
  },
];

const fadeUp: Variants = {
  hidden: { y: 28, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function WhoWeAre() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-xl shadow-charcoal/10 lg:sticky lg:top-28"
          >
            <Image
              src="/images/features.jpg"
              alt="Epione Health pharmacist inspecting packaged medicines for quality compliance before dispatch"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Right content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              Who We Are
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mb-6 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl"
            >
              A Kenyan Pharmaceutical Partner with a Global Outlook
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 text-base leading-relaxed text-charcoal/70"
            >
              Founded in Nairobi, Epione Health has grown from a regional
              wholesaler into a trusted distribution partner for hospitals,
              pharmacies, NGOs, and government health programs. We bridge the
              gap between global pharmaceutical manufacturers and the
              communities that need their products most.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-10 text-base leading-relaxed text-charcoal/70"
            >
              Today, our ambition extends beyond Kenya's borders: to build a
              supply chain originating from East Africa that serves
              healthcare systems worldwide, without ever compromising on
              quality, traceability, or speed.
            </motion.p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="group rounded-2xl border border-charcoal/8 bg-parchment/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest/20 hover:bg-white hover:shadow-lg hover:shadow-forest/10"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-parchment">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-display text-base font-semibold text-charcoal">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal/65">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}