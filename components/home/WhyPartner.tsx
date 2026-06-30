"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, PackageSearch, Headset } from "lucide-react";

type Reason = {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: ShieldCheck,
    title: "Compliance",
    description:
      "Every shipment moves through WHO-aligned quality and regulatory checks, from sourcing through to last-mile delivery.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Temperature-controlled warehousing and a regional distribution network built to keep delivery times predictable.",
  },
  {
    icon: PackageSearch,
    title: "Product Range",
    description:
      "A catalogue spanning prescription medicines, wellness, devices, and hospital supplies — sourced from vetted manufacturers.",
  },
  {
    icon: Headset,
    title: "Support",
    description:
      "A dedicated account team for order tracking, documentation, and regulatory queries — reachable when it matters.",
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-parchment-50 section-py">
      <div className="container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-14">
          {/* Left — image, ~40% width on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-auto lg:w-[40%] lg:shrink-0"
          >
            <Image
              src="/images/warehouse-pharmacy.webp"
              alt="Epione Health warehouse and distribution floor"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 via-transparent to-transparent" />
          </motion.div>

          {/* Right — list */}
          <div className="lg:flex-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="mb-10 max-w-lg"
            >
              <span className="eyebrow mb-4 block">Why partner with us</span>
              <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-charcoal-900 sm:text-4xl">
                Built for partners who can&apos;t afford disruption.
              </h2>
            </motion.div>

            <ul className="divide-y divide-charcoal-200/60">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <motion.li
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * i,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="flex items-start gap-5 py-6 first:pt-0 last:pb-0"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-700/8 text-forest-700">
                      <Icon size={22} strokeWidth={2} />
                    </span>

                    <div>
                      <h3 className="font-[var(--font-display)] text-lg font-bold text-charcoal-900 sm:text-xl">
                        {reason.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm leading-6 text-charcoal-600 sm:text-base">
                        {reason.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}