"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Timeline milestone component
function Milestone({
  year,
  title,
  description,
  highlight,
  delay = 0,
}: {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 to-white/10" />

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1 -translate-x-1/2 h-3 w-3 rounded-full border-2 ${
          highlight
            ? "border-cyan-500 bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
            : "border-white/30 bg-black"
        }`}
      />

      <div className="font-mono text-xs text-cyan-500 tracking-widest">
        {year}
      </div>
      <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-wide text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

// Achievement badge
function AchievementBadge({
  icon,
  label,
  value,
  delay = 0,
}: {
  icon: string;
  label: string;
  value: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/30 hover:bg-white/[0.05]"
    >
      <div className="absolute top-0 right-0 h-12 w-12 border-b border-l border-white/5 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <div className="font-display text-3xl font-bold text-white">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
        {label}
      </div>
    </motion.div>
  );
}

// Quote/Feature block
function FeatureQuote({
  quote,
  source,
  delay = 0,
}: {
  quote: string;
  source: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative border-l-2 border-cyan-500 pl-6 py-2"
    >
      <p className="text-lg text-zinc-300 italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <p className="mt-3 font-mono text-xs uppercase tracking-widest text-cyan-500">
        — {source}
      </p>
    </motion.div>
  );
}

export default function Story() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative border-t border-white/10 bg-black py-24 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/4 -left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-12 bg-cyan-500" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-500">
              The Vision
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Born from
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              Competition
            </span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: The Story */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg text-zinc-400 leading-relaxed mb-12"
            >
              Aerotrem emerged from a simple observation: in cities like
              Montreal,
              <span className="text-white"> precious minutes are lost </span>
              when ambulances get stuck in traffic, elevators, or construction
              zones. We&apos;re building autonomous aerial systems to change that.
            </motion.p>

            <FeatureQuote
              quote="I will make my flyer stand out by designing it using technologies that could change the world and emergency response—providing faster, cheaper, and more widespread coverage than modern ambulances."
              source="GoAERO Competition Interview"
              delay={0.2}
            />

            {/* Timeline */}
            <div className="mt-16">
              <div className="mb-8 font-mono text-xs uppercase tracking-widest text-zinc-500">
                The Journey
              </div>

              <Milestone
                year="2021"
                title="McGill Drone Club Founded"
                description="Started from scratch, learning avionics, software, and aerodynamics to design competition-ready UAVs."
                delay={0.1}
              />
              <Milestone
                year="2022"
                title="VFS Competition — 3rd Place"
                description="First drone built by the team placed in the top 3 at the Vertical Flight Society student competition."
                delay={0.2}
              />
              <Milestone
                year="2023"
                title="Canadian Space Agency Internship"
                description="Hands-on experience with aerospace systems and mission-critical engineering standards."
                delay={0.3}
              />
              <Milestone
                year="2024"
                title="Aerial Competition Win"
                description="Team's drone took first place, validating years of iterative design and testing."
                highlight
                delay={0.4}
              />
              <Milestone
                year="2024"
                title="GoAERO Global Competition"
                description="Selected to compete in the international emergency response flyer challenge. Featured in official competition interview."
                highlight
                delay={0.5}
              />
            </div>
          </div>

          {/* Right: Achievements + Problem Statement */}
          <div>
            {/* Achievement Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <AchievementBadge
                icon="🎓"
                label="Institution"
                value="McGill"
                delay={0.1}
              />
              <AchievementBadge
                icon="🏆"
                label="Competitions"
                value="3 Wins"
                delay={0.15}
              />
              <AchievementBadge
                icon="🛠"
                label="Years Building"
                value="4+"
                delay={0.2}
              />
              <AchievementBadge
                icon="🚀"
                label="CSA Internship"
                value="2023"
                delay={0.25}
              />
            </div>

            {/* The Problem Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-red-500/5 via-transparent to-transparent p-8"
            >
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 text-red-500">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest">
                    Critical Issue
                  </span>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
                The Urban Emergency Gap
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Average ambulance response time in major cities:{" "}
                <span className="text-white font-bold">8-12 minutes</span>. In
                traffic or high-rise buildings, it can exceed{" "}
                <span className="text-red-400 font-bold">20+ minutes</span>. For
                cardiac arrest, survival drops 10% for every minute without
                defibrillation.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <div className="font-display text-2xl font-bold text-white">
                    8-12
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                    Min Avg Response
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-red-400">
                    20+
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                    Min in Traffic
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-cyan-500">
                    &lt;3
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                    Min Our Target
                  </div>
                </div>
              </div>
            </motion.div>

            {/* The Solution Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent p-8 mt-4"
            >
              <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
                The Aerotrem Solution
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Autonomous aerial emergency response systems that bypass traffic
                entirely. Sustainable propulsion. Vertical takeoff.
                Direct-to-rooftop delivery of medical supplies and
                first-response equipment.
              </p>
              <ul className="space-y-3">
                {[
                  "Vertical takeoff & landing (VTOL)",
                  "Sustainable electric propulsion",
                  "Autonomous navigation",
                  "Medical payload capacity",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* GoAERO Feature */}
            <motion.a
              href="https://www.goaeroprize.com/post/meet-the-teams-team-tremblay"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group relative mt-4 flex items-center gap-6 overflow-hidden border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/50 hover:bg-white/[0.05]"
            >
              <div className="flex-shrink-0 h-16 w-16 border border-white/20 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-cyan-500">
                  GO
                </span>
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
                  Featured Interview
                </div>
                <div className="font-display text-lg font-bold uppercase text-white">
                  Meet Team Tremblay
                </div>
                <div className="text-sm text-zinc-400">
                  GoAERO Global Competition →
                </div>
              </div>
              <div className="text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </div>
            </motion.a>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
            Ready to join the mission?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative overflow-hidden border border-cyan-500 bg-cyan-500/10 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-cyan-500 transition-all hover:bg-cyan-500 hover:text-black">
              Request Investor Deck
            </button>
            <button className="group border border-white/20 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white hover:text-black">
              Partner With Us →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
