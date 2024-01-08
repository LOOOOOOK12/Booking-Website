import React from 'react'
import Image1 from '../../assets/Home/pexels-evgeny-tchebotarev-2187604.jpg'

function HomeSection1() {
    return (
        <div id = "home" className='pt-24 px-16 md:flex md:items-center md:justify-center md:gap-28'>
            <img src={Image1} alt="Image 1" className='h-[29rem] w-[30rem] rounded-md' />
            <div className='flex-col w-full'>
                <div className='w-2/3 mt-6'>
                    <h2 className='mb-4 text-5xl text-Rich-Black font-semibold'>Lorem Ipsum</h2>
                    <hr className='h-0.5 bg-Rich-Black'/>
                </div>
                <p className='text-Grey text-2xl mt-3.5 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <button className='mt-6 px-11 py-6 text-Puti text-lg font-light bg-Rich-Black hover:bg-Prussian-Blue ease-in duration-100 rounded-md'>Read More</button>
            </div>
        </div>
    )
}

export default HomeSection1