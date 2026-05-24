import React from "react";
import { FaBriefcase } from "react-icons/fa";

const workExperience = [
  {
    role: "C++ Developer Intern",
    company: "CodeSpeedy Technology Pvt. Ltd.",
    duration: "June 2025 – July 2025",

    tasks: [
  "Designed and implemented 15+ modular C++ programs covering Object-Oriented Programming, STL containers, file handling, and graph algorithms, published on the CodersPacket global developer learning platform.",

  "Engineered reusable and well-documented code modules with clean separation of concerns, improving maintainability and reducing redundancy across projects.",

  "Applied core OOP principles including encapsulation, inheritance, and polymorphism to build scalable mini-projects for a global developer audience.",

  "Strengthened problem-solving and software engineering practices through real-world implementation of efficient algorithms and modular application design.",
],
  },
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className="text-white px-6 py-20 md:px-24 bg-black bg-opacity-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Work Experience
        </h2>

        <p className="text-gray-400 text-lg">
          My professional and internship experience.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-cyan-500/10 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition duration-300"
          >
            <div className="flex gap-5 items-start">

              <div className="bg-cyan-500/10 p-4 rounded-xl">
                <FaBriefcase
                  size={32}
                  className="text-cyan-300"
                />
              </div>

              <div className="flex-1">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                  
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {job.role}
                    </h3>

                    <p className="text-cyan-300 mt-1">
                      {job.company}
                    </p>
                  </div>

                  <span className="text-sm text-gray-400">
                    {job.duration}
                  </span>

                </div>

                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  {job.tasks.map((task, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <span className="text-cyan-400 mt-1">
                        •
                      </span>

                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;