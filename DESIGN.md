# Printoviya — Design System

This document describes the visual language, component library and content
architecture behind the Printoviya website, so future work (new pages,
real photography, a CMS integration) stays consistent with what's here.

---

## 1. Brand Principle

Printoviya is a **partner that helps customers get a print requirement
done** — not just a company that sells printing. Design, print-ready file
prep, printer coordination and managed designers are all part of one
promise:

> You tell us what you need. We help make it happen.

Every page should reinforce that a customer does **not** have to print
with Printoviya to get help — this shows up as recurring copy ("You don't
have to print with us", "Already have a printer? No problem") and as a
dedicated Print Concierge page.

---

## 2. Color System

Defined as CSS custom properties in `src/app/globals.css` and exposed to
Tailwind via `@theme inline`, so they're usable as `bg-navy`, `text-blue`,
etc.

| Token | Value | Usage |
| --- | --- | --- |
| `--color-navy` | `#0B1F3B` | Primary dark — headers on dark sections, primary button fill, footer background |
| `--color-navy-800` | `#142A4D` | Secondary dark, gradient companion to navy |
| `--color-blue` | `#2D8CFF` | Accent — links, icons, highlighted words, hover states |
| `--color-blue-dark` | `#1C6FE0` | Hover state for blue elements |
| `--color-light-blue` | `#EAF4FF` | Section backgrounds, icon chips, soft highlight cards |
| `--color-off-white` | `#F8FAFC` | Alternate section background (instead of pure white, for rhythm) |
| `--color-white` | `#FFFFFF` | Base background, cards |
| `--color-dark-text` | `#111827` | Body text fallback (most text uses `navy` or `slate` instead) |
| `--color-slate` | `#5B6472` | Secondary/body copy on light backgrounds |
| `--color-border` | `#E2E8F0` | Card borders, dividers |

**Rules:**
- Never use burgundy, rainbow palettes, or CMYK clichés.
- Sections alternate between `white` / `off-white` / `light-blue` / `navy` —
  never more than one light variant in a row, and navy is used sparingly
  (hero-adjacent CTA bands, footer, breadcrumb bars).
- The blue accent is used for: links, one highlighted word per heading
  (`<span className="text-blue">…</span>`), icons inside chips, and active
  nav/filter states. It is not used as a large fill except on buttons.

---

## 3. Typography

Loaded via `next/font/google` in `src/app/layout.tsx`.

| Role | Font | Weights |
| --- | --- | --- |
| Headings, brand wordmark fallback | **Poppins** | 600, 700, 800 |
| Body / UI copy | **Inter** | 400, 500, 600 |

- `h1`–`h6` default to Poppins globally (see `globals.css`).
- Buttons use Poppins 600 (`font-heading font-semibold`).
- Eyebrow labels: `text-xs font-heading font-semibold uppercase
  tracking-[0.18em] text-blue`.
- Hero H1: `text-4xl sm:text-5xl font-extrabold` (Poppins 800).
- Section H2: `text-3xl sm:text-4xl font-bold`.

---

## 4. Logo

The real logo asset lives in `public/brand/`:
- `printoviya-logo.png` — full lockup with the "Your Printing Journey. A
  to Z. We're With You." tagline.
- `printoviya-wordmark.png` — wordmark only, cropped tight (used in the
  header and most placements).

Both are background-removed (transparent PNG). The `Logo` component
(`src/components/Logo.tsx`) renders these via `next/image`:
- `variant="dark"` (default): rendered directly — for white/off-white/
  light-blue backgrounds. The wordmark's navy letterforms need a light
  surface to read.
- `variant="light"`: wraps the same asset in a small white rounded chip —
  used on navy backgrounds (footer). Do **not** attempt to recolor the
  mark to white; its navy lettering and blue O-gradient aren't separable
  by simple filters.

Do not reintroduce the earlier hand-built SVG wordmark unless the real
asset is unavailable.

---

## 5. The "O" Motif

The O in `printoviya` is the brand's hero element — a continuous loop with
a forward-facing arrow, representing the end-to-end journey from
requirement to finished product. It appears:
- In the logo itself (baked into the asset).
- As the `OJourney` component (`src/components/OJourney.tsx`) — the
  6-step "A to Z" process strip reused on Home, Print Concierge and How
  It Works.
- As a subtle circular "how we support" diagram on the Services page.

Keep it subtle elsewhere — it should not become a background pattern on
every section.

---

## 6. Buttons

Two shared components, both **fully rounded (pill-shaped, `rounded-full`)**
per the latest brand direction — not the softer `rounded-xl` used
earlier in the project.

### `PrimaryButton` (`src/components/PrimaryButton.tsx`)
- `variant="dark"` (default): navy fill, white text — used on white/
  off-white/light-blue backgrounds. Hover → `bg-blue`.
- `variant="light"`: white fill, navy text — used inside navy sections
  (e.g. `CTASection`). Hover → `bg-light-blue`.
- Trailing arrow icon by default (`icon={false}` to omit).

### `SecondaryButton` (`src/components/SecondaryButton.tsx`)
- `variant="outline"` (default): white fill, border, navy text — for
  light backgrounds.
- `variant="outline-light"`: transparent, white border/text — for navy
  backgrounds.
- Optional `icon` renders a small filled circular play-badge to the left
  (navy badge on light variant, translucent white badge on dark variant),
  matching the "See How It Works" pattern.

**Other pill-shaped controls**, for consistency:
- Header / mobile nav CTA ("Tell Us What You Need").
- `ContactForm` submit button.
- Footer newsletter input + circular submit button.
- Portfolio/Products filter chips.

Icon-only chips (service icons, badges) stay `rounded-xl`/`rounded-2xl` —
the pill treatment is for **actionable buttons and pills**, not every
rounded box.

---

## 7. Cards & Surfaces

- Cards: white background, `border border-border`, `rounded-2xl`
  (16–24px), soft shadow only on hover (`hover:shadow-lg`).
- Icon chips inside cards: `rounded-xl bg-light-blue`, icon in `text-blue`.
- Section spacing: `py-20` standard, `py-16` for tighter bands (e.g. the
  breadcrumb bar on Products/case-study pages).

---

## 8. Imagery

No licensed photography is available yet for this build (an attempt to
source generic CC0 stock photography was blocked by rate-limiting on the
one available source — see `PlaceholderPhoto`'s doc comment). Until real
product photography is supplied:

`PlaceholderPhoto` (`src/components/PlaceholderPhoto.tsx`) is the
standard stand-in — a layered gradient + dot-grid + icon composition
(not a flat "no image" box), in `light` (default) or `navy` tone. It
takes any `lucide-react` icon and an optional caption.

**To swap in real photography later:** replace `PlaceholderPhoto` usages
with `next/image` calls pointing at real assets, keeping the same
`aspect-*` wrapper classes so layouts don't shift. Priority order for
real photos, highest impact first:
1. Home hero product scene.
2. Print Concierge / How It Works hero portraits.
3. Portfolio category tiles (once real project photography exists —
   these should be replaced with **real project images**, not stock).
4. Product listing/detail thumbnails.

### Home hero banner

The Home hero (`src/app/page.tsx`) is now a full-bleed banner image with
a navy overlay (`bg-navy/55`) and white text on top, rather than a
two-column text/graphic split. Two image slots, both currently filled
with generated placeholder gradients — replace with real files at the
same paths:

| File | Shown on | Spec |
| --- | --- | --- |
| `public/hero/home-hero-desktop.jpg` | `sm:` and up (≥640px) | **2400 × 1000px**, landscape, ~2.4:1 ratio |
| `public/hero/home-hero-mobile.jpg` | below `sm:` (<640px) | **1080 × 1350px**, portrait, 4:5 ratio |

Brief for the designer/photo source:
- Deliver both as JPG or WebP, sRGB, optimized to roughly 200–500KB each
  (they're rendered with `next/image`, but starting large defeats that).
- A ~55% navy (`#0B1F3B`) scrim sits over the whole image for text
  legibility, and the H1/body copy/buttons are left-aligned starting
  ~80px from the left edge (desktop) — keep the focal subject centered
  or right-of-center so it isn't hidden under the text block or the
  overlay's darkest area.
- The mobile crop is a **separate** image, not just a scaled-down
  desktop banner — compose it so the subject reads in a tall 4:5 frame
  without the text overlapping it.
- Both `<Image>` calls use `fill` + `object-cover`, so any image supplied
  at a different aspect ratio will be center-cropped to fit — matching
  the exact ratios above avoids unexpected cropping.

---

## 9. Layout & Responsive Rules

- Content max-width: `max-w-[1440px]`, horizontal padding via the
  `.container-px` utility (24px mobile → 40px tablet → 80px desktop, see
  `globals.css`).
- Breakpoints follow Tailwind defaults: `sm` 640px, `md` 768px, `lg`
  1024px, `xl` 1280px. The header's nav switches to the mobile menu below
  `xl` (1280px) because the full nav + CTA needs the extra width.
- Grids collapse: `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-3/4`
  as columns allow; process/journey strips go `grid-cols-2` on mobile →
  `sm:grid-cols-3` → `lg:grid-cols-6`.
- Never scale the desktop layout down uniformly — sections reflow
  (stacked columns, adjusted grid counts) rather than shrinking.

---

## 10. Content / Data Architecture

Page content that repeats or could later come from a CMS lives in
`src/data/*.ts` as typed arrays/objects, not hardcoded in page markup:

| File | Powers |
| --- | --- |
| `services.ts` | Services page cards, Home "More Than Printing" grid, footer service links |
| `products.ts` | Products listing/detail, Home featured products, related-products |
| `portfolio.ts` | Portfolio case-study template. **Intentionally empty of real projects** — see rule below |
| `faq.ts` | FAQ page (grouped by category) |
| `journey.ts` | The 6-step A-to-Z `OJourney` steps |

**Portfolio rule:** never add a fabricated client, testimonial, result or
case study to `portfolio.ts`. The one seeded entry
(`isTemplatePreview: true`, slug `template-preview`) exists solely to
preview the case-study page layout and is clearly labeled as such (banner
+ "Sample Client (Template)") — remove it once real, approved projects
are added, and add real projects as plain `PortfolioProject` objects with
`isTemplatePreview` omitted.

---

## 11. Component Reference

| Component | Purpose |
| --- | --- |
| `Header` / `Footer` | Global chrome, nav: Home / What We Do / Products / How It Works / Why Printoviya / About / Contact |
| `Logo` | Renders the real logo asset, light/dark variants |
| `PrimaryButton` / `SecondaryButton` | Pill-shaped CTAs, dark/light variants |
| `SectionHeading` | Eyebrow + title (+ optional blue highlight word) + description, left/center aligned |
| `OJourney` | The 6-step process strip |
| `ServiceCard` | Icon + title + description card, optional link |
| `PlaceholderPhoto` | Stand-in imagery (see §8) |
| `POMascot` | Placeholder "PO" character mark (see §14) |
| `CampaignCarousel` | Home-page rotating banner strip, one slide per real PO banner image (see §14) |
| `CTASection` | Full-width navy closing CTA with the O-ring background motif |
| `Testimonial` | Star rating + quote + name/role card |
| `FAQItem` | Accordion question/answer |
| `Breadcrumb` | `light`/dark-background-aware breadcrumb trail |
| `ContactForm` | Start a Project inquiry form |
| `ProcessStep` | Numbered vertical step (How It Works detail list) |
| `SocialIcon` | Inline SVGs for Instagram/LinkedIn/YouTube/Pinterest (no external icon set has brand marks for these) |

---

## 12. Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4 (CSS-first `@theme` config, no `tailwind.config.js`)
- `lucide-react` for iconography
- `next/font/google` for Poppins + Inter

## 13. Adding a New Page

1. Add the route under `src/app/<route>/page.tsx`.
2. Use `bg-off-white` hero pattern (breadcrumb → eyebrow → H1 → body →
   trust chips) for consistency with About/Services/Products/Portfolio/
   Print Concierge/How It Works/Start a Project.
3. Pull repeating content from `src/data/*.ts` rather than inlining it.
4. Close with `CTASection`.
5. Add the route to `Header`'s `NAV_LINKS` and/or `Footer`'s
   `QUICK_LINKS` if it should be globally reachable.

---

## 14. Product catalog & the "PO" banner images

### Catalog structure

`src/data/catalog.ts` holds the real 8-category product catalog (from the
client's product-list document), nested as
`/products/[category]/[product]`:

1. Business Essentials
2. Packaging & Product Branding
3. Marketing & Promotional Print
4. Banners & Large Displays
5. Branding, Graphics & Signage
6. Events & Brand Displays
7. Apparel & Branded Merchandise
8. Custom Products — no fixed product list; renders a dedicated
   "tell us what you need" CTA page instead of a grid
   (`CatalogCategory.isCustom`)

Each product lists its real variant/finish options (e.g. Business Cards →
Matte/Gloss/Velvet Lamination, Spot UV, Foil…). Add a product by pushing
onto a category's `products` array — the `[category]/[product]` route
picks it up automatically via `generateStaticParams`.

A category whose own banner image already contains its heading, tagline,
icon row and "View Products" CTA baked in sets `bannerSrc` on its
`CatalogCategory` entry instead of relying on the plain text hero —
`/products/[category]/page.tsx` renders the full-width banner
(`aspect-[2.4/1]`, rounded-3xl) in place of the breadcrumb+h1+description
block whenever `isCustom` or `bannerSrc` is present.

A category can separately set `thumbnailSrc` — a square card image used
on the `/products` listing grid in place of `PlaceholderPhoto` (same
`aspect-square` card slot, `object-cover`). `bannerSrc` and `thumbnailSrc`
are independent: the hero banner has its own CTA baked in, the thumbnail
is a plain product-name icon grid meant for the smaller listing card.

The same square-thumbnail pattern is used on `/services` — a `Service`
can set `imageSrc` (`src/data/services.ts`) and the "Featured Work" grid
renders it in place of the icon-only placeholder card. All 8 services
now have real images, so the grid shows the full set
(`lg:grid-cols-4`, two rows of 4) rather than the original 6-item
`slice(0, 6)`.

`JourneyStep` (`src/components/OJourney.tsx` / `src/data/journey.ts`)
has the same optional `imageSrc` — used only by the larger 6-step card
grid on `/how-it-works` (`aspect-[16/10]`, replacing `PlaceholderPhoto`),
not by the compact `OJourney` icon strip reused across Home, Print
Concierge and Start a Project, which always shows the icon regardless.
All 6 steps now have real images, completing the card grid.

The `/services` "Featured Work" cards are each a `Link` to
`#${service.slug}` — the matching card's `id` in the "Our Service
Categories" grid above, so clicking a Featured Work image jumps to that
service's detail card on the same page. Hover state: the image scales
(`group-hover:scale-105`) and a bottom-anchored navy gradient overlay
fades in with the service title and an arrow, matching the hover
pattern used on the `/products` category cards.

### PO — the brand mascot

The client's actual PO character is an illustrated, hoodie-wearing
mascot (dark hair, glasses, a small "PO" wordmark on the hoodie) who
appears in a set of pre-made marketing banner images — not an abstract
shape. `POMascot` (`src/components/POMascot.tsx`) is a placeholder
stand-in (a simple face on the O-loop) used only so PO-referencing copy
("Ask PO", "Send it to PO") has something to sit next to. **Replace every
`<POMascot />` usage with the real illustration once the banner files are
saved into the repo.**

### Banner images

Real, finished banner images for this site are saved under
`public/banners/` as they're supplied (they must arrive as chat
**attachments**, one at a time — images pasted inline, or several at
once, do not reliably save to disk in this environment).

| Banner (as described) | Goes in | Status |
| --- | --- | --- |
| "More than Printing" — PO at desk with branded products | Home campaign carousel (slide 1) | ✅ `home-more-than-printing-desk.webp` |
| "Print More Than Just Paper" — event booth photo | Home campaign carousel (slide 2) | ✅ `home-print-more-than-paper-booth.webp` |
| "Your Print Concierge" — 4-step flow + trust icons + photo | Home "Print Concierge" section | ✅ `home-print-concierge-flow.webp` |
| "More than Printing" — PO gesturing at event booth | Home campaign carousel (slide 3) | ✅ `home-more-than-printing-booth-gesture.webp` |
| "More than Printing" — 5-step flow (You Share Your Idea → … → Delivered to You) | Home "How It Works" section | ✅ `home-how-it-works-flow.webp` |
| "Custom Products" (08 badge, product-pedestal mockups) | `/products/custom-products` hero | ✅ `custom-products-showcase.webp` |
| "Custom Products" (PO holding a box, colorful) | Home "Coming Soon" teaser | ✅ `custom-products-made-yours.webp` |
| "100% Client-Focused" — PO thumbs up + globe | Home "Why Printoviya" section (new, between Design+Print and Print Concierge) | ✅ `client-focused-global.webp` |
| PO on the phone with idea/message/doc/printer bubbles | `/start-a-project` (Contact) hero background | ✅ `contact-po-on-phone.webp` |
| PO with design-process icon chain (lightbulb→doc→CMYK→printer→box) | `/how-it-works` hero | note: the file actually sent for this slot was identical (same MD5) to `home-how-it-works-flow.webp` — reused there instead; the icon-chain image is still outstanding if a distinct one exists |
| Global reach — PO pointing at USA/Canada/Australia on a globe | About "Global Perspective", or Print Concierge | ⏳ pending |
| "01 Business Essentials" — PO at branded stationery desk | `/products/business-essentials` hero | ✅ `category-business-essentials.webp` |
| "02 Packaging & Product Branding" — PO with branded packaging/boxes | `/products/packaging-product-branding` hero | ✅ `category-packaging-product-branding.webp` |
| "03 Marketing & Promotional Print" — PO with flyers/brochures/promo items | `/products/marketing-promotional-print` hero | ✅ `category-marketing-promotional-print.webp` |
| "04 Banners & Large Displays" — PO with roll-up/large-format banners | `/products/banners-large-displays` hero | ✅ `category-banners-large-displays.webp` |
| "05 Branding, Graphics & Signage" — PO outside branded storefront/signage | `/products/branding-graphics-signage` hero | ✅ `category-branding-graphics-signage.webp` |
| "01 Business Essentials" square thumbnail (product-name icon grid) | `/products` listing — category card thumbnail | ✅ `thumb-business-essentials.webp` |
| "02 Packaging & Product Branding" square thumbnail | `/products` listing — category card thumbnail | ✅ `thumb-packaging-product-branding.webp` |
| "03 Marketing & Promotional Print" square thumbnail | `/products` listing — category card thumbnail | ✅ `thumb-marketing-promotional-print.webp` |
| "04 Banners & Large Displays" square thumbnail | `/products` listing — category card thumbnail | ✅ `thumb-banners-large-displays.webp` |
| "05 Branding, Graphics & Signage" square thumbnail | `/products` listing — category card thumbnail | ✅ `thumb-branding-graphics-signage.webp` |
| "06 Events & Brand Displays" square thumbnail | `/products` listing — category card thumbnail | ✅ `thumb-events-brand-displays.webp` |
| "07 Apparel & Branded Merchandise" square thumbnail | `/products` listing — category card thumbnail | ✅ `thumb-apparel-branded-merchandise.webp` |
| "08 Custom Products" square thumbnail | `/products` listing — category card thumbnail | ✅ `thumb-custom-products.webp` |
| "01 Branding & Identity Design" square thumbnail | `/services` "Featured Work" card | ✅ `service-branding-identity.webp` |
| "02 Packaging Solutions" square thumbnail | `/services` "Featured Work" card | ✅ `service-packaging-solutions.webp` |
| "03 Merchandise Printing" square thumbnail | `/services` "Featured Work" card | ✅ `service-merchandise.webp` |
| "04 Print Solutions" square thumbnail | `/services` "Featured Work" card | ✅ `service-print-solutions.webp` |
| "05 Social Media Design" square thumbnail | `/services` "Featured Work" card | ✅ `service-social-media-design.webp` |
| "06 Custom Products" square thumbnail | `/services` "Featured Work" card | ✅ `service-custom-products.webp` |
| "07 Dedicated Designer" square thumbnail | `/services` "Featured Work" card | ✅ `service-dedicated-designer.webp` |
| "08 Print Consultation" square thumbnail | `/services` "Featured Work" card | ✅ `service-print-consultation.webp` |
| "Tell Us Your Need" step illustration | `/how-it-works` "6 Simple Steps" card 1 | ✅ `journey-tell-us-your-need.webp` |
| "We Understand & Suggest" step illustration | `/how-it-works` "6 Simple Steps" card 2 | ✅ `journey-we-understand-suggest.webp` |
| "Design & Prepare" step illustration | `/how-it-works` "6 Simple Steps" card 3 | ✅ `journey-design-prepare.webp` |
| "Coordinate With Your Printer" step illustration | `/how-it-works` "6 Simple Steps" card 4 | ✅ `journey-coordinate-with-printer.webp` |
| "Print & Produce" step illustration | `/how-it-works` "6 Simple Steps" card 5 | ✅ `journey-print-produce.webp` |
| "Get Your Final Product" step illustration | `/how-it-works` "6 Simple Steps" card 6 | ✅ `journey-final-product.webp` |
| PO pointing at idea→design→printer→products journey strip | `/about#why-printoviya` banner (left) | ✅ `about-why-printoviya-journey.webp` |
| PO thinking/planning at desk | `/about#why-printoviya` banner (right) | ✅ `about-why-printoviya-planning.webp` |

All `next/image` banners on the Home page use `loading="eager"` — Next's
default lazy-loading occasionally left a blank gap on these full-width
decorative banners during the full-page screenshot checks used to verify
them, so eager loading is the standard for this page's banner slots
(the hero/above-the-fold slide additionally uses `priority`).

To wire a pending one in: save the file under `public/banners/`, then
swap the matching `PlaceholderPhoto` for a `next/image` pointed at
`/banners/<file>`, keeping the same wrapper sizing so layout doesn't
shift. `CampaignCarousel`'s `CampaignSlide` type takes an optional `src`
— set it and the slide renders the real image instead of the pending
placeholder automatically.
