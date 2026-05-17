"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BookingWidget from "@/src/components/BookingWidget";
import { ArrowUpRight, Anchor, Waves, Wind } from "lucide-react";
import { Button } from "../components/Button";
import { BranchFeature } from "../components/home/BranchFeature";
import FinalCTA from "../components/home/finalCTA";
import SuitesSwiper from "../components/home/SuitesSwiper";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white overflow-x-hidden antialiased selection:bg-gold/30">
      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-24 lg:py-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920"
            alt="Fountain Joeburg Luxury Hotel Exterior"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1115]/10 via-[#0F1115]/80 to-[#0F1115] lg:bg-gradient-to-r lg:from-[#0F1115] lg:via-[#0F1115]/70 lg:to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full flex-1 text-left flex flex-col items-start justify-center">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 40 }}
              transition={{ duration: 0.8 }}
              className="w-px bg-gold mb-4 hidden sm:block"
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-display uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs font-semibold mb-4 sm:mb-6"
            >
              The Architecture of Serenity
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[1.05] mb-6 sm:mb-10"
            >
              Elevated <br />
              Living
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-lg text-white/70 max-w-md font-light leading-relaxed mb-8 sm:mb-12"
            >
              Experience an urban sanctuary in the heart of Johannesburg. Where
              architectural precision meets the warmth of South African
              hospitality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-8 sm:gap-12 border-t border-white/10 pt-6 w-full max-w-md lg:w-auto lg:border-none lg:pt-0"
            >
              <div className="flex flex-col">
                <span className="text-[9px] sm:text-[10px] uppercase text-white/40 tracking-widest mb-1">
                  Signature Suite
                </span>
                <span className="text-base sm:text-xl font-serif italic text-gold">
                  Presidential View
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] sm:text-[10px] uppercase text-white/40 tracking-widest mb-1">
                  Starting from
                </span>
                <span className="text-base sm:text-xl font-serif italic text-white">
                  R 12,500{" "}
                  <span className="text-xs text-white/60">/ night</span>
                </span>
              </div>
            </motion.div>
          </div>

          <div className="w-full flex-1 max-w-md lg:max-w-none">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight">
              The Architecture <br />
              <span className="italic font-light text-gold/80">
                of Serenity
              </span>
            </h2>
            <div className="h-px w-16 sm:w-24 bg-gold"></div>
            <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-lg">
              Fountain Joeburg isn't just a hotel; it's a sanctuary carved from
              the urban pulse of Johannesburg. We've combined avant-garde
              architecture with a deep respect for tranquility, creating a space
              where the city's energy meets the stillness of water.
            </p>
            <div className="grid grid-cols-3 gap-4 py-4 max-w-md border-t border-b border-white/5 sm:border-none sm:py-6 sm:flex sm:gap-12">
              <div className="text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-serif text-gold">
                  42
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/40">
                  Luxury Suites
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-serif text-gold">
                  3
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/40">
                  Fine Dining
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-serif text-gold">
                  24/7
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/40">
                  Concierge
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 px-2 sm:px-0"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-white/5 border border-white/10 p-2 sm:p-3">
              <div className="relative w-full h-full overflow-hidden rounded-xl sm:rounded-[1.5rem]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
                  alt="Modern architectural detailing at Fountain Joeburg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-2 sm:-left-10 bg-[#0F1115]/95 backdrop-blur-md border border-white/10 p-5 sm:p-8 rounded-xl sm:rounded-2xl max-w-[240px] sm:max-w-xs z-10 shadow-2xl">
              <p className="font-serif italic text-base sm:text-xl text-gold">
                "A masterpiece of modern hospitality."
              </p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/40 mt-2">
                — Architectural Digest
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Suites Preview */}
      <section className="py-20 sm:py-32 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 flex justify-between items-end">
          <div>
            <p className="text-gold font-display uppercase tracking-widest text-[10px] sm:text-xs mb-2 sm:mb-4">
              Accommodation
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl">Curated Comfort</h2>
          </div>
          <Link
            href="/suites"
            className="hidden sm:flex items-center gap-2 text-gold group font-display uppercase tracking-widest text-xs tracking-wider"
          >
            View All Suites
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>
        </div>

        <SuitesSwiper />

        {/* Mobile-only visible Link fallback below swiper */}
        <div className="px-4 mt-4 sm:hidden">
          <Link
            href="/suites"
            className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-gold font-display uppercase tracking-widest text-[10px] font-semibold"
          >
            View All Suites
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* Dining Preview */}
      <section className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Changed aspect-video wrapper behavior to flex-col on mobile to perfectly retain dynamic context sizes */}
          <div className="relative flex flex-col lg:aspect-video rounded-2xl sm:rounded-[3rem] overflow-hidden group border border-white/10 bg-[#16191E]">
            <div className="relative w-full h-[240px] sm:h-[400px] lg:absolute lg:inset-0 lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop"
                alt="Fine Dining Experience at Obsidian Restaurant"
                fill
                className="object-cover sm:group-hover:scale-103 transition-transform duration-1000"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent lg:hidden" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/40 to-transparent hidden lg:block"></div>

            <div className="p-6 sm:p-12 lg:p-20 space-y-4 sm:space-y-6 max-w-2xl lg:absolute lg:bottom-0 lg:left-0 z-10 flex flex-col items-start">
              <p className="text-gold font-display uppercase tracking-widest text-[10px] sm:text-xs">
                The Culinary Journey
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-7xl leading-tight">
                A Symphony <br className="hidden sm:block" />
                <span className="italic font-light text-white/90">
                  of Flavors
                </span>
              </h2>
              <p className="text-white/70 font-light leading-relaxed text-sm sm:text-base">
                From the golden hues of the Fountain Lounge to the intimate
                shadows of Obsidian, our dining experiences are crafted to
                provoke the senses and celebrate local excellence.
              </p>
              <Link
                href="/dining"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-4 py-3.5 sm:py-4 px-8 sm:px-10 bg-gold text-[#0F1115] rounded-xl sm:rounded-full font-display uppercase tracking-widest text-xs sm:text-sm font-bold shadow-xl shadow-gold/10 active:scale-95 sm:hover:bg-opacity-90 transition-all mt-2"
              >
                Explore The Menu
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <BranchFeature
            icon={<Anchor className="text-gold" size={24} />}
            title="Signature Service"
            subTitle="Experience our intuitive white-glove concierge available around the clock."
          />
          <BranchFeature
            icon={<Waves className="text-gold" size={24} />}
            title="Aquatic Stillness"
            subTitle="Our 360-degree infinity pool overlooks the vibrant pulse of Sandton."
          />
          <BranchFeature
            icon={<Wind className="text-gold" size={24} />}
            title="Pure Atmosphere"
            subTitle="Equipped with state-of-the-art oxygen-enriched therapy in every suite."
          />
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
