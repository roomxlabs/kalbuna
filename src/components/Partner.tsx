import Image from "next/image";
import Reveal from "./Reveal";

export default function Partner() {
  // Full-page closing section (rev 2, page 4) — FULL-WIDTH: client rejected the
  // centered max-width version. Header = one centered fish+text cluster; the
  // colour banner runs edge to edge; contact (far left) + photo (far right)
  // sit on the page margins below, bottom-aligned.
  return (
    <section
      id="partner"
      className="bg-cream pt-14 pb-16 text-ink md:flex md:min-h-screen md:flex-col md:pt-0 md:pb-0"
    >
      {/* ---- Header band (no border — client asked for the line above the
           banner to be removed). Per the rev-2 mock the fish + text form ONE
           centered cluster (text left-aligned inside it), with the fish scaled
           up to ~2× the heading's cap height. ---- */}
      <div>
        <Reveal className="flex items-center justify-center gap-10 px-6 py-6 md:gap-[16vw]">
          <Image
            src="/assets/img/logo-fish-dark.png"
            alt=""
            width={468}
            height={236}
            className="h-12 w-auto shrink-0 object-contain md:h-[clamp(3rem,6.3vw,7.5rem)]"
          />
          <div className="text-left">
            <h2 className="text-[clamp(2rem,4.8vw,5.75rem)] font-normal leading-[1.05] tracking-tight">
              Partner With<br className="md:hidden" /> Kalbuna
            </h2>
            <p className="mt-1 text-xs text-ink md:text-[clamp(0.875rem,1.55vw,1.75rem)]">
              For wholesale, distribution, and private label opportunities.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="flex flex-1 flex-col md:justify-center md:pb-8">
        {/* ---- Colour banner: full-bleed, edge to edge ---- */}
        <Reveal delay={0.05}>
          <figure className="mt-8 aspect-[12/5] w-full overflow-hidden md:mt-0 md:aspect-auto md:h-[24vh]">
            <Image
              src="/assets/img/partner-art.jpg"
              alt="Tuna slices amid swirling ink"
              width={1448}
              height={1086}
              className="h-full w-full object-cover"
            />
          </figure>
        </Reveal>

        <div className="w-full px-6 md:px-10 lg:px-14">
          {/* ---- Sample CTA ---- */}
          <Reveal>
            <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink/80 md:text-base lg:text-lg">
              Request a <strong className="font-semibold text-ink">sample</strong>{" "}
              &amp; discover the depth of{" "}
              <strong className="font-semibold text-ink">real tuna</strong> umami.
            </p>
          </Reveal>

          {/* ---- Contact (left) + bones photo (right) ---- */}
          {/* Client: full-edge spread left too big a void — keep the pair on a
              centered max-width row, contact left / photo right, with the
              contact block BOTTOM-aligned to the photo's bottom edge */}
          <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-6 md:mx-auto md:mt-8 md:flex md:w-full md:max-w-6xl md:items-end md:justify-between md:gap-16">
            <div>
              <Reveal direction="right">
                <h3 className="text-lg font-medium tracking-tight md:text-[clamp(1.75rem,3.4vw,4rem)]">
                  Contact Us
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm md:mt-5 md:space-y-2 md:text-xl lg:text-2xl">
                  <li className="flex items-center gap-2.5 md:gap-4">
                    <Image
                      src="/assets/icons/envelope.png"
                      alt="Email"
                      width={236}
                      height={188}
                      className="h-4 w-5 object-contain md:h-5 md:w-6"
                    />
                    <a
                      href="mailto:adm.kalbuna@gmail.com"
                      className="transition-colors hover:text-navy"
                    >
                      adm.kalbuna@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 md:gap-4">
                    <Image
                      src="/assets/icons/phone.png"
                      alt="Phone"
                      width={240}
                      height={239}
                      className="h-5 w-5 object-contain md:h-6 md:w-6"
                    />
                    <a
                      href="tel:+6285161010568"
                      className="transition-colors hover:text-navy"
                    >
                      (+62) 85161010568
                    </a>
                  </li>
                </ul>

                {/* Social — big gap above it per the mock, so it lands on the
                    photo's bottom line */}
                <div className="mt-10 md:mt-16">
                  <p className="text-xs font-bold text-ink md:text-base">
                    Social media
                  </p>
                  <p className="mt-1 text-xs text-ink/80 md:text-base">
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
                  <p className="mt-1 text-xs text-ink/80 md:text-base">
                    Tiktok /{" "}
                    <a
                      href="https://tiktok.com/@kalbuna.id"
                      target="_blank"
                      rel="noopener"
                      className="font-medium transition-colors hover:text-navy"
                    >
                      @kalbuna.id
                    </a>
                  </p>

                  {/* Downloads — tucked tight under the Tiktok line as one
                      group per the client's reference. text-xs md:text-base on
                      the <p> (not just the <a>) keeps the line-height equal to
                      the social lines so the spacing is even on mobile. */}
                  <p className="mt-1 text-xs md:text-base">
                    <a
                      href="https://drive.google.com/drive/folders/1l7SMZzfPDgSX99kKBvh4Jx-wYt-FfvC8"
                      target="_blank"
                      rel="noopener"
                      className="text-xs font-medium not-italic text-blue-600 transition-colors hover:text-blue-800 md:text-base"
                    >
                      Download Company Profile
                    </a>
                  </p>
                  <p className="mt-1 text-xs md:text-base">
                    <a
                      href="https://drive.google.com/drive/folders/10wU-30qGc0cMxWzE8TWXjUWyAB7e0A8h"
                      target="_blank"
                      rel="noopener"
                      className="text-xs font-medium not-italic text-blue-600 transition-colors hover:text-blue-800 md:text-base"
                    >
                      Download Specification Sheet
                    </a>
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Mobile (rev-2): photo ≈45% of the viewport, bled to the right
                screen edge; -mr-6 cancels the container's px-6 */}
            <div className="-mr-6 md:mr-0">
              <Reveal direction="left">
                {/* aspect-square + fixed height on md ⇒ width = height, pushed right */}
                <figure className="aspect-square w-[45vw] overflow-hidden md:h-[46vh] md:w-auto">
                  <Image
                    src="/assets/img/partner-bones.jpg"
                    alt="Tuna bones displayed in an acrylic case"
                    width={1086}
                    height={1086}
                    className="h-full w-full object-cover"
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
