import { ReactNode } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Script from "next/script";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Vertex Solutions | Coworking & Office Space in Mangalore",
  description:
    "Explore Vertex Solutions in Mangalore — premium coworking spaces and private offices designed for productivity, collaboration, and growth. Book your workspace today!",
  openGraph: {
    title: "Vertex Solutions | Coworking & Office Space in Mangalore",
    description:
      "Discover flexible coworking plans, private cabins, and meeting spaces at Vertex Solutions, Mangalore. Modern amenities for startups, freelancers, and teams.",
    url: "https://vertex-megamind.vercel.app/vertex-solutions",
    siteName: "Vertex Workspace",
    images: [
      {
        url: "https://vertex-megamind.vercel.app/icon.png",
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
    description: "Flexible coworking and private office solutions in Mangalore by Vertex — designed to help professionals and teams thrive.",
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
export default function PrivateOfficesLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager (GTM-5QH6FHRK) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5QH6FHRK');
          `}
        </Script>
      </head>

      <body className="min-h-screen flex flex-col">
        {/* ✅ GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5QH6FHRK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Layout structure */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
