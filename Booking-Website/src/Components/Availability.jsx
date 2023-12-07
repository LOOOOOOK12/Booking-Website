import React from 'react'
import {Link} from 'react-router-dom'
import calendar from '../assets/Availability/calendar.png'
import location from '../assets/Availability/location.png'
import person from '../assets/Availability/person.png'

function Availability() {
    return (
        <div className='relative flex w-full items-center justify-center'>
            <div className='absolute flex items-center justify-center gap-8 py-6 px-10 rounded-lg bg-[#F0EBD8] '>
                <div className='flex flex-col'>
                    <div className='flex gap-2 items-center my-3'>
                        <img src={location} alt="location" className='h-6' />
                        <p>Location</p>
                    </div>
                    <p>Kyoto</p>            
                </div> 
                <div className='h-20 w-0.5 bg-[#0D1321]'></div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2 items-center my-3'>
                            <img src={person} alt="person" className='h-6' />
                            <p>Person</p>
                        </div>
                            <p>03</p>
                    </div>
                <div className='h-20 w-0.5 bg-[#0D1321]'></div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2 items-center my-3'>
                            <img src={calendar} alt="calendar" className='h-6'/>
                            <p>Check-In</p>
                        </div>
                        <p>May 12, 2023</p>
                    </div>
                <div className='h-20 w-0.5 bg-[#0D1321]'></div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2 items-center my-3'>
                            <img src={calendar} alt="calendar" className='h-6' />
                            <p>Check-Out</p>
                        </div>
                    <p>May 25, 2023</p>
                </div>
                <Link to="/Book"><button className='text-lg text-sky-50 font-light rounded py-5 px-6 bg-[#0D1321]'> Check Availability</button></Link>
            </div>
        </div>
    )
}

export default Availability