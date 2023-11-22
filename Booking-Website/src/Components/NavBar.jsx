import React from 'react'
import NavStyles from '../Styles/Components-Styles/NavStyles'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <NavStyles>
            <h1>Nav</h1>
            <ul className='Link'>
                <Link to="/Home" className='Links'>Home</Link>
                <Link to="/Book" className='Links'>Book</Link>
                <Link to="/Contacts" className='Links'>Contacts</Link>
            </ul>
        </NavStyles>
    )
}

export default NavBar