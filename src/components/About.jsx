import React from "react";
import Bar from "./Animations/Bar"
import Reveal from "./Animations/Reveal"

const About = () => {
  const educationData = [
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

  const workExperienceData = [
    {
      index: 1,
      title: "Intership Trainee",
      place: "Hindustan Aeronautics Limited",
      year: "2022",
    },
  ];

  return (
    <div class="relative md:mt-16 flex flex-col justify-center items-center min-h-screen ">
     <div className="md:mt-10 flex flex-col items-center">
       <h1 className="text-3xl md:text-4xl font-semibold tracking-widest uppercase">About Me</h1>
        <Bar />
      </div>
      <div class="w-full pb-20 flex flex-col md:flex-row justify-around px-6 md:px-32">
        <div class="flex flex-col  divide-y divide-slate-200 [&>*]:py-14">
          <div class="w-full max-w-md mx-auto">
            <div class="-my-6">
              <h2 className="text-2xl font-bold text-center mb-4">Education</h2>
              {educationData.map((item) => (
            <Reveal>
                <div key={item.id} class="relative pl-8 sm:pl-32 py-6 group">
                  <div class=" text-secondary-700 font-bold mb-1 sm:mb-0">
                    {item.title}
                  </div>
                  <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-medium uppercase w-20 h-6 mb-3 sm:mb-0 text-slate-200 bg-primary-700 rounded-full">
                      {item.year}
                    </time>
                    <div class=" text-slate-200 font-medium">{item.place}</div>
                  </div>
                  <div class="text-slate-500 text-sm">{item.grades}</div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <div class="flex flex-col  divide-y divide-slate-200 [&>*]:py-14">
          <div class="w-full max-w-md mx-auto">
            <div class="-my-6">
              <h2 className="text-2xl font-bold text-center mb-4">
                Work Experience
              </h2>
              {workExperienceData.map((item) => (
                <Reveal>
                <div key={item.id} class="relative pl-8 sm:pl-32 py-6 group">
                  <div class="text-secondary-700 font-bold mb-1 sm:mb-0">
                    {item.title}
                  </div>
                  <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-medium uppercase w-20 h-6 mb-3 sm:mb-0 text-slate-200 bg-primary-700 rounded-full">
                      {item.year}
                    </time>
                    <div class="text-slate-200 font-medium">{item.place}</div>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
