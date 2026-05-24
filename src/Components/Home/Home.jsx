import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <section
      id="Home"
      className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center px-6 md:px-20 py-16 md:py-28 gap-12"
    >
      <div className="md:w-3/5 text-center md:text-left">
        <p className="text-cyan-400 font-semibold text-lg mb-3">
          Software Developer | Full Stack Developer
        </p>

        <h1 className="font-bold leading-tight tracking-tight">
          <TextChange />
        </h1>

        <p className="text-gray-300 text-md md:text-xl mt-6 leading-relaxed max-w-2xl">
         B.Tech graduate from NIT Goa with strong foundations in Data Structures & Algorithms, Full Stack Development, and AI-powered applications. Passionate about building scalable web applications and solving real-world problems through clean, efficient, and user-focused software solutions.
        </p>

        <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">

  <a
    href="#Projects"
    className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
  >
    View Projects
  </a>

  <a
  href="https://drive.google.com/file/d/1PTiIVEw0tIkH_bjya-mCt1RTdloo7P7x/view?usp=sharing"
  target="_blank"
  rel="noreferrer"
  className="border border-cyan-400 hover:bg-cyan-400 hover:text-black text-white font-semibold px-6 py-3 rounded-full transition duration-300"
>
  Resume
</a>

  <a
    href="#Footer"
    className="border border-white/20 hover:border-cyan-400 hover:text-cyan-300 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
  >
    Contact
  </a>

</div>

        <div className="flex gap-5 mt-8 justify-center md:justify-start">
          <a
            href="https://github.com/fam252004"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-fahim-32212b2ba"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/Fahim200425/"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-cyan-400 transition duration-300"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>

      <div className="md:w-2/5 flex justify-center">
        <img
          className="w-72 md:w-96 drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]"
          src={avatarImg}
          alt="Mohammed Fahim"
        />
      </div>
    </section>
  );
};

export default Home;