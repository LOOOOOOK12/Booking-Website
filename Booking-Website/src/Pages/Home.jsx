import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Availability from '../Components/Availability'
import HomeStyles from '../Styles/Pages-Styles/homeStyles'
import HomeSection1 from '../Sections/HomeSections/HomeSection1'
import HomeSection2 from '../Sections/HomeSections/HomeSection2'
import HomeSection3 from '../Sections/HomeSections/HomeSection3'

function Home() {
    return (
        <HomeStyles>
            <NavBar/>
                <div className='Container'>
                    <div className="hero">
                        <h1 className='Japan'>Beautiful <span className='span1'>Japan</span></h1>
                    </div>
                </div>
                <Availability/>
                <HomeSection1/>
                <HomeSection2/>
                <HomeSection3/>
            <Footer/>
        </HomeStyles>
    )
}

export default Home