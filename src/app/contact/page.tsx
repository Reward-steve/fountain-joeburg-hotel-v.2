"use client";

import { motion } from "framer-motion"; // Synced standard framer-motion library integration
import { Mail, Phone, MapPin, Send, HelpCircle } from "lucide-react";
import { useState } from "react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#0F1115] text-white pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 min-h-screen antialiased">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Layout Grid Node: Branding & Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 sm:space-y-12 lg:col-span-5"
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gold font-display uppercase tracking-[0.25em] text-[10px] sm:text-xs font-semibold">
                Concierge & Access
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none">
                Contact{" "}
                <span className="italic font-light text-gold/90">Us</span>
              </h1>
              <p className="text-white/60 font-light leading-relaxed text-sm sm:text-base max-w-md pt-2">
                Our team is available 24/7 to assist with your journey. Whether
                it's a booking inquiry or a bespoke concierge request, we are
                here to ensure absolute peace of mind.
              </p>
            </div>

            {/* Dynamic Custom Contact Metadata Stack */}
            <div className="space-y-4 sm:space-y-6">
              <ContactInfoItem
                icon={<MapPin />}
                label="Location"
                value={
                  <span>
                    15 Fountain Drive, Sandton
                    <br />
                    Johannesburg, 2196, South Africa
                  </span>
                }
              />
              <ContactInfoItem
                icon={<Phone />}
                label="Phone"
                value={<span>+27 (0) 11 456 7890</span>}
              />
              <ContactInfoItem
                icon={<Mail />}
                label="Email"
                value={<span>concierge@fountain-joeburg.com</span>}
              />
            </div>

            {/* VVIP Structural Banner */}
            <div className="pt-2 sm:pt-4">
              <div className="bg-white/[0.03] p-4 sm:p-6 rounded-2xl border border-white/5 flex gap-4 sm:gap-5 items-center backdrop-blur-md">
                <HelpCircle className="text-gold w-8 h-8 shrink-0" />
                <div>
                  <h4 className="font-serif text-lg text-white">
                    VVIP Concierge
                  </h4>
                  <p className="text-[9px] text-white/40 uppercase tracking-[0.15em] mt-0.5">
                    Priority response for signature suite guests
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Layout Grid Node: Form & Interactive Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/[0.02] border border-white/5 p-5 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] backdrop-blur-sm lg:col-span-7 space-y-10"
          >
            {submitted ? (
              <div className="h-[350px] sm:h-[450px] flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-[#0F1115] shadow-lg shadow-gold/20">
                  <Send size={24} />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl italic">
                  Message Sent
                </h3>
                <p className="text-white/50 text-xs sm:text-sm max-w-xs font-light">
                  Our concierge team will review your request and get back to
                  you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
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
                  placeholder="Tell us about your request..."
                  isTextArea
                  value={formData.message}
                  onChange={(val) => setFormData({ ...formData, message: val })}
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-[#0F1115] rounded-xl font-display uppercase tracking-[0.15em] font-bold text-xs shadow-lg shadow-gold/10 hover:bg-opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
                  style={{ touchAction: "manipulation" }}
                >
                  Send Inquiry
                  <Send
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>
              </form>
            )}

            {/* Clean Next.js-Optimized Interactive Map Node Wrapper */}
            <div className="overflow-hidden rounded-2xl aspect-[21/9] sm:aspect-video border border-white/5 grayscale contrast-125 opacity-40 relative">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200"
                alt="Sandton, Johannesburg map grid visualization layout"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3.5 h-3.5 bg-gold rounded-full animate-ping" />
                <div className="w-2.5 h-2.5 bg-gold rounded-full absolute" />
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#0F1115]/90 backdrop-blur-md border border-white/5 rounded-full text-[8px] uppercase tracking-widest text-gold whitespace-nowrap">
                Sandton, Johannesburg
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
