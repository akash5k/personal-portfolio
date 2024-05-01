import React from "react";
import Reveal from "../Animations/Reveal";
import Bar from "../Animations/Bar";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { coinSense, investWise, mailNest } from "../../assets/images";

const Projects = () => {
  const projects = [
    {
      index: 1,
      title: "Mail Nest",
      description:
        "Mailing app with pre-made templates and custom template creation using Node.js and React. Securely send and manage emails with ease.",
      thumbnail: mailNest,
      repositoryLink: "https://github.com/akash5k/mail-nest",
      deployment: "https://mailnest-ts4x.onrender.com/",
    },
    {
      index: 2,
      title: "Coin Sense",
      description:
        "Effortlessly manage your finances with CoinSense, a modern expense manager with a user-friendly interface. Aided with charts to visualize your expenses.",
      thumbnail: coinSense,
      repositoryLink: "https://github.com/akash5k/coin-sense",
      deployment: "coin-sense-material.vercel.app",
    },
    {
      index: 3,
      title: "Invest Wise",
      description:
        "A web app that helps you effortlessly track your investments, visualize your portfolio performance, and generate insightful reports through interactive graphs and charts.",
      thumbnail: investWise,
      repositoryLink: "https://github.com/akash5k/investWise",
    },
  ];

  return (
    <div className="mt-16 flex flex-col justify-center items-center ">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl">Projects</h1>
        <Bar />
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-8">
        {projects.map((project, index) => (
          <Reveal>
            <div
              key={index}
              className="flex flex-col justify-around max-w-md h-[480px] mx-4 mb-6 bg-secondary-900 p-4 rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-60 object-cover rounded-md object-center"
              />
              <div className="px-4 py-2">
                <h3 className="text-xl text-slate-100 font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-md text-slate-100 text-justify opacity-50">
                  {project.description}
                </p>
                <div className="flex justify-center text-md mt-4 gap-2">
                  <a
                    href={project.repositoryLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-row items-center gap-2 bg rounded-full bg-secondary-600 p-3 text-white "
                  >
                    <FaGithub /> Source Code
                  </a>
                  {project.deployment && (
                    <a
                      href={project.deployment}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-row items-center gap-2 bg rounded-full bg-secondary-600 p-3 text-white"
                    >
                      <FaExternalLinkAlt /> Visit
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
