"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0F1115] px-4 py-24 text-center sm:px-6 sm:py-36 lg:py-48">
      {/* CINEMATIC ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury Architecture Ambient Background"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.06] mix-blend-luminosity scale-105 transition-transform duration-[20s] ease-out animate-[zoom_30s_infinite_alternate]"
          priority
        />
        {/* Deep, premium radial gradient to pin focus directly to the text elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1115] via-transparent to-[#0F1115]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0F1115_75%)]" />
      </div>

      {/* Top Section Geometric Border Accents */}
      <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* MOTION CONTENT BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-5xl space-y-6 sm:space-y-10"
      >
        {/* Dynamic Contextual Copy Header */}
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:text-xs">
          Reserve Your Unforgettable Experience
        </p>

        {/* Scaled High-Impact Typography */}
        <h2 className="font-serif text-5xl leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Your Urban <br />
          <span className="bg-gradient-to-r from-gold via-gold/90 to-gold/70 bg-clip-text font-light italic text-transparent">
            Sanctuary
          </span>
        </h2>

        {/* Integrated Tap Button System Anchor Points */}
        <div className="mx-auto flex max-w-xs flex-col items-center justify-center gap-4 pt-6 sm:max-w-none sm:flex-row">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full min-w-[200px] rounded-sm tracking-[0.15em] text-[11px] font-semibold uppercase transition-transform active:scale-[0.98]"
            >
              Book Your Stay
            </Button>
          </Link>

          <Link href="/suites" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full min-w-[200px] rounded-sm tracking-[0.15em] text-[11px] font-semibold uppercase transition-transform active:scale-[0.98] border-white/20 text-white hover:bg-white/5"
            >
              Explore Suites
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
