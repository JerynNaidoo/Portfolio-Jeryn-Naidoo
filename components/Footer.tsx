import { div, footer } from 'motion/react-client'
import React from 'react'
import ShimmerButton from './ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full mb-25 pb-10 md:mb-5' id='contact'>

        <div className='flex flex-col items-center'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold lg:max-w-[45vw] text-center'>
                Interested in {' '}
                <span className='text-green-300'>
                    my {' '}
                </span>

                portfolio?
            </h1>

            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Reach out to me today and let&apos;s help eachother grow as developers.
            </p>

            <a 
                href="mailto:jerynnaidoo@gmail.com">
                    <ShimmerButton 
                        title='Let&apos;s get in touch'
                        icon={<FaLocationArrow />}
                        position="right"
                    />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='mf:text-base text-sm md:font-normal font-light'>
                Copyright © 2025 Jeryn
            </p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-green-300'>
                        <Link href={profile.link}>
                            <img src={profile.img} alt={profile.id} width={20} height={20}/>
                        </Link>
                    </div>
                )))}
            </div>
        </div>
    </footer>
  )
}

export default Footer