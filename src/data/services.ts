import {
  Palette,
  Package,
  Shirt,
  Printer,
  Megaphone,
  Gift,
  UserCheck,
  MessageSquareText,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  slug: string;
  icon: LucideIcon;
  short_description: string;
  full_description: string;
  features: string[];
  cta: { label: string; href: string };
};

export const services: Service[] = [
  {
    title: "Branding & Identity Design",
    slug: "branding-identity",
    icon: Palette,
    short_description: "Logos, stationery and brand assets built for real production.",
    full_description:
      "From logo design to a full brand identity system, we design brand assets that hold up in print and on screen — and we prepare every file to be production-ready.",
    features: ["Logos", "Brand identity", "Stationery", "Brand guidelines"],
    cta: { label: "Start Your Brand", href: "/start-a-project" },
  },
  {
    title: "Packaging Solutions",
    slug: "packaging-solutions",
    icon: Package,
    short_description: "Custom packaging, tags, stickers and thank-you cards.",
    full_description:
      "We design and prepare packaging artwork — boxes, labels, sleeves and inserts — and coordinate with your printer or ours to get it produced correctly the first time.",
    features: ["Boxes", "Labels", "Sleeves", "Inserts", "Packaging artwork"],
    cta: { label: "Talk Packaging", href: "/start-a-project" },
  },
  {
    title: "Merchandise Printing",
    slug: "merchandise",
    icon: Shirt,
    short_description: "T-shirts, mugs, bottles, tote bags and promotional products.",
    full_description:
      "Merchandise that represents your brand well. We help you choose the right product, prepare artwork for the printing method, and coordinate production.",
    features: ["T-shirts", "Mugs", "Tote bags", "Promotional products"],
    cta: { label: "Start a Merch Project", href: "/start-a-project" },
  },
  {
    title: "Print Solutions",
    slug: "print-solutions",
    icon: Printer,
    short_description: "Business cards, brochures, flyers, catalogues and signage.",
    full_description:
      "Everyday and large-format print, handled end to end — from file prep and material selection to production and delivery, with us or your own printer.",
    features: ["Business cards", "Brochures", "Flyers", "Catalogues", "Posters", "Signage"],
    cta: { label: "Get a Print Quote", href: "/start-a-project" },
  },
  {
    title: "Social Media Design",
    slug: "social-media-design",
    icon: Megaphone,
    short_description: "Posts, ads, campaign creatives and promotional graphics.",
    full_description:
      "Consistent, on-brand social content designed for the platforms you use — from single posts to full campaign creative sets.",
    features: ["Posts", "Ads", "Campaign creatives", "Promotional graphics"],
    cta: { label: "Request Social Designs", href: "/start-a-project" },
  },
  {
    title: "Custom Products",
    slug: "custom-products",
    icon: Gift,
    short_description: "Gifts, corporate merchandise and product-specific printing.",
    full_description:
      "Have something specific in mind? We help you specify, source and produce custom gifts, corporate merchandise and product-specific print runs.",
    features: ["Gifts", "Corporate merchandise", "Custom stationery", "Product-specific printing"],
    cta: { label: "Discuss a Custom Product", href: "/start-a-project" },
  },
  {
    title: "Dedicated Designer",
    slug: "dedicated-designer",
    icon: UserCheck,
    short_description: "A managed designer, working with you, managed by Printoviya.",
    full_description:
      "For US, UK and Canada clients who need ongoing design support, we provide a dedicated designer — managed by Printoviya — who works directly with your team.",
    features: ["Managed by Printoviya", "Works with your team", "Ongoing design support"],
    cta: { label: "Request a Designer", href: "/start-a-project" },
  },
  {
    title: "Print Consultation",
    slug: "print-consultation",
    icon: MessageSquareText,
    short_description: "Material, specification, and printer-coordination guidance.",
    full_description:
      "Not sure what material, size or finish you need? We help with specification, artwork preparation, printer coordination and production troubleshooting.",
    features: [
      "Material selection",
      "Size/specification help",
      "Artwork preparation",
      "Printer coordination",
      "Production troubleshooting",
    ],
    cta: { label: "Talk to Print Concierge", href: "/print-concierge" },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
