import React from 'react'
import bed from '../../assets/Availability/bed.jpg'

function AboutSection3() {
    return (
        <div className='px-16 py-20 flex flex-col-reverse justify-center gap-20 md:flex-row-reverse md:items-center'>
            <div className='flex flex-col w-full md:w-full'>
                <div className='flex flex-col w-1/2'>
                    <h2 className='text-5xl font-semibold text-Rich-Black mb-4'>Our Vision</h2>
                    <hr className='mb-4 h-0.5 w-full bg-Rich-Black'/>
                </div>
                <p className='text-2xl text-Grey'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore”s
                </p>
            </div>
            <img src={bed} alt="bed" className='h-[25rem] w-[28rem] md:h-[25rem] md:w-[27rem] rounded-md'/>
        </div>
    )
}

export default AboutSection3