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
    <main className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* 👇 Each section has an ID that matches the "to" in Navbar navLinks */}
      <section id="overview">
        <HeroSection />
      </section>

      <section id="amenities">
        <PrivateOfficeFeatures />
      </section>

      <section>
        <WhyChooseVertex />
      </section>

      <section>
        <TestimonialSection />
      </section>

      <section>
        <QuoteBanner />
      </section>

      <section id="pricing">
        <PrivateOffices />
      </section>

      <section id="locations">
        <GetAQuoteSection />
      </section>

      <Footer />
    </main>
  );
}
