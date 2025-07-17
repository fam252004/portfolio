import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <section
      id="Home"
      className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20 md:py-28 gap-10"
    >
      {/* Left side: Intro Text */}
      <div className="md:w-3/5 text-center md:text-left">
        <h1 className="font-bold leading-tight tracking-tighter">
          <TextChange />
        </h1>
        {/* Updated paragraph to reflect core strengths */}
        <p className="text-md md:text-xl tracking-tight mt-4 max-w-xl mx-auto md:mx-0">
          A B.Tech student at NIT Goa, passionate about problem-solving and building efficient, modern web applications with React.js and Tailwind CSS.
        </p>
        <a href="#Footer">
          <button className="mt-8 text-white py-3 px-6 text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-full bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>

      {/* Right side: Avatar Image */}
      <div className="md:w-2/5 flex justify-center md:justify-end">
        <img
          className="w-64 md:w-80 lg:w-96"
          src={avatarImg}
          alt="Mohammed Fahim Avatar"
        />
      </div>
    </section>
  );
};

export default Home;