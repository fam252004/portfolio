import React from "react";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Achievements from "./Components/Achievements/Achievements";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-[#030712] min-h-screen w-full overflow-x-hidden">

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a,transparent_50%)]"></div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
      </main>

      <Footer />
    </div>
  );
};

export default App;