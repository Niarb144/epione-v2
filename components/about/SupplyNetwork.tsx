"use client";

import { motion, type Variants } from "framer-motion";
import { Warehouse, Snowflake, Truck, Building2, Factory, MapPin } from "lucide-react";

const nodes = [
  { x: 90, y: 110, icon: Warehouse, label: "Warehouses", count: "6" },
  { x: 320, y: 60, icon: Snowflake, label: "Cold Chain Hubs", count: "4" },
  { x: 470, y: 200, icon: Truck, label: "Distribution Fleet", count: "45" },
  { x: 240, y: 290, icon: Building2, label: "Hospitals Served", count: "180+" },
  { x: 60, y: 260, icon: Factory, label: "Manufacturer Partners", count: "30+" },
];

const pulseVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const smoothEase = [0.16, 1, 0.3, 1] as const;

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.6 + i * 0.15, ease: smoothEase },
  }),
};

const statRows = [
  { label: "Active warehouses across Kenya", value: "6" },
  { label: "Cold chain storage facilities", value: "4" },
  { label: "Fleet vehicles in daily operation", value: "45+" },
  { label: "Countries within reach", value: "20+" },
];

export function SupplyNetwork() {
  return (
    <section className="overflow-hidden bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Illustration */}
          <div className="relative">
            <svg
              viewBox="0 0 540 380"
              className="w-full"
              role="img"
              aria-label="Stylized map illustrating Epione Health's supply network of warehouses, cold chain hubs, fleet routes, and hospital coverage"
            >
              {/* Connection lines */}
              <motion.path
                d="M 90 110 L 320 60 L 470 200 L 240 290 L 60 260 L 90 110"
                fill="none"
                stroke="#1976D2"
                strokeWidth="1.5"
                strokeDasharray="4 5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={pulseVariants}
              />
              {/* Coverage radius circles */}
              <circle cx="270" cy="190" r="170" stroke="white" strokeOpacity="0.06" strokeWidth="1" fill="none" />
              <circle cx="270" cy="190" r="120" stroke="white" strokeOpacity="0.08" strokeWidth="1" fill="none" />

              {nodes.map((node, i) => (
                <motion.g
                  key={node.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={nodeVariants}
                >
                  <circle cx={node.x} cy={node.y} r="34" fill="#1976d23b" stroke="#7AC943" strokeWidth="1.5" />
                </motion.g>
              ))}
            </svg>

            {/* Icon overlays positioned to match SVG node coordinates (percentage-based) */}
            <div className="pointer-events-none absolute inset-0">
              {nodes.map((node) => (
                <div
                  key={node.label}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
                  style={{
                    left: `${(node.x / 540) * 100}%`,
                    top: `${(node.y / 380) * 100}%`,
                  }}
                >
                  <node.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  <span className="mt-12 whitespace-nowrap text-[11px] font-semibold text-parchment/90">
                    {node.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Text content */}
          <div>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Supply Network
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight text-parchment sm:text-4xl">
              A Logistics Backbone Built for Reliability
            </h2>
            <p className="mb-8 text-base leading-relaxed text-parchment/70">
              Our network connects manufacturers to the last mile through a
              coordinated system of warehouses, cold chain facilities, and a
              dedicated fleet &mdash; engineered so that delays and stockouts
              simply aren't an option for the hospitals we serve.
            </p>

            <div className="space-y-4">
              {statRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center justify-between border-b border-parchment/10 pb-4"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                    <span className="text-sm text-parchment/75">{row.label}</span>
                  </div>
                  <span className="font-display text-lg font-bold text-parchment">
                    {row.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}