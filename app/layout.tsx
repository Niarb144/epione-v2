// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ── Fonts ────────────────────────────────────────────────────────────────────
   next/font loads both faces at build time — zero layout shift, no external
   network requests at runtime. The `variable` prop binds each font to the
   CSS custom property declared in globals.css @theme, so Tailwind utilities
   font-display (Plus Jakarta Sans) and font-sans (Inter) work automatically.
   ─────────────────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",      // → font-sans utility, body copy
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",   // → font-display utility, headlines
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Epione Health — Pharmaceutical Supply from Kenya to the World",
    template: "%s | Epione Health",
  },
  description:
    "Epione Health is a Kenya-based pharmaceutical wholesaler and distributor, " +
    "supplying quality medicines, medical devices, and healthcare products to " +
    "pharmacies, hospitals, and healthcare providers across Africa and globally.",
  keywords: [
    "pharmaceutical supplier Kenya",
    "medicine wholesaler Africa",
    "medical devices Kenya",
    "pharmaceutical distributor Nairobi",
    "Epione Health",
    "healthcare supply chain Africa",
    "generic medicines Kenya",
  ],
  authors: [{ name: "Epione Health" }],
  creator: "Epione Health",
  publisher: "Epione Health",
  metadataBase: new URL("https://www.epione-health.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://www.epione-health.com",
    siteName: "Epione Health",
    title: "Epione Health — Pharmaceutical Supply from Kenya to the World",
    description:
      "Advancing Africa's health through sustainable access to quality medicines and healthcare technologies.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Epione Health" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epione Health — Pharmaceutical Supply from Kenya to the World",
    description:
      "Advancing Africa's health through sustainable access to quality medicines.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A3C34",
  width: "device-width",
  initialScale: 1,
};

/* ── Root layout ──────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      /*
       * Attach the font CSS-variable classes to <html> so the variables are
       * available everywhere in the document tree.
       */
      className={`${inter.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-parchment-100 font-sans text-charcoal-900 antialiased selection:bg-forest-700 selection:text-gold-500">

        {/* ── Skip link — keyboard / screen reader accessibility ──────────── */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* ── Topbar — email + phone strip (hidden below md) ──────────────── */}
        <div
          className="hidden md:block bg-forest-700 text-parchment-100"
          role="complementary"
          aria-label="Contact information"
        >
          <div className="container flex items-center justify-between"
               style={{ height: "2rem" }}>
            <a
              href="mailto:sales@epione-health.com"
              className="flex items-center gap-1.5 text-xs tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              {/* Mail icon */}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
              sales@epione-health.com
            </a>
            <a
              href="tel:+254746246801"
              className="flex items-center gap-1.5 text-xs tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              {/* Phone icon */}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +254 746 246 801
            </a>
          </div>
        </div>

        {/* ── Navbar ────────────────────────────────────────────────────────── */}
        <Navbar />

        {/* ── Page content ──────────────────────────────────────────────────── */}
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>

        {/* ── Footer ────────────────────────────────────────────────────────── */}
        <Footer />

        {/* ── WhatsApp FAB ──────────────────────────────────────────────────── */}
        <a
          href="https://wa.me/254746246801?text=Hello%20Epione%20Health,%20I%20would%20like%20to%20inquire%20about..."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Epione Health on WhatsApp"
          className="
            fixed bottom-6 right-6 z-50
            flex h-14 w-14 items-center justify-center
            rounded-full bg-[#25D366] text-white
            shadow-[0_4px_20px_rgba(37,211,102,0.4)]
            transition-all duration-200
            hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)]
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-3
          "
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.881a.5.5 0 0 0 .611.637l6.196-1.623A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.373l-.36-.213-3.713.974.988-3.616-.234-.372A9.797 9.797 0 0 1 2.182 12C2.182 6.565 6.565 2.182 12 2.182c5.435 0 9.818 4.383 9.818 9.818 0 5.435-4.383 9.818-9.818 9.818z"/>
          </svg>
        </a>

      </body>
    </html>
  );
}