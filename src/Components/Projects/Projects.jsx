import React from "react";
import ProjectCard from "./ProjectCard";

import chatbotImg from "../../assets/chatbot.png";
import portfolioImg from "../../assets/portfolio.png";
import productStoreImg from "../../assets/productstore.jpeg";
import currencyConverterImg from "../../assets/currency.png";
import carRentalImg from "../../assets/carrent.jpeg";
import aisum from "../../assets/Aisum.png";

const projectData = [
  {
    image: aisum,
    title: "AI Content Summarizer",
    description:
      "An AI-powered application that generates summaries for text, PDF documents, and YouTube videos using Hugging Face AI models. Integrated REST APIs, PDF parsing, transcript extraction, and deployed frontend/backend separately using Vercel and Render.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Hugging Face API",
      "Render",
      "Vercel",
    ],
    demo: "https://ai-content-summarizer-ten.vercel.app/",
    code: "https://github.com/fam252004/ai-content-summarizer",
    date: "May 2026",
  },

  {
    image: chatbotImg,
    title: "AI Chatbot Interface",
    description:
      "A responsive AI chatbot application integrated with Google's Gemini API for real-time conversations. Features modern UI design, interactive animations, and optimized frontend performance.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Gemini API",
      "JavaScript",
    ],
    demo: "https://fam252004.github.io/Ai-chatbot/",
    code: "https://github.com/fam252004/Ai-chatbot",
    date: "Jun 2025",
  },

  {
    image: productStoreImg,
    title: "Product Store (MERN)",
    description:
      "A full-stack product management application with CRUD functionality, responsive UI, API integration, and theme switching. Implemented backend APIs and MongoDB database integration.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Chakra UI",
    ],
    demo: null,
    code: "https://github.com/fam252004/Product-Store",
    date: "Dec 2024",
  },

  {
    image: portfolioImg,
    title: "Personal Portfolio Website",
    description:
      "A fully responsive personal portfolio website showcasing projects, technical skills, certifications, and achievements with modern UI design and smooth user experience.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "React Icons",
      "Vite",
    ],
    demo: "#Home",
    code: "https://github.com/fam252004/portfolio",
    date: "May 2026",
  },

  {
    image: currencyConverterImg,
    title: "Currency Converter",
    description:
      "A real-time currency converter application that fetches live exchange rates using REST APIs with a responsive and user-friendly interface.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
    ],
    demo: "https://fam252004.github.io/CurrencyConverter/",
    code: "https://github.com/fam252004/CurrencyConverter",
    date: "May 2025",
  },

  {
    image: carRentalImg,
    title: "Car Rental Website",
    description:
      "A responsive front-end website for a car rental service with attractive UI sections, smooth navigation, and mobile-friendly design.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    demo: "https://fam252004.github.io/Car-Rental-Website/",
    code: "https://github.com/fam252004/Car-Rental-Website",
    date: "May 2024",
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="px-6 py-20 md:px-20 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 text-lg">
          Some of the projects I’ve worked on recently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
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