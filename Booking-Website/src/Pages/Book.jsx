import React from 'react'
import BookSection1 from '../Sections/BookSection/BookSection1'
import BookSEction2 from '../Sections/BookSection/BookSEction2'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function Book() {
    return (
        <>
            <NavBar/>
                <BookSection1/>
                <BookSEction2/>
            <Footer/>
        </>
        
    )
}

export default Book