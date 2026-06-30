"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organisation: string;
  avatar: string;
};

/** Placeholder testimonials — replace with real client quotes once available. */
const testimonials: Testimonial[] = [
  {
    quote:
      "Epione Health has cut our procurement lead times in half. Their cold-chain handling and documentation make customs clearance painless on our end.",
    name: "Amara Okafor",
    role: "Head of Procurement",
    organisation: "Lakeview Clinics Group",
    avatar: "/images/avatar-placeholder-1.webp",
  },
  {
    quote:
      "We switched our wholesale supplier three years ago and haven't looked back. Order accuracy and on-time delivery are consistently excellent.",
    name: "Daniel Mwangi",
    role: "Pharmacy Operations Manager",
    organisation: "Rift Valley Medical Centre",
    avatar: "/images/avatar-placeholder-2.webp",
  },
  {
    quote:
      "Their team understands regulatory complexity across multiple markets. That's rare, and it's why we trust them with our regional distribution.",
    name: "Grace Achieng",
    role: "Regional Supply Chain Director",
    organisation: "Pan-Africa Pharma Network",
    avatar: "/images/avatar-placeholder-3.webp",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-forest-700 section-py">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 max-w-xl"
        >
          <span className="eyebrow mb-4 block text-gold-400">
            What partners say
          </span>
          <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Trusted by the people who depend on us most.
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <Quote
            size={64}
            strokeWidth={1.5}
            className="absolute -top-6 left-0 text-gold-400/25 sm:-top-8"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative pt-10 sm:pt-12"
            >
              <p className="font-[var(--font-display)] text-xl font-medium leading-snug text-white sm:text-2xl">
                &ldquo;{active.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white/10">
                  <Image
                    src={active.avatar}
                    alt={active.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-[var(--font-display)] text-sm font-bold text-white">
                    {active.name}
                  </p>
                  <p className="text-sm text-white/65">
                    {active.role}, {active.organisation}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i === index ? "w-8 bg-gold-400" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}