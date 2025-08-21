'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    localStorage.setItem('activeLink', link);
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          onClick={() => handleLinkClick('')}
          href="/"
          className="text-cyan-600 text-3xl font-semibold font-serif"
        >
          Nature Sound
        </Link>

        <div className="flex items-center">
          {/* Mobile Menu Button, hidden on large screens */}
          <button
            className="lg:hidden text-cyan-600 text-xl lg:text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? 'block' : 'hidden'
            } lg:flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-8 lg:mt-0`}
          >
            <Link
              onClick={() => handleLinkClick('about')}
              href="/about"
              className={`transition-all duration-300 text-base lg:text-lg font-semibold ${
                activeLink === 'about'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-cyan-600'
              } rounded-xl px-4 py-2 hover:scale-105`}
            >
              About
            </Link>
            <Link
              onClick={() => handleLinkClick('projects')}
              href="/projects"
              className={`transition-all duration-300 text-base lg:text-lg font-semibold ${
                activeLink === 'projects'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-cyan-600'
              } rounded-xl px-4 py-2 hover:scale-105`}
            >
              Projects
            </Link>
            <Link
              onClick={() => handleLinkClick('blogs')}
              href="/blogs"
              className={`transition-all duration-300 text-base lg:text-lg font-semibold ${
                activeLink === 'blogs'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-cyan-600'
              } rounded-xl px-4 py-2 hover:scale-105`}
            >
              Blogs
            </Link>

            <Link
              onClick={() => handleLinkClick('tools')}
              href="/tools"
              className={`transition-all duration-300 text-base lg:text-lg font-semibold ${
                activeLink === 'tools'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-cyan-600'
              } rounded-xl px-4 py-2 hover:scale-105`}
            >
              Tools
            </Link>
            <Link
              onClick={() => handleLinkClick('contact')}
              href="/contact"
              className={`transition-all duration-300 text-base lg:text-lg font-semibold ${
                activeLink === 'contact'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-cyan-600'
              } rounded-xl px-4 py-2 hover:scale-105`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
