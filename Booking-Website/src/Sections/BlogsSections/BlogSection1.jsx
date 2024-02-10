import React from 'react'
import Shrine from '../../assets/Blogs/Shrine.jpg'

function BlogSection1() {
    return (
        <div className=' py-20 px-16 flex flex-col-reverse gap-8 md:flex md:flex-row md:items-center md:justify-center md:gap-8'>
            <div className=' w-full md:w-2/3 md:text-left'>
                <div className='flex flex-col w-2/3'>
                    <h2 className='h-full text-5xl font-semibold mb-4 text-Rich-Black'>Nippon Sugoi</h2>
                    <hr className='mb-4 h-0.5 w-full bg-Rich-Black'/>
                </div>
                <p className='text-2xl text-Grey'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”</p>        
            </div>
            <img src={Shrine} alt="Shrine" className='w-[35rem] h-[40rem] rounded-md'/>
        </div>
    )
}

export default BlogSection1