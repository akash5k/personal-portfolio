import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center pl-8 pr-8 pt-6 font-medium bg-black sticky top-0 text-teal-50'>
      <h1>Nav Logo</h1>
      <nav>
        <motion.ul className='flex gap-4'
        initial={{opacity: 0}}
        animate={{opacity:1}}
        transition={{duration:0.5,delay:0.3}}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </motion.ul>
      </nav>
      <button className='bg-white text-black p-2 rounded-md hover:bg-black hover:text-white transition-all'>
        Resume
      </button>
    </div>
  );
};

export default Navbar;
