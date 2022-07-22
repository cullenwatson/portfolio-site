import React from 'react'
import {Link} from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Cullen Watson</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Student at SMU.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a junior undergrad studing CS and Finance with special interest in Cyber Security and FinTech. Currently, I'm focused
            on obtaining a tech internship for the fall of 2023 as part of the Lyle School of Engineering Co-Op Program.
            </p>
            <div>
              <Link  to="about" smooth={true} duration={500}>
            
            
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                  
                  About
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                  </span>
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home