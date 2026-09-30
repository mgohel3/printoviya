export type PortfolioCategory =
  | "Branding & Identity"
  | "Packaging"
  | "Merchandise"
  | "Print Solutions"
  | "Social Media"
  | "Design Support";

export type PortfolioProject = {
  title: string;
  slug: string;
  category: PortfolioCategory;
  service: string;
  client?: string;
  industry?: string;
  location?: string;
  description?: string;
  challenge?: string;
  needsHelpWith?: string[];
  approach?: string;
  processSteps?: string[];
  solution?: string;
  solutionHighlights?: string[];
  results?: string;
  keyResults?: string[];
  testimonial?: { quote: string; name: string; role: string };
  images?: string[];
  /** True only for the built-in design-reference entry — never a real case study. */
  isTemplatePreview?: boolean;
  comingSoon: boolean;
};

// No real client projects have been published yet. This array is
// intentionally CMS-shaped so real case studies can be dropped in without
// changing markup. The one entry below is a clearly-labelled template
// preview (not a real client) kept only so the case-study layout can be
// reviewed live — remove it once real projects are added.
export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Template Preview: Packaging Project",
    slug: "template-preview",
    category: "Packaging",
    service: "Packaging Solutions",
    client: "Sample Client (Template)",
    industry: "Example Industry",
    location: "Template",
    isTemplatePreview: true,
    description:
      "This is a placeholder entry used only to preview the case-study page layout. It will be replaced with a real, approved client project.",
    challenge:
      "This is where the client's real challenge will be described once a real project is published — for example, needing a consistent packaging system across multiple products.",
    needsHelpWith: [
      "A premium, modern packaging design",
      "Print-ready files with correct dimensions",
      "Guidance on materials, finishes and sustainable options",
      "Coordination with their chosen printer",
      "A consistent design across multiple products",
    ],
    approach:
      "This is where Printoviya's real approach for the project will be described — for example, working closely with the client from concept through production-ready files.",
    processSteps: [
      "Understand Brand Requirements",
      "Design Concepts & Revisions",
      "Prepare Print-Ready Files",
      "Material & Finish Suggestions",
      "Coordinate With Printer",
      "Final Files & Support",
    ],
    solution:
      "This is where the delivered solution will be described once real production artwork is available to show.",
    solutionHighlights: ["Product Packaging", "Labels", "Shopping Bag", "Box Design", "Inserts"],
    results:
      "This is where measurable, real results will be shared once the client approves them for publishing.",
    keyResults: ["Stronger Brand Look", "Consistent Packaging Line", "Print-Ready Files Delivered", "Smooth Printer Coordination"],
    comingSoon: false,
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "Branding & Identity",
  "Packaging",
  "Merchandise",
  "Print Solutions",
  "Social Media",
  "Design Support",
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}
