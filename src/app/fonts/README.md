# Brand fonts — drop the files here

The site is wired to two brand families through CSS variables:

| Slot         | Brand font                        | Where it's used                                              |
| ------------ | --------------------------------- | ------------------------------------------------------------ |
| sans (body)  | **Telegraf**                      | Our Story + all page-2 copy, "Shop On Marketplace", all of page 4 |
| serif accent | **Morisawa Role Serif Text Pro**  | Page-3 product-card text, page-1 navbar (italic)             |

Until the real files land the site renders with free stand-ins
(Hanken Grotesk ≈ Telegraf, Spectral ≈ Morisawa) so it always builds.

## To install the real fonts

Drop the files into **this folder** (`src/app/fonts/`). `.woff2` is preferred;
`.otf` / `.ttf` also work. Expected names (rename yours to match, or tell me the names you have):

**Telegraf**
- `Telegraf-Regular.woff2`   (400)
- `Telegraf-Medium.woff2`    (500)
- `Telegraf-Bold.woff2`      (700)
- `Telegraf-SemiBold.woff2`  (600, optional)

**Morisawa Role Serif Text Pro**
- `RoleSerifText-Regular.woff2`  (400)
- `RoleSerifText-Italic.woff2`   (400 italic — needed for the navbar & card sizes)
- `RoleSerifText-Medium.woff2`   (500, optional)

Once the files are in place I'll switch `src/app/layout.tsx` from `next/font/google`
to `next/font/local` — no other changes needed, since every element already points
at the correct family via `--font-sans` / `--font-serif`.
