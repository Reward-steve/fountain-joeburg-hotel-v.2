"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Waves, Heart, Leaf, Sun, Thermometer, Droplets } from "lucide-react";
import { Button } from "../../components/Button";

// Centralized icon rendering blueprint map to safely keep data free of JSX nodes
const AMENITY_ICONS = {
  thermometer: Thermometer,
  droplets: Droplets,
  sun: Sun,
  leaf: Leaf,
};

type AmenityItemType = {
  iconKey: keyof typeof AMENITY_ICONS;
  name: string;
  desc: string;
};

const AMENITIES: AmenityItemType[] = [
  {
    iconKey: "thermometer",
    name: "Steam Sanctuary",
    desc: "Thermal therapy infused with organic eucalyptus.",
  },
  {
    iconKey: "droplets",
    name: "Hydrotherapy",
    desc: "Multi-sensory rain showers and tailored plunge pools.",
  },
  {
    iconKey: "sun",
    name: "Solar Terrace",
    desc: "Private tanning deck framing sweeping infinity views.",
  },
  {
    iconKey: "leaf",
    name: "Herbal Garden",
    desc: "Hand-picked organic ingredients used in custom treatments.",
  },
];

export default function WellnessPage() {
  return (
    <div className="bg-[#0F1115] text-white min-h-screen pt-32 pb-24 antialiased selection:bg-gold/30">
      {/* --- HERO SECTION --- */}
      <section className="px-4 sm:px-6 mb-24 sm:mb-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Narrative Content Columns */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-gold font-display uppercase tracking-[0.3em] text-[10px] sm:text-xs font-semibold">
                Sanctuary of Calm
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight">
                Wellness <br />{" "}
                <span className="italic font-light text-gold/90">& Spa</span>
              </h1>
            </div>

            <p className="text-white/60 font-light leading-relaxed text-sm sm:text-base lg:text-lg max-w-lg">
              Reclaim your equilibrium in a space designed for total
              disconnection. Our treatments combine ancient African wisdom with
              modern sonic therapy to harmonize body and mind.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                textSize="sm"
                className="rounded-xl"
              >
                Book Treatment
              </Button>
              <button
                type="button"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-white/10 flex items-center justify-center text-white/80 hover:text-gold hover:border-gold/30 hover:bg-white/[0.02] active:scale-[0.96] transition-all cursor-pointer"
                style={{ touchAction: "manipulation" }}
                aria-label="Explore acoustic soundscapes"
              >
                <Waves className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Media Interactive Framing */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-none mx-auto unique-isolation">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-[4/5] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-white/[0.02] border border-white/5 p-2.5 sm:p-3"
              >
                <div className="relative w-full h-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.8rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200"
                    alt="Serene luxury spa treatment room context"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating Status Utility Panel Badge */}
              <div className="absolute top-1/2 -left-6 transform -translate-y-10 bg-[#0F1115]/90 backdrop-blur-md border border-white/10 p-5 px-6 rounded-2xl hidden xl:flex items-center gap-4 shadow-2xl animate-smooth-float">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Heart size={18} fill="currentColor" className="opacity-80" />
                </div>
                <div>
                  <p className="text-xs font-display tracking-widest uppercase font-bold text-white">
                    Pure Serenity
                  </p>
                  <p className="text-[10px] text-white/40 font-light mt-0.5">
                    Atmospheric Harmonization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GRID OF AMENITIES --- */}
      <section className="bg-white/[0.01] border-y border-white/5 py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {AMENITIES.map((item, i) => {
              const IconComponent = AMENITY_ICONS[item.iconKey];
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-white/[0.02] border border-white/5 p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] space-y-6 hover:border-white/10 hover:bg-white/[0.03] duration-300 ease-out transition-all cursor-pointer group transform-gpu"
                  style={{ touchAction: "manipulation" }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-105 duration-300 ease-out transition-transform">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- MID SECTION WIDE INFINITY POOL BANNER --- */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden group w-full bg-white/[0.01] border border-white/5"
        >
          <Image
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1920"
            alt="Panoramic architectural view of the luxury infinity pool"
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-103 transition-transform duration-[4s] ease-out will-change-transform"
          />
          {/* Cinematic Vignette Shader Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/90 via-[#0F1115]/30 to-black/20 flex items-center justify-center p-6 text-center" />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 space-y-3 sm:space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-tight max-w-xl">
              The Infinity Pool
            </h2>
            <p className="text-white/80 font-light text-xs sm:text-sm md:text-base lg:text-lg max-w-md sm:max-w-lg leading-relaxed">
              A weightless experience suspended cleanly over the panoramic
              Johannes市 skyline.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
