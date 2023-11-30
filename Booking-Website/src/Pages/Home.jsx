import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import HomeStyles from '../Styles/Pages-Styles/homeStyles'


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
                <div className='availability'>
                    <div className='availability-container'>
                        <div className='location'>
                            <p>Location</p>
                            <p>lobot</p>
                        </div>
                        <div className='person'>
                            <p>Location</p>
                            <p>lobot</p>
                        </div>
                        <div className='check-in'>
                            <p>Location</p>
                            <p>lobot</p>
                        </div>
                        <div className='check-out'>
                            <p>Location</p>
                            <p>lobot</p>
                        </div>
                        <button className='Check'> Check Availability</button>
                    </div>
                </div>
                <section className='Container2'>
                    <h1>Lobot</h1>
                </section>
                <section></section>
                <section></section>
            <Footer/>
        </HomeStyles>
    )
}

export default Home