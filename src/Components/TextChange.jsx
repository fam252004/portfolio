import React, { useState, useEffect } from "react";

// Updated messages to reflect your core strengths
const messages = [
  "Hi, I'm Fahim",
  "Problem Solver & C++ Developer",
  "React.js & Tailwind CSS Developer",
  "Building Efficient & Modern Web Apps",
];

const TextChange = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // After 2.5 seconds, move to the next message
    const timer = setTimeout(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2500); // 2.5 seconds per message

    // Cleanup timeout on component unmount or when the index changes
    return () => clearTimeout(timer);
  }, [currentMessageIndex]); // The effect depends on the current index

  return (
    <div className="text-xl md:text-4xl lg:text-5xl font-bold text-white h-24 md:h-auto flex items-center justify-center md:justify-start">
      <span key={currentMessageIndex}>
        {messages[currentMessageIndex]}
      </span>
    </div>
  );
};

export default TextChange;