// app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import PrivateOfficeFeatures from "@/components/sections/PrivateOfficeFeatures";
import WhyChooseVertex from "@/components/sections/WhyChooseVertex";
import TestimonialSection from "@/components/sections/TestimonialSection";
import QuoteBanner from "@/components/sections/QuoteBanner";
import PrivateOffices from "@/components/sections/PrivateOffices";
import GetAQuoteSection from "@/components/sections/GetAQuoteSection";
import Footer from "@/components/sections/Footer";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Vertex Workspace Mangalore",
  description:
    "Discover flexible office solutions in Mangalore. Get a special offer on private offices, coworking, & virtual offices at Vertex. Book your tour today!",
  openGraph: {
    title: "Special Offer on Office Space | Vertex Workspace Mangalore",
    description: "Get a special offer on flexible office solutions at Vertex.",
    url: "https://vertexworkspace.com/work-space",
    siteName: "Vertex Workspace",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Vertex Workspace Office Offer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Offer on Office Space | Vertex Workspace Mangalore",
    description: "Get a special offer on flexible office solutions at Vertex.",
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
export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-white ">
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
        <PrivateOffices buttontext="Get a Quote" title="Our Private Offices" description="Empower your business with an office space in the most sought after locations across the city." />
      </section>

      <section id="locations">
        <GetAQuoteSection  dorpdownText="Location"/>
      </section>
      <Footer />
    </main>
  );
}
