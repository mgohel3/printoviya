import {
  CreditCard,
  Package,
  BookOpen,
  GalleryHorizontal,
  Signpost,
  Tent,
  Shirt,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type CatalogProduct = {
  title: string;
  slug: string;
  options: string[];
};

export type CatalogCategory = {
  title: string;
  slug: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  /** Custom (category 8) has no fixed product list — rendered as a dedicated CTA page. */
  isCustom?: boolean;
  /** Full-width hero banner with baked-in heading/CTA — replaces the plain text hero when set. */
  bannerSrc?: string;
  /** Square product-grid thumbnail — shown on /products' category cards in place of the placeholder. */
  thumbnailSrc?: string;
  products: CatalogProduct[];
};

const NOT_SURE_DEFAULT =
  "Not sure what you need? Tell us your requirement and we'll help you choose the right option and handle the rest.";

export const catalogCategories: CatalogCategory[] = [
  {
    title: "Business Essentials",
    slug: "business-essentials",
    bannerSrc: "/banners/category-business-essentials.webp",
    thumbnailSrc: "/banners/thumb-business-essentials.webp",
    icon: CreditCard,
    tagline: "Everyday printed essentials for your business.",
    description:
      "Business cards, stationery and everyday essentials — designed and prepared for print, in standard, premium or fully custom options.",
    products: [
      {
        title: "Business Cards",
        slug: "business-cards",
        options: [
          "Matte / Gloss / Velvet Lamination",
          "Without Lamination",
          "Spot UV",
          "Foil",
          "Embossing / Debossing",
          "Rounded Corners",
          "Custom Shapes",
          "Thick / Multi-Layer Cards",
          "Kraft & Specialty Papers",
          "Folded Business Cards",
        ],
      },
      {
        title: "Letterheads",
        slug: "letterheads",
        options: [
          "Standard & Premium Paper Stocks",
          "Letterhead + Envelope Sets",
          "Single or Full-Color Printing",
          "Custom Sizes",
          "Recycled & Specialty Papers",
        ],
      },
      {
        title: "Envelopes",
        slug: "envelopes",
        options: [
          "Standard & Custom Sizes",
          "Window & Non-Window",
          "Printed or Blank",
          "Kraft & Specialty Papers",
          "Full-Color Printing",
        ],
      },
      {
        title: "Notepads",
        slug: "notepads",
        options: [
          "A4 / A5 / Custom Sizes",
          "Glued or Spiral-Bound",
          "Branded Headers",
          "Custom Page Counts",
          "Recycled Paper Options",
        ],
      },
      {
        title: "Presentation Folders",
        slug: "presentation-folders",
        options: [
          "Standard & Custom Pocket Styles",
          "Matte / Gloss Finish",
          "Business Card Slits",
          "Foil & Spot UV",
          "Custom Sizes",
        ],
      },
      {
        title: "Postcards",
        slug: "postcards",
        options: [
          "Standard & Premium Postcards",
          "Matte / Gloss Finish",
          "Rounded Corners",
          "Custom Sizes",
          "UV Coating",
        ],
      },
      {
        title: "Appointment Cards",
        slug: "appointment-cards",
        options: [
          "Standard & Custom Sizes",
          "Matte / Gloss Finish",
          "Single or Double-Sided",
          "Rounded Corners",
          "Custom Layouts",
        ],
      },
      {
        title: "Thank You Cards",
        slug: "thank-you-cards",
        options: [
          "Standard & Premium Cardstock",
          "Matte / Gloss Finish",
          "Foil Finishing",
          "Custom Sizes",
          "Folded or Flat",
        ],
      },
    ],
  },
  {
    title: "Packaging & Product Branding",
    slug: "packaging-product-branding",
    bannerSrc: "/banners/category-packaging-product-branding.webp",
    thumbnailSrc: "/banners/thumb-packaging-product-branding.webp",
    icon: Package,
    tagline: "Custom packaging, labels and tags that make your product stand out.",
    description:
      "Tell us what you're packaging and we'll help you choose the right structure, material, finish and printing option — from boxes to labels to hang tags.",
    products: [
      {
        title: "Custom Product Boxes",
        slug: "custom-product-boxes",
        options: [
          "Folding Boxes",
          "Rigid Boxes",
          "Magnetic Closure Boxes",
          "Kraft Boxes",
          "Window Boxes",
          "Die-Cut Boxes",
          "Sleeve Boxes",
          "Custom Size & Shape",
          "Matte / Gloss Finish",
          "Soft-Touch Lamination",
          "Spot UV",
          "Foil Finishing",
          "Embossing / Debossing",
          "With or Without Lamination",
          "Specialty & Eco-Friendly Materials",
        ],
      },
      {
        title: "Mailer Boxes",
        slug: "mailer-boxes",
        options: [
          "Corrugated Mailer Boxes",
          "Shipping-Ready Mailer Boxes",
          "Custom Branded Interiors",
          "Kraft & White Options",
          "Matte / Gloss Finish",
          "Custom Sizes",
        ],
      },
      {
        title: "Shipping Boxes",
        slug: "shipping-boxes",
        options: [
          "Corrugated Shipping Boxes",
          "Single / Double-Wall",
          "Custom Printed Exteriors",
          "Standard & Custom Sizes",
          "Bulk & Retail-Ready Options",
        ],
      },
      {
        title: "Folding Cartons",
        slug: "folding-cartons",
        options: [
          "Tuck-End Cartons",
          "Auto-Lock Bottom Cartons",
          "Display Cartons",
          "Matte / Gloss Finish",
          "Custom Size & Shape",
        ],
      },
      {
        title: "Product Labels",
        slug: "product-labels",
        options: [
          "Sheet Labels",
          "Roll Labels",
          "Die-Cut Labels",
          "Clear Labels",
          "Transparent Labels",
          "Kraft Labels",
          "Waterproof Labels",
          "Matte / Gloss Labels",
          "Foil Labels",
          "Custom Shape Labels",
          "Removable / Permanent Options",
        ],
      },
      {
        title: "Roll Labels",
        slug: "roll-labels",
        options: [
          "Standard & Custom Roll Sizes",
          "Matte / Gloss / Clear",
          "Waterproof Options",
          "Sequential Numbering",
          "Custom Shapes",
        ],
      },
      {
        title: "Hang Tags",
        slug: "hang-tags",
        options: [
          "Standard Hang Tags",
          "Folded Hang Tags",
          "Die-Cut Tags",
          "Kraft Tags",
          "Foil Tags",
          "Embossed Tags",
          "With String / Without String",
          "Custom Shape & Size",
        ],
      },
      {
        title: "Packaging Stickers",
        slug: "packaging-stickers",
        options: [
          "Logo Stickers",
          "Thank You Stickers",
          "Sealing Stickers",
          "Product Stickers",
          "Clear Stickers",
          "Kraft Stickers",
          "Die-Cut Stickers",
          "Foil Stickers",
          "Waterproof Stickers",
        ],
      },
      {
        title: "Sticker Sheets",
        slug: "sticker-sheets",
        options: [
          "Custom Sheet Layouts",
          "Matte / Gloss / Clear",
          "Die-Cut Shapes",
          "Waterproof Options",
          "Custom Sizes",
        ],
      },
      {
        title: "Tissue & Wrapping Paper",
        slug: "tissue-wrapping-paper",
        options: [
          "Custom Printed Tissue Paper",
          "Branded Wrapping Paper",
          "Matte / Gloss Finish",
          "Custom Colors & Patterns",
          "Bulk Options",
        ],
      },
    ],
  },
  {
    title: "Marketing & Promotional Print",
    slug: "marketing-promotional-print",
    bannerSrc: "/banners/category-marketing-promotional-print.webp",
    thumbnailSrc: "/banners/thumb-marketing-promotional-print.webp",
    icon: BookOpen,
    tagline: "Brochures, flyers and collateral that get your message out.",
    description:
      "Marketing and promotional materials — from a single-fold flyer to a full product catalogue — designed and print-prepared end to end.",
    products: [
      {
        title: "Brochures",
        slug: "brochures",
        options: [
          "Bi-Fold Brochures",
          "Tri-Fold Brochures",
          "Z-Fold Brochures",
          "Gate-Fold Brochures",
          "Half-Fold Brochures",
          "Multi-Page Brochures",
          "Matte / Gloss Finish",
          "With or Without Lamination",
          "Spot UV",
          "Foil Finishing",
          "Various Paper Stocks & Weights",
          "Custom Sizes",
        ],
      },
      {
        title: "Flyers",
        slug: "flyers",
        options: [
          "Single-Sided Flyers",
          "Double-Sided Flyers",
          "Half-Page Flyers",
          "Full-Page Flyers",
          "Large Format Flyers",
          "Matte / Gloss",
          "Laminated / Unlaminated",
          "Specialty Paper Options",
        ],
      },
      {
        title: "Catalogues",
        slug: "catalogues",
        options: [
          "Product Catalogues",
          "Company Catalogues",
          "Multi-Page Catalogues",
          "Saddle-Stitched",
          "Perfect Bound",
          "Softcover",
          "Matte / Gloss",
          "Custom Paper & Finishing",
        ],
      },
      {
        title: "Booklets",
        slug: "booklets",
        options: [
          "Saddle-Stitched Booklets",
          "Perfect Bound Booklets",
          "Wire-O Booklets",
          "Product Booklets",
          "Company / Information Booklets",
          "Custom Covers & Finishes",
        ],
      },
      {
        title: "Postcards",
        slug: "postcards",
        options: [
          "Standard Postcards",
          "Premium Postcards",
          "Oversized Postcards",
          "Matte / Gloss",
          "Rounded Corner",
          "UV / Specialty Finishes",
        ],
      },
      {
        title: "Door Hangers",
        slug: "door-hangers",
        options: [
          "Standard Door Hangers",
          "Die-Cut Door Hangers",
          "Custom Shapes",
          "Matte / Gloss",
          "Laminated / Unlaminated",
        ],
      },
      {
        title: "Sell Sheets",
        slug: "sell-sheets",
        options: [
          "Product Sell Sheets",
          "Service Sell Sheets",
          "One-Page Marketing Sheets",
          "Double-Sided Sell Sheets",
          "Premium Finishing Options",
        ],
      },
      {
        title: "Menus",
        slug: "menus",
        options: [
          "Restaurant Menus",
          "Takeaway Menus",
          "Folded Menus",
          "Table Menus",
          "Laminated Menus",
          "Waterproof Options",
          "Custom Shapes & Sizes",
        ],
      },
      {
        title: "Rack Cards",
        slug: "rack-cards",
        options: [
          "Standard Rack Cards",
          "Premium Rack Cards",
          "Double-Sided Rack Cards",
          "Matte / Gloss",
          "Rounded Corner Options",
        ],
      },
    ],
  },
  {
    title: "Banners & Large Displays",
    slug: "banners-large-displays",
    bannerSrc: "/banners/category-banners-large-displays.webp",
    thumbnailSrc: "/banners/thumb-banners-large-displays.webp",
    icon: GalleryHorizontal,
    tagline: "Large-format printed graphics that get noticed.",
    description:
      "Printed large-format graphics — banners, posters, murals and floor graphics — specified and produced to indoor or outdoor standards.",
    products: [
      {
        title: "Vinyl Banners",
        slug: "vinyl-banners",
        options: [
          "Indoor Banners",
          "Outdoor Banners",
          "Mesh Banners",
          "Double-Sided Banners",
          "Single-Sided Banners",
          "Matte / Gloss Finish",
          "Hemmed Edges",
          "Grommets",
          "Pole Pockets",
          "Custom Sizes",
          "Wind-Resistant Options",
        ],
      },
      {
        title: "Fabric Banners",
        slug: "fabric-banners",
        options: [
          "Tension Fabric Banners",
          "Hanging Fabric Banners",
          "Backlit Fabric",
          "Single / Double-Sided",
          "Silicone Edge Graphics (SEG)",
          "Custom Sizes",
          "Indoor / Event Use",
        ],
      },
      {
        title: "Retractable Banner Stands",
        slug: "retractable-banner-stands",
        options: [
          "Standard Retractable Banners",
          "Premium Retractable Stands",
          "Double-Sided Retractable",
          "Portable Displays",
          "Replacement Graphics",
        ],
      },
      {
        title: "X Banner Stands",
        slug: "x-banner-stands",
        options: [
          "Standard X Banner",
          "Adjustable X Banner",
          "Indoor Display",
          "Portable Event Display",
        ],
      },
      {
        title: "Step & Repeat Banners",
        slug: "step-repeat-banners",
        options: [
          "Logo Wall",
          "Event Backdrops",
          "Media Walls",
          "Fabric / Vinyl Options",
          "Custom Sizes",
        ],
      },
      {
        title: "Backdrop Banners",
        slug: "backdrop-banners",
        options: [
          "Fabric Backdrops",
          "Vinyl Backdrops",
          "Tension Fabric Backdrops",
          "Photo Backdrops",
          "Trade Show Backdrops",
          "Custom Shapes & Sizes",
        ],
      },
      {
        title: "Large Format Posters",
        slug: "large-format-posters",
        options: [
          "Indoor Posters",
          "Outdoor Posters",
          "Mounted Posters",
          "Photo Posters",
          "Promotional Posters",
          "Various Paper & Material Options",
        ],
      },
      {
        title: "Wall Murals",
        slug: "wall-murals",
        options: [
          "Full Wall Graphics",
          "Custom Wall Murals",
          "Removable Wall Graphics",
          "Textured Wall Graphics",
          "Custom Size & Shape",
        ],
      },
      {
        title: "Floor Graphics",
        slug: "floor-graphics",
        options: [
          "Indoor Floor Graphics",
          "Outdoor Floor Graphics",
          "Anti-Slip Floor Graphics",
          "Removable Floor Graphics",
          "Custom Shapes",
        ],
      },
    ],
  },
  {
    title: "Branding, Graphics & Signage",
    slug: "branding-graphics-signage",
    bannerSrc: "/banners/category-branding-graphics-signage.webp",
    thumbnailSrc: "/banners/thumb-branding-graphics-signage.webp",
    icon: Signpost,
    tagline: "Wall, window, vehicle and sign graphics for your space.",
    description:
      "Got a wall, window, vehicle or storefront that needs branding? Tell us the space and we'll help with design, specification, printing and coordination.",
    products: [
      {
        title: "Wall Graphics",
        slug: "wall-graphics",
        options: [
          "Wall Decals",
          "Wall Murals",
          "Removable Wall Graphics",
          "Custom Wall Stickers",
          "Frosted / Decorative Wall Graphics",
          "Custom Sizes & Shapes",
        ],
      },
      {
        title: "Window Graphics",
        slug: "window-graphics",
        options: [
          "Clear Window Graphics",
          "Opaque Window Graphics",
          "Perforated Window Film",
          "Frosted Window Graphics",
          "Removable Window Graphics",
          "Full Window Coverage",
        ],
      },
      {
        title: "Vinyl Graphics",
        slug: "vinyl-graphics",
        options: [
          "Die-Cut Vinyl Graphics",
          "Custom Vinyl Stickers",
          "Indoor Vinyl Graphics",
          "Outdoor Vinyl Graphics",
          "Permanent / Removable Vinyl",
          "Matte / Gloss Finish",
        ],
      },
      {
        title: "Vehicle Graphics",
        slug: "vehicle-graphics",
        options: [
          "Vehicle Decals",
          "Partial Vehicle Wraps",
          "Full Vehicle Wraps",
          "Door Graphics",
          "Hood Graphics",
          "Fleet Graphics",
        ],
      },
      {
        title: "Vehicle Lettering",
        slug: "vehicle-lettering",
        options: [
          "Business Name Lettering",
          "Contact Information",
          "Logo Lettering",
          "Door Lettering",
          "Fleet Lettering",
          "Custom Vinyl Lettering",
        ],
      },
      {
        title: "Yard Signs",
        slug: "yard-signs",
        options: [
          "Standard Yard Signs",
          "Real Estate Signs",
          "Event Signs",
          "Directional Yard Signs",
          "Political / Campaign Signs",
          "Custom Sizes",
        ],
      },
      {
        title: "A-Frame Signs",
        slug: "a-frame-signs",
        options: [
          "Sidewalk Signs",
          "Promotional A-Frames",
          "Directional A-Frames",
          "Indoor / Outdoor Options",
          "Custom Printed Inserts",
        ],
      },
      {
        title: "Rigid Signs",
        slug: "rigid-signs",
        options: [
          "PVC Foam Board Signs",
          "Coroplast Signs",
          "Aluminum Signs",
          "Plastic Signs",
          "Indoor / Outdoor Signs",
          "Custom Shapes & Sizes",
        ],
      },
      {
        title: "Acrylic Signs",
        slug: "acrylic-signs",
        options: [
          "Clear Acrylic Signs",
          "Frosted Acrylic",
          "Colored Acrylic",
          "Printed Acrylic",
          "Reception Signs",
          "Wall-Mounted Acrylic Signs",
        ],
      },
      {
        title: "Magnetic Signs",
        slug: "magnetic-signs",
        options: [
          "Vehicle Magnetic Signs",
          "Magnetic Door Signs",
          "Magnetic Promotional Signs",
          "Removable Magnetic Graphics",
          "Custom Sizes",
        ],
      },
    ],
  },
  {
    title: "Events & Brand Displays",
    slug: "events-brand-displays",
    thumbnailSrc: "/banners/thumb-events-brand-displays.webp",
    icon: Tent,
    tagline: "Show up. Stand out. Get noticed.",
    description:
      "Physical display products for events, exhibitions, trade shows, conferences, pop-ups and brand activations.",
    products: [
      {
        title: "Trade Show Canopies",
        slug: "trade-show-canopies",
        options: [
          "10×10 Canopies",
          "10×15 Canopies",
          "10×20 Canopies",
          "Printed Canopy Tops",
          "Full / Half Walls",
          "Custom Branding",
          "Indoor / Outdoor Options",
        ],
      },
      {
        title: "Table Covers",
        slug: "table-covers",
        options: [
          "Full-Fit Table Covers",
          "3-Sided Table Covers",
          "Stretch Table Covers",
          "Custom Printed Table Covers",
          "Various Table Sizes",
        ],
      },
      {
        title: "Table Runners",
        slug: "table-runners",
        options: [
          "Standard Table Runners",
          "Custom Printed Runners",
          "Logo Runners",
          "Different Widths & Sizes",
        ],
      },
      {
        title: "Feather Flags",
        slug: "feather-flags",
        options: [
          "Single-Sided Feather Flags",
          "Double-Sided Feather Flags",
          "Indoor / Outdoor",
          "Ground Base Options",
          "Custom Shapes & Sizes",
        ],
      },
      {
        title: "Teardrop Flags",
        slug: "teardrop-flags",
        options: [
          "Standard Teardrop Flags",
          "Double-Sided Options",
          "Indoor / Outdoor",
          "Ground Base Options",
          "Custom Sizes",
        ],
      },
      {
        title: "Pop-Up Displays",
        slug: "pop-up-displays",
        options: [
          "Straight Pop-Up Displays",
          "Curved Pop-Up Displays",
          "Fabric Pop-Up Displays",
          "Backlit Pop-Up Displays",
          "Portable Display Systems",
        ],
      },
      {
        title: "Trade Show Displays",
        slug: "trade-show-displays",
        options: [
          "Inline Displays",
          "Modular Displays",
          "Backlit Displays",
          "Fabric Displays",
          "Portable Trade Show Displays",
          "Custom Booth Graphics",
        ],
      },
      {
        title: "Trade Show Backdrops",
        slug: "trade-show-backdrops",
        options: [
          "Fabric Backdrops",
          "Tension Fabric Backdrops",
          "Step & Repeat Backdrops",
          "Backlit Backdrops",
          "Custom Sizes",
        ],
      },
      {
        title: "Wall Box Displays",
        slug: "wall-box-displays",
        options: [
          "Fabric Wall Box Displays",
          "Backlit Wall Box Displays",
          "Straight Wall Displays",
          "Curved Wall Displays",
          "Custom Graphic Options",
        ],
      },
      {
        title: "Tabletop Displays",
        slug: "tabletop-displays",
        options: [
          "Tabletop Fabric Displays",
          "Tabletop Backdrops",
          "Tabletop Banner Displays",
          "Portable Tabletop Systems",
        ],
      },
      {
        title: "Counter Displays",
        slug: "counter-displays",
        options: [
          "Promotional Counters",
          "Reception Counters",
          "Portable Counters",
          "Backlit Counters",
          "Custom Printed Counters",
        ],
      },
      {
        title: "Trade Show Booth Graphics",
        slug: "trade-show-booth-graphics",
        options: [
          "Back Wall Graphics",
          "Side Wall Graphics",
          "Counter Graphics",
          "Hanging Graphics",
          "Floor Graphics",
          "Custom Booth Branding",
        ],
      },
    ],
  },
  {
    title: "Apparel & Branded Merchandise",
    slug: "apparel-branded-merchandise",
    thumbnailSrc: "/banners/thumb-apparel-branded-merchandise.webp",
    icon: Shirt,
    tagline: "Branded apparel and promotional merchandise.",
    description:
      "Need branded apparel or promotional merchandise? Tell us what you want to create — we'll help with the product, artwork, printing method and production.",
    products: [
      {
        title: "T-Shirts",
        slug: "t-shirts",
        options: [
          "Crew Neck",
          "V-Neck",
          "Polo Style",
          "Long Sleeve",
          "Short Sleeve",
          "Cotton",
          "Performance / Polyester",
          "Different Colors & Sizes",
          "Screen Printing",
          "DTG Printing",
          "DTF Printing",
          "Embroidery",
          "Front / Back / Sleeve Printing",
        ],
      },
      {
        title: "Hoodies",
        slug: "hoodies",
        options: [
          "Pullover Hoodies",
          "Zip-Up Hoodies",
          "Cotton / Fleece",
          "Embroidery",
          "Screen Printing",
          "DTF Printing",
          "Custom Sizes & Colors",
        ],
      },
      {
        title: "Polo Shirts",
        slug: "polo-shirts",
        options: [
          "Cotton Polo",
          "Performance Polo",
          "Embroidered Polo",
          "Printed Polo",
          "Custom Colors & Sizes",
        ],
      },
      {
        title: "Caps & Hats",
        slug: "caps-hats",
        options: [
          "Baseball Caps",
          "Snapback Caps",
          "Trucker Hats",
          "Embroidered Caps",
          "Printed Caps",
          "Custom Colors",
        ],
      },
      {
        title: "Coffee Mugs",
        slug: "coffee-mugs",
        options: [
          "Ceramic Mugs",
          "Color-Interior Mugs",
          "Travel Mugs",
          "Photo / Full-Color Printing",
          "Logo Printing",
        ],
      },
      {
        title: "Tumblers",
        slug: "tumblers",
        options: [
          "Stainless Steel Tumblers",
          "Insulated Tumblers",
          "Travel Tumblers",
          "Laser Engraving",
          "Full-Color Printing",
        ],
      },
      {
        title: "Water Bottles",
        slug: "water-bottles",
        options: [
          "Stainless Steel",
          "Aluminum",
          "Plastic",
          "Insulated Bottles",
          "Logo Printing",
          "Laser Engraving",
        ],
      },
      {
        title: "Tote Bags",
        slug: "tote-bags",
        options: [
          "Cotton Tote Bags",
          "Canvas Tote Bags",
          "Non-Woven Tote Bags",
          "Printed Tote Bags",
          "Custom Sizes",
        ],
      },
      {
        title: "Lanyards",
        slug: "lanyards",
        options: ["Printed Lanyards", "Woven Lanyards", "Custom Attachments"],
      },
      {
        title: "Keychains",
        slug: "keychains",
        options: ["Acrylic", "Metal", "Rubber", "Custom Shapes"],
      },
      {
        title: "Buttons",
        slug: "buttons",
        options: ["Pin-Back Buttons", "Magnetic Buttons", "Custom Sizes"],
      },
      {
        title: "Corporate Gift Sets",
        slug: "corporate-gift-sets",
        options: ["Welcome Kits", "Employee Gifts", "Client Gift Sets", "Custom Packaging"],
      },
      {
        title: "Event Giveaways",
        slug: "event-giveaways",
        options: ["Branded Promotional Items", "Custom Gift Items", "Event Merchandise"],
      },
    ],
  },
  {
    title: "Custom Products",
    slug: "custom-products",
    thumbnailSrc: "/banners/thumb-custom-products.webp",
    icon: Sparkles,
    tagline: "Have something specific in mind?",
    description:
      "If it's not in our catalogue, don't worry. Tell us what you need and we'll help you make it — from sourcing and design to print-ready files and printer coordination.",
    isCustom: true,
    products: [],
  },
];

export function getCategoryBySlug(slug: string) {
  return catalogCategories.find((c) => c.slug === slug);
}

export function getProductBySlug(categorySlug: string, productSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  const product = category?.products.find((p) => p.slug === productSlug);
  return category && product ? { category, product } : undefined;
}

export const NOT_SURE_CTA = NOT_SURE_DEFAULT;

export const CUSTOM_PRODUCTS_HELP = [
  {
    title: "Product Sourcing",
    description: "Find the right product, material or production option.",
  },
  {
    title: "Design & Artwork",
    description: "Create or prepare the artwork according to production requirements.",
  },
  {
    title: "Specifications",
    description: "Help with size, material, finish, quantity and technical requirements.",
  },
  {
    title: "Printer / Vendor Coordination",
    description: "Work with your chosen printer or help identify the right production partner.",
  },
  {
    title: "Print-Ready Files",
    description: "Prepare technically correct files ready for production.",
  },
];

export const CUSTOM_PRODUCTS_PROMPTS = [
  "Don't see the product you're looking for?",
  "Have a unique product or packaging idea?",
  "Need something custom-made?",
  "Not sure where to source or print it?",
];
