"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </div>
              <span className="font-display font-bold text-xl tracking-[0.15em] text-white">
                AEROTREM
              </span>
            </Link>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
              Engineering the future of autonomous aerospace emergency response.
              Based in Montreal, building for the world.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs text-zinc-500">
                All systems operational
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Investors", href: "/investors" },
                { label: "Enterprise", href: "/partners" },
                { label: "Contact", href: "/investors#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-cyan-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/zachary-tremblay/",
                },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-cyan-500 transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <span className="text-xs">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-zinc-600">
            © {currentYear} Aerotrem Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-zinc-600">
              Montreal, QC / 45.50°N
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
