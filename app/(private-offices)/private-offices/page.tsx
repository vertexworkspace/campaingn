// app/page.tsx
import HeroSection from "@/components/shared/HeroSection";
import PrivateOfficeFeatures from "@/components/privateOffices/PrivateOfficeFeatures";
import WhyChooseVertex from "@/components/privateOffices/WhyChooseVertex";
import TestimonialSection from "@/components/shared/TestimonialSection";
import QuoteBanner from "@/components/shared/QuoteBanner";
import PrivateOffices from "@/components/shared/PrivateOffices";
import GetAQuoteSection from "@/components/shared/GetAQuoteSection";



export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-white ">
      <section >
        <HeroSection
          title=" Private Offices"
          title2="That Mean Business"
          description="Vertex Private Offices give you privacy, productivity, and prestige all under one roof."
        />
      </section>

      <section id="overview" >
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
