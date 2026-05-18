"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Suites", href: "/suites" },
  { name: "Dining", href: "/dining" },
  { name: "Wellness", href: "/wellness" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Isolate body scroll when menu is active (Native App Behavior)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Animation configuration constants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -1000,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20, scale: 0.95 },
    open: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-[#0F1115]/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="text-xl sm:text-2xl font-serif font-semibold tracking-tighter uppercase text-white">
              Fountain<span className="text-gold ml-1.5 italic">Joeburg</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-display uppercase tracking-widest text-white/80 hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gold text-[#0F1115] text-xs font-display uppercase tracking-widest font-bold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Reserve
            </Link>
          </div>

          {/* Mobile UI Interactive Toggle Switch */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gold active:scale-90 transition-all z-50 p-2 -mr-2"
            aria-label="Toggle structural navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Overlay Sheet with Native Physics */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 w-full h-screen bg-[#0F1115] z-40 flex flex-col justify-between px-6 pt-32 pb-16 overflow-y-auto"
          >
            {/* Navigational Links Layout Node */}
            <div className="flex flex-col gap-6 mt-4">
              {NAV_LINKS.map((link) => (
                <motion.div variants={itemVariants} key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-4xl font-serif text-white/95 active:text-gold hover:text-gold transition-colors py-2 border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom System Action Bar Interface */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-6 w-full mt-12"
            >
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-gold text-[#0F1115] rounded-xl text-center text-xs font-display uppercase tracking-[0.2em] font-bold shadow-lg shadow-gold/5 active:scale-[0.98] transition-all"
              >
                Reserve Your Stay
              </Link>

              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-white/30">
                  Johannesburg, South Africa
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
