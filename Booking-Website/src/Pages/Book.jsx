import React from 'react'
import street from '../assets/Book/street.jpg'
import BookSection1 from '../Sections/BookSection/BookSection1'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function Book() {
    return (
        <>
            <NavBar/>
                <div className="h-[90vh] relative flex items-center justify-center">
                    <img src={street} alt="japan streets" className='absolute brightness-[.2] h-[110vh] w-full object-cover -z-10' />             
                    <h1 className='text-Silver-Lake-Blue text-7xl font-semibold'>Booking</h1>
                </div>
                <BookSection1/>
            <Footer/>
        </>
        
    )
}

export default Book