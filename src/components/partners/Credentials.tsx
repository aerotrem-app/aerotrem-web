"use client";

import { motion } from "framer-motion";

export default function Credentials() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
            Trusted Credentials
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Built on a foundation of rigorous academic research, industry
            experience, and proven competition performance.
          </p>
        </motion.div>

        {/* Credentials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* McGill University */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/10 bg-white/[0.02] p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 border border-white/20 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-white">
                  M
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  McGill University
                </h3>
                <p className="text-sm text-zinc-500">Research & Development</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Founded at McGill&apos;s Faculty of Engineering. Access to world-class
              research facilities, faculty advisors, and student innovation
              resources.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                Mechanical Engineering
              </div>
            </div>
          </motion.div>

          {/* Canadian Space Agency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-white/10 bg-white/[0.02] p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 border border-white/20 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-white">
                  CSA
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Canadian Space Agency
                </h3>
                <p className="text-sm text-zinc-500">Industry Experience</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Engineering internship with hands-on experience in
              mission-critical aerospace systems and rigorous safety standards.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                2023 Internship
              </div>
            </div>
          </motion.div>

          {/* GoAERO Competition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-white/10 bg-white/[0.02] p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 border border-white/20 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-white">
                  GO
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  GoAERO Competition
                </h3>
                <p className="text-sm text-zinc-500">Global Recognition</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Selected for the global emergency response flyer competition.
              Featured in official competition media and expert webinars.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="https://goaero.aero/post/meet-the-teams-team-tremblay"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                Read Feature ↗
              </a>
            </div>
          </motion.div>

          {/* VFS Competition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border border-white/10 bg-white/[0.02] p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 border border-white/20 flex items-center justify-center">
                <span className="font-display text-lg font-bold text-white">
                  VFS
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Vertical Flight Society
                </h3>
                <p className="text-sm text-zinc-500">3rd Place Finish</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Top 3 placement in the VFS student design competition with a
              first-ever drone build—demonstrating rapid learning and execution.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                2022 Competition
              </div>
            </div>
          </motion.div>

          {/* Competition Win */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border border-white/10 bg-white/[0.02] p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 border border-white/20 flex items-center justify-center bg-white/5">
                <span className="text-3xl">🏆</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Aerial Competition
                </h3>
                <p className="text-sm text-zinc-500">1st Place Victory</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              First place finish validating years of iterative design, rigorous
              testing, and team execution under competition pressure.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                2024 Victory
              </div>
            </div>
          </motion.div>

          {/* Years of Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border border-white/10 bg-white/[0.02] p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 border border-white/20 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-white">
                  4+
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Years of R&D
                </h3>
                <p className="text-sm text-zinc-500">Continuous Development</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Four years of designing and manufacturing UAVs, from initial
              concept to 400kg+ MTOW heavy-lift autonomous systems.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                Since 2021
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Our technology is built on years of hands-on engineering, academic
            rigor, and real-world competition testing—not just theoretical
            concepts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
