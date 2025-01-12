import { CTASection } from "@/components/globals/cta-section";
import { FeaturesSection } from "@/components/globals/features";
import { Footer } from "@/components/globals/footer";
import { HeroSection } from "@/components/globals/hero";
import { PricingSection } from "@/components/globals/pricing-section";
import { SiteHeader } from "@/components/globals/site-header";
import { TestimonialSection } from "@/components/globals/testimonial-section";
import React from "react";

const Page = () => {
  return (
    <div>
      <SiteHeader />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <CTASection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Page;
