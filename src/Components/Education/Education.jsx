import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    institution: "National Institute of Technology, Goa",
    duration: "2022 - 2026",

    details: [
      {
        title:
          "B.Tech in Electrical & Electronics Engineering",
        score: "CGPA: 8.74",
      },

      {
        title:
          "Minor Degree in Computer Science Engineering",
        score: "CGPA: 8.65",
      },
    ],
  },

  {
    institution:
      "Delhi Public School - Bangalore South",
    duration: "2020 - 2022",

    details: [
      {
        title: "Class XII (CBSE)",
        score: "92%",
      },

      {
        title: "Class X (CBSE)",
        score: "90%",
      },
    ],
  },
];

const Education = () => {
  return (
    <section
      id="Education"
      className="text-white px-6 py-20 md:px-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Education
        </h2>

        <p className="text-gray-400 text-lg">
          My academic background and qualifications.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-cyan-500/10 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition duration-300"
          >
            <div className="flex gap-5 items-start">

              <div className="bg-cyan-500/10 p-4 rounded-xl">
                <FaGraduationCap
                  size={32}
                  className="text-cyan-300"
                />
              </div>

              <div className="flex-1">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">

                  <h3 className="text-2xl font-semibold">
                    {edu.institution}
                  </h3>

                  <span className="text-sm text-gray-400">
                    {edu.duration}
                  </span>

                </div>

                <div className="space-y-4">
                  {edu.details.map((detail, i) => (
                    <div
                      key={i}
                      className="border-l-2 border-cyan-400 pl-4"
                    >
                      <p className="text-lg text-gray-200">
                        {detail.title}
                      </p>

                      <p className="text-cyan-300 mt-1">
                        {detail.score}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;