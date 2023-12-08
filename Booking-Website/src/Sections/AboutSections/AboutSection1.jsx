import React from 'react'

function AboutSection1() {
    return (
        <div className=' px-16 py-24 flex flex-col items-center justify-center gap-12'>
            <div className='w-3/5 text-center font-light text-3xl'>
                <h1 className='mt-20 text-Rich-Black'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore”
                </h1>
            </div>
            <div className='flex items-center justify-center gap-16 pt-20'>
                <div className='w-1/2 text-left'>
                    <h1 className='font-semibold text-5xl mb-4 text-Rich-Black'>Our Story</h1>
                    <hr className='h-0.5 mb-4 bg-Rich-Black'/>
                    <p className='font-light text-3xl text-Rich-Black'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore”
                    </p>
                </div>
                <div className='w-1/2'>
                    <ol>
                        <h2 className='text-3xl font-semibold mb-4 text-Rich-Black'>1. Lorem impsum</h2><p className='mb-12 text-Rich-Black'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”</p>
                        <h2 className='text-3xl font-semibold mb-4 text-Rich-Black'>2. Lorem impsum</h2><p className='mb-12 text-Rich-Black'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”</p>
                        <h2 className='text-3xl font-semibold mb-4 text-Rich-Black'>3. Lorem impsum</h2><p className='mb-12 text-Rich-Black'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”</p>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default AboutSection1