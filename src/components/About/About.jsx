import React from "react";
import Bar from "../Animations/Bar";
import Reveal from "../Animations/Reveal";

const About = () => {

  const education = [
    {
      index: 1,
      title: "B.Tech in Information Technology",
      place: "IIIT Bhubaneswar",
      year: "2020 - 2024",
      grades: "CGPA upto 7rd semester - 8.13",
    },
    {
      index: 2,
      title: "Intermediate",
      place: "FIITJEE Jr College, Vishakhapatnam",
      year: "2018 - 2010",
      grades: "CGPA - 9.3",
    },
    {
      index: 3,
      title: "Matriculation",
      place: "Vyomayana Samstha Vidyalaya, Sunabeda",
      year: "2006 - 2018",
      grades: "Percentage - 88.6%",
    },
  ];

  const work = [
    {
      index: 1,
      title: "Intership Trainee",
      place: "Hindustan Aeronautics Limited",
      year: "2022",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="mt-10 flex flex-col items-center mb-14">
       <h1 className="text-3xl font-semibold tracking-widest uppercase">About Me</h1>
        <Bar />
      </div>
      <div className="w-full flex flex-col md:flex-row rounded-lg shadow-md justify-around px-6 md:px-32">
        {/* Educational Qualifications */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Educational Qualifications
          </h1>
          {education.map((item, index) => (
            <Reveal>
              <div key={index} className="flex items-center gap-2  ">
                <span className="text-sm w-1/3 mr-2 bg-primary-700 text-center rounded-full">
                  {item.year}
                </span>
                <div className="flex flex-col w-2/3">
                  <h2 className=" text-secondary-800 font-bold">
                    {item.title}
                  </h2>
                  <p className=" text-slate-200 font-medium">{item.place}</p>
                  <span className=" text-slate-100 text-xs font-extralight">
                    {item.grades}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {/* Work Experience */}
        <div className="flex flex-col md:gap-6">
          <h1 className="text-2xl font-semibold text-center mb-4 mt-12 md:mt-0">
            Work Experience
          </h1>
          {work.map((item, index) => (
            <Reveal>
              <div key={index} className="flex items-center gap-2">
                <span className="text-sm w-1/3 mr-2 bg-primary-700 text-center rounded-full">
                  {item.year}
                </span>
                <div className="flex flex-col w-2/3">
                  <h2 className=" text-secondary-800 font-bold">
                    {item.title}
                  </h2>
                  <p className=" text-slate-100">{item.place}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;