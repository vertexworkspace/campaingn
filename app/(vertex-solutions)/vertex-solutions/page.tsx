import SolutionsSection from "@/components/coworkingSpaces/SolutionsSection";
import WorkspacesSection from "@/components/coworkingSpaces/WorkspacesSection";
import GetAQuoteSection from "@/components/sections/GetAQuoteSection";
import HeroSection from "@/components/sections/HeroSection";
import PrivateOffices from "@/components/sections/PrivateOffices";
import QuoteBanner from "@/components/sections/QuoteBanner";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { Metadata } from "next";





const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white ">
      {/* 👇 Each section has an ID that matches the "to" in Navbar navLinks */}
      <section >
        <HeroSection
          title="Where Work"
          title2="Meets Community"
          description="Vertex offers flexible, inspiring work environments that fuel collaboration and growth."
        />
      </section>

      <section id="overview" >
        <SolutionsSection />
      </section>

      <section id="amenities">
        <WorkspacesSection />
      </section>

      <section >
        <TestimonialSection />
      </section>

      <section id="pricing">
        <QuoteBanner type="secondary" />
      </section>

      <section id="locations" >
        <PrivateOffices
          buttontext="Book Now"
          title="Our Vertex Workspaces"
          description="Empower your business with an office space in the most sought after locations across the city."
        />
      </section>

      <section >
        <GetAQuoteSection dorpdownText="Solution" />
      </section>
    
    </main>
  );
};

export default page;
