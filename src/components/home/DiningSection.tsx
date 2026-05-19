"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fadeInUpVariant } from "../../constant/index";

export default function DiningSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0F1115] shadow-2xl sm:rounded-2xl lg:min-h-[580px] lg:justify-center"
        >
          {/* CINEMATIC BACKGROUND IMAGE */}
          <div className="relative z-0 h-[260px] w-full overflow-hidden sm:h-[380px] lg:absolute lg:inset-0 lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop"
              alt="Fine Dining Experience at Obsidian Restaurant"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[10s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/40 to-transparent lg:hidden" />
          </div>

          {/* DESKTOP OVERLAYS */}
          <div className="absolute inset-0 z-10 hidden bg-gradient-to-r from-[#0F1115] via-[#0F1115]/85 to-transparent transition-opacity duration-700 lg:block group-hover:opacity-95" />
          <div className="absolute inset-0 z-10 hidden bg-gradient-to-t from-[#0F1115]/50 via-transparent to-transparent lg:block" />

          {/* CONTENT ENGINE BLOCK */}
          <div className="relative z-20 flex max-w-2xl flex-col items-start space-y-4 bg-[#0F1115] p-6 sm:space-y-5 sm:p-10 lg:bg-transparent lg:p-20">
            <motion.p
              variants={fadeInUpVariant}
              className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:text-xs"
            >
              The Culinary Journey
            </motion.p>

            <motion.h2
              variants={fadeInUpVariant}
              className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl text-white"
            >
              A Symphony <br className="hidden sm:block" />
              <span className="font-light italic bg-gradient-to-r from-white via-white/90 to-white/40 bg-clip-text text-transparent">
                of Flavors
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUpVariant}
              className="max-w-md text-sm font-light leading-relaxed text-white/60 sm:text-base"
            >
              From the golden hues of the Fountain Lounge to the intimate
              shadows of Obsidian, our dining experiences are crafted to provoke
              the senses and celebrate local excellence.
            </motion.p>

            <motion.div
              variants={fadeInUpVariant}
              className="w-full pt-2 sm:w-auto"
            >
              <Link
                href="/dining"
                className="group/btn relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-sm bg-gold px-8 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0a0e14] transition-transform duration-300 active:scale-[0.98] sm:w-auto shadow-xl"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover/btn:translate-x-full" />
                <span className="relative z-10">Explore The Menu</span>
                <ArrowUpRight
                  size={14}
                  className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
