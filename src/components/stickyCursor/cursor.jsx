import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorSize = 16; // set to div size height and width
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = { damping: 20, stiffness: 400, mass: 0.5 };
  const smoothOptionsSecond = { damping: 40, stiffness: 400, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };
  const smoothMouseSecond = {
    x: useSpring(mouse.x, smoothOptionsSecond),
    y: useSpring(mouse.y, smoothOptionsSecond)
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  return (
    <>   
      <motion.div
        className="w-[16px] h-[16px] bg-blue-800 fixed rounded-[50%] pointer-events-none"
        style={{ left: smoothMouse.x, top: smoothMouse.y, zIndex: 100 }}
      ></motion.div>
      <motion.div
        className="w-[16px] h-[16px] bg-blue-800 fixed rounded-[50%] pointer-events-none"
        style={{ left: smoothMouseSecond.x, top: smoothMouseSecond.y, zIndex: 99 }}
        animate={{ opacity: 0.6, scale: 1.8 }}
      ></motion.div>
    </>
  );
};

export default Cursor;
