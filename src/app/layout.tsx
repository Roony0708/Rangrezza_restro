import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-subheading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rangrezza.com"),
  title: "Rangrezza | Where Flavours Paint Memories",
  description:
    "Premium dining, grand banquets, and electrifying nightlife. Experience the finest Indian hospitality at Rangrezza.",
  keywords: [
    "Rangrezza",
    "Fine dining",
    "Banquet hall",
    "Restrobar",
    "Indian restaurant",
    "Luxury dining",
    "Event venue",
    "New Delhi restaurant",
  ],
  openGraph: {
    title: "Rangrezza | Where Flavours Paint Memories",
    description:
      "Premium dining, grand banquets, and electrifying nightlife. Experience the finest Indian hospitality.",
    images: ["/images/side-banner-1.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-dark text-ivory antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
