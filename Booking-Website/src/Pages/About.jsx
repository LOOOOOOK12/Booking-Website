import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import AboutStyles from '../Styles/Pages-Styles/AboutStyles'
import Availability from '../Components/Availability'   
import AboutSection1 from '../Sections/AboutSections/AboutSection1'

function About() {
    return (
        <AboutStyles>
            <NavBar/>
            <div className='Container'>
                <div className="hero">
                    <h1 className='AboutUs'>About <span className='span1'>Us</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p> 
                </div>
            </div>
            <Availability/>
            <AboutSection1/>
            <Footer/>
        </AboutStyles>
    )
}

export default About