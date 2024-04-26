import React ,{useEffect} from "react";
import { motion ,useMotionValue ,useSpring} from "framer-motion";

const Cursor = () => {
    const cursorSize = 18; //set ot div size height and width
    const mouse ={
        x:useMotionValue(0),
        y:useMotionValue(0)
    }

    const smoothOptions = {damping:20,stiffness:300,mass:0.5}
    const smoothMouse = {
        x: useSpring(mouse.x,smoothOptions),
        y: useSpring(mouse.y,smoothOptions)
    }


    const manageMouseMove = (e) =>{
        const {clientX,clientY} = e;
        mouse.x.set(clientX - cursorSize/2);
        mouse.y.set(clientY - cursorSize/2);
    }
    useEffect (()=>{
        window.addEventListener('mousemove',manageMouseMove)
        return ()=>{
            window.removeEventListener('mousemove',manageMouseMove)
        }
    })
  return (
    <motion.div 
        className="w-[18px] h-[18px] bg-slate-100 fixed rounded-[50%]"
        style={{left:smoothMouse.x,top:smoothMouse.y}}
        >
    </motion.div>
  );
};

export default Cursor;
