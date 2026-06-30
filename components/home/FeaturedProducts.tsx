"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Product = {
  name: string;
  size: string;
  image: string;
  href: string;
};

/** Placeholder catalogue entries — swap image/href once real product pages exist. */
const products: Product[] = [
  {
    name: "Amoxicillin",
    size: "Capsules 500mg",
    image: "/images/medicine-bottles-tablets-wooden-desk.webp",
    href: "/products/amoxicillin",
  },
  {
    name: "Metformin",
    size: "Tablets 850mg",
    image: "/images/hero-carousel-1.webp",
    href: "/products/metformin",
  },
  {
    name: "Ibuprofen",
    size: "Capsules 400mg",
    image: "/images/warehouse-pharmacy.webp",
    href: "/products/ibuprofen",
  },
  {
    name: "Cetirizine",
    size: "Tablets 10mg",
    image: "/images/medicine-bottles-tablets-wooden-desk.webp",
    href: "/products/cetirizine",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-parchment-100 section-py">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow mb-4 block">Especially favoured</span>
            <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-charcoal-900 sm:text-4xl">
              Our top products
            </h2>
          </div>

          <Link
            href="/products"
            className="group hidden items-center gap-2 font-[var(--font-display)] text-sm font-semibold text-forest-500 transition-colors hover:text-forest-700 sm:inline-flex"
          >
            View all products
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.08 * i,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group relative h-80 overflow-hidden rounded-2xl"
            >
              {/* Background image */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-6">
                <div>
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-white">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/75">{product.size}</p>
                </div>

                <Link
                  href={product.href}
                  className="
                    inline-flex items-center gap-1.5 rounded-full bg-white/95
                    px-4 py-2 font-[var(--font-display)] text-xs font-semibold
                    text-forest-700 transition-all duration-300
                    hover:bg-gold-400 hover:text-forest-900
                  "
                >
                  Learn more
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more — mobile / fallback */}
        <div className="mt-10 flex justify-center sm:hidden">
          <Link href="/products" className="btn btn-primary">
            View more products
          </Link>
        </div>
      </div>
    </section>
  );
}