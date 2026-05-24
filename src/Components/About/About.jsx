import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="text-white bg-black/30 shadow-2xl rounded-2xl mx-4 md:mx-20 my-20 p-8 md:p-12 border border-cyan-500/10"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        About Me
      </h2>

      <div className="md:flex items-center justify-center gap-14">
        <div className="flex justify-center">
          <img
            className="w-64 md:w-80"
            src={AboutImg}
            alt="About"
          />
        </div>

        <ul className="space-y-8 max-w-2xl mt-10 md:mt-0">

          <li className="flex items-start gap-4">
            <IoArrowForward
              size={24}
              className="mt-1 text-cyan-400 flex-shrink-0"
            />

            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Software Development Engineer Aspirant
              </h3>

              <p className="text-gray-300 mt-2 leading-relaxed">
                B.Tech graduate from NIT Goa in Electrical & Electronics Engineering with a Minor in Computer Science Engineering. Passionate about software development, scalable systems, and building real-world applications using modern web and AI technologies.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <IoArrowForward
              size={24}
              className="mt-1 text-cyan-400 flex-shrink-0"
            />

            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                DSA & Competitive Programming
              </h3>

              <p className="text-gray-300 mt-2 leading-relaxed">
                Solved 500+ Data Structures & Algorithms problems using
                C++ on LeetCode and GeeksforGeeks. Strong understanding
                of algorithms, OOP, STL, and problem-solving techniques.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <IoArrowForward
              size={24}
              className="mt-1 text-cyan-400 flex-shrink-0"
            />

            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Full Stack & AI Development
              </h3>

              <p className="text-gray-300 mt-2 leading-relaxed">
                Experienced in building responsive full-stack applications
                using React.js, Tailwind CSS, Node.js, Express.js, and
                MongoDB. Recently developed AI-powered projects including
                an AI Content Summarizer and AI Chatbot using modern AI APIs.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <IoArrowForward
              size={24}
              className="mt-1 text-cyan-400 flex-shrink-0"
            />

            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Internship Experience
              </h3>

              <p className="text-gray-300 mt-2 leading-relaxed">
                Worked as a C++ Developer Intern at CodeSpeedy where
                I created modular C++ solutions involving STL,
                graph algorithms, file handling, and real-world
                programming applications.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};

export default About;