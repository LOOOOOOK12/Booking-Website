import React from 'react'
import NavStyles from '../Styles/Components-Styles/NavStyles'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <NavStyles>
            <h1>Nav</h1>
            <ul className='Link'>
                <Link to="/Home" className='Links'>Home</Link>
                <Link to="/About" className='Links'>About Us</Link>
                <Link to="/Blogs" className='Links'>Blogs</Link>
                <Link to="/Services" className='Links'>Services</Link>
                <Link to="/Contacts" className='Links'>Contacts</Link>
                
            </ul>
            <Link to="/Book" className='Links'><button className='Book'>Book Now</button></Link>
        </NavStyles>
    )
}

export default NavBar