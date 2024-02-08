import React from 'react'
import Blogsbg from '../assets/Blogs/City.jpg'
import BookSection1 from '../Sections/BookSection/BookSection1'
import BookSEction2 from '../Sections/BookSection/BookSEction2'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function Book() {
    return (
        <>
            <NavBar/>
                <div className="h-[90vh] relative flex items-center justify-center">
                    <img src={Blogsbg} alt="" className='absolute brightness-50 h-full w-full object-cover -z-10' />             
                    <h1 className='text-Silver-Lake-Blue text-7xl font-semibold'>Booking</h1>
                </div>
                <BookSection1/>
                <BookSEction2/>
            <Footer/>
        </>
        
    )
}

export default Book