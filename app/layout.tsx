// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { ScrollToTop } from "@/components/layout/ScrollToTop";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",      
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",   
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
  authors: [{ name: "Brian Teddy" }],
  creator: "Brian Teddy",
  publisher: "Nidari Inc",
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
  themeColor: "#1976D2",
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
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}