import SolutionsSection from "@/components/coworkingSpaces/SolutionsSection";
import WorkspacesSection from "@/components/coworkingSpaces/WorkspacesSection";
import GetAQuoteSection from "@/components/shared/GetAQuoteSection";
import HeroSection from "@/components/shared/HeroSection";
import PrivateOffices from "@/components/shared/PrivateOffices";
import QuoteBanner from "@/components/shared/QuoteBanner";
import TestimonialSection from "@/components/shared/TestimonialSection";
import { Metadata } from "next";
 const testimonials = [
    {
      id: 1,
      text: "Simply Fantastic and a great work space for the corporates with all their needs available under one roof.",
      name: "Raja Raj",
      role: "Director · Productions",
      image: "/images/testimonials/1.png",
      logo: "/images/testimonials/svg/exito.svg",
    },
    {
      id: 2,
      text: "Convenient location, clean office and very helpful staff make this an ideal office experience.",
      name: "Anand Krishnan",
      role: "Creative Strategist",
      image: "/images/testimonials/2.webp",
      logo: "/images/testimonials/svg/exito.svg",
    },
    {
      id: 3,
      text: "Very good workspace with all facilities and great support from staff.",
      name: "Sujeesh M",
      role: "Co-founder · Pixel Bay",
      image: "/images/testimonials/2.webp",
      logo: "/images/testimonials/svg/exito.svg",
    },
     {
      id: 2,
      text: "I’ve used their workspaces during multiple stays in Mangalore great locations, 24/7 access, and very helpful staff keep me coming back.",
      name: "Derick Dsouza",
      role: "Creative Strategist",
      image: "/images/testimonials/2.webp",
      logo: "/images/testimonials/svg/exito.svg",
    },
    {
      id: 3,
      text: "My experience with Vertex workspace is 5 star. Good parking space, professional meeting space and 5 star staffs. Thank you.",
      name: "Mithun Raj",
      role: "Co-founder · Pixel Bay",
      image: "/images/testimonials/2.webp",
      logo: "/images/testimonials/svg/exito.svg",
    },
  ];
const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white ">
      {/* 👇 Each section has an ID that matches the "to" in Navbar navLinks */}
      <section>
        <HeroSection
          title="Where Work"
          title2="Meets Community"
          description="Vertex offers flexible, inspiring work environments that fuel collaboration and growth."
        />
      </section>

      <section id="overview">
        <SolutionsSection />
      </section>

      <section id="amenities">
        <WorkspacesSection />
      </section>

      <section>
        <TestimonialSection testimonials={testimonials} solutions={true}/>
      </section>

      <section id="pricing">
        <QuoteBanner type="secondary" />
      </section>

      <section id="locations">
        <PrivateOffices
          buttontext="Book Now"
          title="Our Vertex Workspaces"
          description="Empower your business with an office space in the most sought after locations across the city."
        />
      </section>

      <section>
        <GetAQuoteSection dorpdownText="Solution" />
      </section>
    </main>
  );
};

export default page;
