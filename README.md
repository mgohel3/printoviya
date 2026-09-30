# Printoviya

Official marketing website for **Printoviya** — a global print, design and
print-coordination partner. Built as a Next.js (App Router) + TypeScript +
Tailwind CSS site per the brand build specification.

> Design. Coordinate. Print. We've Got You.
> You tell us what you need. We help make it happen.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- [lucide-react](https://lucide.dev) icons
- `next/font` (Poppins for headings/brand, Inter for body/UI)

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/start-a-project` | Start a Project (inquiry form) |
| `/portfolio` | Portfolio |
| `/portfolio/[slug]` | Individual case study template |
| `/print-concierge` | Print Concierge |
| `/how-it-works` | How It Works |
| `/faq` | FAQ |
| `/products` | Products |
| `/products/[slug]` | Product detail |

## Content / data layer

Services, portfolio projects, products and FAQ content live in
`src/data/*.ts` as typed, CMS-ready structures so they can later be swapped
for a real CMS or database without touching page markup. The portfolio is
intentionally empty (`src/data/portfolio.ts`) until real, approved case
studies are added — the Portfolio page renders tasteful placeholders in the
meantime.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint
