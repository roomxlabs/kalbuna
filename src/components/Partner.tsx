import Image from "next/image";
import Reveal from "./Reveal";

export default function Partner() {
  return (
    <section id="partner" className="bg-cream py-20 text-ink md:py-28">
      <div className="mx-auto w-full max-w-4xl px-6">
        {/* ---- Header: fish logo + heading (centered block) ---- */}
        <Reveal>
          <div className="flex items-start justify-center gap-4 md:gap-6">
            <Image
              src="/assets/img/logo-fish-dark.png"
              alt=""
              width={468}
              height={236}
              className="mt-1 h-9 w-auto shrink-0 object-contain md:mt-3 md:h-12"
            />
            <div>
              <h2 className="text-[clamp(2.25rem,4.6vw,4.25rem)] font-bold leading-[1.04] tracking-tight">
                Partner With
                <br />
                Kalbuna
              </h2>
              <p className="mt-2 text-center text-xs text-ink/70 md:text-sm">
                For wholesale, distribution, and private label opportunities.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ---- Wide colorful banner (left-shifted) ---- */}
        <Reveal delay={0.05}>
          <figure className="mt-10 aspect-[15/4] w-[82%] overflow-hidden md:mt-12">
            <Image
              src="/assets/placeholders/partner-banner.jpg"
              alt="Macro photograph of Kalbuna broth"
              width={1313}
              height={350}
              className="h-full w-full object-cover"
            />
          </figure>
        </Reveal>

        {/* ---- Sample CTA (centered) ---- */}
        <Reveal>
          <p className="mx-auto mt-6 max-w-md text-center text-sm text-ink/80 md:text-base">
            Request a <strong className="font-semibold text-ink">sample</strong> &amp;
            discover the depth of{" "}
            <strong className="font-semibold text-ink">real tuna</strong> umami.
          </p>
        </Reveal>

        {/* ---- Lower: contact (left) + square teal image (right) ---- */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="order-2 md:order-1 md:pt-12">
            <Reveal direction="right">
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                Contact Us
              </h3>
              <ul className="mt-5 space-y-3 text-base md:text-lg">
                <li className="flex items-center gap-4">
                  <Image
                    src="/assets/icons/envelope.png"
                    alt="Email"
                    width={236}
                    height={188}
                    className="h-5 w-6 object-contain"
                  />
                  <a
                    href="mailto:adm.kalbuna@gmail.com"
                    className="transition-colors hover:text-navy"
                  >
                    adm.kalbuna@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Image
                    src="/assets/icons/phone.png"
                    alt="Phone"
                    width={240}
                    height={239}
                    className="h-6 w-6 object-contain"
                  />
                  <a
                    href="tel:+62812345678"
                    className="transition-colors hover:text-navy"
                  >
                    (+62) 812345678
                  </a>
                </li>
              </ul>

              {/* Footer */}
              <div className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                  Social media
                </p>
                <p className="mt-1 text-sm text-ink/80">
                  Instagram /{" "}
                  <a
                    href="https://instagram.com/kalbuna.id"
                    target="_blank"
                    rel="noopener"
                    className="font-medium transition-colors hover:text-navy"
                  >
                    @kalbuna.id
                  </a>
                </p>
              </div>
            </Reveal>
          </div>

          <div className="order-1 md:order-2">
            <Reveal direction="left">
              <figure className="aspect-square w-full overflow-hidden md:ml-auto md:w-[90%]">
                <Image
                  src="/assets/placeholders/partner-detail.jpg"
                  alt="Detail of Kalbuna broth"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
