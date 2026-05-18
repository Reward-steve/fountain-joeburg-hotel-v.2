"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wifi, Tv, Coffee, Wind, Utensils, Waves } from "lucide-react";
import { Button } from "../Button";
import Link from "next/link";

// Centralized icon map to safely resolve string keys to components
const AMENITY_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  wifi: Wifi,
  tv: Tv,
  coffee: Coffee,
  wind: Wind,
  utensils: Utensils,
  waves: Waves,
};

export type SuiteDataType = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
};

type SuiteCardProps = {
  suite: SuiteDataType;
  index: number;
};

export function SuiteCard({ suite, index }: SuiteCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-6 sm:gap-12 lg:gap-16 items-center w-full`}
    >
      {/* Media Element Block Wrapper */}
      <div className="w-full lg:w-1/2">
        <div className="bg-white/[0.02] border border-white/5 p-2 sm:p-3 rounded-[2rem] sm:rounded-[2.5rem] relative group w-full unique-isolation">
          <div className="overflow-hidden rounded-[1.6rem] sm:rounded-[2rem] aspect-[4/3] sm:aspect-[3/2] relative isolation-blur">
            <Image
              src={suite.image}
              alt={`${suite.name} premium interior architectural view`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              priority={index === 0}
            />
          </div>
          {/* Responsive Floating Badge Frame - Desktop Only */}
          <div className="hidden sm:block absolute top-6 right-6 bg-[#0F1115]/90 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-gold font-display text-xs tracking-widest uppercase font-medium shadow-xl">
            ZAR {suite.price} / Night
          </div>
        </div>
      </div>

      {/* Meta Narrative Content Block */}
      <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8 px-1 sm:px-4">
        {/* Mobile Price Display Layer */}
        <div className="flex justify-between items-baseline sm:hidden">
          <span className="text-gold font-display text-sm tracking-wider uppercase font-semibold">
            ZAR {suite.price} / Night
          </span>
        </div>

        <div className="space-y-2 sm:space-y-4">
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            {suite.name}
          </h2>
          <div className="h-px w-16 bg-gold/40" />
        </div>

        <p className="text-white/60 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
          {suite.description}
        </p>

        {/* Dynamic Amenity Loops */}
        <div className="flex flex-wrap gap-3 pt-2">
          {suite.amenities.map((key) => {
            const IconComponent = AMENITY_ICONS[key];
            if (!IconComponent) return null;
            return (
              <div
                key={key}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/5 bg-white/[0.01] flex items-center justify-center text-gold/80 hover:text-gold hover:border-gold/30 transition-colors"
                title={`Includes ${key}`}
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            );
          })}
        </div>

        {/* Tactile Native Touch CTA Buttons Group */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 sm:pt-6">
          <Link href={"/suites"} className="w-full sm:w-auto">
            <Button size={"lg"}>Reserve Suite</Button>
          </Link>
          <Link href={"/gallery"} className="w-full sm:w-auto">
            <Button size={"lg"} variant="secondary">
              View Gallery
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
