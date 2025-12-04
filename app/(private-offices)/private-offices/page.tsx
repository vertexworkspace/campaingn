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
    text: "Our experience at Vertex Workspace has been excellent. We honestly enjoy working here. The place has a modern, clean vibe, and it even gives a bit of a Bangalore tech-park feel, which the team loves. What we appreciate the most is the support from the Vertex team. Whenever XTMX needs anything, Vertex responds quickly and makes sure things get sorted without any hassle. The facilities are well-maintained, and the way the team interacts with us truly makes us feel comfortable and looked after. Overall, our experience with Vertex Workspace has been wonderful, and we're pleased with the service you provide. Thank you for always being so helpful and welcoming.",
    name: "Akhilesh K",
    role: "Operational Head & Partner",
    company: "XTRANSMATRIX CONSULTING SERVICES PVT LTD",
    image: "/images/testimonials/1.png",
    logo: "https://ik.imagekit.io/lrxrnuqog/Logos/XTMX_Logo.png",
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
        <TestimonialSection testimonials={testimonials} />
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
