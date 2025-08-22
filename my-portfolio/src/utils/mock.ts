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
      'IoT-powered fleet platform providing real-time GPS, fuel analytics, and predictive maintenance with geofencing and driver scoring.',
    category: 'IoT',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Socket.IO',
      'Google Maps SDK',
      'Firebase',
    ],
    features: [
      'Live GPS & geofencing alerts',
      'Fuel consumption & idling analytics',
      'Driver behavior scorecards',
      'Predictive maintenance scheduler',
      'Offline caching & background sync',
      'Admin dashboard & audit logs',
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
      'Mobile commerce app with product discovery, secure checkout, inventory sync, and AI recommendations.',
    category: 'E-commerce',
    technologies: [
      'React Native',
      'Expo',
      'Redux Toolkit',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Stripe',
      'AWS S3',
      'CloudFront',
    ],
    features: [
      'AI recommendations',
      'One-tap Apple/Google Pay',
      'Real-time inventory & order tracking',
      'Advanced search & filters',
      'Admin CMS & analytics',
      'Push notifications & deep links',
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
      'Personal finance and investment app with budgeting, bank sync, and portfolio insights.',
    category: 'Finance',
    technologies: [
      'React Native',
      'TypeScript',
      'GraphQL',
      'Apollo',
      'PostgreSQL',
      'Chart.js',
      'Plaid',
    ],
    features: [
      'Automatic expense categorization',
      'Budget planning with alerts',
      'Investment portfolio tracking',
      'Custom financial goals',
      'Advanced analytics & reports',
      'Bank account aggregation',
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
    title: 'CryptoVault - Trading Simulator',
    description:
      'Crypto trading simulator with real-time market feeds, backtesting, and paper trading bots.',
    category: 'Blockchain',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Node.js',
      'WebSockets',
      'MongoDB',
      'Web3.js',
    ],
    features: [
      'Live price streams & alerts',
      'Portfolio & PnL analytics',
      'Rule-based paper trading bots',
      'Multiple exchange connectors',
      'Candlestick charting & indicators',
      'Secure wallet abstractions',
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
      'Home automation app for lights, climate, security, and energy optimization with ML routines.',
    category: 'IoT',
    technologies: [
      'React Native',
      'Python',
      'Raspberry Pi',
      'MQTT',
      'TensorFlow Lite',
      'Firebase',
    ],
    features: [
      'Voice assistant integration',
      'Realtime energy monitoring',
      'Camera streaming & alerts',
      'Routine automation with ML',
      'Room-based device groups',
      'Remote access & roles',
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
    title: 'EventMaster',
    description:
      'Event management platform for conferences and workshops with tickets, streaming, and networking.',
    category: 'Events',
    technologies: [
      'React Native',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Stripe',
      'Zoom SDK',
      'Socket.IO',
    ],
    features: [
      'Ticketing with QR codes',
      'Attendee matchmaking',
      'Live streaming sessions',
      'Session feedback & polls',
      'Event analytics dashboard',
      'Calendar & reminders',
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
    title: 'HealthTracker',
    description:
      'Health monitoring app with symptoms, meds, telehealth, and wearable sync.',
    category: 'Healthcare',
    technologies: [
      'React Native',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'WebRTC',
      'Apple HealthKit',
      'Google Fit',
    ],
    features: [
      'Symptom & vitals logging',
      'Medication reminders',
      'Telemedicine video calls',
      'Health analytics & trends',
      'Wearable device integration',
      'Secure medical records',
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
    title: 'EduLearn',
    description:
      'Interactive learning platform with video courses, quizzes, and offline mode.',
    category: 'Education',
    technologies: [
      'React Native',
      'Redux',
      'Node.js',
      'MongoDB',
      'AWS S3',
      'Socket.IO',
    ],
    features: [
      'Adaptive learning paths',
      'Interactive quizzes & leaderboards',
      'Progress tracking',
      'Offline downloads',
      'Discussion forums',
      'In-app announcements',
    ],
    githubUrl: 'https://github.com/DustinDoan315/EduLearn',
    demoUrl: 'https://edulearn-demo.vercel.app',
    status: 'Completed',
    duration: '6 months',
    teamSize: '4 developers',
  },
  {
    id: 9,
    image: '/projects/parcel-santa.png',
    title: 'Parcel Santa - Smart Locker System',
    description:
      'Locker-based last-mile delivery app enabling drivers to drop parcels and customers to retrieve via OTP/QR.',
    category: 'Logistics',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'BLE',
      'NFC',
      'Firebase',
      'Azure Functions',
      'PostgreSQL',
    ],
    features: [
      'Driver locker access via BLE/NFC',
      'OTP/QR pickup for customers',
      'Push notifications & receipts',
      'Role-based access control',
      'Incident reporting',
      'Operational analytics',
    ],
    githubUrl: 'https://github.com/DustinDoan315/ParcelSanta',
    demoUrl: 'https://parcel-santa-demo.vercel.app',
    status: 'Completed',
    duration: '11 months',
    teamSize: '5 developers',
  },
  {
    id: 10,
    image: '/projects/ishop-changi.png',
    title: 'iShop Changi - Duty-Free Shopping',
    description:
      'Duty-free shopping app with airport pickup, loyalty, and cross-border payments.',
    category: 'E-commerce',
    technologies: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'GraphQL',
      'Stripe',
      'Apple Pay',
      'Google Pay',
      'FastImage',
    ],
    features: [
      'Click & collect at airport',
      'Loyalty points & vouchers',
      'Multi-currency checkout',
      'Content-driven discovery',
      'Image optimization & CDN',
      'A/B tested onboarding',
    ],
    githubUrl: 'https://github.com/DustinDoan315/iShopChangi',
    demoUrl: 'https://ishopchangi-demo.vercel.app',
    status: 'Completed',
    duration: '9 months',
    teamSize: '7 developers',
  },
  {
    id: 11,
    image: '/projects/workorders-maui.png',
    title: 'WorkOrders - MAUI Maintenance Demo',
    description:
      'Cross-platform MAUI demo showcasing MVVM, offline SQLite, and paginated API data for maintenance tickets.',
    category: 'MAUI',
    technologies: [
      '.NET MAUI',
      'C#',
      'MVVM Toolkit',
      'SQLite',
      'Refit',
      'CommunityToolkit.Maui',
    ],
    features: [
      'Infinite scrolling lists',
      'Search, sort, and filters',
      'Local cache & sync',
      'Shell navigation',
      'Dependency injection',
      'Unit testable services',
    ],
    githubUrl: 'https://github.com/DustinDoan315/WorkOrdersMauiDemo',
    demoUrl: 'https://workorders-demo.pages.dev',
    status: 'Completed',
    duration: '2 weeks',
    teamSize: 'Solo',
  },
  {
    id: 12,
    image: '/projects/smartpost.png',
    title: 'SmartPost - Courier Operations',
    description:
      'Courier app for route planning, proof-of-delivery, and live tracking with background location.',
    category: 'Logistics',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Maps SDK',
      'Background Geolocation',
      'Socket.IO',
      'FCM',
    ],
    features: [
      'Optimized routing & ETA',
      'Photo/Signature POD',
      'Live courier tracking',
      'Batch assignments',
      'Offline-first mode',
      'Ops dashboard webhooks',
    ],
    githubUrl: 'https://github.com/DustinDoan315/SmartPost',
    demoUrl: 'https://smartpost-demo.vercel.app',
    status: 'In Progress',
    duration: '5 months',
    teamSize: '4 developers',
  },
  {
    id: 13,
    image: '/projects/vb-subscription.png',
    title: 'VB Subscriptions - SaaS Admin',
    description:
      'Subscription management backoffice with Excel exports, scheduled jobs, and templated notifications.',
    category: 'SaaS',
    technologies: [
      'Next.js',
      'Node.js',
      'Express',
      'Sequelize',
      'PostgreSQL',
      'ExcelJS',
      'node-schedule',
      'JWT',
    ],
    features: [
      'Advanced filters & pagination',
      'CSV/Excel offline export',
      'Dynamic template variables (@vb_number, etc.)',
      'Cron-like scheduled tasks',
      'Audit trails & roles',
      'REST API for mobile clients',
    ],
    githubUrl: 'https://github.com/DustinDoan315/vb-subscriptions',
    demoUrl: 'https://vb-admin-demo.vercel.app',
    status: 'Completed',
    duration: '6 months',
    teamSize: '3 developers',
  },
  {
    id: 14,
    image: '/projects/esp32-config.png',
    title: 'ESP32 Configurator',
    description:
      'Configurator app to manage 8-port ESP32 devices via Bluetooth/OTA with secure pairing per device.',
    category: 'IoT',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'BLE',
      'OTA Updates',
      'AsyncStorage',
    ],
    features: [
      'Per-device password pairing',
      'Bulk port configuration',
      'Real-time status streaming',
      'Profiles & presets',
      'Export/import settings',
      'Diagnostics & logs',
    ],
    githubUrl: 'https://github.com/DustinDoan315/ESP32-Configurator',
    demoUrl: 'https://esp32-configurator-demo.vercel.app',
    status: 'Planning',
    duration: '—',
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
  {
    id: 9,
    title: 'Expo EAS: OTA Updates and Build Channels Done Right',
    date: 'May 22, 2025',
    content:
      'A practical walkthrough of configuring EAS Build and EAS Update with channels for dev, staging, and prod. Learn release workflows, rollout strategies, and how to debug updates in the wild without shipping a new binary.',
    tags: ['Expo', 'EAS', 'React Native', 'OTA', 'Release Management'],
    image: '/images/expo-eas.png',
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
    image: '/images/sequelize.png',
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
    image: '/images/jwt-axios.png',
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
    image: '/images/maui-mvvm.png',
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
    image: '/images/ble-esp32.png',
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
    image: '/images/exceljs.png',
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
    image: '/images/stripe-rn.png',
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
    image: '/images/fastapi-ngrok.png',
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
