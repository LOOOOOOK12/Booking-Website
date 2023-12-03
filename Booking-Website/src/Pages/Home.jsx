import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import HomeStyles from '../Styles/Pages-Styles/homeStyles'
import HomeSection1 from '../Sections/HomeSections/HomeSection1'
import HomeSection2 from '../Sections/HomeSections/HomeSection2'
import Availability from '../Components/Availability'
import HotelsContainer from '../Components/HotelsContainer'
import { Hotels } from '../Constants/Hotels/Hotels'

function Home() {
    return (
        <HomeStyles>
            <NavBar/>
                <div className='Container'>
                    <div className="hero">
                        <h1 className='Japan'>Beautiful <span className='span1'>Japan</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p> 
                    </div>
                </div>
                <Availability/>
                <HomeSection1/>
                <HomeSection2/>
                <section></section>
            <Footer/>
        </HomeStyles>
    )
}

export default Home