"use client";

// components/Navbar.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Styling: Tailwind v4 utility classes (tokens defined in globals.css @theme).
// Animations (Framer Motion):
//   1. Navbar bg — transparent → frosted white on scroll (useMotionValueEvent)
//   2. Dropdown   — AnimatePresence fade + slide + scale
//   3. Active link — layoutId shared underline pill
//   4. Mobile sheet — slides in from the right
//   5. Hamburger — three bars morph to ✕
//   6. Heartbeat pulse line — SVG pathLength draws itself on mount (brand sig)
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  LayoutGroup,
  type Variants,
} from "framer-motion";

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

/* ── Nav data ──────────────────────────────────────────────────────────────── */

const NAV_ITEMS: NavItem[] = [
  { label: "Home",     href: "/"         },
  { label: "About",    href: "/about"    },
  { label: "Services", href: "#services" },
  {
    label: "Products",
    href: "#products",
    dropdown: [
      { label: "Pharmaceuticals",     href: "#products", description: "Generic and branded drug supplies"       },
      { label: "Medical Devices",     href: "#products", description: "Clinical infrastructure & equipment"    },
      { label: "Medical Consumables", href: "#products", description: "High-grade consumables in bulk"          },
      { label: "Personal Care",       href: "#products", description: "Hygiene and personal health products"   },
    ],
  },
  { label: "SDG 3",   href: "#tabs"    },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "Twitter/X", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "Facebook",  d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Instagram", d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z" },
  { label: "LinkedIn",  d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
];

/* ── Animation variants ────────────────────────────────────────────────────── */

// 1. Navbar background transition
const navBgVariants: Variants = {
  top: {
    backgroundColor: "rgba(247,244,238,0)",
    backdropFilter:  "blur(0px)",
    // WebkitBackdropFilter: "blur(0px)",
    boxShadow: "none",
  },
  scrolled: {
    backgroundColor: "rgba(247,244,238,0.97)",
    backdropFilter:  "blur(14px)",
    // WebkitBackdropFilter: "blur(14px)",
    boxShadow: "0 1px 0 0 rgba(26,60,52,0.08)",
  },
};

// 2. Dropdown fade + slide + subtle scale
const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.175, 0.885, 0.32, 1.275] },
  },
};

// 3. Mobile sheet slide from right
const sheetVariants: Variants = {
  hidden:  { x: "100%", transition: { duration: 0.3,  ease: [0.4, 0, 0.2, 1] } },
  visible: { x: 0,      transition: { duration: 0.35, ease: [0.175, 0.885, 0.32, 1.1] } },
};

// 4. Backdrop overlay
const overlayVariants: Variants = {
  hidden:  { opacity: 0, transition: { duration: 0.25 } },
  visible: { opacity: 1, transition: { duration: 0.3  } },
};

// 5. Staggered mobile nav items
const mobileItemVariants: Variants = {
  hidden:  { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.055, duration: 0.28, ease: [0.4, 0, 0.2, 1] },
  }),
};

// 6. Mobile sub-menu expand
const subVariants: Variants = {
  hidden:  { height: 0,      opacity: 0, transition: { duration: 0.22 } },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.26 } },
};

/* ── Heartbeat Pulse Line ──────────────────────────────────────────────────── */
// Gold SVG line that draws itself along the navbar bottom on mount.
// This is the brand signature element — echoes a cardiac trace.

function PulseLine() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <motion.line
          x1="0" y1="1" x2="1440" y2="1"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </div>
  );
}

/* ── Desktop Dropdown ──────────────────────────────────────────────────────── */

function DesktopDropdown({ items, open }: { items: DropdownItem[]; open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="dropdown"
          className="
            absolute left-1/2 top-full mt-4 -translate-x-1/2
            min-w-[15rem] overflow-hidden
            rounded-xl border border-parchment-200 bg-white
            shadow-card-hover
          "
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          role="menu"
        >
          {/* Gold accent bar */}
          <div className="h-[3px] bg-gradient-to-r from-gold-500 to-gold-400" />

          <ul className="py-2" role="none">
            {items.map((item) => (
              <li key={item.label} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  className="
                    group flex flex-col gap-0.5 px-4 py-3
                    transition-colors duration-150
                    hover:bg-parchment-100
                  "
                >
                  <span className="font-sans text-sm font-semibold text-charcoal-900 group-hover:text-forest-700 transition-colors duration-150">
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="text-xs text-charcoal-400">
                      {item.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Desktop Nav Item ──────────────────────────────────────────────────────── */

function DesktopNavItem({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasDD = Boolean(item.dropdown?.length);

  const onEnter = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  }, []);

  const onLeave = useCallback(() => {
    timer.current = setTimeout(() => setOpen(false), 120);
  }, []);

  return (
    <li
      className="relative"
      onMouseEnter={hasDD ? onEnter : undefined}
      onMouseLeave={hasDD ? onLeave : undefined}
    >
      <Link
        href={item.href}
        className="relative flex items-center gap-1 py-1 font-sans text-sm font-medium text-charcoal-900 transition-colors duration-200 hover:text-forest-700"
        // aria-haspopup={hasDD ? "true" : undefined}
        // aria-expanded={hasDD ? String(open) : undefined}
      >
        {item.label}

        {/* Chevron for dropdown parents */}
        {hasDD && (
          <motion.svg
            width="11" height="11" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        )}

        {/* Active underline — shared layout animation across items */}
        {active && (
          <motion.span
            layoutId="nav-active"
            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gold-500"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>

      {hasDD && item.dropdown && (
        <DesktopDropdown items={item.dropdown} open={open} />
      )}
    </li>
  );
}

/* ── Mobile Nav Item ───────────────────────────────────────────────────────── */

function MobileNavItem({
  item,
  index,
  onClose,
}: {
  item: NavItem;
  index: number;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasDD = Boolean(item.dropdown?.length);

  return (
    <motion.li
      className="border-b border-parchment-200 last:border-none"
      custom={index}
      variants={mobileItemVariants}
      initial="hidden"
      animate="visible"
    >
      {hasDD ? (
        <>
          <button
            type="button"
            onClick={() => setExpanded((p) => !p)}
            aria-expanded={expanded}
            className="flex w-full items-center justify-between px-6 py-4 font-sans text-base font-semibold text-charcoal-900 transition-colors duration-150 hover:text-forest-700"
          >
            {item.label}
            <motion.svg
              width="15" height="15" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </motion.svg>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.ul
                key="sub"
                className="overflow-hidden bg-parchment-100"
                variants={subVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                role="menu"
              >
                {item.dropdown!.map((sub) => (
                  <li key={sub.label} role="none">
                    <Link
                      href={sub.href}
                      role="menuitem"
                      onClick={onClose}
                      className="
                        mx-4 my-1 ml-6 flex flex-col gap-0.5
                        rounded-r-lg border-l-2 border-gold-500
                        px-4 py-3
                        font-sans text-sm font-semibold text-charcoal-600
                        transition-colors duration-150
                        hover:bg-parchment-200 hover:text-forest-700
                      "
                    >
                      {sub.label}
                      {sub.description && (
                        <span className="text-xs font-normal text-charcoal-400">
                          {sub.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          className="flex w-full items-center px-6 py-4 font-sans text-base font-semibold text-charcoal-900 transition-colors duration-150 hover:text-forest-700"
        >
          {item.label}
        </Link>
      )}
    </motion.li>
  );
}

/* ── Hamburger ─────────────────────────────────────────────────────────────── */

function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-sheet"
      className="
        flex h-10 w-10 flex-col items-center justify-center gap-[5px]
        rounded-lg transition-colors duration-200
        hover:bg-parchment-200
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500
        lg:hidden
      "
    >
      {([0, 1, 2] as const).map((i) => (
        <motion.span
          key={i}
          className="block h-[2px] w-6 rounded-full bg-charcoal-900"
          animate={
            open
              ? i === 0 ? { rotate: 45,  y: 7  }
              : i === 1 ? { opacity: 0, scaleX: 0 }
              :           { rotate: -45, y: -7 }
              : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
          }
          transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
        />
      ))}
    </button>
  );
}

/* ── Main Navbar ───────────────────────────────────────────────────────────── */

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("/");

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  // Escape key closes the sheet
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while sheet is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Track active hash for the shared underline
  useEffect(() => {
    const update = () => setActiveHref(window.location.hash || "/");
    window.addEventListener("hashchange", update);
    update();
    return () => window.removeEventListener("hashchange", update);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <motion.header
        className="sticky top-0 z-50 w-full"
        variants={navBgVariants}
        animate={scrolled ? "scrolled" : "top"}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        role="banner"
      >
        <div className="container flex h-[4.5rem] items-center justify-between gap-8">

          {/* Wordmark */}
          <Link
            href="/"
            onClick={() => setActiveHref("/")}
            className="
              relative z-10 flex items-center gap-2
              font-display text-xl text-forest-700
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-gold-500 focus-visible:rounded-md
            "
          >
            Epione Health
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden lg:block">
            <LayoutGroup id="desktop-nav">
              <ul className="flex items-center gap-8" role="list">
                {NAV_ITEMS.map((item) => (
                  <DesktopNavItem
                    key={item.label}
                    item={item}
                    active={activeHref === item.href}
                  />
                ))}
              </ul>
            </LayoutGroup>
          </nav>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+254746246801"
              className="font-sans text-sm font-medium text-charcoal-600 transition-colors duration-200 hover:text-forest-700"
            >
              +254 746 246 801
            </a>
            <Link
              href="#contact"
              className="btn btn-primary"
              style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}
            >
              Contact Us
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Hamburger (mobile only) */}
          <Hamburger
            open={mobileOpen}
            onClick={() => setMobileOpen((p) => !p)}
          />
        </div>

        {/* Brand signature: gold heartbeat line draws on mount */}
        <PulseLine />
      </motion.header>

      {/* ── Mobile sheet + overlay ─────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-charcoal-900/40 backdrop-blur-sm lg:hidden"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              aria-hidden="true"
              onClick={closeMobile}
            />

            {/* Sheet */}
            <motion.div
              key="sheet"
              id="mobile-sheet"
              className="
                fixed inset-y-0 right-0 z-50
                flex w-[min(20rem,90vw)] flex-col
                overflow-y-auto bg-white shadow-2xl
                lg:hidden
              "
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Sheet header */}
              <div className="flex flex-shrink-0 items-center justify-between border-b border-parchment-200 px-6 py-4">
                <Link
                  href="/"
                  onClick={closeMobile}
                  className="flex items-center gap-2 font-display text-lg text-forest-700"
                >
                  Epione Health
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
                </Link>
                <button
                  type="button"
                  onClick={closeMobile}
                  aria-label="Close menu"
                  className="
                    flex h-8 w-8 items-center justify-center rounded-lg
                    text-charcoal-600 transition-colors duration-150
                    hover:bg-parchment-100 hover:text-charcoal-900
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500
                  "
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex-1" aria-label="Mobile navigation">
                <ul role="list">
                  {NAV_ITEMS.map((item, i) => (
                    <MobileNavItem
                      key={item.label}
                      item={item}
                      index={i}
                      onClose={closeMobile}
                    />
                  ))}
                </ul>
              </nav>

              {/* Sheet footer */}
              <div className="flex flex-shrink-0 flex-col gap-3 border-t border-parchment-200 px-6 py-6">
                {/* Primary CTA */}
                <Link
                  href="#contact"
                  onClick={closeMobile}
                  className="btn btn-primary w-full justify-center"
                  style={{ fontSize: "0.875rem" }}
                >
                  Contact Us
                </Link>

                {/* Phone */}
                <a
                  href="tel:+254746246801"
                  className="
                    flex w-full items-center justify-center gap-2
                    rounded-full border border-parchment-300 px-5 py-3
                    font-sans text-sm font-medium text-charcoal-600
                    transition-colors duration-150
                    hover:border-forest-700 hover:text-forest-700
                  "
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  +254 746 246 801
                </a>

                {/* Social icons */}
                <div className="flex items-center justify-center gap-3 pt-1" aria-label="Social media">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-full border border-parchment-300 text-charcoal-600
                        transition-all duration-200
                        hover:border-forest-700 hover:bg-forest-700 hover:text-white
                      "
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d={s.d} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}