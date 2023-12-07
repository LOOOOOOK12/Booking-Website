import React from 'react'
import AboutSection1Styles from '../../Styles/SectionsStyles/AboutSectionStyles/AboutSection1Styles'

function AboutSection1() {
    return (
        <AboutSection1Styles>
            <div className='Quote'>
                <h1>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore”
                </h1>
            </div>
            <div className='StoryContainer'>
                <div className='OurStory'>
                    <h1>Our Story</h1>
                    <hr />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore”
                    </p>
                </div>
                <div className='stories'>
                    <ol type="1">
                        <li><h2>Lorem impsum</h2><p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”</p></li>
                        <li><h2>Lorem impsum</h2><p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”</p></li>
                        <li><h2>Lorem impsum</h2><p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”</p></li>
                    </ol>
                </div>
            </div>
        </AboutSection1Styles>
    )
}

export default AboutSection1