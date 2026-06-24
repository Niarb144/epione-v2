"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  "/images/warehouse-pharmacy.webp",
  "/images/medicine-bottles-tablets-wooden-desk.webp",
  "/images/hero-carousel-1.webp",
];

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Healthcare Partners",
  },
  {
    icon: MapPin,
    value: "20+",
    label: "Counties Served",
  },
  {
    icon: ShieldCheck,
    value: "15+",
    label: "Years of Experience",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative px-0 pt-0 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] min-h-[85vh] mb-4">
        {/* Background Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current]}
              alt="Healthcare professionals"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00182f]/95 via-[#012340]/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[85vh] items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-4xl">
              <div className="mt-4 mb-4 flex items-center gap-3 text-[#8BC34A]">
                <div className="h-[2px] w-6 bg-[#8BC34A]" />
                <span className="text-sm font-medium">
                  Trusted Healthcare Partner Across Africa
                </span>
              </div>

              <h1 className="font-[var(--font-heading)] text-white text-3xl font-bold  md:text-5xl">
                Advancing Africa&apos;s Future
                <br />
                Through Sustainable
                <br />
                <span className="text-primary">
                  Healthcare Access
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85">
                We deliver high-quality pharmaceuticals,
                medical devices, and healthcare solutions
                that empower providers and improve lives
                across communities.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="rounded-2xl bg-primary px-8 py-4 text-white font-semibold transition hover:scale-105"
                >
                  Explore Products
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/40 bg-white/10 px-8 py-4 text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Contact Us
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 mb-8 flex flex-wrap gap-12">
                {stats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/5 backdrop-blur-md">
                        <Icon className="h-7 w-7 text-white" />
                      </div>

                      <div>
                        <h3 className="text-4xl font-bold text-white">
                          {item.value}
                        </h3>

                        <p className="text-white/70">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
        >
          <ArrowLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
        >
          <ArrowRight size={24} />
        </button>

        {/* Pagination */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all ${
                current === index
                  ? "w-10 bg-primary"
                  : "w-3 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}