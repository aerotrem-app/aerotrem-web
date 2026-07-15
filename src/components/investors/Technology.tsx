"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    tag: "The Technology",
    title1: "Built for the",
    title2: "Impossible",
    sub: "5 years of development. Transitioning from composite aerodynamics to fully validated physical dynamic thrust calibrations—constantly pushing the limits of tactical autonomous flight.",
    features: [
      { title: "Tilt-Wing VTOL", desc: "Aero-optimized tilt-wing architecture for seamless transition between vertical takeoff and highly efficient wing-borne cruise configurations." },
      { title: "Precision Navigation", desc: "Integrated sensor suite with LIDAR and optical sensors running optimized navigation algorithms for precise pathing and obstacle avoidance." },
      { title: "High-Density Propulsion", desc: "Custom high-discharge lithium power system matched with heavy-lift, high-torque brushless powerplants validated on physical calibration stands." },
      { title: "Modular Payload", desc: "Modular payload bay sized up to 15 kg for tactical deployment, specialized medical first-response gear, or automated contact-based NDT inspection tools." }
    ],
    specsTitle: "Technical Specifications",
    specs: [
      { label: "Configuration", value: "Tilt-Wing eVTOL" },
      { label: "Max Payload", value: "15 kg (33 lbs)" },
      { label: "Thrust Platform", value: "40 kg Class" },
      { label: "Top Speed", value: "24 m/s (86 km/h)" },
      { label: "Endurance", value: "Up to 45 min" },
      { label: "Powerplant", value: "MAD Brushless Systems" }
    ],
    innovationsTitle: "Research Innovations",
    innovations: [
      { title: "Dynamic Thrust Calibration", desc: "Physical validation using an S-type load cell, Arduino logging, and dynamic motor telemetry test stands." },
      { title: "Lifting Body Airframe", desc: "Lightweight rib-and-spar wing assemblies optimized for aerodynamic transition efficiency." },
      { title: "Specialized Payloads", desc: "Modular mounting interfaces for autonomous contact-based sensor arrays (NDT) and rescue supplies." }
    ],
    compLabel: "Global Competition",
    compValue: "GoAERO 2026 Participant"
  },
  fr: {
    tag: "La Technologie",
    title1: "Conçue pour l'",
    title2: "Impossible",
    sub: "5 ans de développement[cite: 6]. Transition entre l'aérodynamique composite et des étalonnages physiques de poussée dynamique — repoussant constamment les limites du vol autonome tactique.",
    features: [
      { title: "ADAV à aile basculante", desc: "Architecture d'aile basculante optimisée pour une transition fluide entre décollage vertical et vol de croisière à voilure fixe." },
      { title: "Navigation de précision", desc: "Suite de capteurs intégrés avec LIDAR exécutant des algorithmes optimisés pour le guidage précis et l'évitement d'obstacles." },
      { title: "Propulsion haute densité", desc: "Alimentation lithium à décharge élevée associée à des motorisations brushless à couple élevé validées sur bancs de calibration." },
      { title: "Charge utile modulaire", desc: "Baie modulable jusqu'à 15 kg pour déploiement tactique, matériel d'urgence médicale ou outils d'inspection CND robotisés." }
    ],
    specsTitle: "Spécifications Techniques",
    specs: [
      { label: "Configuration", value: "ADAVe à aile basculante" },
      { label: "Charge Utile Max", value: "15 kg (33 lbs)" },
      { label: "Banc de Poussée", value: "Classe 40 kg" },
      { label: "Vitesse Max", value: "24 m/s (86 km/h)" },
      { label: "Autonomie", value: "Jusqu'à 45 min" },
      { label: "Propulsion", value: "Systèmes Brushless MAD" }
    ],
    innovationsTitle: "Innovations de Recherche",
    innovations: [
      { title: "Calibration de Poussée", desc: "Validation physique à l'aide d'un capteur de force en S, acquisition Arduino et télémétrie moteur dynamique." },
      { title: "Cellule Portante", desc: "Assemblages d'ailes légers à nervures et longerons optimisés pour la transition aérodynamique." },
      { title: "Sonde de Contact Robotisée", desc: "Interfaces de montage modulaires pour réseaux de capteurs de contact (CND) et matériel de secours." }
    ],
    compLabel: "Compétition Mondiale",
    compValue: "Participant GoAERO 2026"
  }
};

export default function Technology() {
  const { lang } = useLanguage();
  const t = translations[lang as "en" | "fr"];

  const icons = [
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" key="1"><path d="M16 28V4M8 12l8-8 8 8M6 28h20" /></svg>,
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" key="2"><circle cx="16" cy="16" r="12" /><circle cx="16" cy="16" r="4" /><path d="M16 4v4M16 24v4M4 16h4M24 16h4" /></svg>,
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" key="3"><path d="M20 4L12 16h8l-8 12" strokeLinejoin="round" /></svg>,
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" key="4"><rect x="6" y="8" width="20" height="16" rx="2" /><path d="M16 12v8M12 16h8" /></svg>
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-cyan-500" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-500">{t.tag}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            {t.title1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">{t.title2}</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl">{t.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-cyan-500/50 hover:bg-cyan-500/5"
            >
              <div className="absolute top-0 right-0 h-12 w-12 border-b border-l border-white/10 transition-colors group-hover:border-cyan-500/30" />
              <div className="text-cyan-500 mb-6 transition-transform group-hover:scale-110">{icons[i]}</div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 border border-white/10 bg-white/[0.02] p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-8">{t.specsTitle}</h3>
              <div className="space-y-4">
                {t.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">{spec.label}</span>
                    <span className="font-display text-lg font-bold text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-8">{t.innovationsTitle}</h3>
              <div className="space-y-6">
                {t.innovations.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 h-2 w-2 rounded-full bg-cyan-500 mt-2" />
                    <div>
                      <h4 className="font-display text-sm font-bold uppercase text-white">{item.title}</h4>
                      <p className="text-sm text-zinc-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] px-4 py-3">
                <span className="font-display text-lg font-bold text-cyan-500">GO</span>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">{t.compLabel}</div>
                  <div className="text-sm text-white">{t.compValue}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}