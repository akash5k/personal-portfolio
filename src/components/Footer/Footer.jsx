import React from "react";
import Reveal from "../Animations/Reveal";
import { FaTwitter, FaInstagram } from "react-icons/fa";

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
           I'll try my best to respond as soon as possible. So what are you waiting for? Let's get started.
          </p>
        </Reveal>
         
        </div>
        <div className="flex flex-col">
          <div className="flex my-12 flex-row justify-between">           
            <div className="flex flex-row space-x-8 items-center justify-between">
              <a href="https://www.instagram.com/akash24._/">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://www.twitter.com">
                <FaTwitter className="text-3xl" />
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center mt-12 text-gray-600">
            Copyright © 2024 Akash Parida
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
