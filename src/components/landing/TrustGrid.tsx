"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

// Animated counter component
function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {isInView ? <motion.span>{display}</motion.span> : "0"}
      {suffix}
    </motion.span>
  );
}

// Individual stat card
function StatCard({
  label,
  value,
  suffix = "",
  description,
  delay = 0,
}: {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/50 hover:bg-white/[0.05]"
    >
      {/* Corner accent */}
      <div className="absolute right-0 top-0 h-8 w-8 border-b border-l border-white/10 transition-colors group-hover:border-cyan-500/30" />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 transition-all duration-500 group-hover:from-cyan-500/5 group-hover:to-transparent" />

      <span className="relative z-10 block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </span>
      <div className="relative z-10 mt-2 font-display text-4xl font-bold text-white md:text-5xl">
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <p className="relative z-10 mt-3 text-sm text-zinc-400">{description}</p>
    </motion.div>
  );
}

// Partner logo placeholder
function PartnerLogo({ name, label = "Integration", delay = 0 }: { name: string; label?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col h-20 items-center justify-center border border-white/10 bg-white/[0.02] px-6 transition-all hover:border-white/20 hover:bg-white/[0.05]"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
        {name}
      </span>
      <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 mt-1">
        {label}
      </span>
    </motion.div>
  );
}

export default function TrustGrid() {
  return (
    <section className="relative border-t border-white/10 bg-black py-24 md:py-32">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-12 bg-cyan-500" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-500">
              Validated Performance
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Built on Trust
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Our track record is defined by real physical parameters. Every metric represents dynamic calibration integrity.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Large Feature Card - Boeing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative col-span-1 overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent p-8 md:col-span-2 md:row-span-2"
          >
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 px-3 py-1">
                <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-500">
                  Boeing Partnership
                </span>
              </div>

              <div className="font-display text-6xl font-bold text-white md:text-7xl lg:text-8xl">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-white">
                Co-Development Validation
              </h3>
              <p className="mt-2 max-w-md text-zinc-400">
                Actively collaborating with Boeing to coordinate, evaluate, and optimize autonomous flight safety and payload delivery configurations.
              </p>

              {/* Mini chart visualization */}
              <div className="mt-8 flex h-16 items-end gap-1">
                {[45, 60, 52, 70, 82, 80, 89, 90, 95, 100, 99, 100].map(
                  (height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="flex-1 bg-gradient-to-t from-cyan-500/50 to-cyan-500"
                    />
                  ),
                )}
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-zinc-500">
                <span>Phase 1</span>
                <span>Milestone Track 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Standard Stat Cards */}
          <StatCard
            label="Calibration Thrust"
            value={40}
            suffix="kg"
            description="Motor telemetry class mapped on our proprietary thrust testing rig"
            delay={0.1}
          />
          <StatCard
            label="Active Partners"
            value={1}
            description="Validated aerospace collaboration with Boeing"
            delay={0.15}
          />
          <StatCard
            label="Research Distinction"
            value={1}
            suffix="🏆"
            description="Bell Canada Lichten Award for test stand instrumentation"
            delay={0.25}
          />
          <StatCard
            label="Critical Failures"
            value={0}
            description="Zero avionics or structural failures across dynamic testing runs"
            delay={0.2}
          />
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 border-t border-white/10 pt-16"
        >
          <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Ecosystem Collaborations & Planned Hardware Pipelines
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            <PartnerLogo name="Boeing" label="Partner" delay={0} />
            <PartnerLogo name="McGill" label="Academic Hub" delay={0.05} />
            <PartnerLogo name="MAD Components" label="Propulsion Pipeline" delay={0.1} />
            <PartnerLogo name="LabJack" label="DAQ Pipeline" delay={0.15} />
            <PartnerLogo name="DigiKey" label="Avionics Pipeline" delay={0.25} />
          </div>
        </motion.div>

        {/* Bottom CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {/* Investors CTA */}
          <div className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-cyan-500/50">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-500">
                For Investors
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase text-white">
                Join Our Seed Round
              </h3>
              <p className="mt-2 text-zinc-400">
                Be part of the future of aerospace infrastructure.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 border border-cyan-500 bg-cyan-500/10 px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-cyan-500 transition-all hover:bg-cyan-500 hover:text-black">
                Request Deck
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Partners CTA */}
          <div className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-white/30">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                For Enterprise
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase text-white">
                Partner With Us
              </h3>
              <p className="mt-2 text-zinc-400">
                Discover how Aerotrem can transform your operations.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 border border-white/30 px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white hover:text-black">
                Schedule Demo
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}