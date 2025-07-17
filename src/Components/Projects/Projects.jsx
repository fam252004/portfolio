import React from 'react';
import ProjectCard from './ProjectCard';

// Corrected .png extensions for portfolio and currency images
import chatbotImg from '../../assets/chatbot.png';
import portfolioImg from '../../assets/portfolio.png';
import productStoreImg from '../../assets/productstore.jpeg';
import currencyConverterImg from '../../assets/currency.png';
import carRentalImg from '../../assets/carrent.jpeg';

const projectData = [
  {
    image: chatbotImg,
    title: "AI Chatbot Interface",
    description: "A responsive AI chatbot UI using Google’s Gemini API for real-time interaction, featuring a modern design with dynamic visual cues.",
    techStack: ["React.js", "TailwindCSS", "Google GenAI SDK"],
    demo: "https://fam252004.github.io/Ai-chatbot/",
    code: "https://github.com/fam252004/Ai-chatbot",
    date: "Jun 2025"
  },
  {
    image: portfolioImg,
    title: "Portfolio Website",
    description: "My personal portfolio to showcase skills and projects, built with a responsive design and a clean layout using TailwindCSS and React.",
    techStack: ["React.js", "TailwindCSS", "React Icons"],
    demo: "#Home",
    code: "https://github.com/fam252004/Portfolio",
    date: "Jun 2025"
  },
  {
    image: productStoreImg,
    title: "Product Store (Full-Stack)",
    description: "A full-stack product management system with complete CRUD functionality and a light/dark mode toggle, built using the MERN stack.",
    techStack: ["MERN Stack", "Chakra UI", "MongoDB"],
    demo: null,
    code: "https://github.com/fam252004/Product-Store",
    date: "Dec 2024"
  },
  {
    image: currencyConverterImg,
    title: "Currency Converter App",
    description: "A real-time currency converter that fetches live exchange rates from the Frankfurter API, featuring a responsive and interactive UI.",
    techStack: ["HTML5", "CSS3", "JavaScript", "REST API"],
    demo: "https://fam252004.github.io/CurrencyConverter/",
    code: "https://github.com/fam252004/CurrencyConverter",
    date: "May 2025"
  },
  {
    image: carRentalImg,
    title: "Car Rental Website",
    description: "A responsive front-end website for a car rental service, designed with a clean, user-friendly interface using vanilla web technologies.",
    techStack: ["HTML", "CSS", "JavaScript"],
    demo: "https://fam252004.github.io/Car-Rental-Website/",
    code: "https://github.com/fam252004/Car-Rental-Website",
    date: "May 2024"
  }
];

const Projects = () => {
  return (
    <section id="Projects" className="px-6 py-16 md:px-20 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400">A selection of my work. More available on GitHub.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.description}
            demo={project.demo}
            code={project.code}
            techStack={project.techStack}
            date={project.date}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;