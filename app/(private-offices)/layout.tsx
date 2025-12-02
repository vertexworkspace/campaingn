import { ReactNode } from "react";
import Script from "next/script";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bookings.vertexworkspace.com"),

  title: "Private Offices in Mangalore | Vertex Workspace",
  description:
    "Upgrade your work experience with private offices at Vertex Workspace, Mangalore.",

  openGraph: {
    title: "Private Offices in Mangalore | Vertex Workspace",
    description:
      "Discover premium private office spaces at Vertex Workspace, Mangalore.",
    url: "https://bookings.vertexworkspace.com/private-offices",
    siteName: "Vertex Workspace",
    images: [
      {
        url: "https://bookings.vertexworkspace.com/form-og.png",
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
      "Experience the ideal private office setup in Mangalore.",
    images: ["https://bookings.vertexworkspace.com/form-og.png"],
  },
};

export default function PrivateOfficesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-private-offices" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id=GTM-5QH6FHRK'+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5QH6FHRK');
        `}
      </Script>

      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5QH6FHRK"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
