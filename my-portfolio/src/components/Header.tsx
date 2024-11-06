/* Header.tsx */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          onClick={() => handleLinkClick("")}
          href="/"
          className="text-cyan-600 text-3xl font-semibold font-serif">
          Nature Sound
        </Link>

        <div className="flex items-center">
          {/* Mobile Menu Button, hidden on large screens */}
          <button
            className="lg:hidden text-cyan-600 text-xl lg:text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-6 lg:mt-0`}>
            <Link
              onClick={() => handleLinkClick("projects")}
              href="/projects"
              className={`transition-colors duration-200 text-base lg:text-xl font-semibold ${
                activeLink === "projects"
                  ? "bg-cyan-400 text-white"
                  : "text-gray-700"
              } rounded px-3 py-1`}>
              Projects
            </Link>
            <Link
              onClick={() => handleLinkClick("blogs")}
              href="/blogs"
              className={`transition-colors duration-200 text-base lg:text-xl font-semibold ${
                activeLink === "blogs"
                  ? "bg-cyan-400 text-white"
                  : "text-gray-700"
              } rounded px-3 py-1`}>
              Blogs
            </Link>

            <Link
              onClick={() => handleLinkClick("tools")}
              href="/tools"
              className={`transition-colors duration-200 text-base lg:text-xl font-semibold ${
                activeLink === "tools"
                  ? "bg-cyan-400 text-white"
                  : "text-gray-700"
              } rounded px-3 py-1`}>
              Tools
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
