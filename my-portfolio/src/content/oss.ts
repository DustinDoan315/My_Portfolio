export interface OssProject {
  name: string;
  description: string;
  stars: number;
  href: string;
  npm?: string;
  language: string;
}

// Star counts last synced from GitHub; refresh before release.
export const ossProjects: OssProject[] = [
  {
    name: 'trading-simulation-app',
    description:
      'Crypto trading simulator with virtual funds, live prices and leaderboards. Expo Router + Supabase.',
    stars: 24,
    href: 'https://github.com/DustinDoan315/trading-simulation-app',
    language: 'TypeScript',
  },
  {
    name: 'RN-ReduxToolkit',
    description:
      'React Native boilerplate with Redux Toolkit, i18n, strict TypeScript and Jest wired up.',
    stars: 18,
    href: 'https://github.com/DustinDoan315/RN-ReduxToolkit',
    language: 'TypeScript',
  },
  {
    name: 'RN-BubbleNotify-NativeModule',
    description:
      'Native module for Messenger-style floating chat heads on Android, bridged to React Native.',
    stars: 15,
    href: 'https://github.com/DustinDoan315/RN-BubbleNotify-NativeModule',
    language: 'Java',
  },
  {
    name: 'react-native-dnd-like-ios',
    description:
      'iOS home-screen style drag-and-drop grid: long-press, wiggle, reorder. No animation deps.',
    stars: 8,
    href: 'https://github.com/DustinDoan315/rn_dnd_like_ios',
    npm: 'https://www.npmjs.com/package/@dustindoan315/react-native-dnd-like-ios',
    language: 'TypeScript',
  },
];

export const totalStars = ossProjects.reduce((n, p) => n + p.stars, 0);
