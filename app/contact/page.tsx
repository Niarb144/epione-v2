import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import QuickContactCards from "@/components/contact/QuickContactCards";
import ContactForm from "@/components/contact/ContactForm";
import LocationSection from "@/components/contact/LocationSection";
import DepartmentsGrid from "@/components/contact/DepartmentsGrid";
import GlobalPartnershipSection from "@/components/contact/GlobalPartnershipSection";
import FaqAccordion from "@/components/contact/FaqAccordion";
import TrustSection from "@/components/contact/TrustSection";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Epione Health | Pharmaceutical Distribution & Healthcare Solutions",
  description:
    "Get in touch with Epione Health for pharmaceutical products, healthcare distribution, partnerships, government procurement, and customer support across East Africa and global markets.",
  openGraph: {
    title: "Contact Epione Health | Pharmaceutical Distribution & Healthcare Solutions",
    description:
      "Reach our team for pharmaceutical supply, distribution partnerships, government procurement, and healthcare solutions originating from Kenya.",
    type: "website",
    locale: "en_KE",
  },
  keywords: [
    "pharmaceutical distribution Kenya",
    "pharmaceutical supplier East Africa",
    "healthcare distribution Nairobi",
    "WHO-GMP pharmaceutical Kenya",
    "pharmaceutical partner Africa",
    "government procurement Kenya",
    "NGO pharmaceutical supply",
    "Epione Health contact",
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Epione Health",
  description:
    "Pharmaceutical distribution and healthcare solutions company based in Nairobi, Kenya, supplying to East Africa and global markets.",
  url: "https://epionehealth.com",
  logo: "https://epionehealth.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mombasa Road, Industrial Area",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+254-700-123-456",
      contactType: "customer service",
      areaServed: ["KE", "UG", "TZ", "RW", "ET"],
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+254-700-911-000",
      contactType: "emergency",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  ],
  email: "info@epionehealth.com",
  sameAs: [
    "https://linkedin.com/company/epionehealth",
    "https://twitter.com/epionehealth",
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main id="main-content">
        {/* 1. Hero */}
        <ContactHero />

        {/* 2. Quick Contact Cards — overlapping hero bottom */}
        <div className="bg-[#F8FCFD] pb-16">
          <QuickContactCards />
        </div>

        {/* 3 & 4. Contact Form + Contact Information (two-column) */}
        <ContactForm />

        {/* 5. Interactive Location */}
        <LocationSection />

        {/* 6. Departments */}
        <DepartmentsGrid />

        {/* 7. Global Partnership */}
        <GlobalPartnershipSection />

        {/* 8. FAQ */}
        <FaqAccordion />

        {/* 9. Trust Section */}
        <TrustSection />

        {/* 10. CTA */}
        <ContactCTA />
      </main>
    </>
  );
}