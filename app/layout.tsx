import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Vertex Workspace Mangalore",
  description:
    "Discover flexible office solutions in Mangalore. Get a special offer on private offices, coworking, & virtual offices at Vertex. Book your tour today!",
  openGraph: {
    title: "Special Offer on Office Space | Vertex Workspace Mangalore",
    description: "Get a special offer on flexible office solutions at Vertex.",
    url: "https://vertexworkspace.com/campaign",
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
  other: {
    'google-site-verification': 'MBxzS9dFloW6hLFYDnoMQwd2vVowLx2jB4iPSatfjZ4', 
  },
  metadataBase: new URL("https://bookings.vertexworkspace.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="MBxzS9dFloW6hLFYDnoMQwd2vVowLx2jB4iPSatfjZ4" />
      </head>
      <body className={notoSans.className}>
        <SpeedInsights />
        <Analytics />
        <SmoothScroll> {children} </SmoothScroll>
      </body>
    </html>
  );
}
