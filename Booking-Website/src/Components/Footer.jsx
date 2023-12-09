import React from 'react'
import FooterStyles from '../Styles/Components-Styles/FooterStyles'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='h-52 flex flex-col justify-evenly items-center bg-Prussian-Blue '>
            <div className='w-full h-full flex justify-evenly'>
                <div className='Contacts'>
                    <h2>Contacts</h2>
                    <li>lobot</li>
                    <li>lobot</li>
                    <li>lobot</li>
                </div>
                <div className='Menu'>
                    <h2>Menu</h2>
                    <Link to="/Home" className='Links'><li>Home</li></Link>
                    <Link to="/About" className='Links'><li>About Us</li></Link>
                    <Link to="/Blogs" className='Links'><li>Blogs</li></Link>
                    <Link to="/Services" className='Links'><li>Services</li></Link>
                    <Link to="/Contacts" className='Links'><li>Contacts</li></Link> 
                </div>
                <div className='Media'>
                    <h2>Media</h2>
                    <li>lobot</li>
                    <li>lobot</li>
                    <li>lobot</li>
                </div>
            </div>
            <p>Made with ❤︎‬ by Luke Symon Alamil</p>
        </div>
    )
}

export default Footer