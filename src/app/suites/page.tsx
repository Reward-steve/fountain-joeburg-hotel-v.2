"use client";

import {
  SuiteCard,
  type SuiteDataType,
} from "@/src/components/suites/SuitesCard";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const SUITES_DATA: SuiteDataType[] = [
  {
    id: "executive",
    name: "Executive Suite",
    description:
      "Perfect for the business traveler who demands excellence. Features a spacious work area and panoramic city views.",
    price: "4,500",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&h=800&auto=format&fit=crop",
    amenities: ["wifi", "tv", "coffee", "wind"],
  },
  {
    id: "fountain-view",
    name: "Fountain View Suite",
    description:
      "Overlooking the signature illuminated gardens. A haven of relaxation with a deep soaking tub and marble finishes.",
    price: "6,200",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&h=800&auto=format&fit=crop",
    amenities: ["wifi", "waves", "utensils", "wind"],
  },
  {
    id: "presidential",
    name: "Presidential Sky Villa",
    description:
      "The ultimate expression of luxury. A private floor featuring a dedicated butler, cinematic windows, and bespoke art pieces.",
    price: "12,500",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&h=800&auto=format&fit=crop",

    amenities: ["wifi", "waves", "utensils", "wind", "tv", "coffee"],
  },
];

export default function SuitesPage() {
  return (
    <div className="bg-[#0F1115] text-white pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 min-h-screen antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Dynamic Structural Route Backtrack Header Link block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 sm:mb-20"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-gold transition-colors font-display uppercase tracking-widest text-[10px] sm:text-xs mb-6 sm:mb-8 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>
          <p className="text-gold font-display uppercase tracking-[0.25em] text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3">
            Accommodation
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            The Signature{" "}
            <span className="italic font-light text-gold/90">Suites</span>
          </h1>
        </motion.div>

        {/* Clean Suite Cards Component Pipeline Map */}
        <div className="space-y-16 sm:space-y-28 lg:space-y-36">
          {SUITES_DATA.map((suite, index) => (
            <SuiteCard key={suite.id} suite={suite} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
