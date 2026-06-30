"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const smoothEase = [0.16, 1, 0.3, 1] as const;

const lineVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const floatCardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-parchment pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Decorative gradient + floating circles inspired by the logo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-forest/10 via-gold/10 to-transparent blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-8%] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-gold/10 via-forest/5 to-transparent blur-3xl" />
        <svg
          className="absolute top-24 right-[8%] hidden h-24 w-24 opacity-20 lg:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="48" stroke="#1A3C34" strokeWidth="1.5" />
        </svg>
        <svg
          className="absolute bottom-20 left-[6%] hidden h-16 w-16 opacity-25 lg:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="48" stroke="#C9A84C" strokeWidth="2" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Left column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span
            variants={fadeUp}
            className="mb-5 inline-block rounded-full border border-forest/15 bg-forest/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-forest"
          >
            About Epione Health
          </motion.span>

          <h1 className="mb-6 font-display text-4xl font-extrabold leading-[1.08] text-charcoal sm:text-5xl lg:text-[3.4rem]">
            <span className="block overflow-hidden">
              <motion.span variants={lineVariants} className="block">
                Building Healthier Communities
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineVariants} className="block">
                Through Trusted{" "}
                <span className="text-forest">Pharmaceutical</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineVariants} className="block">
                Partnerships
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mb-9 max-w-xl text-lg leading-relaxed text-charcoal/70"
          >
            Epione Health is a Kenya-based pharmaceutical wholesaler and
            distributor connecting manufacturers to hospitals, pharmacies,
            and healthcare systems across East Africa and beyond. From
            cold-chain logistics to regulatory-compliant supply, we deliver
            the medicines that communities depend on &mdash; reliably,
            transparently, and at scale.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact?type=partner"
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-parchment shadow-lg shadow-forest/20 transition-all duration-300 hover:bg-forest/90 hover:shadow-xl hover:shadow-forest/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              Become a Partner
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-transparent px-7 py-3.5 text-sm font-semibold text-charcoal transition-all duration-300 hover:border-forest/40 hover:bg-forest/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Right column - image with floating stat cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative"
        >
          <motion.div
            variants={fadeUp}
            className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-2xl shadow-forest/15 sm:aspect-[5/6]"
          >
            <Image
              src="/images/warehouse-pharmacy.webp"
              alt="Epione Health logistics team coordinating temperature-controlled pharmaceutical distribution inside a modern warehouse"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
          </motion.div>

          {/* Floating stat card - top */}
          <motion.div
            variants={floatCardVariants}
            className="absolute -top-6 -left-4 hidden rounded-2xl border border-white/40 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-md sm:block lg:-left-8"
          >
            <p className="font-display text-2xl font-bold text-forest">12+</p>
            <p className="text-xs font-medium text-charcoal/60">
              Years Experience
            </p>
          </motion.div>

          {/* Floating stat card - middle */}
          <motion.div
            variants={floatCardVariants}
            className="absolute top-1/2 -right-4 hidden -translate-y-1/2 rounded-2xl border border-white/40 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-md sm:block lg:-right-10"
          >
            <p className="font-display text-2xl font-bold text-forest">300+</p>
            <p className="text-xs font-medium text-charcoal/60">
              Healthcare Partners
            </p>
          </motion.div>

          {/* Floating stat card - bottom */}
          <motion.div
            variants={floatCardVariants}
            className="absolute -bottom-6 left-1/2 w-[78%] -translate-x-1/2 rounded-2xl border border-white/40 bg-white/85 px-6 py-4 shadow-xl backdrop-blur-md sm:w-auto"
          >
            <p className="font-display text-2xl font-bold text-forest">500+</p>
            <p className="text-xs font-medium text-charcoal/60">
              Products Distributed
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}