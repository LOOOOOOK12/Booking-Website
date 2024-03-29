import React from 'react'
import {Link} from 'react-router-dom'
import calendar from '../assets/Availability/calendar.png'
import location from '../assets/Availability/location.png'
import person from '../assets/Availability/person.png'

function Availability() {
    return (
        <div className='relative flex w-full items-center justify-center max-[955px]:hidden '>
            <div className='absolute flex items-center justify-center gap-8 py-4 px-10 rounded-lg bg-[#F0EBD8] '>
                <div className='flex flex-col'>
                    <div className='flex gap-2 font-semibold items-center my-3'>
                        <img src={location} alt="location" className='h-6' />
                        <p>Location</p>
                    </div>
                    <p>Kyoto</p>            
                </div> 
                <div className='h-20 w-0.5 bg-Rich-Black'></div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2 font-semibold items-center my-3'>
                            <img src={person} alt="person" className='h-6' />
                            <p>Person</p>
                        </div>
                            <p>03</p>
                    </div>
                <div className='h-20 w-0.5 bg-Rich-Black'></div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2 font-semibold items-center my-3'>
                            <img src={calendar} alt="calendar" className='h-6'/>
                            <p>Check-In</p>
                        </div>
                        <p>May 12, 2023</p>
                    </div>
                <div className='h-20 w-0.5 bg-Rich-Black'></div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2 font-semibold items-center my-3'>
                            <img src={calendar} alt="calendar" className='h-6' />
                            <p>Check-Out</p>
                        </div>
                    <p>May 25, 2023</p>
                </div>
                <Link to="/Book"><button className='text-lg text-Puti font-semibold rounded py-5 px-6 bg-Rich-Black hover:bg-Prussian-Blue ease-in     '> Check Availability</button></Link>
            </div>
        </div>
    )
}

export default Availability