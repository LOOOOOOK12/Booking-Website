import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import AboutStyles from '../Styles/Pages-Styles/AboutStyles'

function About() {
    return (
        <AboutStyles>
            <NavBar/>
            <div className='Container'>
                <h1>About Page</h1>
            </div>
            <Footer/>
        </AboutStyles>
    )
}

export default About