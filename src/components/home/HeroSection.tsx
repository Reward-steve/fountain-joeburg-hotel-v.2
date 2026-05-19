"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BookingWidget from "@/src/components/BookingWidget";
import { InteractiveWidgetContainer } from "./Widget";
import { fadeInUpVariant, staggerContainer } from "../../constant/index";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0F1115] pt-20 sm:py-28 lg:py-0">
      {/* BACKGROUND & LIVE AMBIENT OVERLAYS */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920"
          alt="Fountain Joeburg Luxury Hotel Exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35 scale-105 animate-[subtle-zoom_20s_ease-out_infinite] alternate"
        />
        {/* Premium Radial Glow */}
        <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-gold/5 blur-[150px] pointer-events-none hidden lg:block" />

        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1115]/60 via-[#0F1115]/90 to-[#0F1115]" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#0F1115] via-[#0F1115]/75 to-transparent" />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* HERO LEFT (TEXT & METADATA) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex w-full flex-col items-start text-left lg:col-span-7"
          >
            <motion.p
              variants={fadeInUpVariant}
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-gold sm:text-xs"
            >
              The Architecture of Serenity
            </motion.p>

            <motion.h1
              variants={fadeInUpVariant}
              className="mb-5 font-serif text-5xl leading-[1.05] tracking-tight xs:text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] text-white"
            >
              Elevated <br />
              <span className="font-light italic bg-gradient-to-r from-gold via-[#ffebc2] to-white bg-clip-text text-transparent">
                Living
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUpVariant}
              className="mb-8 max-w-sm text-sm font-light leading-relaxed text-white/60 sm:max-w-md sm:text-base lg:text-lg"
            >
              Experience an urban sanctuary in the heart of Johannesburg. Where
              architectural precision meets the warmth of South African
              hospitality.
            </motion.p>

            {/* METADATA - Luxury Stats */}
            <motion.div
              variants={fadeInUpVariant}
              className="relative flex w-full max-w-sm flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-5 sm:max-w-md sm:gap-x-12 sm:pt-6"
            >
              <div className="absolute top-0 left-0 h-[1px] w-12 bg-gold" />

              <div className="flex flex-col">
                <span className="mb-1 text-[9px] font-medium uppercase tracking-[0.25em] text-white/40 sm:text-[10px]">
                  Signature Suite
                </span>
                <span className="font-serif text-base italic text-gold sm:text-xl">
                  Presidential View
                </span>
              </div>

              <div className="flex flex-col">
                <span className="mb-1 text-[9px] font-medium uppercase tracking-[0.25em] text-white/40 sm:text-[10px]">
                  Starting from
                </span>
                <span className="font-serif text-base italic text-white sm:text-xl">
                  R 12,500{" "}
                  <span className="text-xs not-italic font-sans font-light tracking-normal text-white/40 ml-1">
                    / night
                  </span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* HERO RIGHT (BOOKING WIDGET BLOCK) */}
          <div className="w-full lg:col-span-5 flex justify-center lg:justify-end">
            <InteractiveWidgetContainer>
              <BookingWidget />
            </InteractiveWidgetContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
