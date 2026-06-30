"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ResponsibilityCard {
  title: string;
  description: string;
  image: string;
  href: string;
}

const cards: ResponsibilityCard[] = [
  {
    title: "Healthcare Access",
    description:
      "Subsidized supply programs and last-mile delivery partnerships that bring essential medicines to underserved counties.",
    image: "/images/hero-carousel-1.webp",
    href: "/csr/healthcare-access",
  },
  {
    title: "Environmental Sustainability",
    description:
      "Investing in energy-efficient cold storage and responsible packaging to reduce our distribution footprint.",
    image: "/images/warehouse-pharmacy.webp",
    href: "/csr/sustainability",
  },
  {
    title: "Community Development",
    description:
      "Training programs for pharmacy technicians and scholarships supporting the next generation of healthcare workers.",
    image: "/images/epione-women.webp",
    href: "/csr/community",
  },
];

const smoothEase = [0.16, 1, 0.3, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: smoothEase },
  }),
};

export function CorporateResponsibility() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Corporate Responsibility
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            Investing Beyond the Supply Chain
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="group block overflow-hidden rounded-[28px] border border-charcoal/8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-parchment/60 p-7">
                <h3 className="mb-2.5 font-display text-lg font-semibold text-charcoal">
                  {card.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-charcoal/65">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
                  Read More
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}