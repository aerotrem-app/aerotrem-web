"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    tag: "Leadership",
    title: "The Team",
    role: "Founder & CEO",
    bio: "McGill University mechanical engineering undergraduate with hands-on UAV design, hardware integration, and telemetry validation experience[cite: 4]. Founded the McGill Drone Club[cite: 4], led vertical flight development teams, and conducted award-winning research on dynamic propulsion test stands.",
    specs: [
      { label: "Education", value: "McGill Engineering" },
      { label: "Research", value: "Lichten Award Winner" },
      { label: "UAV Expertise", value: "Hardware & Avionics" },
      { label: "VFS DBVF", value: "3rd Place Finish" }
    ],
    advisorsTitle: "Advisors & Mentors",
    advisorsSub: "Supported by industry experts and academic advisors",
    advisors: [
      { role: "Technical Advisors", org: "GoAERO Expert Network", desc: "Access to aerospace engineers and autonomous systems specialists through the global competition program." },
      { role: "Academic Support", org: "McGill University", desc: "Research facilities, engineering faculty guidance, and student innovation resources." },
      { role: "Industry Mentors", org: "Aerospace Professionals", desc: "Guidance on certification, manufacturing, and commercial deployment strategies." }
    ],
    quote: "The fascination of flight can't be expressed with words. It really lies beyond the capabilities of human endeavor."
  },
  fr: {
    tag: "Direction",
    title: "L'Équipe",
    role: "Fondateur & PDG",
    bio: "Étudiant de premier cycle en génie mécanique à l'Université McGill, possédant une expérience pratique dans la conception d'UAV, l'intégration matérielle et la validation de télémétrie[cite: 4]. Fondateur du McGill Drone Club[cite: 4], leader d'équipes de vol vertical et auteur de recherches primées sur les bancs d'essai de propulsion.",
    specs: [
      { label: "Éducation", value: "Génie McGill" },
      { label: "Recherche", value: "Lauréat Prix Lichten" },
      { label: "Expertise UAV", value: "Matériel & Avionique" },
      { label: "VFS DBVF", value: "3e Place Obtenue" }
    ],
    advisorsTitle: "Conseillers & Mentors",
    advisorsSub: "Soutenus par des experts de l'industrie et des conseillers universitaires",
    advisors: [
      { role: "Conseillers techniques", org: "Réseau d'experts GoAERO", desc: "Accès à des ingénieurs aérospatiaux et spécialistes des systèmes autonomes via le programme de compétition mondial." },
      { role: "Soutien académique", org: "Université McGill", desc: "Infrastructures de recherche, encadrement de la faculté et ressources d'innovation étudiante." },
      { role: "Mentors de l'industrie", org: "Professionnels aérospatiaux", desc: "Conseils sur la certification, la fabrication et les stratégies de déploiement commercial." }
    ],
    quote: "La fascination du vol ne peut s'exprimer avec des mots. Elle se situe véritablement au-delà des capacités de l'effort humain."
  }
};

export default function Team() {
  const { lang } = useLanguage();
  const t = translations[lang as "en" | "fr"];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-cyan-500" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-500">{t.tag}</span>
            <div className="h-px w-12 bg-cyan-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">{t.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <div className="relative aspect-square lg:aspect-auto lg:min-h-[500px] border border-white/10 bg-white/[0.02] overflow-hidden">
            <Image
              src="/team/zak.jpg"
              alt="Zak Tremblay - Founder & CEO"
              fill
              className="object-cover object-left"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 h-8 w-8 border-l border-t border-cyan-500/30" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-r border-b border-cyan-500/30" />
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-cyan-500" />
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-500">{t.role}</span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">Zak Tremblay</h3>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">{t.bio}</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {t.specs.map((item, i) => (
                  <div key={i}>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">{item.label}</div>
                    <div className="text-sm text-white font-medium mt-1">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-white/10 bg-white/[0.02] p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">{t.advisorsTitle}</h3>
            <p className="mt-2 text-sm text-zinc-500">{t.advisorsSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.advisors.map((advisor, i) => (
              <div key={i} className="text-center p-6 border border-white/5 bg-white/[0.01]">
                <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-500 mb-2">{advisor.role}</div>
                <div className="font-display text-lg font-bold text-white">{advisor.org}</div>
                <p className="mt-3 text-sm text-zinc-500">{advisor.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl text-zinc-400 italic max-w-3xl mx-auto">&ldquo;{t.quote}&rdquo;</p>
          <footer className="mt-6">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">— Sir Richard Branson</span>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}