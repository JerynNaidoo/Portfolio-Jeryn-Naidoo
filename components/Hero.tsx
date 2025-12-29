import React from 'react'
import { cn } from "@/lib/utils";
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect';
import ShimmerButton from './ui/ShimmerButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>

        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="green"/>
            <Spotlight className='top-28 left-80 h-[80-vh] w-[50vw]' fill="blue"/>
        </div>

        <div className="flex h-fit w-full items-center justify-center bg-white dark:bg-black absolute">

            <div
            className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_1%,black)] dark:bg-black top-0 left-0">    
            </div>
        
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w[60vw] flex flex-col items-center justify-center'>
                <h2 className=' uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Dynamic Web Magic with Next.js & Tailwind CSS:
                </h2>

                <TextGenerateEffect
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words="Welcome to the portfolio of Jeryn Naidoo" 
                />

                <p className='text-center md:tracking-wider mb-4 text-sm md:text-sm lg:text-1xl'>
                    Hi, I'm Jeryn Naidoo, an aspiring software developer passionate about web developement, artificial intelligence, machine learning, gaming, and many other fields of computer science. Please feel free to explore my portfolio to get a better understanding of my skills and projects.
                </p>
                <a href="#about">
                    <ShimmerButton 
                    title="Show my work" 
                    icon = {<FaLocationArrow />}
                    position='right' 
                    />
                </a>
            </div>
        </div>

    </div>
  )
}

export default Hero