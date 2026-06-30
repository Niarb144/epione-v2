"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type CtaButton = {
  label: string;
  href: string;
};

type CallToActionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction: CtaButton;
  secondaryAction?: CtaButton;
  /** "dark" = forest background, white text. "light" = parchment background, dark text. */
  variant?: "dark" | "light";
};

export default function CallToAction({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "dark",
}: CallToActionProps) {

  return (
    <section className="bg-parchment-200">
      <div className="container section-py">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-xl">
            {eyebrow && (
              <span
                className={`eyebrow mb-4 block ${
                  "text-forest-500"
                }`}
              >
                {eyebrow}
              </span>
            )}

            <h2
              className="font-[var(--font-display)] text-3xl font-bold leading-tight tracking-tight sm:text-4xl text-charcoal-900" 
            >
              {title}
            </h2>

            {description && (
              <p
                className={`mt-5 max-w-lg text-base leading-7 sm:text-lg text-charcoal-600`}
              >
                {description}
              </p>
            )}
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href={primaryAction.href}
              className={`
                group inline-flex items-center justify-center gap-2 rounded-xl
                px-8 py-4 text-center font-[var(--font-display)] font-semibold
                transition-all duration-300 hover:scale-[1.03] bg-forest-700 text-white hover:bg-forest-600 hover:shadow-card-hover`}
            >
              {primaryAction.label}
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className={`
                  inline-flex items-center justify-center rounded-xl border
                  px-8 py-4 text-center font-[var(--font-display)] font-semibold
                  transition-all duration-300 border-forest-700/25 text-forest-700 hover:bg-forest-700/5`}
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}