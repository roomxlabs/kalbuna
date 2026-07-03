import Image from "next/image";
import Reveal from "./Reveal";

const products = [
  { src: "/assets/placeholders/shop-1.jpg", weight: "20 g", size: "Small Size" },
  { src: "/assets/placeholders/shop-2.jpg", weight: "100 g", size: "Regular Size" },
  { src: "/assets/placeholders/shop-3.jpg", weight: "200 g", size: "Large Size" },
];

export default function Shop() {
  return (
    // The whole section must fit one viewport with the cards side by side —
    // stacked cards split across pages in the client's paged review (revision 1).
    <section
      id="shop"
      className="bg-grain relative flex min-h-screen flex-col bg-navy py-10 text-cream md:py-14"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6">
        <Reveal>
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">Shop</h2>
        </Reveal>

        <div className="flex flex-1 items-center py-8">
          <div className="grid w-full grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
            {products.map((p, i) => (
              <Reveal key={p.weight} delay={i * 0.12}>
                <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-cream text-ink shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative aspect-[4/5] max-h-[46vh] w-full overflow-hidden">
                    <Image
                      src={p.src}
                      alt={`Kalbuna ${p.weight} pack`}
                      fill
                      sizes="(max-width: 1280px) 33vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col items-center justify-center gap-0.5 px-2 py-4 text-center md:gap-1 md:px-6 md:py-7">
                    <p className="font-serif text-xl leading-none sm:text-2xl md:text-3xl">
                      {p.weight}
                    </p>
                    <p className="font-serif text-xs italic text-ink/60 sm:text-sm md:text-lg">
                      {p.size}
                    </p>
                    <a
                      href="#"
                      className="mt-3 inline-block bg-ink px-3 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-cream transition-colors duration-300 hover:bg-navy sm:px-5 md:mt-5 md:px-9 md:py-3 md:text-xs md:tracking-[0.25em]"
                    >
                      Shop Now
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
