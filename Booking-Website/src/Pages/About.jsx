import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import AboutStyles from '../Styles/Pages-Styles/AboutStyles'
import Availability from '../Components/Availability'   
import AboutSection1 from '../Sections/AboutSections/AboutSection1'
import AboutSection2 from '../Sections/AboutSections/AboutSection2'
import AboutSection3 from '../Sections/AboutSections/AboutSection3'
import Pic from '../Components/Pic'
import Hallway from '../assets/Wide/hallway.jpg'
import Shinto from '../assets/Wide/Shinto.jpg'

function About() {
    return (
        <AboutStyles>
            <NavBar/>
            <div className='Container'>
                <div className="hero">
                    <h1 className='AboutUs'>About <span className='span1'>Us</span></h1>
                </div>
            </div>
            <Availability/>
            <AboutSection1/>
            <Pic bg={Hallway} header="Our Mission"/>
            <AboutSection2/>
            <Pic bg={Shinto} header="Our Vision"/>
            <AboutSection3/>
            <Footer/>
        </AboutStyles>
    )
}

export default About