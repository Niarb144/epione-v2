"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  "/images/warehouse-pharmacy.webp",
  "/images/medicine-bottles-tablets-wooden-desk.webp",
  "/images/hero-carousel-1.webp",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 7000);

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
    <section className="relative lg:px-8">
      <div className="relative overflow-hidden rounded-none lg:rounded-[20px] min-h-screen">

        {/* Background Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{
              opacity: 0,
              scale: 1.12,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            <Image
              src={slides[current]}
              alt="Healthcare"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/50 to-slate-900/10" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">

            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              transition={{
                duration: 0.8,
              }}
              className="max-w-5xl"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="mb-6 flex items-center gap-3 text-primary"
              >
                <div className="h-[2px] w-8 bg-[#266DB5]" />

                <span className="text-sm text-[#266DB5] font-semibold uppercase tracking-[0.25em]">
                  Trusted Healthcare Partner
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="font-[var(--font-heading)] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                Advancing
                <span className="block text-primary">
                  Healthcare
                </span>
                Across Africa
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                }}
                className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg"
              >
                Reliable pharmaceuticals and healthcare
                solutions that empower hospitals, clinics,
                and healthcare providers across Africa.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/products"
                  className="w-full rounded-xl bg-primary px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
                >
                  Explore Products
                </Link>

                <Link
                  href="/contact"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-center text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:w-auto"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Previous */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-all hover:bg-primary cursor-pointer lg:left-8"
        >
          <ArrowLeft size={22} />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-all hover:bg-primary cursor-pointer lg:right-8"
        >
          <ArrowRight size={22} />
        </button>

        {/* Pagination */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                current === index
                  ? "w-12 bg-primary"
                  : "w-3 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/70"
        >
          <span className="rotate-90 text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="h-12 w-[2px] bg-white/30 overflow-hidden rounded-full">
            <motion.div
              animate={{
                y: [-40, 40],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="h-6 w-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}