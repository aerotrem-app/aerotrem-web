"use client";

import { motion } from "framer-motion";

export default function PartnerHero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black pt-16">
      {/* Background - more professional, less flashy */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-2"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              Enterprise Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.1] tracking-tight text-white"
          >
            Transforming Emergency Response
            <br />
            <span className="text-zinc-500">for Your Community</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed"
          >
            Partner with McGill-backed aerospace technology to deliver faster,
            more reliable emergency response. Proven engineering. Measurable
            impact. Community-focused solutions.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            {[
              { icon: "🎓", label: "McGill University Research" },
              { icon: "🏆", label: "Competition Proven" },
              { icon: "🇨🇦", label: "Canadian Engineering" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-zinc-500"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
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
            <button className="group bg-white px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200">
              Schedule Consultation
            </button>
            <button className="group border border-white/20 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white/5">
              View Case Studies
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/80 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "115kg", label: "Payload Capacity" },
              { value: "70min", label: "Cruise Endurance" },
              { value: "McGill", label: "Research Base" },
              { value: "GoAERO", label: "2024 Selection" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
