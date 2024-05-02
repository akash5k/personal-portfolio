import React from "react";
import Reveal from "./Animations/Reveal";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-6xl font-bold">
          <h1 className="w-full md:w-2/3">How can I help you. get in touch</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <Reveal>
            <p className="w-full md:w-2/3 text-gray-400">
              I'll try my best to respond as soon as possible. So what are you
              waiting for? Let's get started.
            </p>
          </Reveal>
        </div>
        <div className="flex flex-col">
          <div className="flex my-12 flex-row justify-between">
            <Reveal>
              <div className="flex flex-row space-x-8 items-center justify-between">
                <a href="https://www.linkedin.com/in/akash-parida-ap/">
                  <FaLinkedinIn className="text-3xl" />
                </a>
                <a href="https://github.com/akash5k">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="https://www.instagram.com/akash24._/">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.twitter.com">
                  <RiTwitterXFill className="text-3xl" />
                </a>
              </div>
            </Reveal>
          </div>
          <hr className="border-gray-600" />
          <p className="flex justify-center w-full text-center mt-12 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="w-5 ml-2 mr-2 text-red-700"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
            </svg>{" "}
            @akash5k
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
