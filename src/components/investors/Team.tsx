"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.05)_0%,transparent_60%)]" />

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
              Leadership
            </span>
            <div className="h-px w-12 bg-cyan-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            The Team
          </h2>
        </motion.div>

        {/* Founder card - large, featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Founder Photo */}
          <div className="relative aspect-square lg:aspect-auto lg:min-h-[500px] border border-white/10 bg-white/[0.02] overflow-hidden">
            <Image
              src="/team/zak.jpg"
              alt="Zak Tremblay - Founder & CEO"
              fill
              className="object-cover object-left"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 h-8 w-8 border-l border-t border-cyan-500/30" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-r border-b border-cyan-500/30" />
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-cyan-500" />
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-500">
                Founder & CEO
              </span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
              Zak Tremblay
            </h3>

            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              McGill University mechanical engineering undergraduate with 4+
              years of hands-on UAV design and manufacturing experience. Founded
              the McGill Drone Club, led teams to multiple competition
              victories, and completed an engineering internship at the Canadian
              Space Agency.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Education", value: "McGill Engineering" },
                  { label: "Experience", value: "Canadian Space Agency" },
                  { label: "UAV Expertise", value: "4+ Years" },
                  { label: "Competition Wins", value: "3 Total" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                      {item.label}
                    </div>
                    <div className="text-sm text-white font-medium mt-1">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/zachary-tremblay/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-zinc-400 hover:border-cyan-500/50 hover:text-white transition-all"
              >
                LinkedIn →
              </a>
              <a
                href="https://www.goaeroprize.com/post/meet-the-teams-team-tremblay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-zinc-400 hover:border-cyan-500/50 hover:text-white transition-all"
              >
                GoAERO Feature →
              </a>
            </div>
          </div>
        </motion.div>

        {/* Advisory/Mentors section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-white/10 bg-white/[0.02] p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
              Advisors & Mentors
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Supported by industry experts and academic advisors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                role: "Technical Advisors",
                org: "GoAERO Expert Network",
                description:
                  "Access to aerospace engineers and autonomous systems specialists through the global competition program.",
              },
              {
                role: "Academic Support",
                org: "McGill University",
                description:
                  "Research facilities, engineering faculty guidance, and student innovation resources.",
              },
              {
                role: "Industry Mentors",
                org: "Aerospace Professionals",
                description:
                  "Guidance on certification, manufacturing, and commercial deployment strategies.",
              },
            ].map((advisor, i) => (
              <div
                key={i}
                className="text-center p-6 border border-white/5 bg-white/[0.01]"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-500 mb-2">
                  {advisor.role}
                </div>
                <div className="font-display text-lg font-bold text-white">
                  {advisor.org}
                </div>
                <p className="mt-3 text-sm text-zinc-500">
                  {advisor.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quote from mentor/inspiration */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl text-zinc-400 italic max-w-3xl mx-auto">
            "The fascination of flight can't be expressed with words. It really
            lies beyond the capabilities of human endeavor."
          </p>
          <footer className="mt-6">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              — Sir Richard Branson
            </span>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
