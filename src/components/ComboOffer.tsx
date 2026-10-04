"use client";

import { useState, useEffect } from "react";
import {
  Flame,
  Gift,
  Zap,
  Clock,
  ArrowUpRight,
  Sparkles,
  Pill,
  Database,
  Code2,
  Tag,
  Award,
} from "lucide-react";

export default function ComboOffer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 58,
    seconds: 32,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 48, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="offer" className="py-24 bg-white border-t border-sky-100 relative overflow-hidden">
      {/* Radiant Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-sky-200/40 via-cyan-100/50 to-sky-300/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Offer Card Container */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white p-8 md:p-14 border-2 border-sky-400/40 shadow-2xl shadow-sky-900/30 space-y-10 relative overflow-hidden">
          {/* Decorative Corner Orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl"></div>

          {/* Offer Header & Countdown */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-sky-800/60">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-xs font-bold uppercase tracking-wider text-sky-300">
                <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>🔥 LIMITED TIME OFFER — DON&apos;T MISS OUT!</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
                The Ultimate Clinical Research Combo
              </h2>
              <p className="text-sm md:text-base text-sky-200/90 max-w-2xl font-medium">
                Enroll in ALL 3 Courses &amp; Save Big — Master Pharmacovigilance + Clinical Data Management + Clinical SAS Programming
              </p>
            </div>

            {/* Countdown Box */}
            <div className="bg-sky-900/70 border border-sky-400/40 p-4 rounded-2xl flex items-center gap-3 backdrop-blur-md text-center shadow-lg">
              <Clock className="w-6 h-6 text-sky-400 animate-spin" style={{ animationDuration: "12s" }} />
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-white font-heading">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase font-bold text-sky-300 tracking-wider">Hrs</span>
              </div>
              <span className="text-xl font-bold text-sky-400">:</span>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-white font-heading">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase font-bold text-sky-300 tracking-wider">Mins</span>
              </div>
              <span className="text-xl font-bold text-sky-400">:</span>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-white font-heading">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase font-bold text-sky-300 tracking-wider">Secs</span>
              </div>
            </div>
          </div>

          {/* Price Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-sky-400/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <Tag className="w-4 h-4 text-slate-400" />
                <span>Separate Total Value</span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-slate-400 line-through font-heading">
                ₹55,000
              </p>
              <p className="text-xs text-slate-400">If purchased individually</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-500/30 to-cyan-500/30 border border-sky-400/50 space-y-2 relative">
              <span className="absolute -top-3 right-4 bg-sky-400 text-slate-950 font-black text-[10px] px-3 py-1 rounded-full uppercase shadow-md">
                40% OFF
              </span>
              <div className="flex items-center gap-2 text-xs font-extrabold text-sky-300 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-sky-300" />
                <span>Special Combo Price</span>
              </div>
              <p className="text-3xl md:text-4xl font-black text-sky-300 font-heading">
                ₹30,000 Only
              </p>
              <p className="text-xs text-sky-200 font-semibold">One-time or 0% EMI options</p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-500/20 border border-sky-400/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 uppercase tracking-wider">
                <Zap className="w-4 h-4 text-cyan-300" />
                <span>Instant Savings</span>
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-cyan-300 font-heading">
                Save ₹25,000
              </p>
              <p className="text-xs text-sky-200">Exclusive bundled package</p>
            </div>
          </div>

          {/* Included Courses Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-sky-400/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                <Pill className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">Pharmacovigilance</p>
                <p className="text-xs text-sky-300">1.5 Months • Drug Safety Expert</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-sky-400/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">Clinical Data Management</p>
                <p className="text-xs text-sky-300">1 Month • Data &amp; Trials Expert</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-sky-400/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">Clinical SAS Programming</p>
                <p className="text-xs text-sky-300">2.5 Months • Analytics Expert</p>
              </div>
            </div>
          </div>

          {/* Bonus Items Badge */}
          <div className="p-4 rounded-2xl bg-sky-400/15 border border-sky-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6 text-sky-300 flex-shrink-0 animate-bounce" />
              <p className="text-xs md:text-sm font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-300 hidden sm:inline" />
                <span>BONUS INCLUDED: Mock Interviews + 3 Certifications + 100% Placement Support</span>
              </p>
            </div>
            <span className="text-xs font-extrabold text-sky-300 uppercase bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-400/40 flex-shrink-0">
              ₹10,000 Value FREE
            </span>
          </div>

          {/* CTA Action */}
          <div className="text-center pt-4">
            <a
              href="https://wa.me/919322489689?text=I%20want%20to%20enroll%20in%20the%20Ultimate%20Clinical%20Research%20Combo%20Offer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-400 via-sky-500 to-cyan-400 hover:from-sky-500 hover:to-cyan-500 text-slate-950 px-10 py-5 rounded-2xl font-black text-base md:text-lg shadow-xl shadow-sky-500/40 transition-all transform hover:scale-105 active:scale-100"
            >
              <Zap className="w-6 h-6" />
              <span>Claim Combo Offer Now</span>
              <ArrowUpRight className="w-6 h-6" />
            </a>
            <p className="text-xs text-sky-300/80 mt-3 font-medium">
              Instant registration via WhatsApp • Flexible 0% EMI Installments Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
