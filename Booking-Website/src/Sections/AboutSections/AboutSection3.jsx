import React from 'react'
import bed from '../../assets/Availability/bed.jpg'

function AboutSection3() {
    return (
        <div className='px-16 py-20 flex flex-row-reverse items-center justify-between gap-20'>
            <div className='flex flex-col w-1/2'>
                <h1 className='text-5xl font-semibold mb-4'>Our vision</h1>
                <hr className='mb-4 h-0.5 w-2/3 bg-Rich-Black'/>
                <p className='text-3xl text-Grey'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore”s
                </p>
            </div>
            <img src={bed} alt="" className='h-[33rem] w-[30rem] rounded-md'/>
        </div>
    )
}

export default AboutSection3