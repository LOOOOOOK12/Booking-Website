import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import BookStyles from '../Styles/Pages-Styles/BookStyles'

function Book() {
    return (
        <BookStyles>
            <NavBar/>
            <div className="Container">
                <h1>Book Page</h1>
            </div>
            <Footer/>    
        </BookStyles>
    )
}

export default Book