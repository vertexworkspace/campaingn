import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add weights you use
  variable: "--font-noto-sans", // (optional) use as CSS variable
});

export const metadata: Metadata = {
  title: 'Special Offer on Office Space | Vertex Workspace Mangalore',
  description:
    'Discover flexible office solutions in Mangalore. Get a special offer on private offices, coworking, & virtual offices at Vertex. Book your tour today!',
  openGraph: {
    title: 'Special Offer on Office Space | Vertex Workspace Mangalore',
    description: 'Get a special offer on flexible office solutions at Vertex.',
    url: 'https://vertexworkspace.com/campaign',
    siteName: 'Vertex Workspace',
    images: [
      {
        url: 'https://vertexworkspace.com/your-campaign-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Special Offer on Office Space | Vertex Workspace Mangalore',
    description: 'Get a special offer on flexible office solutions at Vertex.',
    images: ['https://vertexworkspace.com/your-campaign-image.jpg'],
  },
  icons: {
    icon: '/Icons/icon.png', // ✅ main favicon
    shortcut: '/Icons/icon.png', // ✅ optional for older browsers
    apple: '/apple-touch-icon.png', // ✅ optional for iOS devices
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={notoSans.className}
      >
         <SpeedInsights />
         <Navbar />
        {children}
       
          
      </body>
    </html>
  );
}
