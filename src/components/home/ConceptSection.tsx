"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CountUpNumber } from "./CountUpNumber";
import { fadeInUpVariant } from "../../constant/index";

export default function ConceptSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="grid grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-20">
        {/* TEXT & DATA BLOCK */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="order-2 space-y-6 sm:space-y-8 lg:order-1 lg:col-span-6"
        >
          <motion.h2
            variants={fadeInUpVariant}
            className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl text-white"
          >
            The Architecture <br />
            <span className="font-light italic bg-gradient-to-r from-gold to-[#fff1cc] bg-clip-text text-transparent">
              of Serenity
            </span>
          </motion.h2>

          <motion.div
            variants={{
              hidden: { width: 0 },
              visible: {
                width: "3rem",
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="h-px bg-gold sm:w-16"
          />

          <motion.p
            variants={fadeInUpVariant}
            className="max-w-lg text-sm font-light leading-relaxed text-white/60 sm:text-base"
          >
            Fountain Joeburg isn&apos;t just a hotel; it&apos;s a sanctuary
            carved from the urban pulse of Johannesburg. We&apos;ve combined
            avant-garde architecture with tranquility, creating a space where
            the city&apos;s energy meets the stillness of water.
          </motion.p>

          {/* STATS INTERACTION PANEL */}
          <motion.div
            variants={fadeInUpVariant}
            className="grid grid-cols-3 gap-4 border-y border-white/10 py-5 sm:flex sm:gap-12 sm:py-6"
          >
            <div className="text-center sm:text-left">
              <span className="mb-1 block font-serif text-2xl font-medium text-gold sm:text-4xl">
                <CountUpNumber target={42} />
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] font-medium text-white/40">
                Luxury Suites
              </span>
            </div>

            <div className="text-center sm:text-left">
              <span className="mb-1 block font-serif text-2xl font-medium text-gold sm:text-4xl">
                <CountUpNumber target={3} />
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] font-medium text-white/40">
                Fine Dining
              </span>
            </div>

            <div className="text-center sm:text-left">
              <div className="mb-1 flex justify-center sm:justify-start items-baseline font-serif text-2xl font-medium text-gold sm:text-4xl">
                <span>24/7</span>
              </div>
              <span className="block text-[9px] uppercase tracking-[0.25em] font-medium text-white/40">
                Concierge
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* CINEMATIC IMAGE AND BADGE HOLDER */}
        <div className="relative order-1 lg:order-2 lg:col-span-6 pb-6 lg:pb-0">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1.5 shadow-2xl sm:rounded-2xl sm:p-2.5"
          >
            <div className="relative h-full w-full overflow-hidden rounded-lg sm:rounded-xl group">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
                alt="Modern architectural detailing at Fountain Joeburg"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-[8s] ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* REVIEWS BADGE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="absolute -bottom-4 left-4 z-10 max-w-[210px] rounded-lg border border-white/10 bg-[#0F1115]/95 p-4 shadow-2xl backdrop-blur-md sm:-bottom-6 sm:-left-6 sm:max-w-xs sm:rounded-xl sm:p-6"
          >
            <p className="font-serif text-xs italic leading-relaxed text-gold sm:text-base">
              &ldquo;A masterpiece of modern hospitality.&rdquo;
            </p>
            <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.22em] text-white/40">
              — Architectural Digest
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
