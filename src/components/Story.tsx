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
  // Desktop (rev 2, page 2): a FULL-WIDTH two-column spread — client rejected
  // the centered max-width version; the page runs edge to edge with only small
  // margins. Badge trio (bottom of left column, via mt-auto against the
  // stretched grid row) sits inline with the lab caption under the photo.
  // Mobile keeps the rev 1 stack (heading → copy → badges → photo → caption).
  return (
    // The grid stretches to the full viewport height (section flex → column →
    // grid flex-1): heading pinned top, badges + caption pinned bottom, photo
    // filling the middle — no dead space above/below at any zoom level.
    <section
      id="story"
      className="bg-cream py-20 md:flex md:min-h-screen md:py-12"
    >
      <div className="w-full px-6 md:flex md:flex-col md:px-12 lg:px-16">
        <div className="grid gap-10 md:flex-1 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* LEFT: heading + copy, badges pushed to the bottom row */}
          <div className="flex flex-col">
            <Reveal>
              <h2 className="text-4xl font-medium tracking-tight text-ink md:text-6xl lg:text-7xl">
                Our Story
              </h2>
            </Reveal>

            {/* Copy centered (h + v) in the space between heading and badges —
                client asked for the empty area around the text to balance out */}
            <div className="md:flex md:flex-1 md:items-center md:justify-center">
              <Reveal
                direction="right"
                className="mt-8 max-w-md space-y-5 md:mt-0 md:space-y-7"
              >
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-center text-base leading-relaxed text-ink/85 md:text-justify md:text-xl lg:text-2xl"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>

            {/* Badges — bottom-aligned on desktop so they read inline with the
                lab caption across the page; centered mid-stack on mobile (rev 1). */}
            <Reveal delay={0.1} className="mt-10 md:pt-10">
              <ul className="flex items-end justify-center gap-8 md:gap-14 lg:gap-16">
                {badges.map((b) => (
                  <li key={b.alt}>
                    <Image
                      src={b.src}
                      alt={b.alt}
                      width={b.w}
                      height={b.h}
                      className="h-20 w-auto object-contain md:h-24 lg:h-28"
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* RIGHT: photo + lab caption. The photo stretches (flex-1) to fill the
              row height set by the left column, so the caption's bottom lands on
              the same line as the badges. */}
          <Reveal direction="left">
            <figure className="md:flex md:h-full md:flex-col">
              {/* 3:4 matches the photo's natural ratio (1086×1448) so mobile
                  shows it uncropped, like desktop */}
              <div className="relative -mx-6 aspect-[3/4] overflow-hidden md:mx-0 md:aspect-auto md:flex-1">
                {/* contain on md — the tray is portrait (1086×1448) and the
                    client wants it uncropped, like the mock */}
                <Image
                  src="/assets/img/story-bones.jpg"
                  alt="Tuna bones laid out in a laboratory tray"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover md:object-contain"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm font-medium leading-relaxed text-[#e44423] md:mt-5 md:text-base lg:text-lg">
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
