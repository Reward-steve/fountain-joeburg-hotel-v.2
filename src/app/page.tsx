"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import BookingWidget from "@/src/components/BookingWidget";
import { ArrowUpRight, Anchor, Waves, Wind } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1920"
            alt="Fountain Joeburg Hero"
            className="w-full h-full object-cover opacity-45 scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <motion.div 
               initial={{ height: 0 }}
               animate={{ height: 60 }}
               className="vertical-line"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-display uppercase tracking-[0.4em] text-xs font-semibold mb-6"
            >
              The Architecture of Serenity
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-10"
            >
              Elevated <br />
              Living
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/70 max-w-md font-light leading-relaxed mb-12"
            >
              Experience an urban sanctuary in the heart of Johannesburg. Where architectural precision meets the warmth of South African hospitality.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-12"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-white/40 tracking-widest mb-1">Signature Suite</span>
                <span className="text-xl font-serif italic">Presidential View</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-white/40 tracking-widest mb-1">Starting from</span>
                <span className="text-xl font-serif italic">R 12,500 <span className="text-xs">/ night</span></span>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full lg:w-auto">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              The Architecture <br />
              <span className="italic font-light text-gold/80">of Serenity</span>
            </h2>
            <div className="h-px w-24 bg-gold"></div>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-lg">
              Fountain Joeburg isn't just a hotel; it's a sanctuary carved from the urban pulse of Johannesburg. We've combined avant-garde architecture with a deep respect for tranquility, creating a space where the city's energy meets the stillness of water.
            </p>
            <div className="flex gap-12 py-6">
              <div className="text-center">
                <span className="block text-3xl font-serif text-gold">42</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Luxury Suites</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-gold">3</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Fine Dining</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-gold">24/7</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Concierge</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] glass-card p-3">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=1000&auto=format&fit=crop"
                alt="Architecture Detail"
                className="w-full h-full object-cover rounded-[1.5rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-2xl hidden md:block">
              <p className="font-serif italic text-xl text-gold">"A masterpiece of modern hospitality."</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 mt-2">— Architectural Digest</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Suites Preview */}
      <section className="py-32 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 flex justify-between items-end">
          <div>
            <p className="text-gold font-display uppercase tracking-widest text-xs mb-4">Accommodation</p>
            <h2 className="font-serif text-4xl md:text-5xl">Curated Comfort</h2>
          </div>
          <Link href="/suites" className="hidden md:flex items-center gap-2 text-gold group font-display uppercase tracking-widest text-xs">
            View All Suites
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="flex overflow-x-auto pb-12 gap-8 px-6 no-scrollbar snap-x">
          {[
            { name: "Executive Suite", price: "4,500", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&h=600&auto=format&fit=crop" },
            { name: "Fountain View", price: "6,200", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&h=600&auto=format&fit=crop" },
            { name: "Presidential Sky", price: "12,500", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&h=600&auto=format&fit=crop" },
          ].map((suite, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="min-w-[300px] md:min-w-[450px] snap-start"
            >
              <div className="glass-card p-3 rounded-[2rem] group cursor-pointer h-full flex flex-col">
                <div className="overflow-hidden rounded-[1.5rem] aspect-[4/3] mb-6">
                  <img
                    src={suite.img}
                    alt={suite.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-4 pb-4 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl mb-1">{suite.name}</h3>
                    <p className="text-white/40 text-xs font-display uppercase tracking-widest">Starting from ZAR {suite.price} / Night</p>
                  </div>
                  <button className="w-full py-3 border border-white/10 rounded-xl hover:bg-gold hover:text-charcoal transition-all text-[10px] uppercase tracking-widest font-bold">
                    Discover Suite
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dining Preview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-video rounded-[3rem] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1550966841-3ee7adac1661?q=80&w=1920&h=1080&auto=format&fit=crop"
              alt="Dining Experience"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 md:p-20 space-y-6 max-w-2xl">
              <p className="text-gold font-display uppercase tracking-widest text-xs">The Culinary Journey</p>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
                A Symphony <br />
                <span className="italic font-light">of Flavors</span>
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                From the golden hues of the Fountain Lounge to the intimate shadows of Obsidian, our dining experiences are crafted to provoke the senses and celebrate local excellence.
              </p>
              <Link href="/dining" className="inline-flex items-center gap-4 py-4 px-10 bg-gold text-charcoal rounded-full font-display uppercase tracking-widest text-sm font-bold shadow-xl shadow-gold/20 hover:bg-gold-light transition-all">
                Explore The Menu
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Feature */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-8">
              <Anchor className="text-gold" />
            </div>
            <h3 className="font-serif text-2xl italic">Signature Service</h3>
            <p className="text-white/40 font-light text-sm">Experience our intuitive white-glove concierge available around the clock.</p>
          </div>
          <div className="text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-8">
              <Waves className="text-gold" />
            </div>
            <h3 className="font-serif text-2xl italic">Aquatic Stillness</h3>
            <p className="text-white/40 font-light text-sm">Our 360-degree infinity pool overlooks the vibrant pulse of Sandton.</p>
          </div>
          <div className="text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-8">
              <Wind className="text-gold" />
            </div>
            <h3 className="font-serif text-2xl italic">Pure Atmosphere</h3>
            <p className="text-white/40 font-light text-sm">Equipped with state-of-the-art oxygen-enriched therapy in every suite.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center bg-charcoal relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl">
            Your Urban <br />
            <span className="italic font-light">Sanctuary</span>
          </h2>
          <p className="text-white/50 font-light text-lg tracking-wide uppercase">Reserve Your Unforgettable Experience</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <Link href="/contact" className="px-12 py-5 bg-gold text-charcoal rounded-full font-display uppercase tracking-widest font-bold hover:bg-gold-light transition-all shadow-2xl shadow-gold/30">
              Book Your Stay
            </Link>
            <Link href="/suites" className="px-12 py-5 border border-white/20 rounded-full font-display uppercase tracking-widest font-bold hover:bg-white hover:text-charcoal transition-all">
              Explore Suites
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
