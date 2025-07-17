import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="text-white bg-black bg-opacity-30 shadow-xl rounded-lg mx-4 md:mx-20 my-20 p-10 md:p-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        About Me
      </h2>

      <div className="md:flex items-center justify-center gap-12">
        <img
          className="mx-auto md:mx-0 w-64 md:w-80 rounded-lg mb-8 md:mb-0"
          src={AboutImg}
          alt="Illustration for About Me section"
        />

        <ul className="space-y-6 max-w-xl">
          {/* Item 1: Core Programming - Placed first to highlight strength */}
          <li className="flex items-start gap-4">
            <IoArrowForward size={24} className="mt-1 flex-shrink-0 text-cyan-400" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Core Programming & Problem Solving</h3>
              <p className="text-sm md:text-md text-gray-300 mt-1">
                My foundation is built on strong problem-solving skills, demonstrated by solving over 500 Data Structures & Algorithms problems using C++ on LeetCode and GeeksforGeeks.
              </p>
            </div>
          </li>

          {/* Item 2: Modern Web Development */}
          <li className="flex items-start gap-4">
            <IoArrowForward size={24} className="mt-1 flex-shrink-0 text-cyan-400" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Modern Web Development</h3>
              <p className="text-sm md:text-md text-gray-300 mt-1">
                I specialize in building responsive and dynamic user interfaces using React.js and Tailwind CSS, focusing on clean code and exceptional user experiences.
              </p>
            </div>
          </li>

          {/* Item 3: Backend & Databases */}
          <li className="flex items-start gap-4">
            <IoArrowForward size={24} className="mt-1 flex-shrink-0 text-cyan-400" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Backend & Databases</h3>
              <p className="text-sm md:text-md text-gray-300 mt-1">
                I have foundational experience with the MERN stack, including building REST APIs with Node.js/Express and managing data in MongoDB, allowing me to contribute to full-stack projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;