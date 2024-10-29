/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

// Navigation links data
const navLinks = [
  { href: "/projects", text: "Projects" },
  { href: "/blogs", text: "Blogs" },
];

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

const Layout = () => (
  <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 dark:text-gray-200">
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link
          href="/"
          className="text-cyan-600 text-3xl font-semibold font-serif">
          Nature Sound
        </Link>
        <div className="space-x-6 mx-24 flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-cyan-600 transition-colors duration-200 text-gray-700 text-xl font-semibold">
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
    </header>

    {/* Main Content */}
    <main className="flex-grow container mx-auto p-4 sm:p-8">
      <div className="flex flex-col items-center mb-8">
        <img
          src="/avatar.jpg"
          alt="Dustin"
          className="rounded-full w-32 h-32 mb-4 shadow-lg"
        />
        <h2 className="text-2xl font-semibold text-gray-800">Dustin Doan</h2>
        <p className="w-2/3 text-gray-700 mt-2">
          👋 I&#39;m a Mobile Engineer with over 4 years of experience
          specializing in React Native. My journey in mobile development has
          equipped me with a solid foundation and deep expertise in creating
          seamless, high-performance applications.
        </p>
        <ul className="w-2/3 text-gray-700 mt-2 list-disc list-inside space-y-2">
          <li>
            🔗 <strong>Blockchain</strong>: I&#39;ve developed secure and
            efficient applications that leverage decentralized technologies,
            ensuring data integrity and user privacy.
          </li>
          <li>
            🛒 <strong>E-commerce</strong>: My experience includes building
            robust platforms that provide smooth user experiences and facilitate
            secure transactions, enhancing the shopping journey for customers.
          </li>
          <li>
            📅 <strong>Booking</strong>: I&#39;ve designed intuitive booking
            systems that streamline reservation processes, making it easy for
            users to find and book what they need.
          </li>
          <li>
            🎉 <strong>Events</strong>: My work in event management apps has
            involved creating engaging interfaces and features that cater to
            user needs, improving the overall event experience.
          </li>
        </ul>
        <p className="w-2/3 text-gray-700 mt-4">
          My passion lies in crafting user-centric applications that not only
          meet but exceed expectations. I thrive in collaborative environments
          and am always eager to tackle new challenges and learn new
          technologies.
        </p>
      </div>
    </main>

    {/* Footer */}
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4 font-semibold font-serif">Contact to me</p>
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
);

export default Layout;
