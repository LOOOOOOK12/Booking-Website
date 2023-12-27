import React from 'react'
import Image1 from '../../assets/Home/pexels-evgeny-tchebotarev-2187604.jpg'

function HomeSection1() {
    return (
        <div className='pt-24 px-24 lg:flex items-center justify-center gap-20'>
            <img src={Image1} alt="Image 1" className='h-[29rem] w-[35rem] rounded-md' />
            <div className='flex-col'>
                <h2 className='mb-4 text-[50px] font-semibold'>Lorem Ipsum</h2>
                <hr className='h-0.5 bg-Rich-Black'/>
                <p className='text-Grey text-2xl mt-3.5 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <button className='mt-6 px-11 py-6 text-Puti text-lg font-light bg-Rich-Black hover:bg-Prussian-Blue ease-in duration-100 rounded-md'>Read More</button>
            </div>
        </div>
    )
}

export default HomeSection1