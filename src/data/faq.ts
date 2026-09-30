export type FAQCategory = {
  category: string;
  items: { question: string; answer: string }[];
};

export const faqData: FAQCategory[] = [
  {
    category: "General",
    items: [
      {
        question: "What exactly does Printoviya do?",
        answer:
          "Printoviya helps you move from a requirement to a finished printed product. That can mean design, print-ready artwork preparation, printer coordination, production troubleshooting, or printing directly with us — you choose what you need.",
      },
      {
        question: "Is Printoviya a printing company?",
        answer:
          "Printing is part of what we do, but not all of it. We're a partner that helps you design, prepare, coordinate and produce — whether or not you print with us.",
      },
      {
        question: "Do I have to print with Printoviya?",
        answer:
          "No. You can use your own printer and we'll still help with design, artwork and coordination — or you can print directly with us. Either way, we're with you.",
      },
    ],
  },
  {
    category: "Printing",
    items: [
      {
        question: "Can you help me find a printer?",
        answer:
          "Yes. If you don't already have a printer, we can help you identify the right production approach and coordinate with a suitable printer or vendor.",
      },
      {
        question: "Can you work with my existing printer?",
        answer:
          "Yes. Tell us who you're working with and we'll help coordinate specifications, artwork and communication with them directly.",
      },
      {
        question: "Can you help with materials?",
        answer:
          "Yes — material, size and finish selection is a core part of our print consultation service.",
      },
      {
        question: "Can you help with print-ready files?",
        answer:
          "Yes. We prepare and check artwork to make sure it's genuinely production-ready before it goes to print.",
      },
    ],
  },
  {
    category: "Design",
    items: [
      {
        question: "Can Printoviya create the design?",
        answer: "Yes. We can design from scratch or refine an existing concept you already have.",
      },
      {
        question: "Can you fix my Canva design?",
        answer:
          "Yes. We regularly take existing design files — including Canva exports — and prepare them properly for production.",
      },
      {
        question: "Can I hire a dedicated designer?",
        answer:
          "Yes. We offer a dedicated, managed designer for ongoing work, particularly for US, UK and Canada clients.",
      },
    ],
  },
  {
    category: "International",
    items: [
      {
        question: "Do you work with US clients?",
        answer: "Yes, we work with clients across the US.",
      },
      {
        question: "Do you work with UK clients?",
        answer: "Yes, we work with clients across the UK.",
      },
      {
        question: "Do you work with Canada clients?",
        answer: "Yes, we work with clients across Canada.",
      },
      {
        question: "Can the designer work with my existing team?",
        answer:
          "Yes. A dedicated Printoviya designer can work directly alongside your existing team and workflow.",
      },
    ],
  },
  {
    category: "Projects",
    items: [
      {
        question: "How does pricing work?",
        answer:
          "Pricing depends on the scope of work — design, print, or both. Share your requirement on the Start a Project page and we'll respond with clear next steps.",
      },
      {
        question: "How quickly can you respond?",
        answer: "We aim to review and respond to new project requirements promptly.",
      },
      {
        question: "Can I upload files?",
        answer: "Yes — the Start a Project form includes a file upload for existing artwork or references.",
      },
      {
        question: "Can you handle large-volume projects?",
        answer: "Yes. Let us know your quantity and deadline and we'll help plan production accordingly.",
      },
    ],
  },
];
