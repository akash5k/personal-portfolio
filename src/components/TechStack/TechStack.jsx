import React from 'react'
import Bar from '../Animations/Bar'
import { motion } from 'framer-motion'

const TechStack = () => {
  const techStack = [
    {
      title : "Programming Languages",
      value : "C/C++, JavaScript, TypeScript"
    },
    {
      title : "Frontend",
      value : "React, Next.js, Tailwind CSS, Bootstrap, Framermotion"
    },
    {
      title : "Backend",
      value : "Node.js, Express.js, MongoDB"
    },
    {
      title : "Tools",
      value : "Git, Github, VS Code, Postman"
    }
  ]
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <div className="flex flex-col items-center mb-4">
      <h1 className="text-3xl">Tech Stack</h1>
      <Bar />
    </div>
    <div className='flex flex-col justify-center items-center'>
      {techStack.map((item,index) => (
        <div key={index} className="rounded-lg shadow-md pt-4 m-4">
          <h2 className="text-xl font-semibold text-center">{item.title}</h2>
          <span className="flex text-lg gap-4 ">
            {item.value.split(',').map((tech,index) => (
              <motion.span 
              key={index} 
              className='bg-secondary text-slate-200 rounded-md px-4 py-2 gap-4 mt-2'
              initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1.5 }}
                >{tech}</motion.span>
            ))}
          </span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TechStack