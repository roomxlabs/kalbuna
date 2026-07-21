import Image from "next/image";
import Reveal from "./Reveal";

const products = [
  { src: "/assets/img/shop-20g.jpeg", weight: "20 g", size: "Small Size" },
  { src: "/assets/img/shop-100g.jpeg", weight: "100 g", size: "Regular Size" },
  { src: "/assets/img/shop-200g.jpeg", weight: "200 g", size: "Large Size" },
];

/* Client-supplied marketplace marks (_source/*.png), pre-cropped to a shared
   560px square so they keep the design's relative sizing. Rendered as a
   currentColor mask so they flip cream -> navy with the pill's hover state. */
function MarketIcon({ src }: { src: string }) {
  return (
    <span
      aria-hidden
      className="h-8 w-8 shrink-0 bg-current"
      style={{
        WebkitMask: `url(${src}) center / contain no-repeat`,
        mask: `url(${src}) center / contain no-repeat`,
      }}
    />
  );
}

const markets: { label: string; href: string; icon: string }[] = [
  { label: "Shopee", href: "https://id.shp.ee/beu7thaG", icon: "/assets/icons/shopee.png" },
  { label: "Tokopedia", href: "https://tk.tokopedia.com/ZSX4UqM4v/", icon: "/assets/icons/tokopedia.png" },
  { label: "Tiktok Shop", href: "https://www.tiktok.com/@kalbuna.id?_r=1&_t=ZS-97yBhQx0sts", icon: "/assets/icons/tiktok.png" },
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
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full border border-cream/70 px-6 py-3.5 text-lg font-medium transition-colors duration-300 hover:bg-cream hover:text-navy md:py-4 md:text-xl"
              >
                <MarketIcon src={m.icon} />
                <span>{m.label}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
