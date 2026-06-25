import Image from "next/image";
import Reveal from "./Reveal";

const paragraphs = [
  "At Kalbuna, we believe that every part of nature has its purpose, including tuna bones.",
  "During our journey in the seafood industry, we often saw tuna bones that were not used, even though they are rich in natural nutrients and authentic umami.",
  "It inspired us to develop Kalbuna, a Tuna Bone Broth Powder crafted to deliver rich natural umami across a wide range of culinary applications, free from added MSG.",
];

const badges = [
  { src: "/assets/img/badge-natural.png", alt: "100% Natural", w: 144, h: 215 },
  { src: "/assets/img/badge-no-msg.png", alt: "No MSG", w: 138, h: 206 },
  { src: "/assets/img/badge-omega.png", alt: "Omega 3, 6, 9", w: 122, h: 210 },
];

export default function Story() {
  return (
    <section id="story" className="bg-cream py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          {/* Left: heading + text */}
          <div>
            <Reveal>
              <h2 className="text-4xl font-medium tracking-tight text-ink md:text-5xl">
                Our Story
              </h2>
            </Reveal>
            <Reveal direction="right" className="mt-10 max-w-sm space-y-5 md:ml-10">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-justify text-base leading-relaxed text-ink/85"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          {/* Right: image (top-aligned) */}
          <Reveal direction="left">
            <figure className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/assets/placeholders/our-story.jpg"
                alt="Kalbuna ingredients in a laboratory petri dish"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        </div>

        {/* Badges spread across the bottom */}
        <Reveal delay={0.1}>
          <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-3 place-items-center gap-6 md:mt-16">
            {badges.map((b) => (
              <li key={b.alt}>
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={b.w}
                  height={b.h}
                  className="h-24 w-auto object-contain md:h-28"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
