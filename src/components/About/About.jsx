import React from "react";
import Bar from "../Animations/Bar";

const About = () => {
  const age = new Date().getFullYear() - 2003;

  // Create an object with the information
  const personalInfo = [
    { label: "First Name", value: "Akash" },
    { label: "Last Name", value: "Parida" },
    { label: "Age", value: `${age}` },
    { label: "Location", value: "Bhubaneswar, India" },
    { label: "Languages", value: "English, Hindi, Odia" },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mt-10 flex flex-col items-center mb-8">
        <h1 className="text-3xl">About Me</h1>
        <Bar />
      </div>
      <div className="rounded-lg shadow-md">
        <table className="table-auto">
          <tbody>
            {personalInfo.map((item, index) => (
              <tr key={index}>
                <td className="py-4 px-4 text-left font-semibold">
                  {item.label}
                </td>
                <td className="py-4 px-4 text-left">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
