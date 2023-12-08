import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function Book() {
    return (
        <>
            <NavBar/>
                <div className='h-screen flex items-center justify-center'>
                    <div className='Container'>
                        <h1>Books Page</h1>
                    </div>
                </div> 
            <Footer/>
        </>
        
    )
}

export default Book