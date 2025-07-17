import React from 'react';
// Importing all necessary icons
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaGithub, FaBootstrap,
  FaGitAlt, FaNpm
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiCplusplus, SiPostman
} from 'react-icons/si';
import { VscCode } from "react-icons/vsc";

// Technical skills array with names for tooltips
const techSkills = [
    { Icon: FaHtml5, name: 'HTML5' },
    { Icon: FaCss3, name: 'CSS3' },
    { Icon: FaJs, name: 'JavaScript' },
    { Icon: FaReact, name: 'React.js' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS' },
    { Icon: FaBootstrap, name: 'Bootstrap' },
    { Icon: FaNode, name: 'Node.js' },
    { Icon: SiExpress, name: 'Express.js' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiCplusplus, name: 'C++' },
    { Icon: FaGitAlt, name: 'Git' },
    { Icon: FaGithub, name: 'GitHub' },
    { Icon: SiPostman, name: 'Postman' },
    { Icon: FaNpm, name: 'npm' },
    { Icon: VscCode, name: 'VS Code' },
];

const Skills = () => {
    return (
        <section id="Skills" className="text-white px-6 py-16 md:px-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">My Technical Skills</h2>
                <p className="text-gray-400">The technologies I use to build web applications.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-4xl mx-auto">
                {techSkills.map(({ Icon, name }, index) => (
                    <div key={index} className="group relative p-4 bg-zinc-900 rounded-2xl transition-transform hover:scale-110">
                        <Icon size={40} className="text-gray-300" />
                        <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-1/2 -translate-x-1/2">
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;