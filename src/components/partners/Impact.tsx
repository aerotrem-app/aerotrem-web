"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Animated counter
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const duration = 2000;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
            Community Impact
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Our technology addresses critical gaps in urban emergency response,
            with measurable benefits for communities and first responders.
          </p>
        </motion.div>

        {/* Impact metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              value: 115,
              suffix: "kg",
              label: "Payload Capacity",
              description:
                "Heavy-lift capability for medical supplies, AEDs, and emergency equipment delivery.",
            },
            {
              value: 70,
              suffix: "min",
              label: "Cruise Endurance",
              description:
                "Extended mission time from 25.2 kWh battery, enabling wide-area coverage.",
            },
            {
              value: 100,
              suffix: "%",
              label: "Electric",
              description:
                "Zero-emission propulsion for sustainable, quiet urban operations.",
            },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="font-display text-5xl font-bold text-white">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-white">
                {metric.label}
              </h3>
              <p className="mt-2 text-sm text-zinc-500">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* The problem visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Current state */}
          <div className="border border-red-500/20 bg-red-500/5 p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="font-mono text-xs uppercase tracking-widest text-red-400">
                Current Challenge
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Urban Response Delays
            </h3>
            <ul className="space-y-4">
              {[
                "8-12 minute average response in urban areas",
                "20+ minutes during rush hour or high-rise access",
                "Limited coverage in under-served communities",
                "Rising costs of traditional EMS infrastructure",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-400">
                  <span className="text-red-400 mt-1">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With Aerotrem */}
          <div className="border border-white/20 bg-white/[0.02] p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                With Aerotrem
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Aerial Response Network
            </h3>
            <ul className="space-y-4">
              {[
                "Sub-3-minute response to any location in range",
                "Direct-to-rooftop delivery bypassing traffic",
                "Scalable coverage with distributed hubs",
                "Lower cost per response than helicopter EMS",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-400">
                  <span className="text-green-500 mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Use cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-8">
            Application Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "💊", label: "Medical Supply Delivery" },
              { icon: "🫀", label: "AED Rapid Deployment" },
              { icon: "🩸", label: "Blood & Organ Transport" },
              { icon: "🏢", label: "High-Rise Access" },
              { icon: "🌊", label: "Flood & Disaster Response" },
              { icon: "🏔️", label: "Remote Area Access" },
              { icon: "⚡", label: "First Responder Support" },
              { icon: "📍", label: "Search & Locate" },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/10 bg-white/[0.02] p-4 text-center hover:border-white/20 transition-colors"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
