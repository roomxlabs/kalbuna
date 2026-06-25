"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, type Variants } from "motion/react";

const navLinks = [
  { label: "About", href: "#story" },
  { label: "Contact", href: "#partner" },
  { label: "Shop", href: "#shop" },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const markIn: Variants = {
  hidden: { opacity: 0, scale: 0.86, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      id="top"
      className="bg-grain relative flex min-h-screen flex-col overflow-hidden bg-navy text-cream"
    >
      {/* ---- Nav ---- */}
      <nav className="relative z-20 flex w-full items-center justify-between gap-4 px-8 pt-7 pb-3 md:grid md:grid-cols-3 md:px-12 md:pt-11 md:pb-4">
        {/* Left: links (desktop) — Morisawa serif italic */}
        <ul className="hidden items-center gap-10 font-serif text-[clamp(1rem,1.6vw,1.6rem)] italic md:flex lg:gap-14">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="opacity-90 transition-opacity duration-200 hover:opacity-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Center: wordmark */}
        <a
          href="#top"
          aria-label="Kalbuna home"
          className="justify-self-start md:justify-self-center"
        >
          <Image
            src="/assets/img/wordmark-white.png"
            alt="KALBUNA"
            width={842}
            height={165}
            priority
            className="h-[clamp(2rem,5vw,6rem)] w-auto"
          />
        </a>

        {/* Right: icons + mobile toggle */}
        <div className="flex items-center justify-end gap-6">
          <button type="button" aria-label="Search" className="transition-transform duration-200 hover:scale-110">
            <Image src="/assets/icons/search.png" alt="" width={307} height={298} className="h-6 w-6 object-contain md:h-7 md:w-7" />
          </button>
          <button type="button" aria-label="Account" className="transition-transform duration-200 hover:scale-110">
            <Image src="/assets/icons/person.png" alt="" width={253} height={298} className="h-6 w-6 object-contain md:h-7 md:w-7" />
          </button>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-6 w-7 flex-col justify-between md:hidden"
          >
            <span className={`h-0.5 w-full bg-cream transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-cream transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-cream transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="relative z-20 flex flex-col items-center gap-4 pb-6 font-serif text-xl italic md:hidden">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)} className="opacity-90 hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* ---- Center mark + tagline ---- */}
      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={markIn} className="flex flex-1 items-center justify-center">
          <Image
            src="/assets/img/logo-mark-white.png"
            alt="Kalbuna tuna mark"
            width={287}
            height={582}
            priority
            className="h-[44vh] max-h-[400px] w-auto min-h-[230px] object-contain"
          />
        </motion.div>

        {/* Tagline — Telegraf sans (not serif) */}
        <motion.p
          variants={fadeUp}
          className="mt-5 text-center text-[clamp(1.3rem,2.5vw,2.5rem)] font-medium"
        >
          Crafted From Real Tuna Bones.
        </motion.p>
      </motion.div>
    </header>
  );
}
