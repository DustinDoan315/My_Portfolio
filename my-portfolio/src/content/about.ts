export interface Role {
  period: string; // '2022 – now'
  role: string;
  org: string;
  url?: string;
  summary?: string;
}

// TODO(content): add real roles, most recent first. Leave empty to hide
// the section. Example shape:
// { period: '2022 – now', role: 'Mobile Engineer', org: 'Company', summary: '…' }
export const timeline: Role[] = [];

// TODO(content): replace with your own voice.
export const story = [
  "I'm a mobile developer in Hồ Chí Minh City with 4+ years of React Native behind me. These days I design, build and ship my own iOS apps, taking each one from a rough idea through App Store review and into the updates that follow.",
  'Working solo means owning every layer: product decisions, interface, data model, native modules, release pipeline and support inbox. That loop of shipping, hearing from real users and fixing what matters is what I enjoy most.',
  "Lately I've focused on bringing AI into apps that still feel native: on-device text recognition, cloud models for generation, and keeping private data on the phone wherever possible.",
];

export const principles = [
  {
    title: 'Ship, then sharpen',
    body: 'A small app in people’s hands teaches more than a big one in a branch. I release early and iterate on real feedback.',
  },
  {
    title: 'Native feel first',
    body: 'React Native for velocity, but the result should be indistinguishable from a Swift app: gestures, haptics, typography, accessibility.',
  },
  {
    title: 'Private by default',
    body: 'Keep user data on the device unless there’s a clear reason not to, and say plainly when there is.',
  },
];

// TODO(content): verify every item is something you actually use.
export const toolbox: { group: string; items: string[] }[] = [
  {
    group: 'Mobile',
    items: [
      'React Native',
      'Expo (EAS, Router, Modules)',
      'TypeScript',
      'Swift',
    ],
  },
  {
    group: 'State & data',
    items: ['Redux Toolkit', 'TanStack Query', 'Supabase', 'SQLite'],
  },
  {
    group: 'AI',
    items: ['Vision / OCR', 'OpenAI & Anthropic APIs', 'Structured outputs'],
  },
  {
    group: 'Shipping',
    items: ['EAS Build & Update', 'TestFlight', 'App Store Connect', 'Sentry'],
  },
];
