# Kalbuna — Website

Marketing landing page for **Kalbuna**, a Tuna Bone Broth Powder brand, built from the
design in `_source/PDF.js viewer.pdf`.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion (Framer Motion) for scroll animations.

## Getting started

```bash
npm run dev      # dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
src/
  app/
    layout.tsx        # fonts (Hanken Grotesk / Spectral) + page metadata
    globals.css       # brand tokens (colors/fonts) + paper-grain helper
    page.tsx          # composes the four sections
  components/
    Hero.tsx          # navy hero: nav, tuna mark, tagline
    Story.tsx         # "Our Story" + badges
    Shop.tsx          # 3 product cards
    Partner.tsx       # "Partner With Kalbuna" + Contact + footer
    Reveal.tsx        # reusable scroll-into-view animation wrapper
public/assets/
  img/        # logos, wordmark, badges, paper texture
  icons/      # search / person / envelope / phone
  placeholders/  # ← swap these with real photos
_source/        # original design deliverables (PDF, raw logos, color & font guide)
```

## Brand tokens

Defined in `src/app/globals.css` (`@theme`) and usable as Tailwind classes:

| Token            | Value     | Tailwind class            |
| ---------------- | --------- | ------------------------- |
| Navy             | `#08295D` | `bg-navy` / `text-navy`   |
| Cream            | `#FEFFF4` | `bg-cream` / `text-cream` |
| Ink (near-black) | `#100F0D` | `bg-ink` / `text-ink`     |

## Photos

`public/assets/placeholders/` currently holds the **design's own photos, extracted from the
source PDF**, so the site matches the reference. Swap in your own by overwriting these files
(keep the same filenames, or update the `src` paths in the components):

- `our-story.jpg` — square (1:1), Our Story section
- `shop-1.jpg`, `shop-2.jpg`, `shop-3.jpg` — portrait (4:5), product cards
- `partner-banner.jpg` — wide banner (≈16:5)
- `partner-detail.jpg` — Partner section image (≈4:5)

> Note: these photos came from the supplied PDF and are placeholders for layout — replace them
> with your own licensed/owned imagery before going to production.

## Fonts

The PDF specifies **Telegraf** and **Morisawa**, which are commercial fonts. This build uses
close free Google substitutes — **Hanken Grotesk** (≈ Telegraf) and **Spectral** (≈ Morisawa) —
loaded in `src/app/layout.tsx`. If you have licensed Telegraf/Morisawa web fonts, add them with
`next/font/local` and point the `--font-hanken` / `--font-spectral` CSS variables at them.

The "KALBUNA" wordmark uses your supplied logo image, so it stays pixel-exact regardless of font.
