import { ReactNode } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bookings.vertexworkspace.com"),

  title: "Vertex Solutions | Coworking & Office Space in Mangalore",
  description:
    "Explore Vertex Solutions in Mangalore — premium coworking spaces and private offices designed for productivity, collaboration, and growth. Book your workspace today!",

  openGraph: {
    title: "Vertex Solutions | Coworking & Office Space in Mangalore",
    description:
      "Discover flexible coworking plans, private cabins, and meeting spaces at Vertex Solutions, Mangalore. Modern amenities for startups, freelancers, and teams.",
    url: "https://bookings.vertexworkspace.com/vertex-solutions",
    siteName: "Vertex Workspace",
    images: [
      {
        url: "https://bookings.vertexworkspace.com/form-og.png",
        width: 1200,
        height: 630,
        alt: "Vertex Solutions Mangalore",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vertex Solutions | Coworking & Office Space in Mangalore",
    description:
      "Flexible coworking and private office solutions in Mangalore by Vertex — designed to help professionals and teams thrive.",
    images: ["https://bookings.vertexworkspace.com/form-og.png"],
  }
};


export default function VertexSolutionsLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager (HEAD) - GTM-58WQ787C */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-58WQ787C');
          `}
        </Script>
      </head>

      <body className="min-h-screen flex flex-col">
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58WQ787C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Layout Components */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
