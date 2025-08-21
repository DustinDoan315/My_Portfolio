import Header from '@/components/Header';
import { siteMetadata } from '@/data/metadata';
import { personalInfo } from '@/data/personal';
import localFont from 'next/font/local';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import './globals.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = siteMetadata;

// Get icon component by name
const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType } = {
    FaFacebook,
    FaGithub,
    FaLinkedin,
  };
  return iconMap[iconName] || FaGithub;
};

// Reusable SocialLink Component
const SocialLink = ({
  href,
  label,
  Icon,
  hoverColor,
}: {
  href: string;
  label: string;
  Icon: any;
  hoverColor: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-gray-300 hover:${hoverColor}`}
    aria-label={label}
  >
    <Icon size={24} />
  </a>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 dark:text-gray-200">
          {/* Header */}
          <Header />
          <main className="flex-grow">{children}</main>
          <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto text-center">
              <p className="text-lg mb-4 font-semibold font-serif">
                Contact to me
              </p>
              <div className="flex justify-center space-x-6">
                {personalInfo.socialLinks.map((social) => (
                  <SocialLink
                    key={social.url}
                    href={social.url}
                    label={social.platform}
                    Icon={getIconComponent(social.icon)}
                    hoverColor={social.hoverColor}
                  />
                ))}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
