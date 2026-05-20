"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Waves,
  Heart,
  Leaf,
  Sun,
  Thermometer,
  Droplets,
  Calendar,
} from "lucide-react";
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
  const containerRef = useRef<HTMLDivElement>(null);

  // Custom parallax scroll hook binds for luxury container smooth elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bannerImageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={containerRef}
      className="bg-[#0F1115] text-white min-h-screen pt-32 pb-24 antialiased selection:bg-gold/30 overflow-x-hidden"
    >
      {/* --- HERO SECTION --- */}
      <section className="px-4 sm:px-6 mb-28 sm:mb-36 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-24 items-center">
          {/* Narrative Content Columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="w-full lg:w-1/2 space-y-6 sm:space-y-10 order-2 lg:order-1"
          >
            <div className="space-y-3">
              <span className="text-gold font-display uppercase tracking-[0.4em] text-[10px] sm:text-xs font-semibold block">
                Sanctuary of Calm
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-white font-light">
                Wellness <br />
                <span className="italic font-extralight text-gold/90 pl-2 sm:pl-4">
                  & Spa Experience
                </span>
              </h1>
            </div>

            <p className="text-white/60 font-light leading-relaxed text-base lg:text-lg max-w-xl">
              Reclaim your equilibrium in a space designed for total
              disconnection. Our treatments combine ancient African wisdom with
              modern sonic therapy to harmonize body and mind.
            </p>

            <div className="flex items-center gap-5 pt-2">
              <Button
                variant="primary"
                size="lg"
                textSize="sm"
                className="rounded-xl px-8 bg-gold hover:bg-[#fff0cc] text-[#0F1115] font-medium tracking-wide transition-all duration-300 shadow-xl shadow-gold/5 flex items-center gap-2 group"
              >
                <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Book Treatment</span>
              </Button>

              <button
                type="button"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-white/10 flex items-center justify-center text-white/80 hover:text-gold hover:border-gold/30 hover:bg-white/[0.03] active:scale-[0.95] transition-all cursor-pointer group relative"
                style={{ touchAction: "manipulation" }}
                aria-label="Explore acoustic soundscapes"
              >
                <Waves className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
                <span className="absolute -bottom-8 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all text-[9px] uppercase tracking-widest text-gold whitespace-nowrap pointer-events-none">
                  Soundscapes
                </span>
              </button>
            </div>
          </motion.div>

          {/* Media Interactive Framing with Parallax */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-none mx-auto unique-isolation">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-[4/5] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-white/[0.02] border border-white/5 p-2.5 sm:p-4 shadow-2xl group relative will-change-transform"
              >
                <motion.div
                  style={{ y: heroImageY }}
                  className="relative w-full h-[115%] -top-[10%] overflow-hidden rounded-[1.8rem] sm:rounded-[2.8rem] will-change-transform"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200"
                    alt="Serene luxury spa treatment room context"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover scale-[1.05] group-hover:scale-[1.08] transition-transform duration-[2.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/40 via-transparent to-transparent opacity-80" />
                </motion.div>
              </motion.div>

              {/* Floating Status Utility Panel Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="absolute top-1/3 -left-8 bg-[#13161c]/95 backdrop-blur-xl border border-white/10 p-5 px-6 rounded-2xl hidden xl:flex items-center gap-4 shadow-2xl hover:border-gold/30 transition-colors duration-500 will-change-transform"
              >
                <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold shadow-inner">
                  <Heart
                    size={18}
                    fill="currentColor"
                    className="opacity-80 animate-pulse"
                  />
                </div>
                <div>
                  <p className="text-xs font-display tracking-widest uppercase font-bold text-white">
                    Pure Serenity
                  </p>
                  <p className="text-[10px] text-white/40 font-light mt-0.5 tracking-wide">
                    Atmospheric Harmonization Active
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GRID OF AMENITIES --- */}
      <section className="bg-gradient-to-b from-white/[0.01] to-transparent border-y border-white/5 py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {AMENITIES.map((item, i) => {
              const IconComponent = AMENITY_ICONS[item.iconKey];
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="bg-[#13151a]/50 border border-white/5 p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] space-y-6 hover:border-gold/20 hover:bg-[#161920] duration-500 ease-out transition-all cursor-pointer group transform-gpu will-change-transform shadow-xl"
                  style={{ touchAction: "manipulation" }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-gold/10 to-gold/[0.02] border border-gold/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:border-gold/30 duration-500 ease-out transition-all shadow-md">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                    )}
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-gold transition-colors duration-300 font-normal tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed transition-colors duration-300 group-hover:text-white/70">
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
      <section className="py-24 sm:py-36 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden group w-full bg-white/[0.01] border border-white/5 shadow-2xl will-change-transform"
        >
          <motion.div
            style={{ y: bannerImageY }}
            className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
          >
            <Image
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1920"
              alt="Panoramic architectural view of the luxury infinity pool"
              fill
              sizes="100vw"
              className="object-cover scale-[1.02] group-hover:scale-[1.05] transition-transform duration-[3.5s] ease-out"
            />
          </motion.div>

          {/* Cinematic Vignette Shader Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/95 via-[#0F1115]/40 to-black/30 transition-opacity duration-700 group-hover:opacity-90" />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 space-y-4 sm:space-y-5">
            <span className="text-gold font-display uppercase tracking-[0.4em] text-[9px] sm:text-xs font-semibold">
              Suspended Weightlessness
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-tight max-w-2xl font-light">
              The Infinity Pool
            </h2>
            <div className="h-[1px] w-12 bg-gold/40 my-1" />
            <p className="text-white/70 font-light text-xs sm:text-sm md:text-base lg:text-lg max-w-md sm:max-w-xl leading-relaxed">
              A sensory flight suspended cleanly over the panoramic Johannes
              skyline, tailored for architectural decompression.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
