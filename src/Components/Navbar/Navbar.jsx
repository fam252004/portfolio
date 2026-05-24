import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/90 backdrop-blur-md border-b border-cyan-500/10 text-white px-6 md:px-14 py-5">
      
      <div className="flex justify-between items-center">

        <a
          href="#Home"
          className="text-2xl font-bold tracking-wide"
        >
          <span className="text-cyan-400">Mohammed</span> Fahim
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-300 transition duration-300"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

      </div>

      {isOpen && (
        <div className="md:hidden mt-6 bg-[#0f172a] rounded-2xl p-6 border border-cyan-500/10">
          <div className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-300 transition duration-300"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;