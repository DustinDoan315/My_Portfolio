/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import localFont from "next/font/local";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Experiment Data Generator",
  description: "Generate Excel files from experimental data",
};

// Social links data
const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100008547228745",
    label: "Facebook",
    icon: FaFacebook,
    hoverColor: "text-blue-500",
  },
  {
    href: "https://github.com/DustinDoan315",
    label: "Github",
    icon: FaGithub,
    hoverColor: "text-gray-500",
  },
  {
    href: "https://www.linkedin.com/in/dustin315/",
    label: "Linkedin",
    icon: FaLinkedin,
    hoverColor: "text-blue-500",
  },
];

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
    aria-label={label}>
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 dark:text-gray-200">
          {/* Header */}
          <Header />
          <main className="flex-grow container mx-auto p-4 sm:p-2">
            {children}
          </main>
          <footer className="bg-gray-800 text-gray-300 py-4">
            <div className="container mx-auto text-center">
              <p className="text-lg mb-4 font-semibold font-serif">
                Contact to me
              </p>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => (
                  <SocialLink
                    key={social.href}
                    href={social.href}
                    label={social.label}
                    Icon={social.icon}
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
