import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // The navigation links are updated here for the new sections
  const navLinks = [
    { href: "#About", title: "About" },
    { href: "#Skills", title: "Skills" },
    { href: "#Education", title: "Education" },
    { href: "#Experience", title: "Experience" },
    { href: "#Projects", title: "Projects" },
    { href: "#Achievements", title: "Achievements" },
    { href: "#Footer", title: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#171d32] text-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">Mohammed Fahim</h1>

        {/* Hamburger for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menu - Desktop */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-cyan-400 transition-colors duration-300">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu - Mobile */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col space-y-4 font-medium text-center bg-[#1e253f] p-4 rounded-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={toggleMenu}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;