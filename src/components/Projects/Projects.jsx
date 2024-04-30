import React from 'react';
import Bar from '../Animations/Bar';
import { FaGithub ,FaExternalLinkAlt } from "react-icons/fa";
import { mailNest } from '../../assets/images';

const Projects = () => {
  const projects = [
    {
      title: 'MailNest',
      description: 'Mailing app with pre-made templates and custom template creation using Node.js and React. Securely send and manage emails with ease.',
      thumbnail: mailNest,
      repositoryLink: 'https://github.com/akash5k/mail-nest',
      deployment: 'mailnest-ts4x.onrender.com/',
    },
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
    <div className="mt-12 flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl">Projects</h1>
        <Bar />
      </div>
      <div className='w-full flex flex-wrap justify-center items-center gap-8'>
        {projects.map((project, index) => (
          <div key={index} className="max-w-sm max-h-sm mx-4 mb-6 bg-[#262626] p-3 rounded-lg shadow-md overflow-hidden">
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
