"use client";

import HeroSection from "@/src/components/home/HeroSection";
import ConceptSection from "@/src/components/home/ConceptSection";
import SuitesSection from "@/src/components/home/SuitesSection";
import DiningSection from "@/src/components/home/DiningSection";
import FeaturesSection from "@/src/components/home/FeaturesSection";
import FinalCTA from "../components/home/finalCTA";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0F1115] text-white antialiased selection:bg-gold/30">
      <HeroSection />

      <ConceptSection />

      <SuitesSection />

      <DiningSection />

      <FeaturesSection />

      <FinalCTA />
    </div>
  );
}
