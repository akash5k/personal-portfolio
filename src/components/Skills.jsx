import React, { useState } from "react";
import Bar from "./Animations/Bar";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import { PiCodeDuotone } from "react-icons/pi";
import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import { TbBrandFramerMotion, TbBrandVscode,TbServerBolt } from "react-icons/tb";
import { RiToolsLine } from "react-icons/ri";
import { VscLibrary } from "react-icons/vsc";
import Reveal from "./Animations/Reveal";

const techStack = [
  {
    index: 1,
    title: "Languages",
    desc: "Languages that I have picked up over the years",
    value: [
      { name: "C/C++", icon: SiCplusplus },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
    icon: PiCodeDuotone,
  },
  {
    index: 2,
    title: "Frameworks & Libraries",
    desc: "Libraries and Frameworks that I prefer to work with",
    value: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Framer Motion", icon: TbBrandFramerMotion },
    ],
    icon: VscLibrary,
  },
  {
    index: 3,
    title: "Backend",
    desc: "Backend technologies for server-side development",
    value: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
    icon: TbServerBolt,
  },
  {
    index: 4,
    title: "Tools",
    desc: "Tools that I know and use on a daily basis",
    value: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: TbBrandVscode },
      { name: "Postman", icon: SiPostman },
    ],
    icon: RiToolsLine,
  },
];

const TechCategory = ({ item, index, activeIndex, toggleAccordion }) => (
  <div key={index} className="rounded-lg shadow-md p-4 mb-4 w-full">
    <h2
      className="flex justify-between font-medium text-center mb-4 cursor-pointer items-center gap-4"
      onClick={() => toggleAccordion(index)}
    >
      <div className="flex items-center gap-4">
        <item.icon className="text-4xl" />
        <div className="flex flex-col items-start">
          <span>{item.title}</span>
          <span className="text-xs text-left font-extralight">{item.desc}</span>
        </div>
      </div>
      <div>{activeIndex === index ? "▲" : "▼"}</div>
    </h2>
    <div
      className={`flex flex-col justify-center ${
        activeIndex === index ? "block" : "hidden"
      }`}
    >
      {item.value.map((tech, i) => (
        <div key={i}>
          <Reveal>
            <span className="flex justify-between items-center bg-secondary-900 text-slate-200 rounded-md px-4 py-2 m-2">
              <tech.icon className="text-xl mr-2" />
              <span className="ml-2">{tech.name}</span>
            </span>
          </Reveal>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center md:min-h-screen">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-4xl font-semibold tracking-widest uppercase">
          Skills
        </h1>
        <Bar />
      </div>
      <div className="flex flex-col md:flex-row justify-between w-10/12 md:w-3/4 lg:w-2/3">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          {techStack.slice(0, 2).map((item, index) => (
            <TechCategory
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {techStack.slice(2).map((item, index) => (
            <TechCategory
              key={index + 2}
              item={item}
              index={index + 2}
              activeIndex={activeIndex}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
