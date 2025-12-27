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
        <button className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-green-300 bg-[linear-gradient(110deg,#020024,45%,#035441,55%,#95DE5D)] bg-size-[200%_100%] px-6 font-medium text-green-300 transition-colors focus:outline-none w-full md:w-60 md:mt-10 gap-3 ${otherClasses}`} onClick={handleClick}>
          
          {position === 'left' && icon}  
          {title}
          {position === 'right' && icon}
          
        </button>
  )
}

export default ShimmerButton
      