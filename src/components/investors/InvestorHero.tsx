"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Floating orbs background
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/10 blur-3xl"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${10 + i * 20}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated grid lines
function GridLines() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          mask="url(#gridMask)"
        />
      </svg>

      {/* Animated horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ boxShadow: "0 0 20px 2px rgba(6,182,212,0.5)" }}
      />
    </div>
  );
}

// 3D Rotating wireframe drone
function WireframeDrone({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  const rotateX = useSpring(
    useTransform(() => mouseY * 15),
    { stiffness: 50, damping: 20 },
  );
  const rotateY = useSpring(
    useTransform(() => mouseX * 15),
    { stiffness: 50, damping: 20 },
  );

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-full"
    >
      <svg
        viewBox="0 0 500 300"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main body - diamond shape */}
        <motion.path
          d="M200 150 L250 120 L300 150 L250 180 Z"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          fill="rgba(6,182,212,0.05)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Cross bars */}
        <motion.path
          d="M250 120 L250 180 M200 150 L300 150"
          stroke="rgba(6,182,212,0.4)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Arms extending to rotors */}
        <motion.line
          x1="210"
          y1="140"
          x2="100"
          y2="80"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.line
          x1="290"
          y1="140"
          x2="400"
          y2="80"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
        <motion.line
          x1="210"
          y1="160"
          x2="100"
          y2="220"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
        />
        <motion.line
          x1="290"
          y1="160"
          x2="400"
          y2="220"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        />

        {/* Rotors - animated spinning */}
        {[
          [100, 80],
          [400, 80],
          [100, 220],
          [400, 220],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <motion.circle
              cx={cx}
              cy={cy}
              r="35"
              stroke="rgba(6,182,212,0.6)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="8 4"
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
            <circle cx={cx} cy={cy} r="4" fill="#06b6d4" />
            <motion.circle
              cx={cx}
              cy={cy}
              r="8"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="0.5"
              animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          </g>
        ))}

        {/* Center sensor glow */}
        <motion.circle
          cx="250"
          cy="150"
          r="8"
          fill="#06b6d4"
          animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle
          cx="250"
          cy="150"
          r="12"
          stroke="#06b6d4"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />

        {/* Holographic details */}
        <motion.path
          d="M220 130 L230 130 L235 140 M280 130 L270 130 L265 140"
          stroke="rgba(6,182,212,0.4)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <defs>
          <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export default function InvestorHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-16"
    >
      {/* Background layers */}
      <FloatingOrbs />
      <GridLines />

      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_80%)]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 backdrop-blur-sm"
            >
              <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-500">
                Seed Round Open
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-500">
                The Future
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                of Emergency
              </span>
              <br />
              <span className="text-white">Response</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 max-w-lg text-lg text-zinc-400 leading-relaxed"
            >
              Autonomous aerial systems that bypass traffic entirely. We&apos;re
              building the infrastructure for{" "}
              <span className="text-white">
                sub-3-minute emergency response
              </span>{" "}
              in urban environments.
            </motion.p>

            {/* Key stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {[
                { value: "8-12", label: "Min Current Avg", highlight: false },
                { value: "<3", label: "Min Our Target", highlight: true },
                { value: "4x", label: "Faster Response", highlight: true },
              ].map((stat, i) => (
                <div key={i} className="text-left">
                  <div
                    className={`font-display text-3xl font-bold ${stat.highlight ? "text-cyan-500" : "text-zinc-500"}`}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative overflow-hidden bg-cyan-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-cyan-400">
                <span className="relative z-10">Request Investor Deck</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              <button className="group border border-white/20 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white/5">
                Watch Demo
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right: 3D Drone visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <WireframeDrone mouseX={mousePos.x} mouseY={mousePos.y} />

            {/* Floating data points around drone */}
            {[
              { label: "TILT-WING", x: "10%", y: "20%", delay: 1 },
              { label: "AUTONOMOUS", x: "80%", y: "15%", delay: 1.2 },
              { label: "15KG PAYLOAD", x: "85%", y: "75%", delay: 1.4 },
              { label: "PROVEN TELEMETRY", x: "5%", y: "80%", delay: 1.6 },
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: point.delay }}
                className="absolute"
                style={{ left: point.x, top: point.y }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-cyan-500/80 tracking-widest">
                    {point.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          Explore the Vision
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-8 w-5 rounded-full border border-zinc-700 flex items-start justify-center p-1"
        >
          <div className="h-2 w-1 rounded-full bg-cyan-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}