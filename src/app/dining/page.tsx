"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Wine, UtensilsCrossed, Music, Coffee } from "lucide-react";

export default function DiningPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <p className="text-gold font-display uppercase tracking-[0.3em] text-xs mb-4">Culinary Excellence</p>
          <h1 className="font-serif text-5xl md:text-8xl mb-8">Fountain <span className="italic font-light">Lounge & Dining</span></h1>
          <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            From sunrise breakfasts to midnight cocktails, our venues offer a masterclass in global gastronomy with a uniquely African soul.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Main Restaurant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="glass-card p-4 rounded-[3rem] space-y-8 h-full flex flex-col">
              <div className="overflow-hidden rounded-[2.5rem] aspect-[16/10] relative">
                <img
                  src="https://images.unsplash.com/photo-1550966841-3ee7adac1661?q=80&w=1200&h=800&auto=format&fit=crop"
                  alt="Obsidian Dining"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <div className="px-4 pb-4 space-y-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-serif text-3xl mb-1">Obsidian</h2>
                    <p className="text-gold font-display uppercase tracking-widest text-[10px]">Modern African Fusion</p>
                  </div>
                  <Wine className="text-gold/50" />
                </div>
                <p className="text-white/60 font-light leading-relaxed flex-1">
                  Our signature dining room featuring a live-fire kitchen and a curated cellar of the continent's finest vintages.
                </p>
                <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-white/30 italic">Dinner Only: 18:00 — 23:00</span>
                  <button className="text-gold flex items-center gap-2 font-display uppercase tracking-widest text-[10px] hover:translate-x-1 transition-transform">
                    Reserve Table <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lounge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group cursor-pointer"
          >
            <div className="glass-card p-4 rounded-[3rem] space-y-8 h-full flex flex-col">
              <div className="overflow-hidden rounded-[2.5rem] aspect-[16/10] relative">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&h=800&auto=format&fit=crop"
                  alt="Atmospheric Lounge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <div className="px-4 pb-4 space-y-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-serif text-3xl mb-1">The Sky Bar</h2>
                    <p className="text-gold font-display uppercase tracking-widest text-[10px]">Cocktails & Atmosphere</p>
                  </div>
                  <Music className="text-gold/50" />
                </div>
                <p className="text-white/60 font-light leading-relaxed flex-1">
                  Suspended over the city lights, The Sky Bar offers bespoke mixology and smooth jazz in a weightless environment.
                </p>
                <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-white/30 italic">Daily: 12:00 — Late</span>
                  <button className="text-gold flex items-center gap-2 font-display uppercase tracking-widest text-[10px] hover:translate-x-1 transition-transform">
                    View Drink Menu <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Quote */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="py-32 text-center"
        >
          <UtensilsCrossed size={48} className="mx-auto mb-12 text-gold/20" />
          <h3 className="font-serif text-4xl italic text-gold/80 max-w-3xl mx-auto leading-tight">
            "Food is our language, and excellence is the story we tell every evening at Fountain Joeburg."
          </h3>
          <p className="text-xs uppercase tracking-widest text-white/40 mt-6">— Chef Emmanuel Ade, Executive Chef</p>
        </motion.div>
      </div>
    </div>
  );
}
