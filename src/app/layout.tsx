import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

// Explicitly configuring variable names matching our font-family design system mapping
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

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
      {/* FIXED: Attached font variables to the body alongside antialiasing rules to guarantee safe inheritance across all child paths */}
      <body className="bg-midnight text-white font-sans antialiased overflow-x-hidden min-h-screen flex flex-col selection:bg-gold/30">
        <Navbar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
