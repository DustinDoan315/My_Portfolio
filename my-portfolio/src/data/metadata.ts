import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'Dustin Doan - Senior Mobile Developer & Full-Stack Engineer',
  description:
    'Experienced React Native and Full-Stack Developer with 4+ years of expertise in mobile app development, blockchain solutions, and modern web technologies. View my portfolio of 50+ successful projects.',
  keywords:
    'React Native Developer, Mobile App Development, Full-Stack Developer, JavaScript, TypeScript, Node.js, Portfolio, Dustin Doan',
  authors: [{ name: 'Dustin Doan' }],
  creator: 'Dustin Doan',
  publisher: 'Dustin Doan',
  openGraph: {
    title: 'Dustin Doan - Senior Mobile Developer & Full-Stack Engineer',
    description:
      'Experienced React Native and Full-Stack Developer with 4+ years of expertise in mobile app development, blockchain solutions, and modern web technologies.',
    url: 'https://dustindoan.dev',
    siteName: 'Dustin Doan Portfolio',
    images: [
      {
        url: '/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Dustin Doan - Mobile Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dustin Doan - Senior Mobile Developer & Full-Stack Engineer',
    description:
      'Experienced React Native and Full-Stack Developer with 4+ years of expertise in mobile app development, blockchain solutions, and modern web technologies.',
    images: ['/avatar.jpg'],
    creator: '@dustindoan315',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export const structuredDataConfig = {
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dustin Doan',
    jobTitle: 'Senior Mobile Developer & Full-Stack Engineer',
    description:
      'Experienced React Native and Full-Stack Developer with 4+ years of expertise in mobile app development, blockchain solutions, and modern web technologies.',
    url: 'https://dustindoan.dev',
    image: 'https://dustindoan.dev/avatar.jpg',
    email: 'dustindoan315@gmail.com',
    telephone: '+1-555-0123',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Remote',
      addressCountry: 'Worldwide',
    },
    sameAs: [
      'https://github.com/DustinDoan315',
      'https://www.linkedin.com/in/dustin315/',
      'https://www.facebook.com/profile.php?id=100008547228745',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'University of Technology',
    },
    knowsAbout: [
      'React Native',
      'React',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Mobile App Development',
      'Web Development',
      'Blockchain',
      'GraphQL',
      'AWS',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Mobile Developer',
      occupationLocation: {
        '@type': 'Place',
        name: 'Remote',
      },
      estimatedSalary: {
        '@type': 'MonetaryAmountDistribution',
        name: 'Senior Mobile Developer Salary',
        currency: 'USD',
        duration: 'P1Y',
      },
    },
    award: [
      'Top 1% React Native Developer - Stack Overflow',
      'AWS Certified Developer',
      'React Native Certified Developer',
    ],
  },
  portfolio: {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Dustin Doan Portfolio',
    description:
      'A showcase of mobile and web applications built by Dustin Doan',
    author: {
      '@type': 'Person',
      name: 'Dustin Doan',
    },
    url: 'https://dustindoan.dev',
    dateCreated: '2024-01-01',
    dateModified: '2024-11-15',
    inLanguage: 'en-US',
    keywords: 'React Native, Mobile Development, Web Development, Portfolio',
  },
};
