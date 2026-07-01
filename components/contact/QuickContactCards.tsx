"use client";

import { motion, type Variants } from "framer-motion";
import { quickContactCards } from "@/lib/data/contact-data";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

export default function QuickContactCards() {
  return (
    <section
      aria-label="Quick contact options"
      className="relative z-10 -mt-10 mx-auto max-w-7xl px-6 lg:px-8 pb-4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {quickContactCards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.a
              key={card.title}
              href={card.href}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(25,118,210,0.13)" }}
              transition={{ duration: 0.22 }}
              className="group flex flex-col gap-4 rounded-[1.5rem] bg-white p-6 shadow-[0_4px_24px_rgba(37,55,70,0.07)] border border-[#EDF4F7] outline-none focus-visible:ring-2 focus-visible:ring-[#1976D2] focus-visible:ring-offset-2 cursor-pointer"
              aria-label={`${card.title}: ${card.value}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1976D2]/8 transition-colors duration-200 group-hover:bg-[#1976D2]/14">
                <Icon className="h-6 w-6 text-[#1976D2] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-['Poppins',sans-serif] text-base font-semibold text-[#253746]">{card.title}</h3>
                <p className="text-sm leading-relaxed text-[#253746]/60">{card.description}</p>
              </div>
              <p className="mt-auto text-sm font-semibold text-[#1976D2] group-hover:text-[#0056B3] transition-colors duration-200">{card.value}</p>
              <div className="h-0.5 w-0 rounded-full bg-gradient-to-r from-[#1976D2] to-[#4FC3F7] transition-all duration-300 group-hover:w-full" aria-hidden="true" />
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}