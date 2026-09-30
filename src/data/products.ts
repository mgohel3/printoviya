export type Product = {
  title: string;
  slug: string;
  category: string;
  description: string;
  specifications: string[];
  materials: string[];
  finishes: string[];
};

export const productCategories = [
  "Business Cards",
  "Packaging",
  "Labels",
  "Stickers",
  "Brochures",
  "Catalogues",
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
    description:
      "Premium business cards designed and prepared for print — with us or your own printer.",
    specifications: ["Standard 3.5\" x 2\"", "Custom sizes available", "Single or double-sided"],
    materials: ["350gsm matte", "400gsm uncoated", "Recycled stock"],
    finishes: ["Matte", "Gloss", "Soft-touch", "Spot UV", "Foil"],
  },
  {
    title: "Custom Packaging",
    slug: "custom-packaging",
    category: "Packaging",
    description: "Boxes, sleeves, labels and inserts designed for your product and brand.",
    specifications: ["Made to your product dimensions", "Flat-pack or rigid options"],
    materials: ["Kraft board", "SBS coated board", "Corrugated"],
    finishes: ["Matte laminate", "Gloss laminate", "Spot UV", "Embossing"],
  },
  {
    title: "Labels & Stickers",
    slug: "labels-stickers",
    category: "Labels",
    description: "Product labels and stickers in any shape, size or finish.",
    specifications: ["Custom die-cut shapes", "Roll or sheet formats"],
    materials: ["Paper", "Vinyl", "Clear polypropylene"],
    finishes: ["Matte", "Gloss", "Waterproof laminate"],
  },
  {
    title: "Brochures & Catalogues",
    slug: "brochures-catalogues",
    category: "Brochures",
    description: "Multi-page marketing collateral, designed and print-prepared end to end.",
    specifications: ["A4, A5 and custom sizes", "Saddle-stitch or perfect bound"],
    materials: ["130-300gsm gloss/matte"],
    finishes: ["Matte laminate", "Gloss laminate", "Spot UV"],
  },
  {
    title: "Custom Apparel",
    slug: "custom-apparel",
    category: "Apparel",
    description: "T-shirts, hoodies and uniforms printed with your branding.",
    specifications: ["S–XXL", "Screen print or DTG"],
    materials: ["100% cotton", "Cotton-poly blend"],
    finishes: ["Screen print", "Embroidery", "DTG"],
  },
  {
    title: "Branded Mugs",
    slug: "branded-mugs",
    category: "Mugs",
    description: "Ceramic mugs printed with your logo or artwork.",
    specifications: ["11oz / 15oz", "Full-wrap or logo print"],
    materials: ["Ceramic"],
    finishes: ["Gloss", "Matte", "Two-tone"],
  },
  {
    title: "Tote Bags",
    slug: "tote-bags",
    category: "Tote Bags",
    description: "Canvas and cotton tote bags for events, retail and promotions.",
    specifications: ["Standard and custom sizes"],
    materials: ["Cotton canvas", "Jute", "Non-woven"],
    finishes: ["Screen print", "Embroidery"],
  },
  {
    title: "Branded Stationery",
    slug: "branded-stationery",
    category: "Stationery",
    description: "Notebooks, letterheads and everyday stationery, on-brand.",
    specifications: ["A4/A5 notebooks", "Letterhead + envelope sets"],
    materials: ["Recycled paper", "Premium uncoated stock"],
    finishes: ["Matte", "Foil stamping"],
  },
  {
    title: "Promotional Products",
    slug: "promotional-products",
    category: "Promotional Products",
    description: "Pens, bottles, bags and everyday items for giveaways and events.",
    specifications: ["MOQs vary by product"],
    materials: ["Varies by product"],
    finishes: ["Pad print", "Laser engrave", "Screen print"],
  },
  {
    title: "Custom Products",
    slug: "custom-products",
    category: "Custom Products",
    description: "Something specific in mind? Tell us the product and we'll help you make it.",
    specifications: ["Fully custom, based on your requirement"],
    materials: ["Depends on product"],
    finishes: ["Depends on product"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
