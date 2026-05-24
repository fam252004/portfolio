import React from "react";
import { FaTrophy, FaAward, FaCertificate } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const achievementsData = [
  {
    icon: FaAward,
    title: "LeetCode 100 Days Badge",
    description:
      "Earned for maintaining consistency in problem solving and daily coding practice.",
    link: "https://leetcode.com/u/Fahim200425/",
  },

  {
    icon: FaTrophy,
    title: "500+ DSA Problems Solved",
    description:
      "Solved 500+ coding problems across LeetCode and GeeksforGeeks using C++.",
    link: "https://leetcode.com/u/Fahim200425/",
  },

  {
    icon: FaTrophy,
    title: "4th Place - NIT Goa Coding Challenge",
    description:
      "Ranked among the top participants in a competitive coding contest at NIT Goa.",
    link: null,
  },

  {
    icon: FaCertificate,
    title: "SQL Intermediate Certification",
    description:
      "Certified by HackerRank for SQL querying and database problem solving.",
    link: "https://www.hackerrank.com/certificates/iframe/54b96576a850",
  },

  {
    icon: FaCertificate,
    title: "Problem Solving Certification",
    description:
      "Certified by HackerRank for strong problem-solving and algorithmic skills.",
    link: "https://www.hackerrank.com/certificates/iframe/65a2bf71422b",
  },

  {
    icon: FaCertificate,
    title: "ReactJS Certification",
    description:
      "Completed ReactJS learning programs covering components, hooks, and frontend development.",
    link: null,
  },
];

const Achievements = () => {
  return (
    <section
      id="Achievements"
      className="px-6 py-20 md:px-24 bg-black bg-opacity-20"
    >
      <div className="text-center mb-16 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Achievements & Certifications
        </h2>

        <p className="text-gray-400 text-lg">
          Highlights of my coding journey and technical learning.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievementsData.map((item, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-cyan-500/10 rounded-2xl p-6 flex items-start gap-5 shadow-lg hover:shadow-cyan-500/20 transition duration-300 hover:-translate-y-2"
          >
            <item.icon
              className="text-cyan-400 flex-shrink-0 mt-1"
              size={38}
            />

            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition"
              >
                <FiExternalLink size={22} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;