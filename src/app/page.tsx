"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Animated grid background
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)]" />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ boxShadow: "0 0 20px 2px rgba(6,182,212,0.3)" }}
      />
    </div>
  );
}

// Floating particles with pre-computed random values
const particleData = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: (i * 6.67 + 3) % 100, // Deterministic spread
  top: (i * 7 + 5) % 100,
  duration: 4 + (i % 3),
  delay: (i * 0.2) % 2,
}));

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particleData.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-cyan-500/30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <GridBackground />
      <Particles />

      {/* Logo - top center */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
            <div className="absolute inset-0 h-3 w-3 rounded-full bg-cyan-400 animate-ping opacity-30" />
          </div>
          <span className="font-display font-bold text-xl tracking-[0.2em] text-white">
            AEROTREM
          </span>
        </div>
      </motion.div>

      {/* Main content - centered */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24 md:pt-0">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.9] tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">
              The Future of
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              Emergency
            </span>
            <br />
            <span className="text-white">Response</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-zinc-400 max-w-md mx-auto px-4">
            Autonomous aerial systems for sub-3-minute urban emergency response.
          </p>
        </motion.div>

        {/* Gateway options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl"
        >
          {/* Investors Card */}
          <Link href="/investors" className="group">
            <div className="relative border border-cyan-500/30 bg-cyan-500/5 p-8 transition-all duration-500 hover:border-cyan-500 hover:bg-cyan-500/10 overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accents */}
              <div className="absolute top-0 right-0 h-8 w-8 border-b border-l border-cyan-500/30" />
              <div className="absolute bottom-0 left-0 h-8 w-8 border-t border-r border-cyan-500/30" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-500">
                    Seed Round Open
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold uppercase text-white mb-2">
                  Investors
                </h2>
                <p className="text-zinc-400 text-sm mb-6">
                  Join our seed round. Be part of the future of autonomous
                  aerospace.
                </p>
                <div className="flex items-center gap-2 text-cyan-500 font-display text-sm font-bold uppercase tracking-wider">
                  <span>Explore Opportunity</span>
                  <span className="transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Enterprise Card */}
          <Link href="/partners" className="group">
            <div className="relative border border-white/20 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white hover:bg-white/5 overflow-hidden">
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accents */}
              <div className="absolute top-0 right-0 h-8 w-8 border-b border-l border-white/10" />
              <div className="absolute bottom-0 left-0 h-8 w-8 border-t border-r border-white/10" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-white/50" />
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                    Partnership Programs
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold uppercase text-white mb-2">
                  Enterprise
                </h2>
                <p className="text-zinc-400 text-sm mb-6">
                  Transform emergency response in your community with proven
                  technology.
                </p>
                <div className="flex items-center gap-2 text-white font-display text-sm font-bold uppercase tracking-wider">
                  <span>Learn More</span>
                  <span className="transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          {["McGill University", "GoAERO 2024", "Canadian Space Agency"].map(
            (badge, i) => (
              <div key={i} className="flex items-center gap-2 text-zinc-600">
                <div className="h-1 w-1 rounded-full bg-zinc-600" />
                <span className="font-mono text-xs uppercase tracking-widest">
                  {badge}
                </span>
              </div>
            ),
          )}
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Corner data readouts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 hidden md:block"
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          Status
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs text-zinc-500">
            All Systems Nominal
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 text-right hidden md:block"
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          Location
        </div>
        <div className="font-mono text-xs text-zinc-500 mt-1">
          Montreal, QC / 45.50°N
        </div>
      </motion.div>
    </main>
  );
}
