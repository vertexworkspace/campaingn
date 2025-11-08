// app/page.tsx
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PrivateOfficeFeatures from "@/components/sections/PrivateOfficeFeatures";
import WhyChooseVertex from "@/components/sections/WhyChooseVertex";
import TestimonialSection from "@/components/sections/TestimonialSection";
import QuoteBanner from "@/components/sections/QuoteBanner";
import PrivateOffices from "@/components/sections/PrivateOffices";
import GetAQuoteSection from "@/components/sections/GetAQuoteSection";
import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/sections/Footer";
import { AmenitiesModal } from "@/components/AmenitiesModal";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white ">
      {/* 👇 Each section has an ID that matches the "to" in Navbar navLinks */}
      <section id="overview">
        <HeroSection title=" Private Offices" title2="That Mean Business" description="Vertex Private Offices give you privacy, productivity, and prestige all under one roof."/>
      </section>

      <section>
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

      <section id="pricing">
        <PrivateOffices title="Our Private Offices" description="Empower your business with an office space in the most sought after locations across the city." />
      </section>

      <section id="locations">
        <GetAQuoteSection />
      </section>
      <Footer />
    </main>
  );
}
