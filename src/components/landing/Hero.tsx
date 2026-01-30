"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 pt-20 text-center">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-[-20%] left-0 right-0 h-[500px] w-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-5xl">
        {/* Animated Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400"
        >
          Seed Stage / 2026
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl font-bold leading-tight tracking-tighter text-white sm:text-7xl md:text-8xl"
        >
          BUILDING THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            INEVITABLE FUTURE
          </span>
        </motion.h1>

        {/* Subheadline - The "Trust" Hook */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl"
        >
          Aerotrem bridges the gap between visionary engineering and industrial
          reliability. Backed by McGill innovation. Ready for scale.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="group relative h-12 overflow-hidden rounded-full bg-cyan-500 px-8 py-3 text-sm font-bold text-black transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]">
            <span className="relative z-10">INVESTOR DECK</span>
          </button>

          <button className="h-12 rounded-full border border-white/20 bg-transparent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/5 hover:border-white/40">
            VIEW TRACTION
          </button>
        </motion.div>
      </div>

      {/* Decorative Grid at bottom (Optional visual anchor) */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-20" />
    </section>
  );
}
