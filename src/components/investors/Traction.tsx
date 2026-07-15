"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    tag: "Track Record",
    title: "Proven Execution",
    sub: "From university lab to global competition. A track record of building, competing, and validating.",
    currentBadge: "Current",
    timeline: [
      { year: "2021", title: "McGill Drone Club Founded", desc: "Started from scratch, building the foundation for competition-ready UAV development[cite: 6].", milestone: false },
      { year: "2022", title: "VFS DBVF — 3rd Place Finish", desc: "First major drone build placed top 3 at the Vertical Flight Society student challenge[cite: 6].", milestone: true },
      { year: "2023", title: "Lichten Award Distinction", desc: "Awarded the Lichten Award by Bell Canada for advanced research on dynamic test stand instrumentation.", milestone: true },
      { year: "2024", title: "GoAERO Selection", desc: "Accepted into the global emergency response flyer competition. Featured in official media[cite: 6].", milestone: true },
      { year: "2026", title: "Seed Round", desc: "Raising capital to scale autonomous emergency response and contact-based NDT flight infrastructure[cite: 6].", milestone: true, current: true }
    ],
    stats: [
      { value: "5+", label: "Years R&D" },
      { value: "2", label: "Key Distinctions" },
      { value: "1", label: "Global Selection" },
      { value: "40kg", label: "Dynamic Thrust Stand" }
    ],
    featured: "Featured In",
    badgeGo: "Meet the Teams",
    badgeMcGill: "Student Research",
    badgeVfs: "Competition Track"
  },
  fr: {
    tag: "Parcours",
    title: "Exécution Prouvée",
    sub: "Du laboratoire universitaire aux compétitions mondiales. Un historique d'ingénierie, de rigueur et de validation.",
    currentBadge: "Actuel",
    timeline: [
      { year: "2021", title: "Fondation du McGill Drone Club", desc: "Développement en partant de zéro d'UAV complexes prêts pour les défis étudiants[cite: 6].", milestone: false },
      { year: "2022", title: "VFS DBVF — 3e Place Globale", desc: "La première conception d'UAV de l'équipe atteint le top 3 mondial de la Vertical Flight Society[cite: 6].", milestone: true },
      { year: "2023", title: "Distinction du Prix Lichten", desc: "Reçu le prix Lichten de Bell Canada pour l'instrumentation et la calibration de poussée dynamique.", milestone: true },
      { year: "2024", title: "Sélection GoAERO", desc: "Intégration de la compétition internationale GoAERO. Mise en avant dans les médias officiels[cite: 6].", milestone: true },
      { year: "2026", title: "Levée d'Amorçage", desc: "Financement pour le déploiement d'AeroSpec (CND par contact) et des systèmes de sauvetage GoAERO[cite: 6].", milestone: true, current: true }
    ],
    stats: [
      { value: "5+", label: "Années de R&D" },
      { value: "2", label: "Distinctions Clés" },
      { value: "1", label: "Sélection Mondiale" },
      { value: "40kg", label: "Banc de Poussée" }
    ],
    featured: "Présenté Dans",
    badgeGo: "Rencontrez les Équipes",
    badgeMcGill: "Recherche Étudiante",
    badgeVfs: "Volet Compétition"
  }
};

export default function Traction() {
  const { lang } = useLanguage();
  const t = translations[lang as "en" | "fr"];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

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
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">{t.sub}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-white/20 to-transparent hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {t.timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${i % 2 === 0 ? "" : "lg:text-right"}`}
              >
                <div className={`${i % 2 === 0 ? "lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}>
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
                        <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-500">{t.currentBadge}</span>
                      </div>
                    )}

                    <div className="font-mono text-xs text-cyan-500 tracking-widest mb-2">{item.year}</div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">{item.title}</h3>
                    <p className="mt-2 text-zinc-400 text-sm">{item.desc}</p>
                  </div>
                </div>

                <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block ${item.milestone || item.current ? "z-10" : ""}`}>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {t.stats.map((stat, i) => (
            <div key={i} className="text-center border border-white/10 bg-white/[0.02] p-6">
              <div className="font-display text-4xl font-bold text-cyan-500">{stat.value}</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">{t.featured}</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a
              href="https://www.goaeroprize.com/post/meet-the-teams-team-tremblay"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border border-white/10 bg-white/[0.02] px-6 py-4 transition-all hover:border-cyan-500/50"
            >
              <span className="font-display text-2xl font-bold text-cyan-500">GO</span>
              <div className="text-left">
                <div className="text-sm text-white font-medium">GoAERO</div>
                <div className="text-xs text-zinc-500">{t.badgeGo}</div>
              </div>
              <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2">↗</span>
            </a>
            <div className="flex items-center gap-3 border border-white/10 bg-white/[0.02] px-6 py-4">
              <span className="font-display text-xl font-bold text-white">McGill</span>
              <div className="text-left">
                <div className="text-sm text-white font-medium">Engineering</div>
                <div className="text-xs text-zinc-500">{t.badgeMcGill}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 border border-white/10 bg-white/[0.02] px-6 py-4">
              <span className="font-display text-xl font-bold text-white">VFS</span>
              <div className="text-left">
                <div className="text-sm text-white font-medium">Vertical Flight</div>
                <div className="text-xs text-zinc-500">{t.badgeVfs}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}