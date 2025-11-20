// app/page.tsx
import HeroSection from "@/components/shared/HeroSection";
import PrivateOfficeFeatures from "@/components/privateOffices/PrivateOfficeFeatures";
import WhyChooseVertex from "@/components/privateOffices/WhyChooseVertex";
import TestimonialSection from "@/components/shared/TestimonialSection";
import QuoteBanner from "@/components/shared/QuoteBanner";
import PrivateOffices from "@/components/shared/PrivateOffices";
import GetAQuoteSection from "@/components/shared/GetAQuoteSection";

 const testimonials = [
    {
      id: 1,
      text: "Clean, spacious coworking space with good WiFi and a small cafeteria. Limited four-wheeler parking, but overall a great place.",
      name: "Harsha Dinesh",
      role: "Director · Productions",
      image: "/images/testimonials/1.png",
      logo: "/images/testimonials/svg/exito.svg",
    },
    {
      id: 2,
      text: "Great ambiance, clean space, good pantry, and a reliable 4-seater cabin. Helpful staff and great value for money.",
      name: "Pranith Devadiga",
      role: "Creative Strategist",
      image: "/images/testimonials/2.webp",
      logo: "/images/testimonials/svg/exito.svg",
    },
    {
      id: 3,
      text: "I’ve worked here for months vibrant, comfortable, well-lit space with great amenities and fast internet. Friendly, supportive staff.",
      name: "Sowrabh Shetty",
      role: "Co-founder · Pixel Bay",
      image: "/images/testimonials/2.webp",
      logo: "/images/testimonials/svg/exito.svg",
    },
    {
      id: 2,
      text: "Vertex One offers flexible, well-equipped office spaces with fast WiFi and great amenities in a convenient Mangaluru location. Highly recommended.",
      name: "Pranith Devadiga", 
      role: "Creative Strategist",
      image: "/images/testimonials/2.webp",
      logo: "/images/testimonials/svg/exito.svg",
    },
    {
      id: 3,
      text: "Very nice place to have an office setup , clean and tidy. Multiple meeting rooms, parking facility Also spacious cafe with indoor games facility to hangout",
      name: "Mithesh shetty",
      role: "Co-founder · Pixel Bay",
      image: "/images/testimonials/2.webp",
      logo: "/images/testimonials/svg/exito.svg",
    },
  ];

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
        <TestimonialSection testimonials={testimonials}/>
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
