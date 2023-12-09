import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className=' w-full'>
            <nav className='h-16 w-full top-0 z-10 fixed flex justify-evenly items-center text-center bg-Bonay'> 
                <Link to="/Home" className='text-3xl'><h1>LOGO</h1></Link> 
                <ul className='flex flex-row'>
                    <Link to="/Home" className='text-Rich-Black mr-12'>Home</Link>
                    <Link to="/About" className='text-Rich-Black mr-12'>About Us</Link>
                    <Link to="/Blogs" className='text-Rich-Black mr-12'>Blogs</Link>
                    <Link to="/Services" className='text-Rich-Black mr-12'>Services</Link>
                    <Link to="/Contacts" className='text-Rich-Black mr-12'>Contacts</Link>  
                </ul>
                <Link to="/Book" className='Links'><button className='text-Puti px-6 py-3 bg-Rich-Black hover:bg-Prussian-Blue ease-in duration-75 font-light rounded-md'>Book Now</button></Link>
            </nav>
        </div>
    )
}

export default NavBar