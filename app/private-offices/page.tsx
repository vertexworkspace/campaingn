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
  title: "Private Offices in Mangalore | Vertex Workspace",
  description:
    "Upgrade your work experience with private offices at Vertex Workspace, Mangalore. Enjoy privacy, flexibility, and modern amenities designed for professionals and teams.",
  openGraph: {
    title: "Private Offices in Mangalore | Vertex Workspace",
    description:
      "Discover premium private office spaces at Vertex Workspace, Mangalore. Flexible terms, professional environments, and top-tier amenities for teams and individuals.",
    url: "https://vertex-megamind.vercel.app/private-offices", // ✅ correct page URL
    siteName: "Vertex Workspace",
    images: [
      {
        url: "https://vertex-megamind.vercel.app/icon.png", // ✅ absolute public image path
        width: 1200,
        height: 630,
        alt: "Vertex Private Offices Mangalore",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Offices in Mangalore | Vertex Workspace",
    description:
      "Experience the ideal private office setup in Mangalore with Vertex Workspace — modern, fully furnished, and designed for focus and growth.",
    images: ["https://vertex-megamind.vercel.app/icon.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icon.png" }],
    shortcut: [{ url: "/icon.png" }],
  },
  metadataBase: new URL("https://vertex-megamind.vercel.app"),
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-white ">
      <section id="overview">
        <HeroSection title=" Private Offices" title2="That Mean Business" description="Vertex Private Offices give you privacy, productivity, and prestige all under one roof."/>
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

      <section id="locations" >
        <PrivateOffices buttontext="Get a Quote" title="Our Private Offices" description="Empower your business with an office space in the most sought after locations across the city." />
      </section>

      <section >
        <GetAQuoteSection  dorpdownText="Location"/>
      </section>
      <Footer />
    </main>
  );
}
