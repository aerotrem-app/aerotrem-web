"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Vision() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1)_0%,transparent_60%)]" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-cyan-500" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-500">
              The Problem
            </span>
            <div className="h-px w-12 bg-cyan-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            Every Minute Matters
          </h2>
        </motion.div>

        {/* Problem statement - full width dramatic */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              stat: "8-12",
              unit: "minutes",
              label: "Average urban ambulance response",
              description:
                "Standard response times in major cities, assuming clear roads.",
              color: "text-zinc-400",
            },
            {
              stat: "20+",
              unit: "minutes",
              label: "During traffic or high-rise access",
              description:
                "Elevators, construction, rush hour—precious minutes lost.",
              color: "text-red-400",
            },
            {
              stat: "-10%",
              unit: "survival",
              label: "Per minute without defibrillation",
              description:
                "For cardiac arrest, every minute decreases survival by 10%.",
              color: "text-red-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative border border-white/10 bg-white/[0.02] p-8 group hover:border-white/20 transition-colors"
            >
              <div className={`font-display text-6xl font-bold ${item.color}`}>
                {item.stat}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mt-1">
                {item.unit}
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white mt-4">
                {item.label}
              </h3>
              <p className="text-sm text-zinc-500 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision statement - dramatic centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent p-12 md:p-16 text-center"
        >
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-500">
              The Solution
            </span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight">
            What if emergency response
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              bypassed traffic entirely?
            </span>
          </h3>

          <p className="mt-8 text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Aerotrem is building autonomous aerial systems for urban emergency
            response. Direct-to-rooftop delivery of medical supplies. Vertical
            takeoff. Electric propulsion.{" "}
            <span className="text-white font-medium">Under 3 minutes.</span>
          </p>

          {/* Target metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "115kg", label: "Payload Capacity" },
              { value: "70min", label: "Cruise Endurance" },
              { value: "190m/s", label: "Max Speed" },
              { value: "25.2", label: "kWh Battery" },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl font-bold text-cyan-500">
                  {metric.value}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mt-1">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl text-zinc-400 italic max-w-4xl mx-auto leading-relaxed">
            "In my opinion, the time spent in an elevator or staircase or stuck
            in traffic constitutes{" "}
            <span className="text-white not-italic">
              precious minutes wasted
            </span>{" "}
            by First Responders."
          </p>
          <footer className="mt-6">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-500">
              — Zak Tremblay, Founder
            </span>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
