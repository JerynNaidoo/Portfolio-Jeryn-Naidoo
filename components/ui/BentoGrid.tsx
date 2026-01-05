"use client"

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./Background-Gradient-Animation";
import { GlobeDemo } from "./GridGlobe";
import { div } from "motion/react-client";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import Lottie from "react-lottie";
import ShimmerButton from "./ShimmerButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
  const text = "jerynnaidoo@gmail.com";

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const el = document.createElement("textarea");
      el.value = text;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  } catch (err) {
    console.error("Copy failed", err);
  }
};
    

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/10",
        className,
      )}
      style={{
        background: "#020024",
        backgroundColor: "dark:linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(3, 84, 65, 1) 61%, rgba(149, 222, 93, 1) 100%) linear-gradient(90deg,rgba(212, 199, 199, 1) 0%, rgba(230, 223, 223, 1) 61%, rgba(148, 145, 145, 1) 100%)",
      }}
    >
      <div className={`${id === 6 && `flex justify-center`} h-full w-full`}>
        <div className="w-full h-full absolute">
          {
            img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, 'object-cover, object-center')}
              />
            )
          }

        </div>
        <div className={`abolute right-0 -bottom-5 ${id === 5 && `w-full opacity-80`}`}>
          {
            spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className={cn(imgClassName, 'object-cover, object-center w-full h-full')}
              />
            )
          }

        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"/> */}
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>

          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

        

        {id === 2 && <GlobeDemo />}

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className=" flex flex-col gap-3 lg:gap-8">
              {['React.js', 'TypeScript', 'Next.js'].map(
                (item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">  
                    {item}
                  </span>
                )
              )}
              <span  className=" py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
            </div>

            <div className=" flex flex-col gap-3 lg:gap-8">
              <span  className=" py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
              {['Python', 'C++', 'SQL'].map(
                (item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">  
                    {item}
                  </span>
                )
              )}
              
            </div>


          
          </div>
        )}

        {id === 6 && (
          <div className=" mt-5 relative">
            <div className={`absolute -bottom-5 right-0 pointer-events-none`}>
              <Lottie options = {
                {
                  loop: copied,
                  autoplay: copied,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }
              }/>
            </div>
            <ShimmerButton 
                title={copied ? 'Email Copied' : 'Copy My Email'} 
                icon = {<IoCopyOutline />}
                position='left'
                otherClasses="!bg-[#161A31]"
                handleClick= {handleCopy}  
            /> 
          </div>
        )
        }

      </div>
      
      <div className="transition duration-200 group-hover/bento:translate-x-2">
      </div>
    </div>
    </div>
  );
};
