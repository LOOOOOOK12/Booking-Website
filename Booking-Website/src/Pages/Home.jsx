import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import HomeStyles from '../Styles/Pages-Styles/homeStyles'
import Image1 from '../assets/pexels-evgeny-tchebotarev-2187604.jpg'
import {Link} from 'react-router-dom'
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
                <div className='availability'>
                    <div className='availability-container'>
                        <div className='location'>
                            <p>Location</p>
                            <p>Kyoto</p>
                            
                        </div>
                        <div className='vl'></div>
                        <div className='person'>
                            <p>Person</p>
                            <p>03</p>
                        </div>
                        <div className='vl'></div>
                        <div className='check-in'>
                            <p>Check-In</p>
                            <p>May 12, 2023</p>
                        </div>
                        <div className='vl'></div>
                        <div className='check-out'>
                            <p>Check-Out</p>
                            <p>May 25, 2023</p>
                        </div>
                        <Link to="/Book"><button className='Check'> Check Availability</button></Link>
                    </div>
                </div>
                <section className='Container2'>
                    <img src={Image1} alt="Image 1" />
                    <div className='Text-1'>
                        <h2>Lorem Ipsum</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <button className='readMore'>Read More</button>
                    </div>
                </section>
                <section className='hotel-Container'>
                    <div className='Text2'>
                        <h2>Hotels</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                    </div>
                    <div className='hotel-Front-Container'>
                        {Hotels.map((infos,idx) =>(
                            <div className='Hotels' key={idx}>
                                <HotelsContainer
                                    image={infos.image}
                                    alt={infos.alt}
                                    hotelName={infos.hotelName}
                                    cost={infos.cost}
                                    wifi={infos.wifi}
                                    service={infos.service}
                                    bed={infos.bed}
                                    person={infos.person}
                                    style={infos.style}
                                />
                            </div>
                        ))}
                    </div>
                </section>
                <section></section>
            <Footer/>
        </HomeStyles>
    )
}

export default Home