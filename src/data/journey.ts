import { Lightbulb, PenTool, MonitorCog, Users, Printer, PackageCheck } from "lucide-react";
import type { JourneyStep } from "@/components/OJourney";

export const journeySteps: JourneyStep[] = [
  {
    number: "01",
    title: "Tell Us Your Need",
    description: "Share your idea or requirement.",
    icon: Lightbulb,
    imageSrc: "/banners/journey-tell-us-your-need.webp",
  },
  {
    number: "02",
    title: "We Understand & Suggest",
    description: "We guide you with options.",
    icon: PenTool,
    imageSrc: "/banners/journey-we-understand-suggest.webp",
  },
  {
    number: "03",
    title: "Design & Prepare",
    description: "We create or refine your design.",
    icon: MonitorCog,
    imageSrc: "/banners/journey-design-prepare.webp",
  },
  {
    number: "04",
    title: "Coordinate With Your Printer",
    description: "We handle technical details and communication.",
    icon: Users,
    imageSrc: "/banners/journey-coordinate-with-printer.webp",
  },
  {
    number: "05",
    title: "Print & Produce",
    description: "You print with us or your chosen printer.",
    icon: Printer,
  },
  {
    number: "06",
    title: "Get Your Final Product",
    description: "On time, hassle-free. Just results.",
    icon: PackageCheck,
  },
];
