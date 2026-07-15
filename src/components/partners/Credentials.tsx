"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title: "Trusted Credentials",
    sub: "Built on a foundation of rigorous academic research, industry experience, and proven competition performance.",
    cards: [
      {
        header: "M",
        title: "McGill University",
        subtitle: "Research & Development",
        desc: "Founded at McGill's Faculty of Engineering[cite: 10]. Access to world-class research facilities, faculty advisors, and student innovation resources[cite: 10].",
        footer: "Mechanical Engineering"
      },
      {
        header: "🏅",
        title: "Lichten Award",
        subtitle: "Bell Canada",
        desc: "Awarded for outstanding research in dynamic motor thrust test stand instrumentation, dynamic calibration setups, and real-time telemetry logging.",
        footer: "2023 Research Excellence"
      },
      {
        header: "GO",
        title: "GoAERO Competition",
        subtitle: "Global Recognition",
        desc: "Selected for the global emergency response flyer competition[cite: 10]. Featured in official competition media and expert webinars[cite: 10].",
        link: "Read Feature ↗",
        url: "https://www.goaeroprize.com/post/meet-the-teams-team-tremblay"
      },
      {
        header: "VFS",
        title: "Vertical Flight Society",
        subtitle: "3rd Place Finish",
        desc: "Top 3 placement globally in the 2022 VFS Design-Build-Vertical-Flight (DBVF) competition with our initial drone design.",
        footer: "2022 DBVF Track"
      },
      {
        header: "🤝",
        title: "Development Track",
        subtitle: "Boeing Collaboration",
        desc: "Co-developing and validating heavy-lift flight platform architectures under an active aerospace development program.",
        footer: "Co-Development"
      },
      {
        header: "5",
        title: "Years of R&D",
        subtitle: "Continuous Iteration",
        desc: "Designing, manufacturing, and validating custom UAV architectures[cite: 10] backed by physical dynamic calibration stands and peer distinctions.",
        footer: "Since 2021"
      }
    ],
    trustText: "Our technology is built on dynamic, physical instrumentation, academic rigor, and real-world competition testing[cite: 10]—not theoretical concepts."
  },
  fr: {
    title: "Titres de Confiance",
    sub: "Bâti sur une base de recherche académique rigoureuse, de distinctions par les pairs et de validations physiques.",
    cards: [
      {
        header: "M",
        title: "Université McGill",
        subtitle: "Recherche & Développement",
        desc: "Fondé à la Faculté de génie de McGill[cite: 10]. Accès aux infrastructures de recherche de pointe, mentors académiques et incubateurs[cite: 10].",
        footer: "Génie Mécanique"
      },
      {
        header: "🏅",
        title: "Prix Lichten",
        subtitle: "Bell Canada",
        desc: "Décerné pour des recherches exceptionnelles sur l'instrumentation des bancs d'essai de poussée de moteurs et la modélisation en temps réel.",
        footer: "Excellence Recherche 2023"
      },
      {
        header: "GO",
        title: "Compétition GoAERO",
        subtitle: "Reconnaissance Mondiale",
        desc: "Sélectionné pour la compétition mondiale de véhicules aériens de secours[cite: 10]. Présenté dans les médias et webinaires officiels[cite: 10].",
        link: "Lire l'article ↗",
        url: "https://www.goaeroprize.com/post/meet-the-teams-team-tremblay"
      },
      {
        header: "VFS",
        title: "Vertical Flight Society",
        subtitle: "3e Place Mondiale",
        desc: "Classement dans le top 3 mondial de la compétition DBVF en 2022 avec notre première structure aéronautique.",
        footer: "Volet DBVF 2022"
      },
      {
        header: "🤝",
        title: "Axe de Développement",
        subtitle: "Collaboration Boeing",
        desc: "Co-développement et validation d'architectures de vol de forte charge dans le cadre d'un programme d'ingénierie actif.",
        footer: "Co-Développement"
      },
      {
        header: "5",
        title: "Années de R&D",
        subtitle: "Itération Continue",
        desc: "Conception, fabrication et calibration d'UAV complexes[cite: 10] appuyés par des bancs de test physiques et distinctions scientifiques.",
        footer: "Depuis 2021"
      }
    ],
    trustText: "Notre technologie repose sur des mesures physiques fiables, une instrumentation de précision et une validation continue[cite: 10] — pas sur des théories."
  }
};

export default function Credentials() {
  const { lang } = useLanguage();
  const t = translations[lang as "en" | "fr"];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">{t.title}</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">{t.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 border border-white/20 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-white">{card.header}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{card.title}</h3>
                  <p className="text-sm text-zinc-500">{card.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
              <div className="mt-6 pt-4 border-t border-white/10">
                {card.link && card.url ? (
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {card.link}
                  </a>
                ) : (
                  <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{card.footer}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 max-w-2xl mx-auto">{t.trustText}</p>
        </motion.div>
      </div>
    </section>
  );
}