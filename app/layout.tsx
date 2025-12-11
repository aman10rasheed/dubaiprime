import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dubai Prime Estate | Luxury Real Estate in Dubai",
    template: "%s | Dubai Prime Estate",
  },
  description:
    "Experience the finest luxury real estate in Dubai. Buy, sell, or rent premium properties in Palm Jumeirah, Downtown Dubai, Emirates Hills, and more.",
  keywords: [
    "Dubai real estate",
    "luxury properties Dubai",
    "Dubai villas",
    "Palm Jumeirah properties",
    "Downtown Dubai apartments",
    "Dubai property investment",
  ],
  authors: [{ name: "Dubai Prime Estate" }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://dubaiprimeestate.com",
    siteName: "Dubai Prime Estate",
    title: "Dubai Prime Estate | Luxury Real Estate in Dubai",
    description:
      "Experience the finest luxury real estate in Dubai. Buy, sell, or rent premium properties.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Prime Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Prime Estate | Luxury Real Estate in Dubai",
    description:
      "Experience the finest luxury real estate in Dubai. Buy, sell, or rent premium properties.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} font-body antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
