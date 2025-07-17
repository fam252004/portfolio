import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

// Work experience data
const workExperience = [
    {
        role: "C++ Developer Intern",
        company: "CodeSpeedy Technology Pvt. Ltd.",
        duration: "June 2025 – July 2025",
        tasks: [
            "Designed and published 15+ C++ tutorials and mini-projects on coderspacket.com.",
            "Implemented solutions involving object-oriented programming, file I/O, STL, and graph algorithms.",
            "Explored image and audio processing using OpenCV and FFmpeg for real-world applications.",
            "Wrote modular, well-documented code to improve understanding of C++ fundamentals for a global audience."
        ]
    }
];

const Experience = () => {
    return (
        <section id="Experience" className="text-white px-6 py-16 md:px-24 bg-black bg-opacity-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                {workExperience.map((job, index) => (
                    <div key={index} className="bg-slate-900 bg-opacity-50 rounded-lg p-6 flex gap-6 items-start shadow-lg">
                        <div className="text-cyan-400 mt-1">
                           <FaBriefcase size={35} />
                        </div>
                        <div>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                                <h3 className="text-xl font-semibold">{job.role}</h3>
                                <p className="text-sm text-cyan-300 font-mono mt-1 md:mt-0">{job.duration}</p>
                            </div>
                            <p className="text-md font-medium text-gray-300 mb-3">{job.company}</p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
                                {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;