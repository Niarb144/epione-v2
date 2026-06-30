import Hero from "@/components/home/Hero";
import { PartnerLogos } from "@/components/about/PartnerLogos";
import PartnerStrip from "@/components/home/PartnerStrip";
import About from "@/components/home/AnimatedStats";
import ProductCategories from "@/components/home/ProductCategories";
import WhyPartner from "@/components/home/WhyPartner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Certifications from "@/components/home/Certifications";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/layout/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <About />
      <ProductCategories />
      <WhyPartner />
      <FeaturedProducts />
      <Certifications />
      <Testimonials />
      <CallToAction
        eyebrow="Get started"
        title="Ready to simplify your pharmaceutical supply chain?"
        description="Talk to our team about catalogue access, pricing, and onboarding as a wholesale partner."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "View products", href: "/products" }}
      />
    </>
  );
}