"use client";

import { motion } from "framer-motion";

export default function PartnerCTA() {
  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
            Start the Conversation
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Interested in partnering with us to improve emergency response in
            your community? Get in touch.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-12 border border-white/10 bg-white/[0.02] p-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-3 w-3 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              Contact Us
            </span>
          </div>

          <a
            href="mailto:email@soonavailable.com"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl text-white hover:text-zinc-300 transition-colors group"
          >
            <span className="font-mono">email@soonavailable.com</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <p className="mt-6 text-sm text-zinc-500">
            We typically respond within 1-2 business days.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
