import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  main,
  demo,
  code,
  techStack,
  date,
  image,
}) => {
  return (
    <div className="bg-[#0f172a] border border-cyan-500/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition duration-300 hover:-translate-y-2 flex flex-col max-w-sm">
      
      <img
        className="h-52 w-full object-cover object-top"
        src={image}
        alt={title}
      />

      <div className="p-5 flex flex-col flex-grow">

        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>

          <span className="text-xs text-cyan-300 whitespace-nowrap">
            {date}
          </span>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed flex-grow">
          {main}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {techStack?.map((tech, index) => (
            <span
              key={index}
              className="bg-cyan-500/10 text-cyan-300 text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">

          {demo && demo !== "#" && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 rounded-full transition duration-300">
                <FaExternalLinkAlt />
                Demo
              </button>
            </a>
          )}

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button className="w-full flex items-center justify-center gap-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black text-white font-semibold py-2 rounded-full transition duration-300">
              <FaGithub />
              Code
            </button>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;