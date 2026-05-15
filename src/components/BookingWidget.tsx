"use client";

import { useState } from "react";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="glass p-10 w-full max-w-sm flex flex-col gap-6 shadow-2xl relative z-10 mx-auto lg:mr-0"
    >
      <h3 className="text-xl font-serif italic mb-2">Secure Your Stay</h3>

      <div className="flex flex-col gap-1">
        <label className="text-[10px] uppercase tracking-widest text-white/50">
          Check In
        </label>
        <div className="bg-white/5 p-4 border border-white/10 text-sm">
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-transparent border-none text-white focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/50">
            Adults
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="bg-white/5 p-4 border border-white/10 text-sm text-center appearance-none w-full focus:outline-none"
          >
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4+">04+</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/50">
            Children
          </label>
          <div className="bg-white/5 p-4 border border-white/10 text-sm text-center">
            00
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[10px] uppercase tracking-widest text-white/50">
          Suite Preference
        </label>
        <div className="bg-white/5 p-4 border border-white/10 text-sm">
          Fountain View Suite
        </div>
      </div>

      <button className="btn-gold w-full py-5 mt-4">Check Availability</button>

      <p className="text-[10px] text-center text-white/40 tracking-wider">
        BEST RATE GUARANTEED VIA DIRECT BOOKING
      </p>
    </motion.div>
  );
}
