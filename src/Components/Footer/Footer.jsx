import React from "react";

import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const contactLinks = [
  {
    href: "mailto:fahim200425@gmail.com",
    text: "fahim200425@gmail.com",
    Icon: MdOutlineEmail,
  },

  {
    href: "https://www.linkedin.com/in/mohammed-fahim-32212b2ba",
    text: "LinkedIn",
    Icon: FaLinkedin,
  },

  {
    href: "https://github.com/fam252004",
    text: "GitHub",
    Icon: FaGithub,
  },

  {
    href: "https://leetcode.com/u/Fahim200425/",
    text: "LeetCode",
    Icon: SiLeetcode,
  },

  {
    href: "https://www.geeksforgeeks.org/user/mdfahimsdqx/",
    text: "GeeksforGeeks",
    Icon: SiGeeksforgeeks,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="Footer"
      className="bg-[#0b1120] text-white border-t border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 flex flex-col md:flex-row justify-between gap-12">

        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4">
            Let’s Connect
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            I’m currently looking for Software Development, Backend,
            and Full Stack opportunities where I can contribute,
            learn, and grow as an engineer.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-cyan-300">
            Contact Links
          </h3>

          <ul className="space-y-4">
            {contactLinks.map(({ href, text, Icon }, index) => (
              <li key={index}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-300 transition duration-300"
                >
                  <Icon size={24} />
                  <span>{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="border-t border-cyan-500/10 py-5 text-center text-gray-500 text-sm">
        © {currentYear} Mohammed Fahim. Built with React.js & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;