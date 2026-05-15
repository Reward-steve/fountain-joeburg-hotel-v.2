import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni" });

export const metadata: Metadata = {
  title: "Fountain Joeburg | Geometric Urban Luxury",
  description:
    "Experience the architecture of serenity at Johannesburg's premier luxury destination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bodoni.variable}`}>
      <body className="bg-midnight text-white font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
