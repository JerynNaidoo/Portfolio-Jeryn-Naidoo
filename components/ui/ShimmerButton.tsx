"use client"
import { motion, spring } from 'motion/react';
import React from 'react'

const ShimmerButton = (
    {
        title, icon, position, handleClick, otherClasses
    }:{
        title:string;
        icon:React.ReactNode;
        position:string;
        handleClick?:()=>void;
        otherClasses?:string;
    }

) => {
  return (
    
        // Button code
        <motion.button whileHover={{scale: 1.05, y: -5}} whileTap={{scale: 0.8, y: 5}} transition={{type: spring}} className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border dark:border-green-300 dark:bg-[linear-gradient(110deg,#020024,45%,#035441,55%,#95DE5D)] bg-[linear-gradient(110deg,#A6DE9B,45%,#299177,55%,#0D4F02)] bg-size-[200%_100%] px-6 font-medium dark:text-green-300 transition-colors focus:outline-none w-full md:w-60 md:mt-10 gap-3 cursor-pointer! border-green-800 text-green-950 ${otherClasses}`} onClick={handleClick}>
          
          {position === 'left' && icon}  
          {title}
          {position === 'right' && icon}
          
        </motion.button>
  )
}

export default ShimmerButton
      