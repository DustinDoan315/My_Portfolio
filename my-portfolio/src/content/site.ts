export const site = {
  name: 'Dustin Doan',
  handle: 'DustinDoan315',
  role: 'iOS & React Native developer',
  headline: 'I build and ship iOS apps.',
  intro:
    'React Native and Expo for speed, Swift where the platform demands it. Independent developer based in Hồ Chí Minh City, Vietnam.',
  // TODO(content): confirm production domain.
  url: 'https://dustindoan.dev',
  email: 'dustindoan315@gmail.com',
  // TODO(content): confirm public support address (alias recommended).
  supportEmail: 'dustindoan315@gmail.com',
  location: 'Hồ Chí Minh City, Vietnam',
  avatar: '/avatar.jpg',
  socials: [
    { label: 'GitHub', href: 'https://github.com/DustinDoan315' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dustin315/' },
    { label: 'X', href: 'https://twitter.com/dustin_doan_315' },
  ],
} as const;

export const nav = [
  { href: '/apps', label: 'Apps' },
  { href: '/open-source', label: 'Open Source' },
  { href: '/about', label: 'About' },
] as const;
