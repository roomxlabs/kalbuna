import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

const products = [
  { src: "/assets/placeholders/shop-1.jpg", weight: "20 g", size: "Small Size" },
  { src: "/assets/placeholders/shop-2.jpg", weight: "100 g", size: "Regular Size" },
  { src: "/assets/placeholders/shop-3.jpg", weight: "200 g", size: "Large Size" },
];

/* Generic placeholder marks (cream stroke, flip to navy on hover). Swap for the
   real Shopee / Tokopedia / TikTok brand logos once the client supplies them. */
function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}
function ShopeeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.5 10a2.5 2.5 0 0 1 5 0M8.8 10h6.4l-.5 5.6a1 1 0 0 1-1 .9h-3.4a1 1 0 0 1-1-.9L8.8 10Z" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
      <path d="M3 4h2l2.2 11a1 1 0 0 0 1 .8h8.4a1 1 0 0 0 1-.8L19 8H6" />
    </svg>
  );
}

const markets: { label: string; href: string; icon: ReactNode }[] = [
  { label: "Shopee", href: "#", icon: <ShopeeIcon /> },
  { label: "Tokopedia", href: "#", icon: <BagIcon /> },
  { label: "Tiktok Shop", href: "#", icon: <CartIcon /> },
];

export default function Shop() {
  // Full-page navy panel (rev 2, page 3): product cards across the top, then a
  // "Shop On Marketplace" heading and a row of marketplace links. Cards stack in
  // a single centered column on mobile; from sm+ they sit three across.
  return (
    <section
      id="shop"
      className="bg-grain relative flex min-h-screen flex-col justify-center bg-navy py-14 text-cream md:py-20"
    >
      <div className="relative z-10 flex w-full flex-col px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Product cards */}
        <div className="mx-auto grid w-full max-w-sm grid-cols-1 gap-5 sm:max-w-none sm:grid-cols-3 sm:gap-5 lg:gap-8">
          {products.map((p, i) => (
            <Reveal key={p.weight} delay={i * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden bg-cream text-ink shadow-lg">
                {/* Near-square image like the design (rev 2, page 3); max-h keeps
                    the section single-viewport on shorter screens */}
                <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[14/15] md:max-h-[56vh]">
                  <Image
                    src={p.src}
                    alt={`Kalbuna ${p.weight} pack`}
                    fill
                    sizes="(max-width: 1280px) 33vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Label bar — Morisawa Role Serif (weight) + serif italic (size) */}
                <div className="flex flex-col items-center gap-0.5 px-2 py-4 text-center md:py-5">
                  <p className="font-serif text-2xl leading-none md:text-3xl">
                    {p.weight}
                  </p>
                  <p className="font-serif text-sm italic text-ink/60 md:text-base">
                    {p.size}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Shop On Marketplace (Telegraf sans) */}
        <Reveal delay={0.1}>
          <h2 className="mt-14 text-center text-3xl font-medium tracking-tight md:mt-20 md:text-5xl">
            Shop On Marketplace
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          {/* Wide gaps between the pills so each reads as a shorter capsule,
              matching the design's proportions */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8 md:mt-10 md:gap-14 lg:gap-24">
            {markets.map((m) => (
              <a
                key={m.label}
                href={m.href}
                className="flex items-center justify-center gap-3 rounded-full border border-cream/70 px-6 py-3.5 text-lg font-medium transition-colors duration-300 hover:bg-cream hover:text-navy md:py-4 md:text-xl"
              >
                {m.icon}
                <span>{m.label}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
