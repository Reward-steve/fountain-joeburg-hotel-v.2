"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Hotel } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-charcoal/80 backdrop-blur-xl py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-serif font-semibold tracking-tighter uppercase">
            Fountain<span className="text-gold ml-2 italic">Joeburg</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-gold"
          >
            Reserve
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-gold transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-0 left-0 w-full h-screen bg-charcoal flex flex-col items-center justify-center gap-8 z-40 p-6"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-gold transition-colors"
          >
            <X size={32} />
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-serif text-white/90 hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-10 py-4 bg-gold text-charcoal rounded-full text-lg font-display uppercase tracking-widest font-bold"
          >
            Reserve Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
