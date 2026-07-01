"use client";

import { motion, type Variants } from "framer-motion";
import { departments } from "@/lib/data/contact-data";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

export default function DepartmentsGrid() {
  return (
    <section aria-label="Departments" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#1976D2]">Direct Access</p>
          <h2 className="font-['Poppins',sans-serif] text-3xl font-bold text-[#253746] sm:text-4xl">
            Reach the Right Team
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-[#253746]/60">
            Skip the queue. Each of our departments has a dedicated contact so your inquiry reaches the right expert immediately.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.title}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(25,118,210,0.11)" }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col gap-4 rounded-[1.5rem] bg-[#F8FCFD] p-6 border border-[#EDF4F7] shadow-[0_2px_12px_rgba(37,55,70,0.04)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm border border-[#EDF4F7] transition-colors duration-200 group-hover:bg-[#1976D2]/8">
                  <Icon className="h-5 w-5 text-[#1976D2] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Poppins',sans-serif] text-sm font-bold text-[#253746] mb-2">{dept.title}</h3>
                  <p className="text-xs leading-relaxed text-[#253746]/60">{dept.description}</p>
                </div>
                <a
                  href={`mailto:${dept.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1976D2] hover:text-[#0056B3] transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
                  aria-label={`Email ${dept.title} department`}
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact {dept.title}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}