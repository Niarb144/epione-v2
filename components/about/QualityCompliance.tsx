"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, FileCheck2, Award, Landmark, ClipboardList, Download, type LucideIcon } from "lucide-react";

interface Certification {
  icon: LucideIcon;
  title: string;
  description: string;
  file: string;
}

const certifications: Certification[] = [
  {
    icon: Globe,
    title: "WHO Standards",
    description: "Procurement and storage practices aligned with World Health Organization guidelines for pharmaceuticals.",
    file: "/documents/who-standards-certificate.pdf",
  },
  {
    icon: FileCheck2,
    title: "GDP Certified",
    description: "Good Distribution Practice certification covering transport, storage, and handling of all products.",
    file: "/documents/gdp-certificate.pdf",
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "ISO 9001 quality management certification audited annually by an accredited third party.",
    file: "/documents/iso-certificate.pdf",
  },
  {
    icon: Landmark,
    title: "Government Compliance",
    description: "Licensed and regularly inspected by the Pharmacy and Poisons Board of Kenya.",
    file: "/documents/government-license.pdf",
  },
  {
    icon: ClipboardList,
    title: "Quality Assurance",
    description: "Dedicated QA team performing batch testing and documentation review on every incoming shipment.",
    file: "/documents/quality-assurance-policy.pdf",
  },
];

const smoothEase = [0.16, 1, 0.3, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: (i % 3) * 0.1, ease: smoothEase },
  }),
};

export function QualityCompliance() {
  return (
    <section className="bg-parchment py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Quality &amp; Compliance
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            Certifications That Back Every Shipment
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="flex flex-col rounded-[24px] border border-charcoal/8 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest/10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                <cert.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2.5 font-display text-base font-semibold text-charcoal">
                {cert.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-charcoal/65">
                {cert.description}
              </p>
              <a
                href={cert.file}
                download
                className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors duration-200 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}