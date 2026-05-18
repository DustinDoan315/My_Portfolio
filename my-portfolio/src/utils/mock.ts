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
    image: '/AppImages/1-1.png',
    title: 'Trading Simulation App',
    description:
      'Educational crypto trading simulator with virtual money, real-time market data, portfolio management, and social learning features. Built with Expo Router and Supabase. 24 ★ on GitHub.',
    category: 'Finance',
    technologies: [
      'React Native',
      'TypeScript',
      'Expo Router',
      'Redux Toolkit',
      'Supabase',
      'WebView',
    ],
    features: [
      'Virtual trading with practice money (no real funds)',
      'Real-time crypto price tracking',
      'Portfolio management with P&L calculations',
      'Social leaderboards & collections',
      'Multi-language support (English / Vietnamese)',
      'Dark theme UI with custom auth recovery',
    ],
    githubUrl: 'https://github.com/DustinDoan315/trading-simulation-app',
    demoUrl: 'https://github.com/DustinDoan315/trading-simulation-app',
    status: 'Completed',
    duration: '3 months',
    teamSize: 'Solo',
  },
  {
    id: 2,
    image: '/pj1.png',
    title: 'RN Redux Toolkit Boilerplate',
    description:
      'Production-ready React Native boilerplate featuring Redux Toolkit state management, multi-language i18n, TypeScript, and a complete testing setup. 18 ★ on GitHub.',
    category: 'Open Source',
    technologies: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'i18n',
      'Jest',
      'Babel',
      'ESLint',
    ],
    features: [
      'Redux Toolkit with slices & thunks',
      'Multi-language i18n out of the box',
      'Full TypeScript type safety',
      'Jest testing framework configured',
      'ESLint & Prettier ready',
      'iOS & Android native code included',
    ],
    githubUrl: 'https://github.com/DustinDoan315/RN-ReduxToolkit',
    demoUrl: 'https://github.com/DustinDoan315/RN-ReduxToolkit',
    status: 'Completed',
    duration: '2 weeks',
    teamSize: 'Solo',
  },
  {
    id: 3,
    image: '/AppImages/1-2.png',
    title: 'RN Bubble Notify Native Module',
    description:
      'Android native module for React Native enabling Facebook Messenger-style floating bubble notification heads. Bridges Java and JavaScript seamlessly. 15 ★ on GitHub.',
    category: 'Open Source',
    technologies: [
      'React Native',
      'Java',
      'TypeScript',
      'Android',
      'Objective-C',
    ],
    features: [
      'Floating bubble notification UI on Android',
      'Java native module with full RN bridge',
      'TypeScript type definitions included',
      'iOS compatibility layer',
      'Customizable bubble appearance',
      'Easy drop-in integration',
    ],
    githubUrl: 'https://github.com/DustinDoan315/RN-BubbleNotify-NativeModule',
    demoUrl: 'https://github.com/DustinDoan315/RN-BubbleNotify-NativeModule',
    status: 'Completed',
    duration: '1 month',
    teamSize: 'Solo',
  },
  {
    id: 4,
    image: '/pj2.png',
    title: 'React Native DnD Like iOS',
    description:
      'Published npm library providing an iOS-style drag-and-drop sortable grid with long-press activation, wiggle animation, and full TypeScript support. No external animation deps. 8 ★ on GitHub.',
    category: 'Open Source',
    technologies: [
      'React Native',
      'TypeScript',
      'Animated API',
      'npm',
    ],
    features: [
      'iOS-style long-press to enter edit mode',
      'Wiggle / shake animation on edit',
      'Auto-scroll during drag operations',
      'Fixed items (prevent specific items from moving)',
      'Delete mode with custom icon support',
      'Published on npm: @dustindoan315/react-native-dnd-like-ios',
    ],
    githubUrl: 'https://github.com/DustinDoan315/rn_dnd_like_ios',
    demoUrl: 'https://www.npmjs.com/package/@dustindoan315/react-native-dnd-like-ios',
    status: 'Completed',
    duration: '1 month',
    teamSize: 'Solo',
  },
  {
    id: 5,
    image: '/AppImages/1-3.png',
    title: 'YouTube Clone',
    description:
      'Full-featured React Native YouTube clone with video browsing, playback, search, channel pages, and a polished mobile UI — built entirely with TypeScript.',
    category: 'Mobile Apps',
    technologies: [
      'React Native',
      'TypeScript',
      'Kotlin',
      'Metro',
      'Jest',
      'ESLint',
    ],
    features: [
      'Video playback & player controls',
      'Home feed & content browsing',
      'Search functionality',
      'Channel & video detail pages',
      'Cross-platform iOS & Android',
      'Production-quality TypeScript codebase',
    ],
    githubUrl: 'https://github.com/DustinDoan315/youtube-clone',
    demoUrl: 'https://github.com/DustinDoan315/youtube-clone',
    status: 'Completed',
    duration: '2 months',
    teamSize: 'Solo',
  },
  {
    id: 6,
    image: '/AppImages/1-4.png',
    title: 'AI Quotes App',
    description:
      'AI-powered motivational quotes app built with Expo, Supabase PostgreSQL backend, and NativeWind (Tailwind) styling. App store ready with full CI/CD tooling.',
    category: 'Mobile Apps',
    technologies: [
      'React Native',
      'TypeScript',
      'Expo',
      'Supabase',
      'NativeWind',
      'Bun',
    ],
    features: [
      'AI-generated motivational quotes',
      'Supabase PostgreSQL backend',
      'NativeWind (Tailwind CSS) styling',
      'Cross-platform iOS & Android',
      'App store assets included',
      'Comprehensive test & lint setup',
    ],
    githubUrl: 'https://github.com/DustinDoan315/ai-quotes-app',
    demoUrl: 'https://github.com/DustinDoan315/ai-quotes-app',
    status: 'In Progress',
    duration: 'Ongoing',
    teamSize: 'Solo',
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
    image: '/pj3.png',
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
  {
    id: 9,
    title: 'Expo EAS: OTA Updates and Build Channels Done Right',
    date: 'May 22, 2025',
    content:
      'A practical walkthrough of configuring EAS Build and EAS Update with channels for dev, staging, and prod. Learn release workflows, rollout strategies, and how to debug updates in the wild without shipping a new binary.',
    tags: ['Expo', 'EAS', 'React Native', 'OTA', 'Release Management'],
    image: '/AppImages/1-4.png',
    readTime: '9 min read',
    category: 'Mobile Development',
  },
  {
    id: 10,
    title: 'Sequelize in Practice: Joins, Scopes, and Pagination',
    date: 'May 10, 2025',
    content:
      'Real-world patterns for Sequelize: inner joins across user_subscription and transaction tables, reusable scopes for filtering, and offset/limit pagination with total counts. Includes strategies for partial search on email, phone, and vb_number.',
    tags: ['Sequelize', 'PostgreSQL', 'Node.js', 'ORM', 'Backend'],
    image: '/pj1.png',
    readTime: '10 min read',
    category: 'Backend Development',
  },
  {
    id: 11,
    title: 'JWT Auth with Axios Interceptors and Refresh Tokens',
    date: 'April 28, 2025',
    content:
      'End-to-end JWT authentication for React Native: secure storage, auto-attach headers, token refresh flows, and error handling with Axios interceptors. Covers edge cases and best practices for mobile clients.',
    tags: ['JWT', 'Axios', 'Security', 'React Native', 'Authentication'],
    image: '/pj2.png',
    readTime: '8 min read',
    category: 'Security',
  },
  {
    id: 12,
    title: '.NET MAUI MVVM: Shell Navigation, DI, and Offline Data',
    date: 'April 12, 2025',
    content:
      'A cohesive MAUI architecture using MVVM Toolkit, dependency injection, Shell routing, and SQLite caching. Learn how to structure view models, services, and repositories for testability and performance.',
    tags: ['.NET MAUI', 'C#', 'MVVM', 'SQLite', 'Architecture'],
    image: '/pj3.png',
    readTime: '12 min read',
    category: 'Mobile Development',
  },
  {
    id: 13,
    title: 'BLE with React Native: Pairing ESP32 Securely',
    date: 'March 30, 2025',
    content:
      'Implementing Bluetooth Low Energy flows to configure ESP32 devices: scanning, secure pairing, characteristics, and OTA updates. Includes tips for background modes and user privacy.',
    tags: ['BLE', 'ESP32', 'React Native', 'IoT', 'Mobile'],
    image: '/AppImages/1-5.png',
    readTime: '16 min read',
    category: 'IoT',
  },
  {
    id: 14,
    title: 'ExcelJS at Scale: Offline Exports for Admin Dashboards',
    date: 'March 14, 2025',
    content:
      'Designing robust offline Excel exports with ExcelJS. Covers streaming writers, styling, large dataset memory tips, and integrating with job schedulers like node-schedule.',
    tags: ['ExcelJS', 'Node.js', 'Exports', 'SaaS', 'Backend'],
    image: '/AppImages/1-6.png',
    readTime: '7 min read',
    category: 'Backend Development',
  },
  {
    id: 15,
    title: 'Stripe in React Native: Cards, Apple Pay, and Subscriptions',
    date: 'February 25, 2025',
    content:
      'Implement card payments and native wallets with the Stripe React Native SDK. Handle payment intents, 3DS flows, and build a reliable subscription lifecycle.',
    tags: ['Stripe', 'Payments', 'React Native', 'Apple Pay', 'Google Pay'],
    image: '/generator.png',
    readTime: '11 min read',
    category: 'Mobile Development',
  },
  {
    id: 16,
    title: 'FastAPI + ngrok: Local Webhooks and Secure Tunnels',
    date: 'January 18, 2025',
    content:
      'Spin up a FastAPI server locally and expose it securely with ngrok for testing webhooks and mobile callbacks. Discusses signing secrets, retries, and observability.',
    tags: ['FastAPI', 'ngrok', 'Webhooks', 'Backend', 'DX'],
    image: '/diff.png',
    readTime: '6 min read',
    category: 'Backend Development',
  },
];

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
