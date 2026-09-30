import {
  CreditCard,
  Package,
  Tags,
  BookOpen,
  Shirt,
  Coffee,
  ShoppingBag,
  NotebookPen,
  Gift,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  title: string;
  slug: string;
  category: string;
  icon: LucideIcon;
  description: string;
  idealFor: string;
  specifications: string[];
  materials: string[];
  finishes: string[];
};

export const productCategories = [
  "Business Cards",
  "Packaging",
  "Labels",
  "Brochures",
  "Apparel",
  "Mugs",
  "Tote Bags",
  "Stationery",
  "Promotional Products",
  "Custom Products",
];

export const products: Product[] = [
  {
    title: "Business Cards",
    slug: "business-cards",
    category: "Business Cards",
    icon: CreditCard,
    description:
      "Premium business cards designed and prepared for print — with us or your own printer. We help you choose stock, finish and layout that hold up under real use.",
    idealFor: "Founders, sales teams and freelancers who hand cards out often.",
    specifications: ["Standard 3.5\" x 2\"", "Custom sizes available", "Single or double-sided"],
    materials: ["350gsm matte", "400gsm uncoated", "Recycled stock"],
    finishes: ["Matte", "Gloss", "Soft-touch", "Spot UV", "Foil"],
  },
  {
    title: "Custom Packaging",
    slug: "custom-packaging",
    category: "Packaging",
    icon: Package,
    description:
      "Boxes, sleeves, labels and inserts designed for your product and brand. We handle structural sizing, print-ready dieline files and printer coordination.",
    idealFor: "Product brands shipping direct-to-consumer or through retail.",
    specifications: ["Made to your product dimensions", "Flat-pack or rigid options"],
    materials: ["Kraft board", "SBS coated board", "Corrugated"],
    finishes: ["Matte laminate", "Gloss laminate", "Spot UV", "Embossing"],
  },
  {
    title: "Labels & Stickers",
    slug: "labels-stickers",
    category: "Labels",
    icon: Tags,
    description:
      "Product labels and stickers in any shape, size or finish — from single roll labels to full sheet runs, with die lines prepared for your printer.",
    idealFor: "Product labeling, packaging accents and promotional giveaways.",
    specifications: ["Custom die-cut shapes", "Roll or sheet formats"],
    materials: ["Paper", "Vinyl", "Clear polypropylene"],
    finishes: ["Matte", "Gloss", "Waterproof laminate"],
  },
  {
    title: "Brochures & Catalogues",
    slug: "brochures-catalogues",
    category: "Brochures",
    icon: BookOpen,
    description:
      "Multi-page marketing collateral, designed and print-prepared end to end — from a single-fold flyer to a full product catalogue.",
    idealFor: "Sales collateral, product catalogues and event handouts.",
    specifications: ["A4, A5 and custom sizes", "Saddle-stitch or perfect bound"],
    materials: ["130-300gsm gloss/matte"],
    finishes: ["Matte laminate", "Gloss laminate", "Spot UV"],
  },
  {
    title: "Custom Apparel",
    slug: "custom-apparel",
    category: "Apparel",
    icon: Shirt,
    description:
      "T-shirts, hoodies and uniforms printed with your branding — we guide you on print method (screen print, DTG or embroidery) based on design and quantity.",
    idealFor: "Team uniforms, event merch and retail apparel drops.",
    specifications: ["S–XXL", "Screen print or DTG"],
    materials: ["100% cotton", "Cotton-poly blend"],
    finishes: ["Screen print", "Embroidery", "DTG"],
  },
  {
    title: "Branded Mugs",
    slug: "branded-mugs",
    category: "Mugs",
    icon: Coffee,
    description:
      "Ceramic mugs printed with your logo or artwork — a reliable, everyday branded product for gifting and merchandise.",
    idealFor: "Corporate gifts, office merch and retail add-ons.",
    specifications: ["11oz / 15oz", "Full-wrap or logo print"],
    materials: ["Ceramic"],
    finishes: ["Gloss", "Matte", "Two-tone"],
  },
  {
    title: "Tote Bags",
    slug: "tote-bags",
    category: "Tote Bags",
    icon: ShoppingBag,
    description:
      "Canvas and cotton tote bags for events, retail and promotions — printed or embroidered with your design.",
    idealFor: "Retail packaging, event giveaways and brand merchandise.",
    specifications: ["Standard and custom sizes"],
    materials: ["Cotton canvas", "Jute", "Non-woven"],
    finishes: ["Screen print", "Embroidery"],
  },
  {
    title: "Branded Stationery",
    slug: "branded-stationery",
    category: "Stationery",
    icon: NotebookPen,
    description:
      "Notebooks, letterheads and everyday stationery, on-brand — a consistent look across every piece of paper your business sends out.",
    idealFor: "Client gifting, office supplies and brand consistency.",
    specifications: ["A4/A5 notebooks", "Letterhead + envelope sets"],
    materials: ["Recycled paper", "Premium uncoated stock"],
    finishes: ["Matte", "Foil stamping"],
  },
  {
    title: "Promotional Products",
    slug: "promotional-products",
    category: "Promotional Products",
    icon: Gift,
    description:
      "Pens, bottles, bags and everyday items for giveaways and events — we help you pick products that fit your budget and quantity.",
    idealFor: "Trade shows, conferences and marketing giveaways.",
    specifications: ["MOQs vary by product"],
    materials: ["Varies by product"],
    finishes: ["Pad print", "Laser engrave", "Screen print"],
  },
  {
    title: "Custom Products",
    slug: "custom-products",
    category: "Custom Products",
    icon: Sparkles,
    description:
      "Something specific in mind? Tell us the product and we'll help you make it — from sourcing to print-ready files to printer coordination.",
    idealFor: "Anything that doesn't fit a standard category.",
    specifications: ["Fully custom, based on your requirement"],
    materials: ["Depends on product"],
    finishes: ["Depends on product"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
