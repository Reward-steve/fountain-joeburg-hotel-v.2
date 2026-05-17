"use client";

import { useState } from "react";
import { ChevronDown, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    discover: false,
    concierge: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className="bg-[#0F1115] border-t border-white/5 py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
        {/* Brand Description Block */}
        <div className="space-y-4 sm:space-y-6 pb-6 md:pb-0 border-b border-white/5 md:border-none">
          <div className="text-xl sm:text-2xl font-serif font-semibold tracking-tighter uppercase text-white">
            FOUNTAIN
            <span className="text-gold ml-1.5 italic text-lg capitalize">
              Joeburg
            </span>
          </div>
          <p className="text-white/50 font-light leading-relaxed max-w-sm text-xs sm:text-sm">
            Where urban sophistication meets the architecture of serenity.
            Experience the pinnacle of luxury in the heart of Johannesburg.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/5 rounded-lg text-white/60 active:text-gold active:bg-white/10 sm:hover:text-gold transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/5 rounded-lg text-white/60 active:text-gold active:bg-white/10 sm:hover:text-gold transition-colors"
              aria-label="Facebook Page"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/5 rounded-lg text-white/60 active:text-gold active:bg-white/10 sm:hover:text-gold transition-colors"
              aria-label="X Twitter Profile"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Discover Accordion Node */}
        <div className="border-b border-white/5 md:border-none pb-4 md:pb-0">
          <button
            onClick={() => toggleSection("discover")}
            className="w-full md:pointer-events-none flex justify-between items-center text-left md:block focus:outline-none py-2 md:py-0"
          >
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Discover
            </h4>
            <ChevronDown
              size={16}
              className={`text-white/40 transition-transform duration-300 md:hidden ${openSections.discover ? "rotate-180" : ""}`}
            />
          </button>

          <div className="hidden md:block mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/suites"
                  className="text-white/60 hover:text-gold transition-colors font-light"
                >
                  Suites & Villas
                </Link>
              </li>
              <li>
                <Link
                  href="/dining"
                  className="text-white/60 hover:text-gold transition-colors font-light"
                >
                  Fine Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/wellness"
                  className="text-white/60 hover:text-gold transition-colors font-light"
                >
                  Wellness & Spa
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-white/60 hover:text-gold transition-colors font-light"
                >
                  The Experience
                </Link>
              </li>
            </ul>
          </div>

          <AnimatePresence>
            {openSections.discover && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden md:hidden"
              >
                <ul className="space-y-4 text-sm pt-4 pb-2">
                  <li>
                    <Link
                      href="/suites"
                      className="block text-white/70 py-1 font-light"
                    >
                      Suites & Villas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dining"
                      className="block text-white/70 py-1 font-light"
                    >
                      Fine Dining
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wellness"
                      className="block text-white/70 py-1 font-light"
                    >
                      Wellness & Spa
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="block text-white/70 py-1 font-light"
                    >
                      The Experience
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Concierge Accordion Node */}
        <div className="border-b border-white/5 md:border-none pb-4 md:pb-0">
          <button
            onClick={() => toggleSection("concierge")}
            className="w-full md:pointer-events-none flex justify-between items-center text-left md:block focus:outline-none py-2 md:py-0"
          >
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Concierge
            </h4>
            <ChevronDown
              size={16}
              className={`text-white/40 transition-transform duration-300 md:hidden ${openSections.concierge ? "rotate-180" : ""}`}
            />
          </button>

          <div className="hidden md:block mt-6">
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-[9px] uppercase text-white/40 tracking-wider">
                  Location
                </span>
                <span className="font-light text-white/70">
                  Sandton, Johannesburg, South Africa
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[9px] uppercase text-white/40 tracking-wider">
                  Inquiries
                </span>
                <span className="font-light text-white/70">
                  +27 11 000 0000
                </span>
              </li>
            </ul>
          </div>

          <AnimatePresence>
            {openSections.concierge && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden md:hidden"
              >
                <ul className="space-y-4 text-sm pt-4 pb-2">
                  <li className="flex flex-col gap-0.5">
                    <span className="text-[9px] uppercase text-white/40 tracking-wider">
                      Location
                    </span>
                    <span className="font-light text-white/70">
                      Sandton, Johannesburg, South Africa
                    </span>
                  </li>
                  <li className="flex flex-col gap-0.5">
                    <span className="text-[9px] uppercase text-white/40 tracking-wider">
                      Inquiries
                    </span>
                    <span className="font-light text-white/70">
                      +27 11 000 0000
                    </span>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Brand Credentials Node */}
        <div className="space-y-4 sm:space-y-6 pt-2 md:pt-0">
          <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            Affiliation
          </h4>
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-gold/40"></div>
            <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 leading-relaxed">
              Member of Leading Hotels of the World
            </span>
          </div>
        </div>
      </div>

      {/* Global Application Copyright Divider */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-center sm:text-left">
        <p className="text-[10px] text-white/30 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Fountain Joeburg. All rights
          reserved.
        </p>
        <div className="flex justify-center sm:justify-start gap-6 text-[10px] uppercase tracking-widest text-white/30">
          <Link href="/privacy" className="hover:text-gold transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gold transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
