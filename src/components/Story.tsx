import Image from "next/image";
import Reveal from "./Reveal";

const paragraphs = [
  "At Kalbuna, we believe that every part of nature has its purpose, including tuna bones.",
  "During our journey in seafood industry, we often saw tuna bones that were not used, even though they are rich in natural nutrients and authentic umami.",
  "It inspired us to develop Kalbuna, a Tuna Bone Broth Powder crafted to deliver rich natural umami across a wide range of culinary applications, free from added MSG.",
];

const badges = [
  { src: "/assets/img/badge-high-protein.png", alt: "High Protein", w: 131, h: 192 },
  { src: "/assets/img/badge-no-added-msg.png", alt: "No Added MSG", w: 150, h: 182 },
  { src: "/assets/img/badge-omega-369.png", alt: "Omega 3, 6, 9", w: 118, h: 190 },
];

export default function Story() {
  return (
    <section id="story" className="bg-cream py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          {/* Heading + text */}
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
                  className="text-center text-base leading-relaxed text-ink/85 md:text-justify"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          {/* Badges: between text and photo on mobile (revision 1),
              spread across the bottom on desktop (design page 2) */}
          <Reveal delay={0.1} className="md:order-3 md:col-span-2">
            <ul className="mx-auto grid max-w-3xl grid-cols-3 place-items-center gap-6 md:mt-4">
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

          {/* Photo + lab-results caption (top-aligned) */}
          <Reveal direction="left">
            <figure>
              <div className="relative -mx-6 aspect-square overflow-hidden md:mx-0 md:w-full">
                <Image
                  src="/assets/img/story-bones.jpg"
                  alt="Tuna bones laid out in a laboratory tray"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm font-medium leading-relaxed text-[#e44423]">
                Laboratory-tested :
                <br />
                35.68% <strong>Protein</strong>, naturally occurring{" "}
                <strong>Omega-3,6,9,</strong> and very{" "}
                <strong>low histamine</strong> levels (0.85 mg/kg).
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
