"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800",
    title: "Architecture",
  },
  {
    url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800",
    title: "Dining",
  },
  {
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800",
    title: "Presidential",
  },
  {
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200",
    title: "Sanctuary",
  },
  {
    url: "https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?q=80&w=800",
    title: "Urban Pulse",
  },
  {
    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800",
    title: "Atmosphere",
  },
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    title: "Serenity",
  },
  {
    url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800",
    title: "Horizon",
  }, // NEW 9th Image
];
export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState<{
    url: string;
    title: string;
  } | null>(null);

  // Keyboard handler listening for native escape interactions to lock/dismiss portals
  useEffect(() => {
    if (!selectedImg) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImg(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImg]);

  return (
    <div className="bg-[#0F1115] text-white pt-32 pb-24 px-4 sm:px-6 min-h-screen antialiased selection:bg-gold/30">
      <div className="max-w-7xl mx-auto">
        {/* Dynamic Page Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-gold font-display uppercase tracking-[0.4em] text-[10px] sm:text-xs font-semibold">
            Visual Journey
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
            The{" "}
            <span className="italic font-light text-gold/90">Experience</span>
          </h1>
        </motion.div>

        {/* Optimised Native CSS Masonry Column Layout Layer */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.url}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: Math.min(i * 0.05, 0.3),
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setSelectedImg(img)}
              className="bg-white/[0.02] border border-white/5 p-2 rounded-2xl group cursor-zoom-in break-inside-avoid relative block overflow-hidden unique-isolation"
              style={{ touchAction: "manipulation" }}
            >
              <div className="relative overflow-hidden rounded-xl bg-white/[0.01] transition-all duration-500 w-full">
                {/* Dynamically calculated structural placeholder maintaining aspect layers smoothly */}
                <img
                  src={img.url}
                  alt=""
                  className="w-full h-auto object-cover opacity-0 max-h-[65vh] pointer-events-none"
                  aria-hidden="true"
                />
                <Image
                  src={img.url}
                  alt={`Gallery visual detailing luxury hospitality ${img.title} space`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-103 duration-700 ease-out transition-all"
                />
              </div>

              {/* Enhanced Visual Title Overlay Framing with clip control safeguards */}
              <div className="absolute inset-2 rounded-xl bg-[#0F1115]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center pointer-events-none text-center p-4 z-10">
                <p className="font-serif text-white text-2xl lg:text-3xl italic tracking-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {img.title}
                </p>
                <div className="h-px w-8 bg-gold/50 mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-75" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Advanced Accelerated Portal Lightbox Node Framework Layout */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#0F1115]/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            {/* Top Bar Context Info Layout HUD layer */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-[#0F1115]/80 to-transparent pointer-events-none z-10">
              <p className="font-serif text-white/80 text-lg sm:text-xl italic px-4">
                {selectedImg.title}
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImg(null);
                }}
                className="p-3 text-white/60 hover:text-gold cursor-pointer pointer-events-auto transition-colors duration-200 outline-none"
                aria-label="Close high resolution gallery view overlay panel"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Container for High-Res Image viewports */}
            <motion.div
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl max-h-[82vh] flex items-center justify-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImg.url}
                  alt={`High resolution view of ${selectedImg.title}`}
                  fill
                  sizes="100vw"
                  className="object-contain rounded-xl select-none"
                  quality={90}
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
