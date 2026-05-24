import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaBootstrap,
  FaGitAlt,
  FaNpm,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiPostman,
  SiMysql,
  SiVercel,
  SiRender,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const techSkills = [
  { Icon: SiCplusplus, name: "C++" },
  { Icon: FaPython, name: "Python" },
  { Icon: FaHtml5, name: "HTML5" },
  { Icon: FaCss3, name: "CSS3" },
  { Icon: FaJs, name: "JavaScript" },
  { Icon: FaReact, name: "React.js" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: FaBootstrap, name: "Bootstrap" },
  { Icon: FaNode, name: "Node.js" },
  { Icon: SiExpress, name: "Express.js" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: FaGitAlt, name: "Git" },
  { Icon: FaGithub, name: "GitHub" },
  { Icon: SiPostman, name: "Postman" },
  { Icon: FaNpm, name: "NPM" },
  { Icon: SiVercel, name: "Vercel" },
  { Icon: SiRender, name: "Render" },
  { Icon: VscCode, name: "VS Code" },
];

const Skills = () => {
  return (
    <section id="Skills" className="text-white px-6 py-20 md:px-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Technical Skills
        </h2>

        <p className="text-gray-400 text-lg">
          Technologies and tools I use to build scalable applications.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
        {techSkills.map(({ Icon, name }, index) => (
          <div
            key={index}
            className="group relative bg-[#111827] border border-cyan-500/10 rounded-2xl p-5 hover:scale-110 transition duration-300 shadow-lg hover:shadow-cyan-500/20"
          >
            <Icon size={42} className="text-cyan-300" />

            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 bg-cyan-500 text-black text-xs px-3 py-1 rounded-md whitespace-nowrap font-semibold">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;