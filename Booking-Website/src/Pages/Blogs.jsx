import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Blogsbg from '../assets/Blogs/City.jpg'
import Availability from '../Components/Availability'
import BlogSection1 from '../Sections/BlogsSections/BlogSection1'
import BlogSection2 from '../Sections/BlogsSections/BlogSection2'
import BlogSection3 from '../Sections/BlogsSections/BlogsSection3'

function Blogs() {
    return (
        <>
            <NavBar/>
                <div className="h-[90vh] relative flex items-center justify-center">
                    <img src={Blogsbg} alt="" className='absolute brightness-50 h-full w-full object-cover -z-10' />             
                    <h1 className='text-7xl font-semibold text-Puti'>Our <span className='text-Silver-Lake-Blue'>Blogs</span></h1>
                </div>
                <Availability/>
                <BlogSection1/> 
                <BlogSection2/>
                <BlogSection3/>
            <Footer/>
        </>
    )
}

export default Blogs