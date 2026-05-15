import { Hotel, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-serif font-semibold tracking-tighter uppercase">
              FOUNTAIN<span className="text-gold ml-2 italic text-lg capitalize">Joeburg</span>
            </div>
          </div>
          <p className="text-white/50 font-light leading-relaxed max-w-xs text-sm">
            Where urban sophistication meets the architecture of serenity. Experience the pinnacle of luxury in the heart of Johannesburg.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">Discover</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/suites" className="text-white/70 hover:text-white transition-colors">Suites & Villas</Link></li>
            <li><Link href="/dining" className="text-white/70 hover:text-white transition-colors">Fine Dining</Link></li>
            <li><Link href="/wellness" className="text-white/70 hover:text-white transition-colors">Wellness & Spa</Link></li>
            <li><Link href="/gallery" className="text-white/70 hover:text-white transition-colors">The Experience</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">Concierge</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex flex-col gap-1 text-white/70">
              <span className="text-[10px] uppercase text-white/40">Location</span>
              <span className="font-light">Sandton, Johannesburg, South Africa</span>
            </li>
            <li className="flex flex-col gap-1 text-white/70">
              <span className="text-[10px] uppercase text-white/40">Inquiries</span>
              <span className="font-light">+27 11 000 0000</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">Affiliation</h4>
          <div className="flex items-center gap-6">
            <div className="w-10 h-[1px] bg-white/20"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 leading-tight">Member of Leading Hotels of the World</span>
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-widest mt-8">
            &copy; {new Date().getFullYear()} Fountain Joeburg. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
