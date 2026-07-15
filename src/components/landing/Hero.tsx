"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

// Animated drone SVG component with glow
function AnimatedDrone({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const x = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        x: useTransform(x, [-0.5, 0.5], [-20, 20]),
        y: useTransform(y, [-0.5, 0.5], [-20, 20]),
      }}
      className="relative"
    >
      {/* Glow layers */}
      <div className="absolute inset-0 blur-3xl">
        <svg viewBox="0 0 400 200" className="h-full w-full opacity-40">
          <ellipse cx="200" cy="100" rx="150" ry="60" fill="url(#glow)" />
          <defs>
            <radialGradient id="glow">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Drone SVG */}
      <svg
        viewBox="0 0 400 200"
        className="relative z-10 h-full w-full drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main body */}
        <motion.path
          d="M160 100 L200 85 L240 100 L200 115 Z"
          fill="url(#bodyGradient)"
          stroke="#06b6d4"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Arms */}
        <motion.line
          x1="170"
          y1="95"
          x2="80"
          y2="60"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1="230"
          y1="95"
          x2="320"
          y2="60"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.line
          x1="170"
          y1="105"
          x2="80"
          y2="140"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.line
          x1="230"
          y1="105"
          x2="320"
          y2="140"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Rotors with spinning animation */}
        <motion.ellipse
          cx="80"
          cy="60"
          rx="30"
          ry="8"
          stroke="#06b6d4"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "80px 60px" }}
        />
        <motion.ellipse
          cx="320"
          cy="60"
          rx="30"
          ry="8"
          stroke="#06b6d4"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
          animate={{ rotate: -360 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "320px 60px" }}
        />
        <motion.ellipse
          cx="80"
          cy="140"
          rx="30"
          ry="8"
          stroke="#06b6d4"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
          animate={{ rotate: -360 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "80px 140px" }}
        />
        <motion.ellipse
          cx="320"
          cy="140"
          rx="30"
          ry="8"
          stroke="#06b6d4"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "320px 140px" }}
        />

        {/* Rotor centers */}
        <circle cx="80" cy="60" r="4" fill="#06b6d4" />
        <circle cx="320" cy="60" r="4" fill="#06b6d4" />
        <circle cx="80" cy="140" r="4" fill="#06b6d4" />
        <circle cx="320" cy="140" r="4" fill="#06b6d4" />

        {/* Camera/sensor */}
        <motion.circle
          cx="200"
          cy="105"
          r="6"
          fill="#06b6d4"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

// Floating particles with pre-computed positions
const particleData = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: (i * 5 + 2.5) % 100, // Deterministic spread
  top: (i * 5 + 2.5) % 100,
  duration: 3 + (i % 3),
  delay: (i * 0.1) % 2,
}));

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particleData.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-cyan-500/40"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
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

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Scanner line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_2px_rgba(6,182,212,0.5)] animate-scan z-20" />

      {/* Floating particles */}
      <Particles />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)] z-10" />

      {/* Main Content - Centered */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-3 border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 backdrop-blur-sm"
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
          <span className="font-mono text-xs text-cyan-500 tracking-[0.2em] uppercase">
            Systems Operational / 2026
          </span>
        </motion.div>

        {/* Drone visualization - behind text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] md:w-[800px] md:h-[400px] opacity-30 -z-10"
        >
          <AnimatedDrone mouseX={mouseX.get()} mouseY={mouseY.get()} />
        </motion.div>

        {/* Main Typography */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-7xl font-bold uppercase leading-[0.85] tracking-tighter sm:text-8xl md:text-9xl lg:text-[12rem]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">
              AERO
            </span>
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-7xl font-bold uppercase leading-[0.85] tracking-tighter text-white sm:text-8xl md:text-9xl lg:text-[12rem]"
          >
            TREM
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg text-zinc-400 font-light md:text-xl"
        >
          Engineering the future of autonomous aerospace systems.
          <br />
          <span className="text-zinc-500">
            Precision. Reliability. Innovation.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <button className="group relative overflow-hidden border border-cyan-500 bg-cyan-500/10 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-cyan-500 transition-all hover:bg-cyan-500 hover:text-black">
            <span className="relative z-10">Explore Technology</span>
          </button>
          <button className="group border border-white/20 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white hover:text-black">
            Investor Relations →
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-8 w-5 rounded-full border border-zinc-700 flex items-start justify-center p-1"
          >
            <div className="h-2 w-1 rounded-full bg-cyan-500" />
          </motion.div>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 h-16 w-16 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 h-16 w-16 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 h-16 w-16 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 h-16 w-16 border-r border-b border-white/10" />

      {/* Data readouts in corners */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute top-8 right-8 text-right hidden md:block"
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          Location
        </div>
        <div className="font-mono text-sm text-white">45.50°N / 73.57°W</div>
        <div className="font-mono text-xs text-zinc-500">Montreal, QC</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-8 hidden md:block"
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          Status
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-sm text-white">
            All Systems Nominal
          </span>
        </div>
      </motion.div>
    </section>
  );
}