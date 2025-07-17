import React from 'react';
import { FaTrophy, FaAward, FaCertificate } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const achievementsData = [
  {
    icon: FaAward,
    title: "100-Day Badge",
    description: "From LeetCode for consistent daily problem-solving.",
    link: "https://leetcode.com/u/Fahim200425/"
  },
  {
    icon: FaTrophy,
    title: "4th Place, NIT Goa Coding Challenge",
    description: "Secured 4th place among 3rd and 4th-year students.",
    link: null
  },
  {
    icon: FaCertificate,
    title: "SQL (Intermediate) Certificate",
    description: "Issued by HackerRank.",
    link: "https://www.hackerrank.com/certificates/iframe/54b96576a850"
  },
  {
    icon: FaCertificate,
    title: "Problem Solving (Intermediate) Certificate",
    description: "Issued by HackerRank.",
    link: "https://www.hackerrank.com/certificates/iframe/65a2bf71422b"
  },
  {
    icon: FaCertificate,
    title: "Getting Started with ReactJS Components",
    description: "Issued by Simplilearn.",
    link: null
  },
  {
    icon: FaCertificate,
    title: "SQL for Data Analysis",
    description: "Issued by Simplilearn.",
    link: null
  },
  {
    icon: FaCertificate,
    title: "ReactJS Course",
    description: "Issued by Scaler.",
    link: null
  }
];


const Achievements = () => {
    return (
        <section id="Achievements" className="px-6 py-16 md:px-24 bg-black bg-opacity-20">
            <div className="text-center mb-16 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Certifications</h2>
                <p className="text-gray-400">A showcase of my key accomplishments.</p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievementsData.map((item, index) => (
                    <div key={index} className="bg-slate-900 bg-opacity-70 rounded-lg p-5 flex items-center gap-5 shadow-lg transition-all duration-300 hover:shadow-cyan-500/20 hover:scale-105">
                        <item.icon className="text-amber-400 flex-shrink-0" size={40} />
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        {item.link && (
                            <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label={`View certificate for ${item.title}`} 
                                className="text-cyan-400 hover:text-cyan-200 transition-colors"
                            >
                                <FiExternalLink size={24} />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;