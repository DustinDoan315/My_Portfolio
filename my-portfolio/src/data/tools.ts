export interface Tool {
  image: string;
  title: string;
  name: string;
  description: string;
  category?: string;
  technologies?: string[];
  features?: string[];
}

export const toolsData: Tool[] = [
  {
    image: "/tulip.jpg",
    title: "Chemistry Formatter",
    name: "formatter",
    description:
      "Formats chemical equations and compounds with proper subscripts and bold elements. Perfect for students and researchers working with chemical formulas.",
    category: "Education",
    technologies: ["React", "JavaScript", "CSS3"],
    features: [
      "Chemical formula formatting",
      "Subscript and superscript support",
      "Real-time preview",
      "Export functionality",
    ],
  },
  {
    image: "/diff.png",
    title: "Check Difference",
    name: "checkdifference",
    description:
      "A real-time text difference checker that highlights additions and deletions line-by-line with line indexing. Useful for code reviews and document comparison.",
    category: "Development Tools",
    technologies: ["React", "JavaScript", "Diff Algorithm"],
    features: [
      "Line-by-line comparison",
      "Real-time highlighting",
      "Line indexing",
      "Export differences",
    ],
  },
  {
    image: "/generator.png",
    title: "Generate Excel",
    name: "generateexcel",
    description:
      "Generate Excel files from experimental data with customizable templates and formatting options. Perfect for data analysis and reporting.",
    category: "Data Processing",
    technologies: ["React", "ExcelJS", "JavaScript"],
    features: [
      "Custom templates",
      "Data validation",
      "Multiple formats",
      "Batch processing",
    ],
  },
  {
    image: "/tulip.jpg",
    title: "Generate Word",
    name: "generateword",
    description:
      "Create Word documents programmatically with custom formatting, templates, and content. Ideal for report generation and document automation.",
    category: "Document Processing",
    technologies: ["React", "DocxJS", "JavaScript"],
    features: [
      "Custom templates",
      "Rich formatting",
      "Image insertion",
      "Automated generation",
    ],
  },
];

export const toolCategories = [
  "All Tools",
  "Education",
  "Development Tools",
  "Data Processing",
  "Document Processing",
];
