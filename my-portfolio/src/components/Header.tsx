'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/tools', label: 'Tools' },
  { href: '/contact', label: 'Contact' },
] as const;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href) ?? false;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-cyan-600 text-3xl font-semibold"
        >
          Nature Sound
        </Link>

        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-cyan-600 text-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded-md p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Links */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out lg:overflow-visible lg:flex ${
              menuOpen
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100'
            } flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-8`}
            onClick={() => setMenuOpen(false)}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-all duration-300 text-base lg:text-lg font-semibold rounded-xl px-4 py-2 hover:scale-105 block ${
                  isActive(href)
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
