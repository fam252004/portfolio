import React, { useState, useEffect } from "react";

const messages = [
  "Hi, I'm Mohammed Fahim",
  "B.Tech Graduate from NIT Goa",
  "Full Stack Web Developer",
  "500+ DSA Problems Solved",
  "Building AI Powered Applications",
];

const TextChange = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMessageIndex(
        (prevIndex) => (prevIndex + 1) % messages.length
      );
    }, 2500);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  return (
    <div className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white min-h-[120px] flex items-center justify-center md:justify-start">
      <span key={currentMessageIndex}>
        {messages[currentMessageIndex]}
      </span>
    </div>
  );
};

export default TextChange;