export interface TimelineItem {
  id: number;
  type: "work" | "education" | "achievement" | "project";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  achievements?: string[];
}

export const experienceData: TimelineItem[] = [
  {
    id: 1,
    type: "work",
    title: "Senior Mobile Developer",
    organization: "TechCorp Solutions",
    location: "Remote",
    period: "2022 - Present",
    description: [
      "Led development of 5+ React Native applications with 100K+ downloads",
      "Architected scalable mobile solutions using modern development practices",
      "Mentored junior developers and established coding standards",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "AWS", "GraphQL"],
    achievements: [
      "Improved app performance by 40%",
      "Reduced crash rate to <0.1%",
      "Led team of 6 developers",
    ],
  },
  {
    id: 2,
    type: "work",
    title: "Mobile Developer",
    organization: "InnovateTech",
    location: "San Francisco, CA",
    period: "2021 - 2022",
    description: [
      "Developed cross-platform mobile applications for e-commerce clients",
      "Collaborated with design team to implement pixel-perfect UI/UX",
      "Integrated third-party APIs and payment gateways",
      "Optimized app performance and user experience",
    ],
    technologies: ["React Native", "Redux", "Firebase", "Stripe"],
    achievements: [
      "Delivered 3 apps ahead of schedule",
      "Achieved 4.8+ star ratings on app stores",
    ],
  },
  {
    id: 3,
    type: "achievement",
    title: "Top 1% React Native Developer",
    organization: "Stack Overflow",
    location: "Global",
    period: "2024",
    description: [
      "Recognized as top 1% React Native developer based on community contributions",
      "Active contributor to open-source projects",
      "Helped 1000+ developers through answers and solutions",
    ],
  },
  {
    id: 4,
    type: "work",
    title: "Junior React Developer",
    organization: "StartupHub",
    location: "New York, NY",
    period: "2020 - 2021",
    description: [
      "Built responsive web applications using React and Next.js",
      "Worked closely with backend team to integrate RESTful APIs",
      "Participated in agile development cycles and code reviews",
      "Gained experience with modern development tools and practices",
    ],
    technologies: ["React", "Next.js", "JavaScript", "CSS3", "Node.js"],
  },
  {
    id: 5,
    type: "education",
    title: "Computer Science Degree",
    organization: "University of Technology",
    location: "Boston, MA",
    period: "2016 - 2020",
    description: [
      "Bachelor's Degree in Computer Science",
      "Specialized in Software Engineering and Mobile Development",
      "Graduated Magna Cum Laude with 3.8 GPA",
      "Active member of Computer Science Society",
    ],
    achievements: [
      "Dean's List for 6 semesters",
      "Winner of Annual Hackathon 2019",
      "Research assistant in AI/ML lab",
    ],
  },
  {
    id: 6,
    type: "achievement",
    title: "AWS Certified Developer",
    organization: "Amazon Web Services",
    location: "Global",
    period: "2023",
    description: [
      "Achieved AWS Certified Developer Associate certification",
      "Demonstrated proficiency in developing and maintaining AWS applications",
      "Expertise in AWS services, security, and best practices",
    ],
  },
];

export const getTypeIcon = (type: string): string => {
  switch (type) {
    case "work":
      return "FaBriefcase";
    case "education":
      return "FaGraduationCap";
    case "achievement":
      return "FaAward";
    case "project":
      return "FaCode";
    default:
      return "FaBriefcase";
  }
};

export const getTypeColor = (type: string): string => {
  switch (type) {
    case "work":
      return "bg-blue-100 text-blue-800";
    case "education":
      return "bg-green-100 text-green-800";
    case "achievement":
      return "bg-yellow-100 text-yellow-800";
    case "project":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const experienceStats = {
  yearsExperience: "4+",
  projectsDelivered: "50+",
  certifications: "3",
  appDownloads: "100K+",
};
