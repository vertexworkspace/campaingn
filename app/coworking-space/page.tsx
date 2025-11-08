import SolutionsSection from "@/components/coworkingSpaces/SolutionsSection";
import WorkspacesSection from "@/components/coworkingSpaces/WorkspacesSection";
import Footer from "@/components/sections/Footer";
import GetAQuoteSection from "@/components/sections/GetAQuoteSection";
import HeroSection from "@/components/sections/HeroSection";
import PrivateOffices from "@/components/sections/PrivateOffices";
import QuoteBanner from "@/components/sections/QuoteBanner";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertex Coworking Space Mangalore",
  description:
    "Find the perfect coworking space in Mangalore with Vertex. Flexible plans, modern amenities, and a vibrant community designed for productivity and growth.",
  openGraph: {
    title: "Vertex Coworking Space Mangalore | Flexible Shared Offices",
    description:
      "Discover flexible coworking solutions at Vertex Workspace in Mangalore. Modern, collaborative, and fully equipped for teams and individuals.",
    url: "https://vertexworkspace.com/coworking-space",
    siteName: "Vertex Workspace",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Vertex Coworking Space Mangalore",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertex Coworking Space Mangalore | Flexible Shared Offices",
    description: "Join Vertex Coworking Space in Mangalore — modern, collaborative, and productivity-focused environments.",
    images: ["/icon.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icon.png" }],
    shortcut: [{ url: "/icon.png" }],
  },
  metadataBase: new URL("https://vertexworkspace.com"),
};

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white ">
      {/* 👇 Each section has an ID that matches the "to" in Navbar navLinks */}
      <section id="overviewsco">
        <HeroSection
          title="Where Work"
          title2="Meets Community"
          description="Vertex offers flexible, inspiring work environments that fuel collaboration and growth."
        />
      </section>

      <section>
        <SolutionsSection />
      </section>

      <section id="amenitiesco">
        <WorkspacesSection />
      </section>

      <section>
        <TestimonialSection />
      </section>

      <section>
        <QuoteBanner type="secondary" />
      </section>

      <section id="pricingsco">
        <PrivateOffices
          buttontext="Book Now"
          title="Our Vertex Workspaces"
          description="Empower your business with an office space in the most sought after locations across the city."
        />
      </section>

      <section id="locationsco">
        <GetAQuoteSection dorpdownText="Solution" />
      </section>
      <Footer />
    </main>
  );
};

export default page;
