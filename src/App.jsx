import React from 'react';

// Import all sections of the portfolio
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from './Components/Skills/Skills';
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Achievements from './Components/Achievements/Achievements';
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    // 1. Update the class name on this line
    <div className="bg-space-container pt-24 h-auto w-full overflow-x-hidden">
      
      {/* 2. Add these three divs for the star layers */}
      <div className="stars stars-small"></div>
      <div className="stars stars-medium"></div>
      <div className="stars stars-large"></div>

      <div className="relative z-10"> {/* This wrapper ensures your content stays above the stars */}
        <Navbar />
        <main>
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
    </div>
  );
}

export default App;