export type AppStatus = 'live' | 'in-review' | 'in-development';
export type Platform = 'iOS' | 'macOS';

export interface App {
  slug: string;
  name: string;
  subtitle: string;
  /** One sentence, framed as the user benefit. */
  pitch: string;
  /** Longer description for the app page. */
  description: string;
  platforms: Platform[];
  status: AppStatus;
  version?: string;
  /** Numeric App Store ID, e.g. '6478123456'. Drives the badge link. */
  appStoreId?: string;
  /** 1024px unmasked PNG in /public. Falls back to a tinted placeholder. */
  icon?: string;
  /** Placeholder icon gradient, sampled from the real icon. */
  tint: [string, string];
  /** Light icons need dark glyph text on the placeholder. */
  tintIsLight?: boolean;
  /** Portrait screenshots in /public (6.9" exports, webp). */
  screenshots: string[];
  stack: string[];
  sourceUrl?: string;
  privacy: {
    /** Flip to true once the policy text has been reviewed by you. */
    reviewed: boolean;
    summary: string;
    dataCollected: string[];
    thirdParties: string[];
  };
  faq: { q: string; a: string }[];
}

const DRAFT_PRIVACY: App['privacy'] = {
  reviewed: false,
  // TODO(content): describe what the app actually stores and sends.
  summary:
    'This app is designed to keep your data on your device. This policy is a draft and will be finalised before release.',
  dataCollected: [],
  thirdParties: [],
};

export const apps: App[] = [
  {
    slug: 'glimpsed',
    name: 'Glimpsed',
    subtitle: 'Screenshot Search',
    pitch: 'Find any screenshot by the words inside it.',
    // TODO(content): real description.
    description:
      'Glimpsed reads the text in your screenshots so you can search them like notes. Type a word you remember and the right screenshot comes up.',
    platforms: ['iOS'],
    status: 'live',
    version: '1.3.0',
    appStoreId: undefined, // TODO(content)
    tint: ['#4f46e5', '#7c3aed'],
    screenshots: [],
    stack: ['React Native', 'Expo'], // TODO(content): full stack
    privacy: DRAFT_PRIVACY,
    faq: [],
  },
  {
    slug: 'inkly',
    name: 'Inkly',
    subtitle: 'AI Photo Quotes & Diary',
    pitch: 'Turn a photo into a quote worth keeping.',
    // TODO(content): real description.
    description:
      'Inkly pairs your photos with AI-written quotes and keeps them as a visual diary.',
    platforms: ['iOS'],
    status: 'live',
    version: '1.4.0',
    appStoreId: undefined, // TODO(content)
    tint: ['#7c3aed', '#c2410c'],
    screenshots: [],
    stack: ['React Native', 'Expo'], // TODO(content): full stack
    // TODO(content): confirm this repo is Inkly's source.
    sourceUrl: undefined,
    privacy: DRAFT_PRIVACY,
    faq: [],
  },
  {
    slug: 'sidestep',
    name: 'Sidestep',
    subtitle: 'ADHD Task Starter',
    pitch: 'Get past the hardest part of a task: starting it.',
    // TODO(content): real description.
    description:
      'Sidestep breaks the first step of a task down until it is small enough to just begin.',
    platforms: ['iOS'],
    status: 'live',
    version: '1.0.1',
    appStoreId: undefined, // TODO(content)
    tint: ['#f5f3ef', '#e9e5df'],
    tintIsLight: true,
    screenshots: [],
    stack: ['React Native', 'Expo'], // TODO(content): full stack
    privacy: DRAFT_PRIVACY,
    faq: [],
  },
  {
    slug: 'trade-coin-skills',
    name: 'Trade Coin Skills',
    subtitle: 'Practice crypto trading',
    pitch: 'Learn to trade crypto with virtual money and live prices.',
    description:
      'A trading simulator with virtual funds, real-time market data, portfolio P&L and leaderboards, so you can build skills without risking real money.',
    platforms: ['iOS'],
    status: 'live',
    version: '1.0.2',
    appStoreId: undefined, // TODO(content)
    tint: ['#ffffff', '#f3f4f6'],
    tintIsLight: true,
    screenshots: [],
    stack: ['React Native', 'Expo Router', 'Redux Toolkit', 'Supabase'],
    // TODO(content): confirm this repo is Trade Coin Skills' source.
    sourceUrl: 'https://github.com/DustinDoan315/trading-simulation-app',
    privacy: DRAFT_PRIVACY,
    faq: [],
  },
  {
    slug: 'fitthru',
    name: 'FitThru',
    subtitle: 'Furniture Fit Check',
    pitch: 'Check if furniture fits through the door before you buy it.',
    description:
      'FitThru helps you measure doorways, hallways and furniture so delivery day has no surprises.',
    platforms: ['iOS'],
    status: 'in-review',
    version: '1.0.0',
    tint: ['#10b981', '#047857'],
    screenshots: [],
    stack: [], // TODO(content)
    privacy: DRAFT_PRIVACY,
    faq: [],
  },
  {
    slug: 'copyshape',
    name: 'Copyshape',
    subtitle: 'Copy Screen Text',
    pitch: 'Copy text from anywhere on your Mac screen.',
    description:
      'Copyshape lets you select any region of your screen and copy the text in it, even from images and videos.',
    platforms: ['macOS'],
    status: 'in-review',
    version: '1.0.1',
    tint: ['#3b82f6', '#2563eb'],
    screenshots: [],
    stack: [], // TODO(content)
    privacy: DRAFT_PRIVACY,
    faq: [],
  },
  {
    slug: 'move-recap',
    name: 'Move Recap',
    subtitle: 'Coming soon',
    pitch: 'Coming soon to iOS.', // TODO(content)
    description: 'In development. Details coming closer to launch.', // TODO(content)
    platforms: ['iOS'],
    status: 'in-development',
    tint: ['#9ca3af', '#6b7280'],
    screenshots: [],
    stack: [],
    privacy: DRAFT_PRIVACY,
    faq: [],
  },
  {
    slug: 'bitelane',
    name: 'BiteLane',
    subtitle: 'Food on Your Way',
    pitch: 'Find food along the route you are already driving.',
    description: 'In development. Details coming closer to launch.', // TODO(content)
    platforms: ['iOS'],
    status: 'in-development',
    tint: ['#9ca3af', '#6b7280'],
    screenshots: [],
    stack: [],
    privacy: DRAFT_PRIVACY,
    faq: [],
  },
  {
    slug: 'notara',
    name: 'Notara',
    subtitle: 'Take Note Anything',
    pitch: 'Capture any kind of note, fast.',
    description: 'In development. Details coming closer to launch.', // TODO(content)
    platforms: ['iOS'],
    status: 'in-development',
    tint: ['#9ca3af', '#6b7280'],
    screenshots: [],
    stack: [],
    privacy: DRAFT_PRIVACY,
    faq: [],
  },
];

export const STATUS_LABEL: Record<AppStatus, string> = {
  live: 'On the App Store',
  'in-review': 'In review',
  'in-development': 'In development',
};

export const getApp = (slug: string) => apps.find((a) => a.slug === slug);
export const appsByStatus = (status: AppStatus) =>
  apps.filter((a) => a.status === status);

export const appStoreUrl = (app: App) =>
  app.appStoreId ? `https://apps.apple.com/app/id${app.appStoreId}` : undefined;
