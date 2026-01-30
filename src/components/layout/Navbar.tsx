"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isInvestors = pathname === "/investors" || pathname === "/";
  const isPartners = pathname === "/partners";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] group-hover:scale-125 transition-transform" />
                <div className="absolute inset-0 h-3 w-3 rounded-full bg-cyan-400 animate-ping opacity-30" />
              </div>
              <span className="font-display font-bold text-xl tracking-[0.15em] text-white">
                AEROTREM
              </span>
            </Link>

            {/* Center: Audience Toggle */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center border border-white/10 bg-white/5 p-1">
                <Link
                  href="/investors"
                  className={cn(
                    "px-6 py-2 text-sm font-medium transition-all",
                    isInvestors
                      ? "bg-cyan-500 text-black font-bold"
                      : "text-zinc-400 hover:text-white",
                  )}
                >
                  Investors
                </Link>
                <Link
                  href="/partners"
                  className={cn(
                    "px-6 py-2 text-sm font-medium transition-all",
                    isPartners
                      ? "bg-white text-black font-bold"
                      : "text-zinc-400 hover:text-white",
                  )}
                >
                  Enterprise
                </Link>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href={isInvestors ? "/investors#contact" : "/partners#contact"}
                className={cn(
                  "px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all",
                  isInvestors
                    ? "border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black"
                    : "border border-white text-white hover:bg-white hover:text-black",
                )}
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <motion.div
                animate={
                  mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                className="w-6 h-0.5 bg-white"
              />
              <motion.div
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white"
              />
              <motion.div
                animate={
                  mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className="w-6 h-0.5 bg-white"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-20"
          >
            <div className="flex flex-col items-center gap-8 p-8">
              <Link
                href="/investors"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-display font-bold uppercase tracking-wider",
                  isInvestors ? "text-cyan-500" : "text-white",
                )}
              >
                Investors
              </Link>
              <Link
                href="/partners"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-display font-bold uppercase tracking-wider",
                  isPartners ? "text-cyan-500" : "text-white",
                )}
              >
                Enterprise Partners
              </Link>
              <Link
                href={isInvestors ? "/investors#contact" : "/partners#contact"}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 border border-cyan-500 px-8 py-4 text-cyan-500 font-display font-bold uppercase tracking-wider"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
