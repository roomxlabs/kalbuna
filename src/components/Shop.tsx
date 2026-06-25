import Image from "next/image";
import Reveal from "./Reveal";

const products = [
  { src: "/assets/placeholders/shop-1.jpg", weight: "20 g", size: "Small Size" },
  { src: "/assets/placeholders/shop-2.jpg", weight: "100 g", size: "Regular Size" },
  { src: "/assets/placeholders/shop-3.jpg", weight: "200 g", size: "Large Size" },
];

export default function Shop() {
  return (
    <section id="shop" className="bg-grain relative bg-navy py-20 text-cream md:py-28">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">Shop</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {products.map((p, i) => (
            <Reveal key={p.weight} delay={i * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-cream text-ink shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={p.src}
                    alt={`Kalbuna ${p.weight} pack`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col items-center gap-1 px-6 py-7 text-center">
                  <p className="font-serif text-3xl leading-none">{p.weight}</p>
                  <p className="font-serif text-lg italic text-ink/60">{p.size}</p>
                  <a
                    href="#"
                    className="mt-5 inline-block bg-ink px-9 py-3 text-xs font-medium uppercase tracking-[0.25em] text-cream transition-colors duration-300 hover:bg-navy"
                  >
                    Shop Now
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
