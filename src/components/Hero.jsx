import React from "react";
import { motion } from "framer-motion";
import Particles from "./Animations/Particles";
import {
  FaLinkedinIn,
  FaGithub,
  FaFileDownload,
  FaArrowDown,
} from "react-icons/fa";
import { Akash, heroBg } from "../assets/images";

const reachOut = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akash-parida-ap/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Github",
    link: "https://github.com/akash5k",
    icon: <FaGithub />,
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1n_pFr0-pNkFrdCHeVNoPukkVC8Lbfpkw/view?usp=sharing",
    icon: <FaFileDownload />,
  },
];

const Hero = () => {
  return (
    <>
    <div  className="opacity-45">
    <Particles id="particles"/>
    </div>
      <div
        className="bg-repeat absolute left-0 top-0 h-full w-full opacity-50 md:opacity-30 "
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "initial",
          backgroundPosition: "0 13px",
          // opacity: 0.3,
        }}
      />    
      
      <div className="flex flex-col relative z-20 text-center mx-auto w-full h-screen md:w-3/5 mt-0 md:mt-10 pt-4 md:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 1, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="md:h-1/3 justify-items-center m-4 md:mb-8 "
        >
          <img
            src={Akash}
            className="rounded-full w-44 h-44 mx-auto"
            alt="Akash"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col text-center gap-2"
        >
          <h1 className="text-4xl font-semibold mt-2 md:mt-0">
            Hi, I am{" "}
            <span className="font-extrabold text-blue-600 opacity-90 tracking-wider">
              Akash Parida
            </span>
          </h1>
          <p className="text-md md:text-xl opacity-60 mx-10 text-balance">
            Full-stack Web Developer with expertise in React, and Competitive
            Programming. Final year IT undergrad at IIIT Bhubaneswar, India.
          </p>
          <motion.span
            className="text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 2 }}
          >
            🌱 Designing the future, one pixel at a time.
          </motion.span>
        </motion.div>
        <div className="mb-16">
          <ul className="flex justify-center gap-4 mt-8">
            {reachOut.map((item, index) => (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1.5 }}
                key={index}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-sm gap-2 p-2 bg-secondary-900 text-white rounded-md hover:bg-white  hover:text-black 800 transition-all"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row text-sm items-center justify-center gap-2 mt-2 opacity-45 ">
          <motion.div
            animate={{
              y: [0, -5, 0],
              transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
            }}
          >
            <FaArrowDown />
          </motion.div>
          Scroll Down
        </div>
      </div>
    </>
  );
};

export default Hero;
