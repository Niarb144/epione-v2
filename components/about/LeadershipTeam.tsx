"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

const leaders: Leader[] = [
  {
    name: "Dr. Amani Wekesa",
    role: "Chief Executive Officer",
    bio: "Over 20 years in pharmaceutical supply chain leadership across East Africa, with a background in clinical pharmacy.",
    image: "/images/profile1.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Joseph Mwangi",
    role: "Chief Operating Officer",
    bio: "Oversees warehousing, fleet, and cold-chain operations across all regional distribution hubs.",
    image: "/images/profile2.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Grace Achieng",
    role: "Head of Quality & Compliance",
    bio: "Leads regulatory affairs and quality assurance, ensuring every shipment meets WHO and GDP standards.",
    image: "/images/profile3.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Daniel Otieno",
    role: "Head of Partnerships",
    bio: "Builds and manages relationships with manufacturers, hospitals, and government health programs.",
    image: "/images/profile4.jpg",
    linkedin: "https://linkedin.com",
  },
];

const smoothEase = [0.16, 1, 0.3, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: smoothEase },
  }),
};

export function LeadershipTeam() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Leadership Team
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            The People Steering Epione Health
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="group overflow-hidden rounded-[24px] border border-charcoal/8 bg-parchment/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={leader.image}
                  alt={`Portrait of ${leader.name}, ${leader.role} at Epione Health`}
                  fill
                  sizes="(max-width: 768px) 90vw, 22vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${leader.name}'s LinkedIn profile`}
                  className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-forest opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <FaLinkedinIn className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-charcoal">
                  {leader.name}
                </h3>
                <p className="mb-2.5 text-sm font-medium text-gold">
                  {leader.role}
                </p>
                <p className="text-sm leading-relaxed text-charcoal/65">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}