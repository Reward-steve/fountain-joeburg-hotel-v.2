"use client";

import Image from "next/image";

export default function SuitesSwiper() {
  const SUITES = [
    {
      name: "Executive Suite",
      price: "4,500",
      img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800",
    },
    {
      name: "Fountain View Suite",
      price: "6,200",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800",
    },
    {
      name: "Presidential Sky Suite",
      price: "12,500",
      img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800",
    },
  ];

  return (
    /* 
      Container uses scroll-pl to perfectly offset snapping alignments.
      We style it with -mx to stretch edge-to-edge on mobile viewports while staying clean on desktop.
    */
    <div className="-mx-4 px-4 sm:mx-0 sm:px-0 relative overflow-hidden">
      <div
        className="flex overflow-x-auto pb-8 gap-5 sm:gap-8 px-[7.5vw] sm:px-6 no-scrollbar snap-x snap-mandatory scroll-smooth list-none overscroll-x-contain"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {SUITES.map((suite, i) => (
          <div
            key={i}
            className="min-w-[82vw] sm:min-w-[380px] md:min-w-[440px] max-w-[450px] snap-center sm:snap-start scroll-ml-[7.5vw] sm:scroll-ml-6"
          >
            <div className="bg-white/[0.03] border border-white/5 p-2.5 sm:p-3 rounded-[2rem] group cursor-pointer h-full flex flex-col backdrop-blur-sm shadow-xl transition-all active:scale-[0.99] sm:hover:border-white/10 duration-300">
              {/* Image Dynamic Frame Wrapper */}
              <div className="overflow-hidden rounded-[1.6rem] aspect-[4/3] mb-4 sm:mb-6 relative isolation-blur">
                <Image
                  src={suite.img}
                  alt={`${suite.name} Interior view`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out sm:group-hover:scale-105"
                  sizes="(max-width: 640px) 85vw, 440px"
                  priority={i === 0}
                />
                {/* Mobile UI Overlay Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Card Meta Content Block */}
              <div className="px-2 sm:px-4 pb-2 sm:pb-4 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg sm:text-2xl text-white tracking-tight leading-snug group-hover:text-gold transition-colors duration-300">
                    {suite.name}
                  </h3>
                  <p className="text-gold text-[10px] sm:text-xs font-display uppercase tracking-widest font-medium">
                    Starting from ZAR {suite.price}{" "}
                    <span className="text-white/40 normal-case font-light font-sans">
                      / night
                    </span>
                  </p>
                </div>

                {/* Tactile App-Ready Action Trigger */}
                <button
                  className="w-full py-3.5 border border-white/10 rounded-xl bg-transparent font-display text-[10px] uppercase tracking-[0.15em] font-bold text-white transition-all duration-200 active:bg-gold active:text-[#0F1115] active:border-gold active:scale-[0.97] sm:hover:bg-gold sm:hover:text-[#0F1115] sm:hover:border-gold"
                  style={{ touchAction: "manipulation" }}
                >
                  Discover Suite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
