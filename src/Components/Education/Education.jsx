import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    institution: 'National Institute of Technology, Goa',
    duration: '2022 - 2026',
    details: [
      { title: 'B.Tech, Electrical & Electronics Engineering', score: 'CGPA: 8.69' },
      { title: 'Minor, Computer Science & Engineering', score: 'CGPA: 8.79' }
    ]
  },
  {
    institution: 'Delhi Public School - Bangalore South, CBSE',
    duration: '2012 - 2022',
    details: [
      { title: 'Class 12', score: '92%' },
      { title: 'Class 10', score: '90%' }
    ]
  }
];

const Education = () => {
  return (
    <section id="Education" className="text-white px-6 py-16 md:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Education
      </h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className="bg-slate-900 bg-opacity-50 rounded-lg p-6 flex gap-6 items-start shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-cyan-400 mt-1">
              <FaGraduationCap size={40} />
            </div>
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                <p className="text-sm text-cyan-300 font-mono mt-1 md:mt-0">{edu.duration}</p>
              </div>
              {edu.details.map((detail, i) => (
                 <p key={i} className="font-medium text-gray-300">
                   {detail.title}: <span className="font-normal text-gray-400 italic">{detail.score}</span>
                 </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;