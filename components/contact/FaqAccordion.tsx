"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/lib/data/contact-data";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: smoothEase } },
};

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-label="Frequently asked questions" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#1976D2]">FAQ</p>
          <h2 className="font-['Poppins',sans-serif] text-3xl font-bold text-[#253746] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-[#253746]/60">
            Can&rsquo;t find what you&rsquo;re looking for? Contact us directly and we&rsquo;ll get back to you within one business day.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-3"
          role="list"
        >
          {faqItems.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={index}
                role="listitem"
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#1976D2]/25 bg-[#F8FCFD] shadow-[0_4px_20px_rgba(25,118,210,0.08)]"
                    : "border-[#EDF4F7] bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1976D2] focus-visible:ring-inset rounded-2xl"
                >
                  <span className="font-['Poppins',sans-serif] text-sm font-semibold text-[#253746] pr-4">
                    {item.question}
                  </span>
                  <span className={`flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ${isOpen ? "bg-[#1976D2] text-white" : "bg-[#EDF4F7] text-[#253746]/60"}`}>
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: smoothEase }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pt-0 text-sm leading-relaxed text-[#253746]/65">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}