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
  approach?: string;
  solution?: string;
  results?: string;
  testimonial?: { quote: string; name: string; role: string };
  images?: string[];
  comingSoon: boolean;
};

// No real projects have been published yet. This array is intentionally
// CMS-shaped so real case studies can be dropped in without changing markup.
export const portfolioProjects: PortfolioProject[] = [];

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
