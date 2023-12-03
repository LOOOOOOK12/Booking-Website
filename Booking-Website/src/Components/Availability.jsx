import React from 'react'
import AvailabilityStyles from '../Styles/Components-Styles/AvailabilityStyles'
import {Link} from 'react-router-dom'

function Availability() {
    return (
        <AvailabilityStyles>
            <div className='availability-container'>
                <div className='location'>
                    <p>Location</p>
                    <p>Kyoto</p>            
                </div>
            <div className='vl'></div>
                <div className='person'>
                    <p>Person</p>
                    <p>03</p>
                </div>
            <div className='vl'></div>
                <div className='check-in'>
                    <p>Check-In</p>
                    <p>May 12, 2023</p>
                </div>
            <div className='vl'></div>
                <div className='check-out'>
                    <p>Check-Out</p>
                    <p>May 25, 2023</p>
                </div>
                <Link to="/Book"><button className='Check'> Check Availability</button></Link>
            </div>
        </AvailabilityStyles>
    )
}

export default Availability