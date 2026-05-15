"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <p className="text-gold font-display uppercase tracking-[0.3em] text-xs">Concierge & Access</p>
              <h1 className="font-serif text-5xl md:text-8xl leading-none">Contact <span className="italic font-light">Us</span></h1>
              <p className="text-white/60 font-light leading-relaxed text-lg max-w-md">
                Our team is available 24/7 to assist with your journey. Whether it's a booking inquiry or a bespoke concierge request, we are here to ensure your peace of mind.
              </p>
            </div>

            <div className="space-y-8 pt-6">
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={20} />
                 </div>
                 <div>
                    <h4 className="font-display uppercase tracking-widest text-xs text-gold mb-2">Location</h4>
                    <p className="text-white/70 font-light">15 Fountain Drive, Sandton<br />Johannesburg, 2196, South Africa</p>
                 </div>
              </div>
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={20} />
                 </div>
                 <div>
                    <h4 className="font-display uppercase tracking-widest text-xs text-gold mb-2">Phone</h4>
                    <p className="text-white/70 font-light">+27 (0) 11 456 7890</p>
                 </div>
              </div>
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={20} />
                 </div>
                 <div>
                    <h4 className="font-display uppercase tracking-widest text-xs text-gold mb-2">Email</h4>
                    <p className="text-white/70 font-light">concierge@fountain-joeburg.com</p>
                 </div>
              </div>
            </div>

            <div className="pt-12">
               <div className="glass-card p-8 rounded-3xl border-gold/20 flex gap-6 items-center">
                  <HelpCircle className="text-gold w-10 h-10 shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl mb-1 italic">VVIP Concierge</h4>
                    <p className="text-xs text-white/40 uppercase tracking-[0.2em]">Priority response for signature suite guests</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-10 md:p-16 rounded-[4rem] relative"
          >
            {submitted ? (
              <div className="h-[500px] flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-charcoal">
                  <Send size={32} />
                </div>
                <h3 className="font-serif text-3xl italic">Message Sent</h3>
                <p className="text-white/50 max-w-xs">Our concierge team will review your request and get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-display">Your Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-colors font-light"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-display">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-colors font-light"
                    placeholder="example@luxury.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-display">How can we assist you?</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-colors font-light resize-none"
                    placeholder="Tell us about your request..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-6 bg-gold text-charcoal rounded-full font-display uppercase tracking-widest font-bold text-sm shadow-xl shadow-gold/20 hover:bg-gold-light transition-all flex items-center justify-center gap-3 group"
                >
                  Send Inquiry
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
            
            {/* Map Placeholder */}
            <div className="mt-16 overflow-hidden rounded-[2rem] aspect-video border border-white/10 grayscale contrast-125 opacity-50 relative">
               <img
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&h=400&auto=format&fit=crop"
                 alt="Map Placeholder"
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gold rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-gold rounded-full absolute"></div>
               </div>
               <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 glass-panel rounded-full text-[8px] uppercase tracking-widest text-gold whitespace-nowrap">
                  Sandton, Johannesburg
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
