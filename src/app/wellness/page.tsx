"use client";

import { motion } from "motion/react";
import { Waves, Heart, Leaf, Sun, Thermometer, Droplets } from "lucide-react";
 

export default function WellnessPage() {
  const AMENITIES = [
    { icon: <Thermometer size={24} />, name: "Steam Sanctuary", desc: "Thermal therapy infused with eucalyptus." },
    { icon: <Droplets size={24} />, name: "Hydrotherapy", desc: "Multi-sensory rain showers and plunge pools." },
    { icon: <Sun size={24} />, name: "Solar Terrace", desc: "Private tanning deck with infinity views." },
    { icon: <Leaf size={24} />, name: "Herbal Garden", desc: "Organic ingredients used in our treatments." },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <p className="text-gold font-display uppercase tracking-[0.3em] text-xs">Sanctuary of Calm</p>
            <h1 className="font-serif text-5xl md:text-8xl leading-tight">Wellness <br /> <span className="italic font-light">& Spa</span></h1>
            <p className="text-white/60 font-light leading-relaxed text-lg max-w-lg">
              Reclaim your equilibrium in a space designed for total disconnection. Our treatments combine ancient African wisdom with modern sonic therapy to harmonize body and mind.
            </p>
            <div className="flex gap-4">
              <button className="px-10 py-5 bg-gold text-charcoal rounded-full font-display uppercase tracking-widest font-bold hover:bg-gold-light transition-all shadow-xl shadow-gold/20">
                Book Treatment
              </button>
              <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <Waves />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] rounded-[4rem] overflow-hidden glass-card p-4 translate-y-10"
            >
              <img
                src="https://images.unsplash.com/photo-1544161515-4af6b1d8e1c6?q=80&w=1200&h=1500&auto=format&fit=crop"
                alt="Spa Sanctuary"
                className="w-full h-full object-cover rounded-[3rem]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute top-1/2 -left-10 glass-panel p-8 rounded-2xl hidden xl:block animate-pulse">
               <Heart className="text-gold mb-4" />
               <p className="text-sm font-display tracking-widest uppercase">Pure Serenity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Amenities */}
      <section className="bg-white/5 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AMENITIES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-[2.5rem] space-y-6 hover:-translate-y-2 transition-transform cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl">{item.name}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid Section Pool */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1510076857177-74700760beaa?q=80&w=1920&h=800&auto=format&fit=crop"
            alt="Infinity Pool"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
             <div className="space-y-6 max-w-2xl">
               <h2 className="font-serif text-4xl md:text-6xl text-white">The Infinity Pool</h2>
               <p className="text-white/80 font-light text-lg">A weightless experience overlooking the Johannesburg skyline.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
