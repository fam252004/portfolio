import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// The key change is that this component NO LONGER imports a static image.
// It uses the 'image' prop passed to it.

const ProjectCard = ({ title, main, demo, code, techStack, date, image }) => {
  return (
    <div className="p-4 flex flex-col w-full max-w-sm bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transition-transform transform hover:-translate-y-2 duration-300">
      
      {/* This line is now fixed to use the 'image' prop from outside */}
      <img className="rounded-lg mb-4 h-48 w-full object-cover object-top" src={image} alt={`${title} project banner`} />
      
      <div className="flex justify-between items-center px-2 mb-2">
        <h3 className="text-xl font-bold leading-normal text-white">
          {title}
        </h3>
        {date && (
          <p className="text-sm text-gray-400 font-mono flex-shrink-0 ml-2">
            {date}
          </p>
        )}
      </div>

      <p className="px-2 text-sm text-gray-300 leading-tight flex-grow">{main}</p>
      
      <div className="px-2 mt-4 flex flex-wrap gap-2">
        {techStack?.map((tech, index) => (
          <span key={index} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 p-2 flex gap-4">
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="w-full flex items-center justify-center gap-2 text-white py-2 px-4 hover:bg-[#5a6ac4] duration-300 font-semibold rounded-full bg-[#465697]">
              <FaExternalLinkAlt /> Demo
            </button>
          </a>
        )}
        <a href={code} target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="w-full flex items-center justify-center gap-2 text-white py-2 px-4 hover:bg-[#5a6ac4] duration-300 font-semibold rounded-full bg-[#465697]">
            <FaGithub /> Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;