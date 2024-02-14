import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className=' w-full'>
            <nav className='px-16 p-4 w-full top-0 z-10 fixed flex justify-between items-center text-center bg-Bonay'>
                <Link to="/Home" className='text-3xl'><h1>LOGO</h1></Link>
                <ul className='hidden sm:flex sm:flex-row'>
                    <Link to="/Home" className={`text-Rich-Black font-medium mr-12 ${isActive("/Home") && 'font-black'}`}>Home</Link>
                    <Link to="/About" className={`text-Rich-Black font-medium mr-12 ${isActive("/About") && 'font-black'}`}>About Us</Link>
                    <Link to="/Blogs" className={`text-Rich-Black font-medium mr-12 ${isActive("/Blogs") && 'font-black'}`}>Blogs</Link>
                    <Link to="/Services" className={`text-Rich-Black font-medium mr-12 ${isActive("/Services") && 'font-black'}`}>Services</Link>
                    <Link to="/Contacts" className={`text-Rich-Black font-medium mr-12 ${isActive("/Contacts") && 'font-black'}`}>Contacts</Link>
                </ul>
                    <Link to="/Book" className='Links'>
                        <button className='text-Puti px-6 py-3 bg-Rich-Black hover:bg-Prussian-Blue ease-in duration-100 font-semibold rounded-md max-[860px]:hidden'>Book Now</button>
                    </Link>
            </nav>
        </div>
    );
}

export default NavBar;