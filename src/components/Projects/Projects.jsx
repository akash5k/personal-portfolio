import React from 'react';
import Bar from '../Animations/Bar';
import { FaGithub ,FaExternalLinkAlt } from "react-icons/fa";
import { mailNest } from '../../assets/images';

const Projects = () => {
  const projects = [
    {
      title: 'MailNest',
      description: 'HVBAHBVBD',
      thumbnail: mailNest,
      repositoryLink: '',
      deployment: '',
    },
    {
      title: 'MailNest',
      description: 'HVBAHBVBD',
      thumbnail: mailNest,
      repositoryLink: '',
      deployment: '',
    },
  ];

  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-3xl">Projects</h1>
        <Bar />
      </div>
      <div className='w-3/4 flex flex-wrap justify-center items-center gap-8'>
        {projects.map((project, index) => (
          <div key={index} className="max-w-md mx-4 mb-6 bg-[#262626] p-1  rounded-lg shadow-md overflow-hidden">
            <img src={project.thumbnail} alt={project.title} className="w-full h-60 object-cover rounded-md object-center" />
            <div className="px-4 py-2">
              <h3 className="text-lg text-slate-100 font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-100">{project.description}</p>
              <div className="flex justify-center text-2xl mt-4 gap-2">
                <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer" className="bg-secondary rounded-fulltext-white hover:text-blue-700"><FaGithub/></a>
                <a href={project.deployment} target="_blank" rel="noopener noreferrer" className="bg-secondary rounded-full text-white hover:text-blue-700"><FaExternalLinkAlt /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
