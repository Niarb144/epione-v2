"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Category = {
  name: string;
  description: string;
  href: string;
  image: string;
  /** Tailwind grid span classes — controls the bento layout */
  span: string;
};

const categories: Category[] = [
  {
    name: "Pharmaceutical Drug Supplies",
    description:
      "WHO-prequalified essential medicines, sourced and stored under strict cold-chain and regulatory compliance.",
    href: "/products/prescription",
    image: "/images/medicine-bottles-tablets-wooden-desk.webp",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    name: "Personal Care",
    description:
      "Everyday health essentials, vitamins, and consumer wellness products for pharmacies and retailers.",
    href: "/products/otc-wellness",
    image: "/images/hero-carousel-1.webp",
    span: "sm:col-span-1 sm:row-span-1",
  },
  {
    name: "Clinical Infrastructure",
    description:
      "Diagnostic, monitoring, and clinical equipment supplied and serviced for hospitals and clinics.",
    href: "/products/devices-equipment",
    image: "/images/warehouse-pharmacy.webp",
    span: "sm:col-span-1 sm:row-span-1",
  },
  {
    name: "Medical Consumables",
    description:
      "Consumables and ward supplies — from surgical disposables to PPE — delivered at scale and on schedule.",
    href: "/products/hospital-supplies",
    image: "/images/medicine-bottles-tablets-wooden-desk.webp",
    span: "sm:col-span-2 sm:row-span-1",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-parchment-200 section-py">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 max-w-xl"
        >
          <span className="eyebrow mb-4 block">What we supply</span>
          <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-charcoal-900 sm:text-4xl">
            Four categories, one dependable supply chain.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:[grid-auto-rows:14rem] lg:[grid-auto-rows:15rem]">
          {categories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.08 * i,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={`group relative h-64 overflow-hidden rounded-2xl sm:h-auto ${category.span}`}
            >
              {/* Background image */}
              <Image
                src={category.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Resting state gradient — keeps name legible always */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/10 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

              {/* Resting state label */}
              <div className="absolute inset-x-0 bottom-0 p-6 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="font-[var(--font-display)] text-xl font-bold text-white sm:text-2xl">
                  {category.name}
                </h3>
              </div>

              {/* Hover reveal — accent panel sliding up */}
              <div
                className="
                  absolute inset-0 flex translate-y-full flex-col justify-end
                  bg-forest-700 p-6 transition-transform duration-400 ease-out
                  group-hover:translate-y-0
                  group-focus-within:translate-y-0
                "
              >
                <h3 className="font-[var(--font-display)] text-xl font-bold text-white sm:text-2xl">
                  {category.name}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/80 sm:text-base">
                  {category.description}
                </p>
                <Link
                  href={category.href}
                  className="mt-5 inline-flex w-fit items-center gap-1.5 font-[var(--font-display)] text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
                >
                  View more
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}