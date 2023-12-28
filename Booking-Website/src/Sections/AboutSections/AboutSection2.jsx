import React from 'react'
import Image2 from '../../assets/Availability/japaneseWahmen.jpg'

function AboutSection2() {
    return (
        <div className='px-16 py-20 flex flex-col gap-16 md:flex md:flex-row md:justify-center md:items-center'>
            <div className='w-full md:w-2/4'>
                <div className='w-full'>
                    <div className='flex flex-col'>
                        <h1 className='text-5xl font-semibold mb-4'>Our Mission</h1>
                        <hr className='mb-4 h-0.5 w-full bg-Rich-Black'/>
                    </div>
                    <p className='text-2xl text-Grey'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore”
                    </p>
                    <div className='flex mt-6'>
                        <div className='flex flex-col mr-12'>
                            <h1 className='text-3xl font-semibold'>69%</h1>
                            <p className='mt-1 text-Grey'>"Lorem Ipsum"</p>
                        </div>
                        <div className='flex flex-col mr-12'>
                            <h1 className='text-3xl font-semibold'>80M+</h1>
                            <p className='mt-1 text-Grey'>"Lorem Ipsum"</p>
                        </div>
                        <div className='flex flex-col mr-12'>
                            <h1 className='text-3xl font-semibold'>10K</h1>
                            <p className='mt-1 text-Grey'>"Lorem Ipsum"</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Image2} alt="pic"  className='h-[25rem] w-[25rem] md:h-[25rem] md:w-[30rem] rounded-md '/>
        </div>
    )
}

export default AboutSection2