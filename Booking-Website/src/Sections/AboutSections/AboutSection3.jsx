import React from 'react'
import AboutSection3Styles from '../../Styles/SectionsStyles/AboutSectionStyles/AboutSection3Styles'
import bed from '../../assets/Availability/bed.jpg'

function AboutSection3() {
    return (
        <AboutSection3Styles>
            <div className='Vision-Container'>
                <h1 className=''>Our vision</h1>
                <hr />
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore”s
                </p>
            </div>
            <img src={bed} alt="" />
        </AboutSection3Styles>
    )
}

export default AboutSection3