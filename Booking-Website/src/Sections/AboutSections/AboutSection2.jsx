import React from 'react'
import AboutSection2Styles from '../../Styles/SectionsStyles/AboutSectionStyles/AboutSection2Styles'
import Image2 from '../../assets/Availability/japaneseWahmen.jpg'

function AboutSection2() {
    return (
        <AboutSection2Styles>
            <div className='OurMission-Container'>
                <div className='Mission'>
                    <h1>Our Mission</h1>
                    <hr />
                    <p className='q'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore”
                    </p>
                    <div className='count-Container'>
                        <div className='count'>
                            <h1>69%</h1>
                            <p>"Lorem Ipsum"</p>
                        </div>
                        <div className='count'>
                            <h1>80M+</h1>
                            <p>"Lorem Ipsum"</p>
                        </div>
                        <div className='count'>
                            <h1>10K</h1>
                            <p>"Lorem Ipsum"</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Image2} alt=""  className='lobot'/>
        </AboutSection2Styles>
    )
}

export default AboutSection2