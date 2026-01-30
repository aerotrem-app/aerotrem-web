"use client";

import { motion } from "framer-motion";

const techFeatures = [
  {
    id: "vtol",
    title: "Tilt-Wing VTOL",
    description:
      "6m wingspan tilt-wing design with 3.6m propellers. Launch from disaster zones, rooftops, or flooded terrain.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M16 28V4M8 12l8-8 8 8M6 28h20" />
      </svg>
    ),
  },
  {
    id: "autonomous",
    title: "AI Navigation",
    description:
      "Jetson Nano compute with LIDAR and RGB sensors. Modified A* algorithm for real-time obstacle avoidance.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="16" cy="16" r="12" />
        <circle cx="16" cy="16" r="4" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" />
      </svg>
    ),
  },
  {
    id: "electric",
    title: "25.2 kWh Battery",
    description:
      "70-minute cruise endurance. 190 m/s max speed. Nose cone opens for rapid high-amp charging between missions.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 4L12 16h8l-8 12" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "payload",
    title: "115 kg Payload",
    description:
      "Heavy-lift capacity for medical supplies, AEDs, water, and rescue equipment. Industrial-grade cargo delivery.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="6" y="8" width="20" height="16" rx="2" />
        <path d="M16 12v8M12 16h8" />
      </svg>
    ),
  },
];

export default function Technology() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-cyan-500" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-500">
              The Technology
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            Built for the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              Impossible
            </span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
            Four years of competition-tested engineering. From blended-wing
            designs to tail-sitter configurations—we've pushed the boundaries of
            autonomous flight.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techFeatures.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-cyan-500/50 hover:bg-cyan-500/5"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 h-12 w-12 border-b border-l border-white/10 transition-colors group-hover:border-cyan-500/30" />

              {/* Icon */}
              <div className="text-cyan-500 mb-6 transition-transform group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical specs panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 border border-white/10 bg-white/[0.02] p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Specs list */}
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-8">
                Technical Specifications
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Configuration", value: "Tilt-Wing eVTOL" },
                  { label: "Max Payload", value: "115 kg (254 lbs)" },
                  { label: "MTOW", value: "407.8 kg" },
                  { label: "Top Speed", value: "190 m/s (684 km/h / 425 mph)" },
                  { label: "Endurance", value: "15 min hover / 70 min cruise" },
                  { label: "Battery", value: "25.2 kWh" },
                ].map((spec, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 border-b border-white/10"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                      {spec.label}
                    </span>
                    <span className="font-display text-lg font-bold text-white">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: R&D highlights */}
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-8">
                Research Innovations
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Tilt-Wing / Lifting Body",
                    description:
                      "NACA 25012 ribbed airfoil with V-Tail stability for efficient cruise and VTOL capability.",
                  },
                  {
                    title: "Adverse Terrain Landing",
                    description:
                      "Active hydraulic piston skids level the aircraft on hills or extend for flood landings.",
                  },
                  {
                    title: "AI Navigation System",
                    description:
                      "Jetson Nano + LIDAR + RGB with modified A* algorithm for autonomous obstacle avoidance.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 h-2 w-2 rounded-full bg-cyan-500 mt-2" />
                    <div>
                      <h4 className="font-display text-sm font-bold uppercase text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-zinc-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* GoAERO badge */}
              <div className="mt-8 inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] px-4 py-3">
                <span className="font-display text-lg font-bold text-cyan-500">
                  GO
                </span>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                    Global Competition
                  </div>
                  <div className="text-sm text-white">
                    GoAERO 2024 Participant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
