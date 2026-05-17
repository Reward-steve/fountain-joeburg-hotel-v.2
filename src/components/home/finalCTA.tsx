"use client";

import Link from "next/link";
import { Button } from "../Button";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-32 lg:py-40 px-4 sm:px-6 text-center relative overflow-hidden bg-[#0F1115]">
      {/* Top Section Geometric Border Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 sm:w-1/2 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-10 relative z-10">
        {/* Dynamic Contextual Copy Header */}
        <p className="text-gold font-display uppercase tracking-[0.2em] text-[10px] sm:text-xs font-semibold">
          Reserve Your Unforgettable Experience
        </p>

        <h2 className="font-serif text-4xl sm:text-7xl lg:text-8xl tracking-tighter leading-[1.1] text-white">
          Your Urban <br />
          <span className="italic font-light text-gold/90">Sanctuary</span>
        </h2>

        {/* Integrated Tap Button System Anchor Points */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-4 max-w-xs mx-auto sm:max-w-none">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="primary" size="lg">
              Book Your Stay
            </Button>
          </Link>

          <Link href="/suites" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg">
              Explore Suites
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
