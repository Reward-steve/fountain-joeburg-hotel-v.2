"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Wine, UtensilsCrossed, Music } from "lucide-react";

type VenueDataType = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  hours: string;
  ctaText: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const VENUES: VenueDataType[] = [
  {
    id: "obsidian",
    name: "Obsidian",
    tagline: "Modern African Fusion",
    description:
      "Our signature dining room featuring a live-fire kitchen and a curated cellar of the continent's finest vintages.",
    // FIXED: Swapped to a highly cached, permanent asset ID
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200",
    hours: "Dinner Only: 18:00 — 23:00",
    ctaText: "Reserve Table",
    Icon: Wine,
  },
  {
    id: "skybar",
    name: "The Sky Bar",
    tagline: "Cocktails & Atmosphere",
    description:
      "Suspended over the city lights, The Sky Bar offers bespoke mixology and smooth jazz in a weightless environment.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200",
    hours: "Daily: 12:00 — Late",
    ctaText: "View Drink Menu",
    Icon: Music,
  },
];

export default function DiningPage() {
  return (
    <div className="bg-[#0F1115] text-white pt-32 pb-24 px-4 sm:px-6 min-h-screen antialiased selection:bg-gold/30">
      <div className="max-w-7xl mx-auto">
        {/* Culinary Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 sm:mb-24 space-y-4"
        >
          <p className="text-gold font-display uppercase tracking-[0.3em] text-[10px] sm:text-xs font-semibold">
            Culinary Excellence
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none">
            Fountain{" "}
            <span className="italic font-light text-gold/90">
              Lounge & Dining
            </span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            From sunrise breakfasts to midnight cocktails, our venues offer a
            masterclass in global gastronomy with a uniquely African soul.
          </p>
        </motion.div>

        {/* Venues Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {VENUES.map((venue, index) => (
            <VenueCard key={venue.id} venue={venue} index={index} />
          ))}
        </div>

        {/* Chef Testimonial Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="py-24 sm:py-32 text-center"
        >
          <UtensilsCrossed
            size={40}
            className="mx-auto mb-8 sm:mb-12 text-gold/20"
          />
          <h3 className="font-serif text-2xl sm:text-4xl italic text-gold/80 max-w-3xl mx-auto leading-snug px-2">
            "Food is our language, and excellence is the story we tell every
            evening at Fountain Joeburg."
          </h3>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mt-6 font-semibold">
            — Chef Emmanuel Ade, Executive Chef
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function VenueCard({ venue, index }: { venue: VenueDataType; index: number }) {
  const { Icon } = venue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group cursor-pointer w-full"
    >
      <div className="bg-white/[0.02] border border-white/5 p-3 sm:p-4 rounded-[2.5rem] sm:rounded-[3rem] space-y-6 sm:space-y-8 h-full flex flex-col hover:border-white/10 transition-colors duration-500 transform-gpu unique-isolation">
        {/* Dynamic Image Canvas Context */}
        <div className="overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] aspect-[16/10] relative bg-white/[0.01]">
          <Image
            src={venue.image}
            alt={`${venue.name} fine establishment restaurant view`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover scale-100 group-hover:scale-103 transition-transform duration-1000 ease-out will-change-transform"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 pointer-events-none" />
        </div>

        {/* Informative Card Copy Context Block */}
        <div className="px-2 sm:px-4 pb-2 sm:pb-4 space-y-6 flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl sm:text-3xl text-white tracking-tight leading-none group-hover:text-gold transition-colors duration-300">
                  {venue.name}
                </h2>
                <p className="text-gold font-display uppercase tracking-widest text-[9px] sm:text-[10px] font-semibold">
                  {venue.tagline}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-gold/60">
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              {venue.description}
            </p>
          </div>

          {/* Interactive Footer Row Block */}
          <div className="pt-5 border-t border-white/5 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between sm:items-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/30 italic">
              {venue.hours}
            </span>
            <button
              type="button"
              className="text-gold inline-flex items-center gap-1.5 font-display uppercase tracking-widest text-[10px] font-bold group-hover:translate-x-1 transition-transform duration-300 self-start sm:self-auto cursor-pointer"
              style={{ touchAction: "manipulation" }}
            >
              {venue.ctaText}{" "}
              <ArrowUpRight size={13} className="text-gold/80" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
