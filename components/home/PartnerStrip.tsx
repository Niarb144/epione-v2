"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Partner / client logos.
 * Drop real logo files into /public/logos/ and update the `src` paths below.
 * Keep source files as transparent PNG or SVG, ideally pre-trimmed so the
 * grayscale treatment reads cleanly at the fixed height used here.
 */
const partners = [
  { name: "Nairobi General Hospital", src: "/images/nairobi-hospital.png" },
  { name: "Coastal Health Alliance", src: "/images/partner-02.png" },
  { name: "AAR Hospital", src: "/images/partner-03.png" },
  { name: "Aga Khan University Hospital", src: "/images/partner-04.png" },
  { name: "Kenya Red Cross", src: "/images/partner-05.png" },
  // { name: "Savannah Community Health", src: "/logos/partner-6.svg" },
];

export default function PartnersStrip() {
  return (
    <section className="bg-parchment-50 py-16 sm:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="eyebrow mb-10 text-center text-charcoal-500">
            Trusted across the region
          </p>

          <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-10">
            {partners.map((partner, i) => (
              <motion.li
                key={partner.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: 0.07 * i,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex items-center justify-center"
              >
                <div
                  tabIndex={0}
                  className="
                    group relative flex h-14 w-full max-w-[180px] items-center
                    justify-center grayscale opacity-45 transition-all duration-300
                    ease-out hover:grayscale-0 hover:opacity-100
                    focus-within:grayscale-0 focus-within:opacity-100
                    focus-visible:outline-none
                    sm:h-16 sm:max-w-[200px]
                  "
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={200}
                    height={64}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}