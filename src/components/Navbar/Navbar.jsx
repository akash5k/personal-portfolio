import React from 'react';
// import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 mx-40 pt-6  bg-background sticky top-0 text-teal-50'>
      <h1 className='text-xl tracking-tighter font-bold hidden md:block'>AKASH</h1>
      {/* <nav>
        <motion.ul className='flex gap-4'
        initial={{opacity: 0}}
        animate={{opacity:1}}
        transition={{duration:0.5,delay:0.3}}>
          <li>Home</li>
          <li href="#about">About</li>
          <li>Projects</li>
          <li>Contact</li>
        </motion.ul>
      </nav> */}
    </div>
  );
};

export default Navbar;
