// Project Data
export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  duration: string;
  teamSize: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
  tags: string[];
  image: string;
  readTime: string;
  category: string;
}

export const projectItems: Project[] = [
  {
    id: 1,
    image: '/pj1.png',
    title: 'SeeXe - Smart Vehicle Management',
    description:
      'A comprehensive IoT-powered vehicle tracking and management system with real-time GPS monitoring, fuel consumption analytics, and predictive maintenance alerts. Features driver behavior analysis and fleet optimization.',
    category: 'IoT',
    technologies: [
      'React Native',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'Google Maps API',
      'Firebase',
    ],
    features: [
      'Real-time GPS tracking',
      'Fuel consumption monitoring',
      'Driver behavior analytics',
      'Predictive maintenance',
      'Fleet management dashboard',
    ],
    githubUrl: 'https://github.com/DustinDoan315/SeeXe',
    demoUrl: 'https://seexe-demo.netlify.app',
    status: 'Completed',
    duration: '6 months',
    teamSize: '4 developers',
  },
  {
    id: 2,
    image: '/pj2.png',
    title: 'EliteShop - E-commerce Platform',
    description:
      'A full-featured mobile e-commerce application with advanced product filtering, secure payment integration, wishlist functionality, and AI-powered product recommendations. Includes admin dashboard for inventory management.',
    category: 'E-commerce',
    technologies: [
      'React Native',
      'Redux',
      'Node.js',
      'PostgreSQL',
      'Stripe API',
      'AWS S3',
    ],
    features: [
      'AI-powered recommendations',
      'Secure payment gateway',
      'Real-time inventory tracking',
      'Advanced search & filters',
      'Admin dashboard',
      'Push notifications',
    ],
    githubUrl: 'https://github.com/DustinDoan315/EliteShop',
    demoUrl: 'https://eliteshop-demo.herokuapp.com',
    status: 'Completed',
    duration: '8 months',
    teamSize: '5 developers',
  },
  {
    id: 3,
    image: '/pj3.png',
    title: 'FinanceTracker Pro',
    description:
      'A sophisticated personal finance management app with expense tracking, budget planning, investment portfolio monitoring, and financial goal setting. Features advanced analytics and reporting capabilities.',
    category: 'Finance',
    technologies: [
      'React Native',
      'TypeScript',
      'GraphQL',
      'PostgreSQL',
      'Chart.js',
      'Plaid API',
    ],
    features: [
      'Expense categorization',
      'Budget planning & alerts',
      'Investment tracking',
      'Financial goal setting',
      'Advanced analytics',
      'Bank account integration',
    ],
    githubUrl: 'https://github.com/DustinDoan315/FinanceTracker',
    demoUrl: 'https://financetracker-demo.vercel.app',
    status: 'Completed',
    duration: '5 months',
    teamSize: '3 developers',
  },
  {
    id: 4,
    image: '/AppImages/1-1.png',
    title: 'Crypto - Trading Platform',
    description:
      'A comprehensive cryptocurrency trading platform with real-time market data, portfolio management, advanced charting tools, and automated trading bots. Supports multiple exchanges and wallets.',
    category: 'Blockchain',
    technologies: [
      'React Native',
      'Web3.js',
      'Solidity',
      'Node.js',
      'MongoDB',
      'WebSocket',
    ],
    features: [
      'Real-time crypto prices',
      'Portfolio management',
      'Automated trading bots',
      'Multi-wallet support',
      'Advanced charting',
      'DeFi integration',
    ],
    githubUrl: 'https://github.com/DustinDoan315/tradingsimulation',
    demoUrl: 'https://cryptovault-demo.netlify.app',
    status: 'Completed',
    duration: '10 months',
    teamSize: '6 developers',
  },
  {
    id: 5,
    image: '/AppImages/1-2.png',
    title: 'SmartHome Hub',
    description:
      'An intelligent home automation system that controls lighting, temperature, security cameras, and smart appliances. Features voice control, energy monitoring, and machine learning for automated routines.',
    category: 'IoT',
    technologies: [
      'React Native',
      'Python',
      'Raspberry Pi',
      'MQTT',
      'TensorFlow',
      'Firebase',
    ],
    features: [
      'Voice control integration',
      'Energy monitoring',
      'Security system',
      'Automated routines',
      'Device scheduling',
      'Remote access',
    ],
    githubUrl: 'https://github.com/DustinDoan315/SmartHome',
    demoUrl: 'https://smarthome-demo.vercel.app',
    status: 'In Progress',
    duration: '4 months',
    teamSize: '3 developers',
  },
  {
    id: 6,
    image: '/AppImages/1-3.png',
    title: 'EventMaster - Event Management',
    description:
      'A comprehensive event management platform for organizing conferences, workshops, and social gatherings. Features ticket sales, attendee management, live streaming, and networking capabilities.',
    category: 'Events',
    technologies: [
      'React Native',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Stripe',
      'Zoom API',
    ],
    features: [
      'Ticket sales & QR codes',
      'Attendee networking',
      'Live streaming',
      'Event analytics',
      'Push notifications',
      'Calendar integration',
    ],
    githubUrl: 'https://github.com/DustinDoan315/EventMaster',
    demoUrl: 'https://eventmaster-demo.herokuapp.com',
    status: 'Completed',
    duration: '7 months',
    teamSize: '4 developers',
  },
  {
    id: 7,
    image: '/AppImages/1-4.png',
    title: 'HealthTracker - Medical App',
    description:
      'A comprehensive health monitoring application with symptom tracking, medication reminders, doctor consultations, and health analytics. Integrates with wearable devices for continuous monitoring.',
    category: 'Healthcare',
    technologies: [
      'React Native',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'WebRTC',
      'HealthKit',
    ],
    features: [
      'Symptom tracking',
      'Medication reminders',
      'Telemedicine consultations',
      'Health analytics',
      'Wearable integration',
      'Medical records',
    ],
    githubUrl: 'https://github.com/DustinDoan315/HealthTracker',
    demoUrl: 'https://healthtracker-demo.netlify.app',
    status: 'Completed',
    duration: '9 months',
    teamSize: '5 developers',
  },
  {
    id: 8,
    image: '/AppImages/1-5.png',
    title: 'EduLearn - Learning Platform',
    description:
      'An interactive online learning platform with video courses, quizzes, progress tracking, and collaborative features. Supports offline content download and adaptive learning paths.',
    category: 'Education',
    technologies: [
      'React Native',
      'Redux',
      'Node.js',
      'MongoDB',
      'AWS S3',
      'Socket.io',
    ],
    features: [
      'Video streaming',
      'Interactive quizzes',
      'Progress tracking',
      'Offline content',
      'Discussion forums',
      'Adaptive learning',
    ],
    githubUrl: 'https://github.com/DustinDoan315/EduLearn',
    demoUrl: 'https://edulearn-demo.vercel.app',
    status: 'Completed',
    duration: '6 months',
    teamSize: '4 developers',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding React State: From Basics to Advanced Patterns',
    date: 'November 15, 2024',
    content:
      "React state is the cornerstone of dynamic applications. In this comprehensive guide, we'll explore everything from useState and useEffect hooks to advanced state management patterns with useReducer and Context API. Learn how to avoid common pitfalls like unnecessary re-renders and state mutation, while implementing efficient state updates that scale with your application. We'll also dive into when to choose local vs global state, and how to optimize performance with React.memo and useMemo.",
    tags: ['React', 'JavaScript', 'State Management', 'Hooks', 'Performance'],
    image: '/react-state.png',
    readTime: '8 min read',
    category: 'Frontend Development',
  },
  {
    id: 2,
    title: "Next.js 14: The Complete Developer's Guide to Modern React",
    date: 'November 10, 2024',
    content:
      "Next.js has revolutionized React development with its powerful features like server-side rendering, static site generation, and the new App Router. This comprehensive guide covers Next.js 14's latest features including Server Components, streaming, and improved performance optimizations. Learn how to build production-ready applications with built-in SEO, automatic code splitting, and seamless deployment. We'll explore real-world examples and best practices for creating fast, scalable web applications.",
    tags: ['Next.js', 'React', 'Server-Side Rendering', 'Performance', 'SEO'],
    image: '/nextjs-basics.webp',
    readTime: '12 min read',
    category: 'Full-Stack Development',
  },
  {
    id: 3,
    title: 'React Native Performance: Advanced Optimization Techniques',
    date: 'November 5, 2024',
    content:
      "Performance is crucial for mobile applications. This in-depth article covers advanced React Native optimization techniques including proper list rendering with FlatList, image optimization strategies, memory management, and bundle size reduction. Learn how to use Flipper for performance debugging, implement lazy loading, and leverage native modules for CPU-intensive tasks. We'll also explore the new Hermes JavaScript engine and its impact on app startup time and memory usage.",
    tags: ['React Native', 'Performance', 'Mobile Development', 'Optimization'],
    image: '/AppImages/1-1.png',
    readTime: '15 min read',
    category: 'Mobile Development',
  },
  {
    id: 4,
    title: 'Building Scalable APIs with Node.js and GraphQL',
    date: 'October 28, 2024',
    content:
      "Modern applications require flexible and efficient APIs. This guide demonstrates how to build scalable GraphQL APIs with Node.js, covering schema design, resolvers, authentication, and real-time subscriptions. Learn best practices for data fetching, error handling, and performance optimization. We'll implement a complete authentication system, explore database integration with Prisma, and deploy to production with proper monitoring and caching strategies.",
    tags: ['Node.js', 'GraphQL', 'API Development', 'Backend', 'Database'],
    image: '/generator.png',
    readTime: '10 min read',
    category: 'Backend Development',
  },
  {
    id: 5,
    title: 'Web3 Development: Building DApps with React and Ethereum',
    date: 'October 20, 2024',
    content:
      "Decentralized applications are the future of web development. This comprehensive tutorial walks through building a complete DApp using React, Web3.js, and Solidity smart contracts. Learn how to interact with the Ethereum blockchain, handle wallet connections with MetaMask, and implement secure smart contracts. We'll cover gas optimization, testing strategies, and deployment to testnets. Perfect for developers looking to enter the Web3 space.",
    tags: ['Web3', 'Blockchain', 'React', 'Ethereum', 'Smart Contracts'],
    image: '/diff.png',
    readTime: '18 min read',
    category: 'Blockchain Development',
  },
  {
    id: 6,
    title: 'TypeScript Best Practices for Large-Scale Applications',
    date: 'October 15, 2024',
    content:
      "TypeScript has become essential for building maintainable JavaScript applications. This article covers advanced TypeScript patterns, proper type definitions, and configuration strategies for large codebases. Learn about utility types, conditional types, and how to leverage TypeScript's powerful type system for better developer experience. We'll explore real-world examples from enterprise applications and discuss migration strategies from JavaScript to TypeScript.",
    tags: ['TypeScript', 'JavaScript', 'Best Practices', 'Enterprise', 'Types'],
    image: '/tulip.jpg',
    readTime: '14 min read',
    category: 'Programming Languages',
  },
  {
    id: 7,
    title: 'Modern CSS: Grid, Flexbox, and Container Queries',
    date: 'October 8, 2024',
    content:
      "CSS has evolved tremendously with powerful layout systems and responsive design techniques. This guide covers modern CSS features including CSS Grid, Flexbox, Container Queries, and CSS Custom Properties. Learn how to create responsive layouts without media queries, implement dark mode with CSS variables, and use modern CSS features for better performance. We'll build practical examples and explore browser support considerations.",
    tags: ['CSS', 'Web Design', 'Responsive Design', 'Layout', 'Modern CSS'],
    image: '/AppImages/1-2.png',
    readTime: '11 min read',
    category: 'Frontend Development',
  },
  {
    id: 8,
    title: 'DevOps for Frontend Developers: CI/CD with GitHub Actions',
    date: 'September 30, 2024',
    content:
      "Continuous integration and deployment are crucial for modern development workflows. This practical guide shows frontend developers how to set up robust CI/CD pipelines using GitHub Actions. Learn how to automate testing, building, and deployment processes for React applications. We'll cover environment management, security best practices, and monitoring strategies. Perfect for developers who want to streamline their development workflow and ensure code quality.",
    tags: ['DevOps', 'CI/CD', 'GitHub Actions', 'Deployment', 'Automation'],
    image: '/AppImages/1-3.png',
    readTime: '13 min read',
    category: 'DevOps',
  },
];

// Helper functions
export const getProjectsByCategory = (category?: string) => {
  if (!category || category === 'All') {
    return projectItems;
  }
  return projectItems.filter((project) => project.category === category);
};

export const getBlogsByCategory = (category?: string) => {
  if (!category || category === 'All Posts') {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.category === category);
};

export const getProjectCategories = () => {
  const categories = [
    ...new Set(projectItems.map((project) => project.category)),
  ];
  return ['All', ...categories];
};

export const getBlogCategories = () => {
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  return ['All Posts', ...categories];
};
