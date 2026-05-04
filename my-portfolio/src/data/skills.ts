export interface Skill {
  name: string;
  icon: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  icon: string;
  iconColor: string;
  bgColor: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React',
        icon: 'FaReact',
        level: 'Expert',
        color: 'text-blue-500',
      },
      {
        name: 'React Native',
        icon: 'FaReact',
        level: 'Expert',
        color: 'text-cyan-700',
      },
      {
        name: 'Next.js',
        icon: 'SiNextdotjs',
        level: 'Advanced',
        color: 'text-gray-900',
      },
      {
        name: 'TypeScript',
        icon: 'SiTypescript',
        level: 'Advanced',
        color: 'text-blue-600',
      },
      {
        name: 'JavaScript',
        icon: 'FaJs',
        level: 'Expert',
        color: 'text-amber-500',
      },
      {
        name: 'Tailwind CSS',
        icon: 'SiTailwindcss',
        level: 'Advanced',
        color: 'text-cyan-600',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node.js',
        icon: 'FaNodeJs',
        level: 'Advanced',
        color: 'text-green-600',
      },
      {
        name: 'Python',
        icon: 'FaPython',
        level: 'Intermediate',
        color: 'text-blue-600',
      },
      {
        name: 'GraphQL',
        icon: 'SiGraphql',
        level: 'Advanced',
        color: 'text-pink-700',
      },
    ],
  },
  {
    title: 'Database',
    skills: [
      {
        name: 'MongoDB',
        icon: 'SiMongodb',
        level: 'Advanced',
        color: 'text-green-500',
      },
      {
        name: 'PostgreSQL',
        icon: 'SiPostgresql',
        level: 'Intermediate',
        color: 'text-indigo-600',
      },
      {
        name: 'Firebase',
        icon: 'SiFirebase',
        level: 'Advanced',
        color: 'text-orange-500',
      },
    ],
  },
  {
    title: 'Mobile & Tools',
    skills: [
      {
        name: 'Expo',
        icon: 'SiExpo',
        level: 'Advanced',
        color: 'text-gray-900',
      },
      {
        name: 'Redux',
        icon: 'SiRedux',
        level: 'Advanced',
        color: 'text-purple-600',
      },
      {
        name: 'Git',
        icon: 'FaGitAlt',
        level: 'Advanced',
        color: 'text-red-500',
      },
      {
        name: 'Docker',
        icon: 'FaDocker',
        level: 'Intermediate',
        color: 'text-blue-500',
      },
      {
        name: 'AWS',
        icon: 'FaAws',
        level: 'Intermediate',
        color: 'text-orange-500',
      },
    ],
  },
  {
    title: 'Blockchain',
    skills: [
      {
        name: 'Solidity',
        icon: 'SiSolidity',
        level: 'Intermediate',
        color: 'text-slate-600',
      },
      {
        name: 'Web3.js',
        icon: 'SiWeb3Dotjs',
        level: 'Intermediate',
        color: 'text-amber-600',
      },
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'React Native Certified Developer',
    organization: 'Meta Blueprint - 2023',
    date: '2023',
    icon: '🏆',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'AWS Cloud Practitioner',
    organization: 'Amazon Web Services - 2023',
    date: '2023',
    icon: '🎓',
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Top 1% React Native Developer',
    organization: 'Stack Overflow - 2024',
    date: '2024',
    icon: '⭐',
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Mobile App Performance Expert',
    organization: 'Google Play Console - 2024',
    date: '2024',
    icon: '🚀',
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

export const getLevelColor = (level: string): string => {
  switch (level) {
    case 'Expert':
      return 'bg-emerald-100 text-emerald-800 border border-emerald-300';
    case 'Advanced':
      return 'bg-blue-100 text-blue-800 border border-blue-300';
    case 'Intermediate':
      return 'bg-amber-100 text-amber-800 border border-amber-300';
    case 'Beginner':
      return 'bg-gray-100 text-gray-700 border border-gray-300';
    default:
      return 'bg-gray-100 text-gray-700 border border-gray-300';
  }
};
