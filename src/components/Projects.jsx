import React from "react";
import Reveal from "./Animations/Reveal";
import Bar from "./Animations/Bar";
import { FaGithub } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";
import { coinSense, investWise, mailNest } from "../assets/images";

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
      deployment: "https://coin-sense-material.vercel.app/",
    },
    {
      index: 3,
      title: "Invest Wise",
      description:
        "A web app that helps you effortlessly track your investments, visualize your portfolio performance, generate insightful reports through interactive graphs and charts.",
      thumbnail: investWise,
      repositoryLink: "https://github.com/akash5k/investWise",
    },
  ];

  return (
    <div className="mt-16 flex flex-col justify-center items-center min-h-screen ">
      <div className="flex flex-col items-center mb-14">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-widest uppercase">Projects</h1>
        <Bar />
      </div>
      <div className="w-4/5 flex flex-col md:flex-row justify-center items-center gap-8 mx-8">
        {projects.map((project, index) => (
          <Reveal>
            <div
              key={index}
              className="flex flex-col justify-around max-w-md h-[400px] mx-4 mb-6 bg-secondary-950 p-2 rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-60 object-scale-down rounded-xl object-center "
              />
              <div className="px-4 py-2">
                <h3 className="text-md text-slate-100 font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-100 text-justify opacity-50">
                  {project.description}
                </p>
                <div className="flex justify-center text-xs m-4 gap-2">
                  <a
                    href={project.repositoryLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-row items-center gap-2 bg rounded-full bg-primary-600 p-3 text-white "
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
                      <VscLinkExternal /> Visit
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
