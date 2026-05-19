"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SuitesSwiper from "./SuitesSwiper";
import { fadeInUpVariant } from "../../constant/index";

export default function SuitesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-white/[0.02] to-transparent py-0 sm:py-16 lg:py-24">
      {/* TOP HEADER AREA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="mx-auto mb-8 flex max-w-7xl items-end justify-between px-4 sm:mb-14 sm:px-6 lg:px-8"
      >
        <div className="space-y-1">
          <motion.p
            variants={fadeInUpVariant}
            className="text-[10px] uppercase tracking-[0.35em] text-gold sm:text-xs"
          >
            Accommodation
          </motion.p>

          <motion.h2
            variants={fadeInUpVariant}
            className="font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl text-white"
          >
            Curated Comfort
          </motion.h2>
        </div>

        <motion.div variants={fadeInUpVariant} className="hidden sm:block">
          <Link
            href="/suites"
            className="group relative flex items-center gap-2 pb-1 text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:text-white"
          >
            <span>View All Suites</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
          </Link>
        </motion.div>
      </motion.div>

      {/* SWIPER CONTAINER */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl overflow-visible pl-4 sm:pl-6 lg:pl-8 mask-gradient-right"
      >
        <SuitesSwiper />
      </motion.div>

      {/* MOBILE CALL-TO-ACTION */}
      <div className="px-4 sm:hidden">
        <Link
          href="/suites"
          className="relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur-md transition-transform active:scale-[0.98] shadow-lg"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          <span className="relative z-10">View All Suites</span>
          <ArrowUpRight size={14} className="relative z-10" />
        </Link>
      </div>
    </section>
  );
}
