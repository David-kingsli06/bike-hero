"use client";

import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div className="relative w-screen h-screen overflow-hidden select-none bg-sky-500">
      {/* ── Background Sky Image (Full Bleed) ── */}
      <Image
        src="/images/Vivid Blue Sky with Fluffy Clouds.png"
        alt="Sky Background"
        fill
        priority
        className="object-cover object-center pointer-events-none"
      />

      {/* ── Subtle Vignette / Depth Overlay ── */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/5 to-black/20 pointer-events-none z-[1]" />

      {/* ── Left Carousel Notched Arrow Button ── */}
      <button
        type="button"
        aria-label="Previous"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-black/85 text-white w-10 h-14 md:w-12 md:h-16 rounded-r-full flex items-center justify-center pl-1 hover:bg-black transition-transform active:scale-95 shadow-2xl cursor-pointer"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ── Right Carousel Notched Arrow Button ── */}
      <button
        type="button"
        aria-label="Next"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-black/85 text-white w-10 h-14 md:w-12 md:h-16 rounded-l-full flex items-center justify-center pr-1 hover:bg-black transition-transform active:scale-95 shadow-2xl cursor-pointer"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── Navbar ── */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* ── Giant Condensed Headline (Behind the rider, z-10) ── */}
      <div className="absolute inset-x-0 top-[12%] md:top-[10%] flex justify-center items-center z-10 pointer-events-none px-4">
        <h1 className="font-display text-[12.5vw] md:text-[11.5vw] font-bold text-white tracking-normal uppercase leading-none whitespace-nowrap drop-shadow-[0_4px_30px_rgba(0,0,0,0.25)] animate-text-reveal">
          DOMINATE THE APEX
        </h1>
      </div>

      {/* ── Center Rider Cutout - Pinned directly to the bottom edge with 0 gap ── */}
      <div className="absolute inset-x-0 bottom-0 h-[68%] md:h-[74%] lg:h-[78%] z-20 pointer-events-none flex justify-center items-end">
        <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] max-w-[1050px] h-full flex items-end animate-pop-up">
          <Image
            src="/images/rider_cropped.png"
            alt="Bike Rider Cutout"
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>

      {/* ── Bottom Content Bar (Pinned to the bottom edge, z-30) ── */}
      <div className="absolute inset-x-0 bottom-0 z-30 px-6 sm:px-10 md:px-16 pb-8 pt-16 flex items-end justify-between pointer-events-none">
        {/* Left Copy & Action Button */}
        <div className="max-w-[340px] pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Apex Series • 2026 Edition
          </div>
          <p className="text-white/95 text-xs sm:text-sm md:text-base font-medium leading-relaxed drop-shadow mb-5">
            Aerodynamic carbon chassis paired with race-tuned telemetry. Built for razor-sharp cornering at the limit.
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="group bg-white text-slate-950 text-xs sm:text-sm md:text-base font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-2xl hover:bg-slate-100 hover:scale-105 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Explore Machine</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <button
              type="button"
              className="bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-3 sm:py-3.5 rounded-full transition-all active:scale-95 cursor-pointer"
            >
              Sound On 🔊
            </button>
          </div>
        </div>

        {/* Right Telemetry Dashboard Stats */}
        <div className="hidden md:flex flex-col items-end gap-2 pointer-events-auto">
          <div className="bg-slate-950/75 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[280px]">
            {/* HUD Header */}
            <div className="flex items-center justify-between text-[11px] text-white/70 uppercase tracking-widest pb-2.5 mb-3 border-b border-white/10 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-white font-semibold">Telemetry HUD</span>
              </div>
              <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">LIVE SYNC</span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mb-0.5">Output</p>
                <p className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-white leading-none">
                  214<span className="text-[11px] font-sans font-semibold text-white/60 ml-0.5">HP</span>
                </p>
              </div>
              <div className="border-x border-white/10 px-2">
                <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mb-0.5">0-100</p>
                <p className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-white leading-none">
                  2.8<span className="text-[11px] font-sans font-semibold text-white/60 ml-0.5">S</span>
                </p>
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mb-0.5">Top Speed</p>
                <p className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-white leading-none">
                  299<span className="text-[11px] font-sans font-semibold text-white/60 ml-0.5">KM/H</span>
                </p>
              </div>
            </div>

            {/* Sub-bar spec pill */}
            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60 font-mono tracking-wider">
              <span>ENGINE: 998CC INLINE-4</span>
              <span className="text-white/80 font-semibold">168KG DRY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
