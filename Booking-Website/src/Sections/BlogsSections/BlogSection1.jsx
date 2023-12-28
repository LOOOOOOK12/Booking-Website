import React from 'react'
import Shrine from '../../assets/Blogs/Shrine.jpg'

function BlogSection1() {
    return (
        <div className=' pl-16 py-28 flex flex-col-reverse gap-8 md:flex md:flex-row md:items-center md:justify-center md:gap-8'>
            <div className='w-3/4 text-left'>
                <h1 className='mb-4 text-5xl font-semibold text-Rich-Black'>Nippon Sugoi</h1>
                <hr className='mb-4 h-0.5 w-3/4 bg-Rich-Black' />
                <p className='text-2xl text-Grey'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”</p>        
            </div>
            <img src={Shrine} alt="Shrine" className='w-[37rem] h-[40rem] rounded-md'/>
        </div>
    )
}

export default BlogSection1