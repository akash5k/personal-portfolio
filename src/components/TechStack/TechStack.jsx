import React from 'react'
import Bar from '../Animations/Bar'
import { motion } from 'framer-motion'
import Reveal from '../Animations/Reveal'

const TechStack = () => {
  const techStack = [
    {
      index : 1,
      title : "Programming Languages",
      value : "C/C++, JavaScript, TypeScript"
    },
    {
      index : 2,
      title : "Frontend",
      value : "React, Next.js, Tailwind CSS, Bootstrap, Framermotion"
    },
    {
      index : 3,
      title : "Backend",
      value : "Node.js, Express.js, MongoDB"
    },
    {
      index : 4,
      title : "Tools",
      value : "Git, Github, VS Code, Postman"
    }
  ]
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="flex flex-col items-center mb-4">
      <h1 className="text-3xl">Tech Stack</h1>
      <Bar />
    </div>
    <div className='flex flex-col justify-center items-center'>
      {techStack.map((item,index) => (
        <div key={index} className="rounded-lg shadow-md pt-4 m-4">
          <h2 className="text-xl font-semibold text-center mb-4">{item.title}</h2>
          <span className="flex text-lg gap-4 ">
            {item.value.split(',').map((tech,index) => (
              <Reveal>
              <motion.span 
              key={index} 
              className='bg-secondary-900 text-slate-200 rounded-md px-4 py-2 gap-4 mt-2'
                >{tech}</motion.span>
              </Reveal>
            ))}
          </span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TechStack