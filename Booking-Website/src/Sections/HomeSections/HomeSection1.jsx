import React from 'react'
import Image1 from '../../assets/Home/pexels-evgeny-tchebotarev-2187604.jpg'
import HomeSection1Styles from '../../Styles/SectionsStyles/HomeSectionsStyles/HomeSection1Styles'

function HomeSection1() {
    return (
        <HomeSection1Styles>
            <img src={Image1} alt="Image 1" />
            <div className='Text-1'>
                <h2>Lorem Ipsum</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <button className='readMore'>Read More</button>
            </div>
        </HomeSection1Styles>
    )
}

export default HomeSection1