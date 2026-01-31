"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2021",
    title: "McGill Drone Club Founded",
    description:
      "Started from scratch, building the foundation for competition-ready UAV development.",
    milestone: false,
  },
  {
    year: "2022",
    title: "VFS Competition — 3rd Place",
    description:
      "First competition entry placed top 3 at the Vertical Flight Society student challenge.",
    milestone: true,
  },
  {
    year: "2023",
    title: "Canadian Space Agency",
    description:
      "Engineering internship with hands-on aerospace systems experience.",
    milestone: false,
  },
  {
    year: "2024",
    title: "Aerial Competition Win",
    description:
      "First place victory, validating years of iterative design and rigorous testing.",
    milestone: true,
  },
  {
    year: "2024",
    title: "GoAERO Selection",
    description:
      "Accepted into the global emergency response flyer competition. Featured in official media.",
    milestone: true,
  },
  {
    year: "2026",
    title: "Seed Round",
    description:
      "Raising capital to bring autonomous emergency response from prototype to production.",
    milestone: true,
    current: true,
  },
];

export default function Traction() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
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
              Track Record
            </span>
            <div className="h-px w-12 bg-cyan-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            Proven Execution
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            From university lab to global competition. A track record of
            building, competing, and winning.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-white/20 to-transparent hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${i % 2 === 0 ? "" : "lg:text-right"}`}
              >
                {/* Content */}
                <div
                  className={`${i % 2 === 0 ? "lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}
                >
                  <div
                    className={`relative border p-6 transition-all ${
                      item.current
                        ? "border-cyan-500/50 bg-cyan-500/10"
                        : item.milestone
                          ? "border-white/20 bg-white/[0.03] hover:border-cyan-500/30"
                          : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    {item.current && (
                      <div className="absolute -top-3 left-4 flex items-center gap-2 bg-black px-2">
                        <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-500">
                          Current
                        </span>
                      </div>
                    )}

                    <div className="font-mono text-xs text-cyan-500 tracking-widest mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-zinc-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot (desktop only) */}
                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block ${
                    item.milestone || item.current ? "z-10" : ""
                  }`}
                >
                  <div
                    className={`rounded-full border-2 ${
                      item.current
                        ? "h-5 w-5 border-cyan-500 bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                        : item.milestone
                          ? "h-4 w-4 border-cyan-500 bg-black"
                          : "h-3 w-3 border-white/30 bg-black"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "4+", label: "Years R&D" },
            { value: "3", label: "Competition Wins" },
            { value: "1", label: "Global Selection" },
            { value: "400kg+", label: "MTOW Class" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="font-display text-4xl font-bold text-cyan-500">
                {stat.value}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Press/Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a
              href="https://www.goaeroprize.com/post/meet-the-teams-team-tremblay"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border border-white/10 bg-white/[0.02] px-6 py-4 transition-all hover:border-cyan-500/50"
            >
              <span className="font-display text-2xl font-bold text-cyan-500">
                GO
              </span>
              <div className="text-left">
                <div className="text-sm text-white font-medium">GoAERO</div>
                <div className="text-xs text-zinc-500">Meet the Teams</div>
              </div>
              <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                ↗
              </span>
            </a>
            <div className="flex items-center gap-3 border border-white/10 bg-white/[0.02] px-6 py-4">
              <span className="font-display text-xl font-bold text-white">
                McGill
              </span>
              <div className="text-left">
                <div className="text-sm text-white font-medium">
                  Engineering
                </div>
                <div className="text-xs text-zinc-500">Student Research</div>
              </div>
            </div>
            <div className="flex items-center gap-3 border border-white/10 bg-white/[0.02] px-6 py-4">
              <span className="font-display text-xl font-bold text-white">
                VFS
              </span>
              <div className="text-left">
                <div className="text-sm text-white font-medium">
                  Vertical Flight
                </div>
                <div className="text-xs text-zinc-500">Competition</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
