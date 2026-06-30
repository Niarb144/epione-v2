"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FileText } from "lucide-react";

type Certification = {
  name: string;
  issuer: string;
  description: string;
  href: string;
};

/** Placeholder certificates — replace `href` with real PDF/document links once issued. */
const certifications: Certification[] = [
  {
    name: "WHO-GMP",
    issuer: "World Health Organization",
    description:
      "Good Manufacturing Practice compliance across sourcing, storage, and handling.",
    href: "/certificates/who-gmp.pdf",
  },
  {
    name: "ISO 9001:2015",
    issuer: "International Organization for Standardization",
    description:
      "Certified quality management system covering our full distribution process.",
    href: "/certificates/iso-9001.pdf",
  },
  {
    name: "PPB Licence",
    issuer: "Pharmacy and Poisons Board, Kenya",
    description:
      "Licensed wholesale distributor authorised to import and supply pharmaceuticals.",
    href: "/certificates/ppb-licence.pdf",
  },
  {
    name: "KEBS Certification",
    issuer: "Kenya Bureau of Standards",
    description:
      "Verified compliance with national product quality and safety standards.",
    href: "/certificates/kebs-certification.pdf",
  },
];

export default function Certifications() {
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
          <span className="eyebrow mb-4 block">Quality assurance</span>
          <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-charcoal-900 sm:text-4xl">
            Certified at every stage of the supply chain.
          </h2>
          <p className="mt-5 text-base leading-7 text-charcoal-600 sm:text-lg">
            Our certifications are reviewed and renewed on an ongoing basis.
            Each one is available to view or download below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: 0.08 * i,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="card group flex h-full flex-col p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-700/8 text-forest-700 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-forest-900">
                <BadgeCheck size={22} strokeWidth={2} />
              </span>

              <h3 className="mt-5 font-[var(--font-display)] text-lg font-bold text-charcoal-900">
                {cert.name}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-charcoal-500">
                {cert.issuer}
              </p>
              <p className="mt-3 text-sm leading-6 text-charcoal-600">
                {cert.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-1.5 font-[var(--font-display)] text-sm font-semibold text-forest-500 transition-colors duration-300 group-hover:text-forest-700">
                <FileText size={15} />
                View certificate
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}