"use client";

import { motion } from "motion/react";
import { useState } from "react";

const IMAGES = [
  { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format", title: "Architecture" },
  { url: "https://images.unsplash.com/photo-1550966841-3ee7adac1661?q=80&w=800&auto=format", title: "Dining" },
  { url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format", title: "Presidential" },
  { url: "https://images.unsplash.com/photo-1544161515-4af6b1d8e1c6?q=80&w=1200&auto=format", title: "Sanctuary" },
  { url: "https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?q=80&w=800&auto=format", title: "Urban Pulse" },
  { url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format", title: "Atmosphere" },
  { url: "https://images.unsplash.com/photo-1510076857177-74700760beaa?q=80&w=800&auto=format", title: "Weightless" },
  { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format", title: "Serenity" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="text-center mb-16 space-y-4"
        >
          <p className="text-gold font-display uppercase tracking-[0.4em] text-xs">Visual Journey</p>
          <h1 className="font-serif text-5xl md:text-8xl italic">The Experience</h1>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelected(img.url)}
              className="glass-card p-2 rounded-2xl overflow-hidden group cursor-zoom-in break-inside-avoid relative"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                 <p className="font-serif text-white text-2xl italic">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Simple Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-charcoal/95 backdrop-blur-2xl z-[100] flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-6xl max-h-[90vh] relative"
          >
            <img
              src={selected}
              alt="Full view"
              className="w-full h-full object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
            <button className="absolute -top-10 -right-10 text-white text-4xl hover:text-gold transition-colors">
              &times;
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
