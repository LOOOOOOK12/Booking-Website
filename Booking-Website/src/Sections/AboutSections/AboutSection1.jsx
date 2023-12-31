import React from 'react'

function AboutSection1() {
    return (
        <div className=' px-16 py-24 flex flex-col items-center justify-center gap-12'>
            <div className='w-full text-center font-light text-3xl md:w-1/2'>
                <h1 className='mt-20 text-Rich-Black font-bold'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore”
                </h1>
            </div>
            <div className='pt-20 flex flex-col items-center gap-16 w-full md:flex md:flex-row md:items-center md:justify-center md:gap-16 md:pt-20'>
                <div className='w-full text-left md:w-1/2'>
                    <div className='w-1/2'> 
                        <h1 className='font-semibold text-5xl mb-4 text-Rich-Black'>Our Story</h1>
                        <hr className='h-0.5 mb-4 w-full bg-Rich-Black'/>
                    </div>
                    <p className=' text-2xl text-Grey'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore”
                    </p>
                </div>
                <div className='w-full md:w-1/2'>
                    <ol>
                        <h2 className='text-3xl font-semibold mb-4 text-Rich-Black'>1. Lorem impsum</h2>
                            <p className='mb-12 text-Grey'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”</p>
                        <h2 className='text-3xl font-semibold mb-4 text-Rich-Black'>2. Lorem impsum</h2>
                            <p className='mb-12 text-Grey'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”</p>
                        <h2 className='text-3xl font-semibold mb-4 text-Rich-Black'>3. Lorem impsum</h2>
                            <p className='mb-12 text-Grey'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”</p>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default AboutSection1