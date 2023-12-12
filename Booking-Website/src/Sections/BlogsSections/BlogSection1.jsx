import React from 'react'
import Shrine from '../../assets/Blogs/Shrine.jpg'

function BlogSection1() {
    return (
        <div className=' pl-16 py-28 flex flex-row items-center justify-center gap-12'>
            <div className='w-3/5 text-left font-light text-3xl'>
                <h1 className='mb-4 text-[50px] font-semibold text-Rich-Black'>Nippon Sugoi</h1>
                <hr className='mb-4 h-0.5 bg-Rich-Black' />
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”</p>        
            </div>
            <img src={Shrine} alt="Shrine" className='w-[37rem] h-[45rem] rounded-md'/>
        </div>
    )
}

export default BlogSection1