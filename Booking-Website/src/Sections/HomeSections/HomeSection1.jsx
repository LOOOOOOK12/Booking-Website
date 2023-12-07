import React from 'react'
import Image1 from '../../assets/Home/pexels-evgeny-tchebotarev-2187604.jpg'
// import HomeSection1Styles from '../../Styles/SectionsStyles/HomeSectionsStyles/HomeSection1Styles'

function HomeSection1() {
    return (
        <div className='pt-20 px-24 h-screen flex items-center justify-center gap-20'>
            <img src={Image1} alt="Image 1" className='h-[30rem] w-[35rem] rounded-md' />
            <div className='flex-col'>
                <h2 className='mb-4 text-[50px] font-semibold'>Lorem Ipsum</h2>
                <hr className='h-0.5 bg-[#0D1321]'/>
                <p className='text-[#7B7B7B] text-2xl mt-3.5 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <button className='mt-6 px-11 py-6 text-[#e3e3e3] text-sm bg-[#0D1321] rounded-md'>Read More</button>
            </div>
        </div>
    )
}

export default HomeSection1