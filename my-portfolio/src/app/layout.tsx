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

const iconMap: { [key: string]: React.ComponentType<{ size?: number }> } = {
  FaFacebook,
  FaGithub,
  FaLinkedin,
};

const hoverClasses: Record<string, string> = {
  FaFacebook: 'hover:text-blue-500',
  FaGithub: 'hover:text-gray-400',
  FaLinkedin: 'hover:text-blue-400',
};

const SocialLink = ({
  href,
  label,
  Icon,
  iconName,
}: {
  href: string;
  label: string;
  Icon: any;
  iconName: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-gray-400 transition-colors duration-200 ${hoverClasses[iconName] ?? 'hover:text-white'}`}
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
          <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4 text-center">
              <p className="text-2xl font-bold text-white mb-1">
                {personalInfo.name}
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Senior Mobile Engineer · React Native Specialist · Full-Stack Developer
              </p>
              <div className="flex justify-center space-x-6 mb-6">
                {personalInfo.socialLinks.map((social) => {
                  const Icon = iconMap[social.icon] ?? FaGithub;
                  return (
                    <SocialLink
                      key={social.url}
                      href={social.url}
                      label={social.platform}
                      Icon={Icon}
                      iconName={social.icon}
                    />
                  );
                })}
              </div>
              <div className="border-t border-gray-700 pt-6 text-xs text-gray-500">
                © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js &amp; Tailwind CSS.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
