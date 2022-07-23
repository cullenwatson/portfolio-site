import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 text-[#5ce1e6]'>About</p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p>Hi. I'm Cullen, nice to meet you. Please take a look around!</p>
                        </div>
                        <div>
                            <p>
                                I am passionate abould building excellent software that
                                solves people's problems. I want to improve the lives of people around me by saving time through automation, simplicity, and enjoyment of the 
                                software I create. I am familiar with many programming languages, such as Java, Python, and C++. In my free time, I'm currently
                                learning React to design beautiful websites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About