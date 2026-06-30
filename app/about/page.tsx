import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { MissionVisionValues } from "@/components/about/MissionVisonValues";
import { ImpactStatistics } from "@/components/about/ImpactStatistics";
import { WhyChooseEpione } from "@/components/about/WhyChooseEpione";
import { LeadershipTeam } from "@/components/about/LeadershipTeam";
import { SupplyNetwork } from "@/components/about/SupplyNetwork";
import { QualityCompliance } from "@/components/about/QualityCompliance";
import { PartnerLogos } from "@/components/about/PartnerLogos";
import { CorporateResponsibility } from "@/components/about/CorporateResponsibility";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Epione Health | Trusted Pharmaceutical Distribution Partner",
  description:
    "Learn about Epione Health, our mission, healthcare partnerships, pharmaceutical distribution network, and commitment to quality healthcare solutions across East Africa.",
  openGraph: {
    title: "About Epione Health | Trusted Pharmaceutical Distribution Partner",
    description:
      "Learn about Epione Health, our mission, healthcare partnerships, pharmaceutical distribution network, and commitment to quality healthcare solutions across East Africa.",
    type: "website",
    locale: "en_KE",
  },
};

// Organization schema for rich search results.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Epione Health",
  description:
    "Kenya-based pharmaceutical wholesaler and distributor connecting manufacturers to hospitals, pharmacies, and healthcare systems across East Africa and beyond.",
  url: "https://www.epione-health.com",
  logo: "https://www.epione-health.com/images/logos/epione-logo.svg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [
    "https://www.linkedin.com/company/epione-health",
    "https://twitter.com/epionehealth",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <h1 className="sr-only">About Epione Health</h1>
        <AboutHero />
        <WhoWeAre />
        <JourneyTimeline />
        <MissionVisionValues />
        <ImpactStatistics />
        <WhyChooseEpione />
        <LeadershipTeam />
        <SupplyNetwork />
        <QualityCompliance />
        <PartnerLogos />
        <CorporateResponsibility />
        <AboutCTA />
      </main>
    </>
  );
}