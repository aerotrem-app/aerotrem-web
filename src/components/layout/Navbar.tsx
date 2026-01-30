"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Importing the utility we just made

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50 backdrop-blur-md"
    >
      {/* Logo Area */}
      <Link href="/" className="group flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] group-hover:scale-125 transition-transform" />
        <span className="font-display font-bold text-xl tracking-widest text-white">
          AEROTREM
        </span>
      </Link>

      {/* Navigation Links - Hidden on mobile, visible on desktop */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <Link href="#vision" className="hover:text-cyan-400 transition-colors">
          Vision
        </Link>
        <Link
          href="#technology"
          className="hover:text-cyan-400 transition-colors"
        >
          Technology
        </Link>
        <Link href="#trust" className="hover:text-cyan-400 transition-colors">
          Reliability
        </Link>
      </div>

      {/* CTA Button */}
      <button className="hidden md:block rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
        Partner Access
      </button>
    </motion.nav>
  );
}
