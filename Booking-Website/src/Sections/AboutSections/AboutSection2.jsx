import React from 'react'
import Image2 from '../../assets/Availability/japaneseWahmen.jpg'

function AboutSection2() {
    return (
        <div className=' px-16 py-20 flex items-center justify-between gap-20'>
            <div className='w-2/4'>
                <div>
                    <h1 className='text-5xl font-semibold mb-4'>Our Mission</h1>
                    <hr className='mb-4 h-0.5 bg-Rich-Black'/>
                    <p className='text-3xl text-Rich-Black'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore”
                    </p>
                    <div className='flex mt-6'>
                        <div className='flex flex-col mr-12'>
                            <h1 className='text-3xl font-semibold'>69%</h1>
                            <p className='mt-1 text-Rich-Black'>"Lorem Ipsum"</p>
                        </div>
                        <div className='flex flex-col mr-12'>
                            <h1 className='text-3xl font-semibold'>80M+</h1>
                            <p className='mt-1 text-Rich-Black'>"Lorem Ipsum"</p>
                        </div>
                        <div className='flex flex-col mr-12'>
                            <h1 className='text-3xl font-semibold'>10K</h1>
                            <p className='mt-1 text-Rich-Black'>"Lorem Ipsum"</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Image2} alt=""  className='h-[32rem] w-[35rem] rounded-md'/>
        </div>
    )
}

export default AboutSection2