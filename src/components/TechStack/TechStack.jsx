import React from 'react';
import Bar from '../Animations/Bar';
import { motion } from 'framer-motion';
import Reveal from '../Animations/Reveal';

const TechStack = () => {
  const techStack = [
    {
      index: 1,
      title: 'Programming Languages',
      value: 'C/C++, JavaScript, TypeScript',
    },
    {
      index: 2,
      title: 'Frontend',
      value: 'React, Next.js, Tailwind CSS, Bootstrap, Framermotion',
    },
    {
      index: 3,
      title: 'Backend',
      value: 'Node.js, Express.js, MongoDB',
    },
    {
      index: 4,
      title: 'Tools',
      value: 'Git, Github, VS Code, Postman',
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-3xl font-semibold tracking-widest uppercase">Tech Stack</h1>
        <Bar />
      </div>
      <div className="flex flex-col items-center w-full">
        {techStack.map((item, index) => (
          <div key={index} className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-md p-4 m-4">
            <h2 className="font-medium text-center mb-4">{item.title}</h2>
            <div className="flex flex-wrap justify-center">
              {item.value.split(',').map((tech, index) => (
                <Reveal key={index}>
                  <motion.span className="bg-secondary-900 text-slate-200 rounded-md px-4 py-2 m-2">
                    {tech.trim()}
                  </motion.span>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
