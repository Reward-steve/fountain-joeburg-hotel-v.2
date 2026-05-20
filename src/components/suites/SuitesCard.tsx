"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Wifi,
  Tv,
  Coffee,
  Wind,
  Utensils,
  Waves,
  ArrowRight,
} from "lucide-react";
import { Button } from "../Button";
import Link from "next/link";

// Centralized icon map to safely resolve string keys to components with semantic text labels
const AMENITY_REGISTRY: Record<
  string,
  { component: React.ComponentType<{ className?: string }>; label: string }
> = {
  wifi: { component: Wifi, label: "High-Speed Wi-Fi" },
  tv: { component: Tv, label: "4K Smart TV" },
  coffee: { component: Coffee, label: "Nespresso Machine" },
  wind: { component: Wind, label: "Climate Control" },
  utensils: { component: Utensils, label: "Fine In-Room Dining" },
  waves: { component: Waves, label: "Private Spa Pool" },
};

export type SuiteDataType = {
  id: string;
  name: string;
  description: string;
  price: string; // Expected format like "12,500"
  image: string;
  amenities: string[];
};

type SuiteCardProps = {
  suite: SuiteDataType;
  index: number;
};

export function SuiteCard({ suite, index }: SuiteCardProps) {
  const isEven = index % 2 === 0;

  // Split prices nicely into currency structures for sophisticated editorial text layout
  const rawPrice = suite.price.replace(/[^\d,]/g, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: 1,
        ease: [0.25, 1, 0.5, 1], // Custom fluid smooth-out curve
      }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 sm:gap-14 lg:gap-20 items-center w-full py-8 border-b border-white/[0.03] last:border-0`}
    >
      {/* MEDIA CONTAINER BLOCK WITH HOVER MASK MECHANICS */}
      <div className="w-full lg:w-1/2 group cursor-pointer">
        <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 p-2 sm:p-3 rounded-[2.2rem] relative w-full shadow-2xl transition-all duration-700 group-hover:border-gold/20 group-hover:shadow-gold/[0.02]">
          <div className="overflow-hidden rounded-[1.8rem] aspect-[4/3] sm:aspect-[3/2] relative isolation-blur z-0">
            <Image
              src={suite.image}
              alt={`${suite.name} premium interior architectural layout`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-[1.04] transition-transform duration-[1.8s] cubic-bezier(0.25, 1, 0.5, 1)"
              priority={index === 0}
            />

            {/* Cinematic Overlay Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/50 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
          </div>

          {/* Floating Premium Price Card - Desktop Screen */}
          <div className="hidden sm:flex absolute -bottom-4 right-8 items-center space-x-1.5 bg-[#14171c]/95 backdrop-blur-xl border border-white/10 px-6 py-3.5 rounded-xl shadow-2xl group-hover:border-gold/30 transition-colors duration-500">
            <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-white/40 block mt-1">
              ZAR
            </span>
            <span className="text-gold font-serif text-lg font-light tracking-wide">
              {rawPrice}
            </span>
            <span className="text-[11px] font-light text-white/40 pl-1">
              / night
            </span>
          </div>
        </div>
      </div>

      {/* METADATA CONTENT OVERLAY */}
      <div className="w-full lg:w-1/2 space-y-5 sm:space-y-7 lg:space-y-9 px-1 sm:px-4">
        {/* Mobile View Price Tag Layout */}
        <div className="flex items-center space-x-1 sm:hidden">
          <span className="text-[9px] uppercase font-bold tracking-widest text-white/40 mt-0.5">
            ZAR
          </span>
          <span className="text-gold font-serif text-xl font-light tracking-wider">
            {rawPrice}
          </span>
          <span className="text-xs font-light text-white/40 pl-1">/ night</span>
        </div>

        {/* Header Module */}
        <div className="space-y-3 sm:space-y-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold/80 block">
            Exclusive Sanctuary {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15]">
            {suite.name}
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-gold via-gold/30 to-transparent" />
        </div>

        {/* Description Body text */}
        <p className="text-white/60 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl">
          {suite.description}
        </p>

        {/* Premium Interactive Amenity Grid */}
        <div className="flex flex-wrap gap-4 pt-1">
          {suite.amenities.map((key) => {
            const data = AMENITY_REGISTRY[key];
            if (!data) return null;
            const Icon = data.component;

            return (
              <motion.div
                key={key}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-white/10 bg-white/[0.01] flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/40 hover:bg-gold/[0.02] transition-colors relative group/icon cursor-pointer"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />

                {/* Micro-Tooltip popover box */}
                <span className="absolute -top-9 scale-95 opacity-0 group-hover/icon:opacity-100 group-hover/icon:scale-100 transition-all duration-300 pointer-events-none bg-[#14171c] border border-white/10 text-white/90 whitespace-nowrap text-[10px] tracking-wider uppercase font-medium px-2.5 py-1.5 rounded shadow-xl">
                  {data.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Action Trigger Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-3 sm:pt-5 w-full">
          <Link href="/suites" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-[#fff0cc] text-[#0F1115] transition-all duration-300 shadow-xl shadow-gold/5 flex items-center justify-center gap-2 group/btn"
            >
              <span>Reserve Suite</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link href="/gallery" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-transparent text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              View Gallery
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
