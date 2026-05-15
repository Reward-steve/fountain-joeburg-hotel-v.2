"use client";

import { motion } from "motion/react";
import { ArrowLeft, Wifi, Tv, Coffee, Wind, Utensils, Waves } from "lucide-react";
import Link from "next/link";

const SUITES = [
  {
    id: "executive",
    name: "Executive Suite",
    description: "Perfect for the business traveler who demands excellence. Features a spacious work area and panoramic city views.",
    price: "4,500",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&h=800&auto=format&fit=crop",
    amenities: [<Wifi key="w" />, <Tv key="t" />, <Coffee key="c" />, <Wind key="wi" />]
  },
  {
    id: "fountain-view",
    name: "Fountain View Suite",
    description: "Overlooking the signature illuminated gardens. A haven of relaxation with a deep soaking tub and marble finishes.",
    price: "6,200",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&h=800&auto=format&fit=crop",
    amenities: [<Wifi key="w" />, <Waves key="wa" />, <Utensils key="u" />, <Wind key="wi" />]
  },
  {
    id: "presidential",
    name: "Presidential Sky Villa",
    description: "The ultimate expression of luxury. A private floor featuring a dedicated butler, cinematic windows, and bespoke art pieces.",
    price: "12,500",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&h=800&auto=format&fit=crop",
    amenities: [<Wifi key="w" />, <Waves key="wa" />, <Utensils key="u" />, <Wind key="wi" />, <Tv key="t" />, <Coffee key="c" />]
  }
];

export default function SuitesPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors font-display uppercase tracking-widest text-xs mb-8">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <p className="text-gold font-display uppercase tracking-[0.3em] text-xs mb-4">Accommodation</p>
          <h1 className="font-serif text-5xl md:text-7xl">The Signature <span className="italic font-light">Suites</span></h1>
        </motion.div>

        <div className="space-y-24">
          {SUITES.map((suite, i) => (
            <motion.div
              key={suite.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="glass-card p-3 rounded-[2.5rem] relative group">
                  <div className="overflow-hidden rounded-[2rem] aspect-[3/2]">
                    <img
                      src={suite.image}
                      alt={suite.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute top-8 right-8 glass-panel px-6 py-3 rounded-full text-gold font-display text-sm tracking-widest uppercase">
                    ZAR {suite.price} / Night
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl">{suite.name}</h2>
                <div className="h-px w-20 bg-gold/50"></div>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  {suite.description}
                </p>
                <div className="flex gap-6 pb-4">
                  {suite.amenities.map((icon, idx) => (
                    <div key={idx} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gold/70">
                      {icon}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="px-10 py-4 bg-gold text-charcoal rounded-full font-display uppercase tracking-widest text-xs font-bold hover:bg-gold-light transition-all shadow-xl shadow-gold/20 flex-1">
                    Reserve Suite
                  </button>
                  <button className="px-10 py-4 border border-white/10 rounded-full font-display uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-charcoal transition-all flex-1">
                    View Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
