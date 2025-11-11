// app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import PrivateOfficeFeatures from "@/components/sections/PrivateOfficeFeatures";
import WhyChooseVertex from "@/components/sections/WhyChooseVertex";
import TestimonialSection from "@/components/sections/TestimonialSection";
import QuoteBanner from "@/components/sections/QuoteBanner";
import PrivateOffices from "@/components/sections/PrivateOffices";
import GetAQuoteSection from "@/components/sections/GetAQuoteSection";

import { Metadata } from "next";


export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-white ">
      <section id="overview">
        <HeroSection
          title=" Private Offices"
          title2="That Mean Business"
          description="Vertex Private Offices give you privacy, productivity, and prestige all under one roof."
        />
      </section>

      <section id="pricing">
        <PrivateOfficeFeatures />
      </section>

      <section id="amenities">
        <WhyChooseVertex />
      </section>

      <section>
        <TestimonialSection />
      </section>

      <section>
        <QuoteBanner />
      </section>

      <section id="locations">
        <PrivateOffices
          buttontext="Get a Quote"
          title="Our Private Offices"
          description="Empower your business with an office space in the most sought after locations across the city."
        />
      </section>

      <section>
        <GetAQuoteSection dorpdownText="Location" />
      </section>
    </main>
  );
}
