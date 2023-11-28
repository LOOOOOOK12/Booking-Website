import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ServicesStyles from '../Styles/Pages-Styles/ServicesStyles'

function Services() {
    return (
        <ServicesStyles>
            <NavBar/>
                <div className='Container'>
                    <h1>Services Page</h1>
                </div>
            <Footer/>
        </ServicesStyles>
    )
}

export default Services