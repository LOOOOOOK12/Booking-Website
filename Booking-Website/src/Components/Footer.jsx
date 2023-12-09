import React from 'react'
import FooterStyles from '../Styles/Components-Styles/FooterStyles'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='p-6 flex flex-col justify-evenly items-center gap-4 bg-Prussian-Blue text-Puti '>
            <div className='w-full h-full flex justify-evenly'>
                <div className='text-center'>
                    <h2 className='mb-4 font-semibold text-2xl'>Contacts</h2>
                    <p>lobot</p>
                    <p>lobot</p>
                    <p>lobot</p>
                </div>
                <div className='text-center'>
                    <h2 className='mb-4 font-semibold text-2xl'>Menu</h2>
                    <Link to="/Home" className='Links'><p>Home</p></Link>
                    <Link to="/About" className='Links'><p>About Us</p></Link>
                    <Link to="/Blogs" className='Links'><p>Blogs</p></Link>
                    <Link to="/Services" className='Links'><p>Services</p></Link>
                    <Link to="/Contacts" className='Links'><p>Contacts</p></Link> 
                </div>
                <div className='text-center'>
                    <h2 className='mb-4 font-semibold text-2xl'>Media</h2>
                    <p>lobot</p>
                    <p>lobot</p>
                    <p>lobot</p>
                </div>
            </div>
            <p>Made with ❤︎‬ by Luke Symon Alamil</p>
        </div>
    )
}

export default Footer