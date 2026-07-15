"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Story from "@/components/landing/Story";
import TrustGrid from "@/components/landing/TrustGrid";

const translations = {
  en: {
    heroTitle1: "The Future of",
    heroTitle2: "Emergency",
    heroTitle3: "Response",
    heroSub: "McGill student engineering team developing heavy-lift autonomous flight systems and contact-based industrial NDT drone infrastructure.",
    investorPortal: "Investor Portal",
    enterprisePortal: "Enterprise Program",
    ndtLabel: "NDT Inspections (AeroSpec)",
    goaeroLabel: "GoAERO Flight Team",
    aboutLabel: "About Systems",
    contactLabel: "Contact Operations",
    seedBadge: "Seed Round",
    partnershipBadge: "Partnerships",
    industrialBadge: "Industrial",
    rdBadge: "R&D Track",
    companyBadge: "Team",
    hqBadge: "HQ",
  },
  fr: {
    heroTitle1: "L'Avenir de la",
    heroTitle2: "Réponse d'",
    heroTitle3: "Urgence",
    heroSub: "Équipe d'ingénierie étudiante de McGill développant des systèmes de vol autonomes de forte charge et une infrastructure de drones CND industriels.",
    investorPortal: "Portail Investisseurs",
    enterprisePortal: "Programme Entreprise",
    ndtLabel: "Inspections CND (AeroSpec)",
    goaeroLabel: "Équipe de Vol GoAERO",
    aboutLabel: "À Propos",
    contactLabel: "Opérations Contact",
    seedBadge: "Financement",
    partnershipBadge: "Partenariats",
    industrialBadge: "Industriel",
    rdBadge: "Axe R&D",
    companyBadge: "Équipe",
    hqBadge: "QG",
  }
};

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)]" />
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ boxShadow: "0 0 20px 2px rgba(6,182,212,0.3)" }}
      />
    </div>
  );
}

function Particles() {
  const particleData = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: (i * 6.67 + 3) % 100,
    top: (i * 7 + 5) % 100,
    duration: 4 + (i % 3),
    delay: (i * 0.2) % 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particleData.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-cyan-500/30"
          style={{ left: `${particle.left}%`, top: `${particle.top}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const { lang, setLang } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { label: t.investorPortal, href: "/investors", badge: t.seedBadge, highlight: true },
    { label: t.enterprisePortal, href: "/partners", badge: t.partnershipBadge, highlight: false },
    { label: t.ndtLabel, href: "/aerospec", badge: t.industrialBadge, highlight: false },
    { label: t.goaeroLabel, href: "/goaero", badge: t.rdBadge, highlight: false },
    { label: t.aboutLabel, href: "/about", badge: t.companyBadge, highlight: false },
    { label: t.contactLabel, href: "/contact", badge: t.hqBadge, highlight: false },
  ];

  const carouselItems = [...menuItems, ...menuItems, ...menuItems];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Script 
        type="module" 
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" 
        strategy="afterInteractive"
      />
      
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <GridBackground />
        <Particles />

        {/* Language Selector Controls (Pushed further down on large viewports) */}
        <div className="absolute top-32 sm:top-44 md:top-52 lg:top-64 xl:top-72 right-8 z-30 flex gap-2 font-mono text-xs border border-white/10 bg-black/50 p-1 backdrop-blur-sm">
          <button 
            onClick={() => setLang("en")} 
            className={`px-3 py-1 transition-colors ${lang === "en" ? "bg-cyan-500 text-black font-bold" : "text-zinc-400 hover:text-white"}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLang("fr")} 
            className={`px-3 py-1 transition-colors ${lang === "fr" ? "bg-cyan-500 text-black font-bold" : "text-zinc-400 hover:text-white"}`}
          >
            FR
          </button>
        </div>

        {/* Hero Content Wrapper (Expanded padding-top for lg and xl viewports) */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center pt-36 sm:pt-48 md:pt-56 lg:pt-72 xl:pt-80 pb-16">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-6 px-6"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.9] tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">
                {t.heroTitle1}
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                {t.heroTitle2}
              </span>
              <br />
              <span className="text-white">{t.heroTitle3}</span>
            </h1>
            <p className="mt-4 text-xs md:text-sm text-zinc-400 max-w-xl mx-auto px-4 leading-relaxed font-mono">
              {t.heroSub}
            </p>
          </motion.div>

          {/* INTERACTIVE 3D COMPONENT VIEWPORT WITH 90-DEGREE INITIAL ANGLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-2xl h-[280px] sm:h-[360px] border border-white/10 bg-zinc-950/40 backdrop-blur-sm mb-10 px-4 group"
          >
            <span className="absolute top-0 left-0 h-2 w-2 border-t border-l border-cyan-500" />
            <span className="absolute top-0 right-0 h-2 w-2 border-t border-r border-white/30" />
            <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-white/30" />
            <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-cyan-500" />
            
            <div className="absolute top-3 left-4 font-mono text-[9px] text-zinc-500 tracking-widest flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
              SYSTEM_GEOMETRY // INTERACTIVE_3D_MODEL
            </div>

            {mounted ? (
              <div 
                className="w-full h-full pt-6"
                dangerouslySetInnerHTML={{
                  __html: `
                    <model-viewer 
                      src="/3D_Files/Geometry.glb" 
                      camera-controls 
                      auto-rotate 
                      rotation-per-second="20deg"
                      camera-orbit="0deg 75deg auto"
                      orientation="45deg 90deg 105deg"
                      interaction-prompt="none"
                      shadow-intensity="1.5"
                      exposure="0.25"
                      environment-image="neutral"
                      style="width: 100%; height: 100%; background-color: transparent; --poster-color: transparent;"
                    ></model-viewer>
                  `
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-mono text-xs text-zinc-600 animate-pulse">
                LOADING AVIONICS...
              </div>
            )}
          </motion.div>

          {/* INFINITE ROLLING MENU CAROUSEL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full relative py-4 overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-black before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-black after:to-transparent after:z-20"
          >
            <motion.div
              className="flex gap-6 w-max px-4"
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {carouselItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`group relative block w-64 border p-5 font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                    item.highlight
                      ? "border-cyan-500/40 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-500"
                      : "border-white/10 bg-white/[0.01] hover:bg-white/5 hover:border-white/40"
                  }`}
                >
                  <span className={`absolute top-0 left-0 h-1 w-1 border-t border-l ${item.highlight ? 'border-cyan-400' : 'border-zinc-500'}`} />
                  <span className={`absolute bottom-0 right-0 h-1 w-1 border-b border-r ${item.highlight ? 'border-cyan-400' : 'border-zinc-500'}`} />
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] tracking-wider ${item.highlight ? 'text-cyan-500' : 'text-zinc-500'}`}>
                      // {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {item.label}
                    </span>
                    <span className="text-zinc-400 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 px-6"
          >
            {["McGill Engineering", "GoAERO Competition Track"].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-zinc-600">
                <div className="h-1 w-1 rounded-full bg-zinc-600" />
                <span className="font-mono text-xs uppercase tracking-widest">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* HOMEPAGE CONTENT SECTIONS */}
      <section className="bg-black relative z-10">
        <Story />
        <TrustGrid />
      </section>

      <Footer />
    </div>
  );
}