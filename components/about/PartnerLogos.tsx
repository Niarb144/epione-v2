"use client";

import Image from "next/image";

interface PartnerLogo {
  name: string;
  src: string;
}

const partners: PartnerLogo[] = [
  { name: "Nairobi General Hospital", src: "/images/nairobi-hospital.png" },
  { name: "Coastal Health Network", src: "/images/partner-02.png" },
  { name: "MedAid International", src: "/images/partner-03.png" },
  { name: "Rift Valley Pharma", src: "/images/partner-04.png" },
  { name: "Ministry of Health Kenya", src: "/images/partner-05.png" },
//   { name: "East Africa Relief Council", src: "/images/logos/partner-6.svg" },
//   { name: "Lakeview Medical Centre", src: "/images/logos/partner-7.svg" },
//   { name: "PharmaCorp Global", src: "/images/logos/partner-8.svg" },
];

// Duplicate the list so the marquee can loop seamlessly.
const loopLogos = [...partners, ...partners];

export function PartnerLogos() {
  return (
    <section className="border-y border-charcoal/8 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Trusted Partners
        </span>
        <h2 className="mx-auto mb-14 max-w-xl font-display text-2xl font-bold leading-tight text-charcoal sm:text-3xl">
          Trusted By Leading Healthcare Partners
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="marquee-track flex w-max items-center gap-16">
          {loopLogos.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="relative h-12 w-32 shrink-0 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                sizes="280px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: epione-marquee 32s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes epione-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}