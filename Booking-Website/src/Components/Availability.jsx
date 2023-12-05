import React from 'react'
import AvailabilityStyles from '../Styles/Components-Styles/AvailabilityStyles'
import {Link} from 'react-router-dom'
import calendar from '../assets/Availability/calendar.png'
import location from '../assets/Availability/location.png'
import person from '../assets/Availability/person.png'

function Availability() {
    return (
        <AvailabilityStyles>
            <div className='availability-container'>
                <div className='location'>
                    <div className='Title-A'><img src={location} alt="location" /><p>Location</p></div>
                    <p>Kyoto</p>            
                </div>
            <div className='vl'></div>
                <div className='person'>
                <div className='Title-A'><img src={person} alt="person" /><p>Person</p></div>
                    <p>03</p>
                </div>
            <div className='vl'></div>
                <div className='check-in'>
                <div className='Title-A'><img src={calendar} alt="calendar" /><p>Check-In</p></div>
                    <p>May 12, 2023</p>
                </div>
            <div className='vl'></div>
                <div className='check-out'>
                <div className='Title-A'><img src={calendar} alt="calendar" /><p>Check-Out</p></div>
                    <p>May 25, 2023</p>
                </div>
                <Link to="/Book"><button className='Check'> Check Availability</button></Link>
            </div>
        </AvailabilityStyles>
    )
}

export default Availability