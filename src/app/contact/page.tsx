"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import {
  InputField,
  ContactInfoItem,
} from "@/src/components/contact/contactFormElements";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Mimic deliberate concierge processing timing mechanics
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0F1115] text-white pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 min-h-screen antialiased selection:bg-gold/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* LEFT SECTION: BRANDING & BRAND CONCIERGE CHANNELS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="space-y-10 sm:space-y-14 lg:col-span-5"
          >
            <div className="space-y-4">
              <span className="text-gold font-display uppercase tracking-[0.4em] text-[10px] sm:text-xs font-semibold block">
                Concierge & Access
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[5rem] tracking-tight leading-[1.1] text-white font-light">
                Contact <br />
                <span className="italic font-extralight text-gold/90 pl-1">
                  Us
                </span>
              </h1>
              <p className="text-white/60 font-light leading-relaxed text-sm sm:text-base max-w-md pt-3">
                Our team is available 24/7 to assist with your journey. Whether
                it is a booking inquiry or a bespoke concierge request, we are
                here to ensure absolute peace of mind.
              </p>
            </div>

            {/* Premium Meta Contact Channels */}
            <div className="space-y-5 border-l border-white/5 pl-4 sm:pl-6">
              <ContactInfoItem
                icon={<MapPin className="w-4 h-4 stroke-[1.5]" />}
                label="Location"
                value={
                  <span className="text-white/80 font-light text-sm leading-relaxed block hover:text-white transition-colors duration-300">
                    15 Fountain Drive, Sandton
                    <br />
                    Johannesburg, 2196, South Africa
                  </span>
                }
              />
              <ContactInfoItem
                icon={<Phone className="w-4 h-4 stroke-[1.5]" />}
                label="Phone"
                value={
                  <a
                    href="tel:+27114567890"
                    className="text-white/80 font-light text-sm tracking-wide hover:text-gold transition-colors duration-300 block mt-0.5"
                  >
                    +27 (0) 11 456 7890
                  </a>
                }
              />
              <ContactInfoItem
                icon={<Mail className="w-4 h-4 stroke-[1.5]" />}
                label="Email"
                value={
                  <a
                    href="mailto:concierge@fountain-joeburg.com"
                    className="text-white/80 font-light text-sm tracking-wide hover:text-gold transition-colors duration-300 block mt-0.5"
                  >
                    concierge@fountain-joeburg.com
                  </a>
                }
              />
            </div>

            {/* VVIP Structural Banner */}
            <div className="pt-2">
              <div className="bg-gradient-to-br from-white/[0.03] to-transparent p-5 sm:p-6 rounded-2xl border border-white/5 flex gap-4 sm:gap-5 items-center backdrop-blur-xl shadow-xl hover:border-gold/20 transition-all duration-500 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-105 transition-transform duration-500">
                  <HelpCircle className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white tracking-wide font-normal">
                    VVIP Concierge Channels
                  </h4>
                  <p className="text-[9px] text-white/40 uppercase tracking-[0.2em] mt-1 font-medium">
                    Priority response for signature suite guests
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SECTION: FORM BLOCK & SPATIAL ENVIRONMENT MAP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="bg-[#13151a]/40 border border-white/5 p-6 sm:p-10 lg:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] backdrop-blur-md lg:col-span-7 space-y-10 shadow-2xl will-change-transform"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-[380px] sm:h-[460px] flex flex-col items-center justify-center text-center space-y-5"
                >
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-[#0F1115] shadow-xl shadow-gold/10 relative">
                    <Send
                      size={22}
                      className="absolute transform -translate-x-0.5"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 rounded-full border border-gold/30 -z-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-white tracking-wide">
                      Inquiry Dispatched
                    </h3>
                    <div className="h-[1px] w-12 bg-gold/40 mx-auto my-2" />
                    <p className="text-white/50 text-xs sm:text-sm max-w-sm font-light leading-relaxed px-4">
                      Our elite concierge operations desk has logged your
                      request. A designated asset manager will reach out via
                      secure channels shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 sm:space-y-7"
                >
                  <InputField
                    label="Your Name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(val) => setFormData({ ...formData, name: val })}
                  />
                  <InputField
                    label="Email Address"
                    placeholder="example@luxury.com"
                    type="email"
                    value={formData.email}
                    onChange={(val) => setFormData({ ...formData, email: val })}
                  />
                  <InputField
                    label="How can we assist you?"
                    placeholder="Tell us about your architectural, dietary, or room customization preferences..."
                    isTextArea
                    value={formData.message}
                    onChange={(val) =>
                      setFormData({ ...formData, message: val })
                    }
                  />

                  <button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !formData.name ||
                      !formData.email ||
                      !formData.message
                    }
                    className="w-full py-4 bg-gold text-[#0F1115] rounded-xl font-display uppercase tracking-[0.25em] font-semibold text-xs shadow-xl shadow-gold/5 hover:bg-[#fff0cc] disabled:bg-white/10 disabled:text-white/40 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-6 cursor-pointer disabled:cursor-not-allowed group relative overflow-hidden h-12 sm:h-14 transform-gpu"
                    style={{ touchAction: "manipulation" }}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-[#0F1115] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Secure Connection & Send</span>
                        <Send
                          size={12}
                          className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                        />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>

            {/* DESIGN-OPTIMIZED INTERACTIVE GEOLOCATION CONTAINER MAP */}
            <div className="overflow-hidden rounded-2xl aspect-[21/9] sm:aspect-video border border-white/5 grayscale contrast-[1.15] opacity-50 relative group/map transition-all duration-1000 hover:grayscale-[30%] hover:opacity-80 shadow-inner cursor-crosshair">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200"
                alt="Sandton, Johannesburg map coordinates graphic structure layout"
                fill
                className="object-cover scale-[1.03] group-hover/map:scale-[1.06] transition-transform duration-[8s] cubic-bezier(0.25, 1, 0.5, 1)"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#0F1115]/10 group-hover/map:bg-transparent transition-colors duration-700 pointer-events-none" />

              {/* Geolocation Ping Pins */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-gold rounded-full animate-ping opacity-70" />
                <div className="w-2.5 h-2.5 bg-gold rounded-full absolute border border-[#0F1115]" />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#0F1115]/95 backdrop-blur-md border border-white/10 rounded-xl text-[9px] uppercase tracking-[0.25em] text-gold whitespace-nowrap font-medium shadow-2xl transition-all duration-300 group-hover/map:border-gold/30">
                Sandton, Johannesburg
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
