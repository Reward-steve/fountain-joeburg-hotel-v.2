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
      "Our signature dining room featuring a live-fire kitchen and a curated cellar of the continent's finest culinary vintages.",
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
      "Suspended over the city lights, The Sky Bar offers bespoke mixology and smooth acoustic jazz in a weightless environment.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200",
    hours: "Daily: 12:00 — Late",
    ctaText: "View Drink Menu",
    Icon: Music,
  },
];

export default function DiningPage() {
  return (
    <div className="bg-[#0F1115] text-white pt-36 pb-28 px-4 sm:px-6 min-h-screen antialiased selection:bg-gold/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* CULINARY INTENTIONAL HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-24 sm:mb-28 space-y-5"
        >
          <span className="text-gold font-display uppercase tracking-[0.4em] text-[10px] sm:text-xs font-semibold block">
            Culinary Excellence
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.1] text-white font-light">
            Fountain <br className="sm:hidden" />
            <span className="italic font-extralight text-gold/90 pl-1 sm:pl-3">
              Lounge & Dining
            </span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed pt-2">
            From sunrise breakfasts to midnight cocktails, our venues offer a
            masterclass in global gastronomy with a uniquely African soul.
          </p>
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto pt-2" />
        </motion.div>

        {/* VENUES GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-stretch">
          {VENUES.map((venue, index) => (
            <VenueCard key={venue.id} venue={venue} index={index} />
          ))}
        </div>

        {/* CHEF TESTIMONIAL FEATURE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="pt-4 sm:py-36 text-center border-t border-white/[0.03] mt-24 sm:mt-32 max-w-4xl mx-auto"
        >
          <div className="w-14 h-14 rounded-full bg-gold/[0.03] border border-gold/10 flex items-center justify-center mx-auto mb-8 sm:mb-10 shadow-lg">
            <UtensilsCrossed size={22} className="text-gold/60 stroke-[1.2]" />
          </div>
          <blockquote className="font-serif text-2xl sm:text-4xl italic text-white/90 max-w-3xl mx-auto leading-snug px-4 font-light">
            "Food is our language, and excellence is the story we tell every
            evening at Fountain Joeburg."
          </blockquote>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold font-medium mt-8">
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="group cursor-pointer w-full flex"
    >
      <div className="bg-[#13151a]/40 border border-white/5 p-3 sm:p-4.5 rounded-[2.5rem] sm:rounded-[3.2rem] space-y-6 sm:space-y-8 h-full flex flex-col hover:border-gold/20 hover:bg-[#161920]/60 transition-all duration-500 transform-gpu unique-isolation shadow-2xl w-full will-change-transform">
        {/* DYNAMIC IMAGE CANVAS CONTEXT */}
        <div className="overflow-hidden rounded-[1.8rem] sm:rounded-[2.4rem] aspect-[16/10] relative bg-white/[0.01] shadow-inner z-0 isolation-blur will-change-transform">
          <Image
            src={venue.image}
            alt={`${venue.name} fine establishment restaurant view`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover scale-100 group-hover:scale-[1.04] transition-transform duration-[2s] ease-out will-change-transform"
          />
          {/* Subtle Dynamic Overlay Shader Mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/50 via-[#0F1115]/10 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
        </div>

        {/* INFORMATIVE CARD COPY CONTEXT BLOCK */}
        <div className="px-2 sm:px-4 pb-2 sm:pb-4 space-y-5 flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1.5">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-wide group-hover:text-gold transition-colors duration-300">
                  {venue.name}
                </h2>
                <p className="text-gold font-display uppercase tracking-[0.25em] text-[9px] sm:text-[10px] font-semibold">
                  {venue.tagline}
                </p>
              </div>
              <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/40 group-hover:text-gold group-hover:border-gold/30 group-hover:bg-gold/[0.02] transition-all duration-500 shadow-md">
                <Icon className="w-4 h-4 stroke-[1.5] transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>

            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed max-w-xl transition-colors duration-300 group-hover:text-white/70">
              {venue.description}
            </p>
          </div>

          {/* INTERACTIVE FOOTER ROW BLOCK */}
          <div className="pt-5 border-t border-white/5 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center mt-auto">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/30 font-medium">
              {venue.hours}
            </span>
            <button
              type="button"
              className="text-gold inline-flex items-center gap-1.5 font-display uppercase tracking-[0.2em] text-[10px] font-bold group-hover:text-[#fff0cc] transition-colors duration-300 self-start sm:self-auto cursor-pointer relative"
              style={{ touchAction: "manipulation" }}
            >
              <span className="relative z-10">{venue.ctaText}</span>
              <ArrowUpRight
                size={14}
                className="text-gold/80 transition-transform duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
