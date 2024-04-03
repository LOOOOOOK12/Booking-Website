import React from 'react'
import FB from '../assets/Footer/fb.png'
import Maps from '../assets/Footer/maps.png'
import X from '../assets/Footer/X.png'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='p-6 flex flex-col md:justify-evenly items-center gap-10 bg-Prussian-Blue text-Puti '>
            <div className='w-full h-full flex-col justify-center items-center md:flex md:flex-row md:justify-evenly'>
                <div className='items-center md:justify-start flex flex-col gap-2'>
                    <h2 className='mb-4 font-semibold text-2xl'>Contacts</h2>
                    <p>JohnDoe.com</p>
                    <p>Website@gmail.com</p>
                    <p>Employees</p>
                </div>
                <div className='items-center m-5 md:justify-start flex flex-col gap-2'>
                    <h2 className='mb-4 font-semibold text-2xl'>Menu</h2>
                    <Link to="/Home" className='Links'><p>Home</p></Link>
                    <Link to="/About" className='Links'><p>About Us</p></Link>
                    <Link to="/Blogs" className='Links'><p>Blogs</p></Link>
                    <Link to="/Services" className='Links'><p>Services</p></Link>
                    <Link to="/Contacts" className='Links'><p>Contacts</p></Link> 
                </div>
                <div className='items-center m-5 md:justify-start flex flex-col gap-2'>
                    <h2 className='mb-4 font-semibold text-2xl'>Media</h2>
                    <div className='flex items-center gap-5'>
                        <img src={X} alt="" />
                        <p>Website.twitter</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={FB} alt="" />
                        <p>Facebook</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <a href="https://looooook.netlify.app" target='_blank'>
                            <img src={Maps} alt="" />
                        </a>
                        <p>Maps</p>
                    </div>
                </div>
            </div>
            <p>Made with ❤︎‬ by Luke Symon Alamil</p>
        </div>
    )
}

export default Footer