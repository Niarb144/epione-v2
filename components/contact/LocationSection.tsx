"use client";

import { motion, type Variants } from "framer-motion";
import { locationDetails } from "@/lib/data/contact-data";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: smoothEase } },
};

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-label="Office location"
      className="bg-[#EDF4F7]/50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#1976D2]">Our Location</p>
          <h2 className="font-['Poppins',sans-serif] text-3xl font-bold text-[#253746] sm:text-4xl">
            Find Our Office
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-base text-[#253746]/60">
            Our headquarters and primary distribution hub are located in Nairobi, Kenya — the logistics heart of East Africa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-stretch">
          {/* Map */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-[1.75rem] overflow-hidden shadow-[0_8px_32px_rgba(25,118,210,0.10)] border border-white min-h-[400px]"
          >
            {/* Google Maps iframe placeholder */}
            <iframe
              title="Epione Health Office Location"
              src="https://maps.google.com/maps?width=100%25&amp;height=370&amp;hl=en&amp;q=jasmine%20centre,%20pio%20gama%20road,%20westlands%20nairobi,%20pio%20gama%20road+(Epione%20Health)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Interactive map showing Epione Health office in Industrial Area, Nairobi"
            />
            {/* Overlay label */}
            <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#1976D2] animate-pulse" />
              <span className="text-xs font-semibold text-[#253746]">Epione Health — Westlands, Nairobi</span>
            </div>
          </motion.div>

          {/* Location details */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_4px_24px_rgba(37,55,70,0.06)] border border-[#EDF4F7]">
              <h3 className="font-['Poppins',sans-serif] text-base font-bold text-[#253746] mb-5">
                Getting Here
              </h3>
              <div className="flex flex-col gap-5">
                {locationDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div key={detail.label} className="flex gap-3 items-start">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#1976D2]/8">
                        <Icon className="h-4.5 w-4.5 text-[#1976D2]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#253746]/55 mb-0.5">{detail.label}</p>
                        <p className="text-sm text-[#253746] leading-snug">{detail.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Distribution note */}
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[#1976D2] to-[#0056B3] p-6 text-white">
              <p className="font-['Poppins',sans-serif] text-sm font-bold mb-2">Global Supply Hub</p>
              <p className="text-xs leading-relaxed opacity-85">
                While our headquarters are in Nairobi, our distribution network reaches East Africa, Sub-Saharan Africa, the Middle East, and beyond. Contact us to discuss supply to your region.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}