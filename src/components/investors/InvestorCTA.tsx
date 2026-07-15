"use client";

import { motion } from "framer-motion";

export default function InvestorCTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15)_0%,transparent_60%)]" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 mb-8"
        >
          <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-500">
            Seed Round Open
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight"
        >
          Join the
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
            Mission
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto"
        >
          We&apos;re raising our seed round to bring autonomous emergency
          response from prototype to production. Be part of the future of
          aerospace.
        </motion.p>

        {/* Investment highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Market Opportunity",
              description:
                "$12B+ emergency medical services market with growing urban density.",
            },
            {
              title: "Competitive Edge",
              description:
                "5+ years of design-build R&D. Proven team with international track distinctions.",
            },
            {
              title: "Clear Roadmap",
              description:
                "Transitioning structural testing to targeted pilot programs with industrial and response partners.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/[0.02] p-6 text-left"
            >
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-cyan-500">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 border border-cyan-500/30 bg-cyan-500/10 p-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-500">
              Get In Touch
            </span>
          </div>

          <a
            href="mailto:email@soonavailable.com"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl text-white hover:text-cyan-400 transition-colors group"
          >
            <span className="font-mono">email@soonavailable.com</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <p className="mt-6 text-sm text-zinc-500">
            We&apos;ll send you our pitch deck and schedule a call to discuss
            the opportunity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}