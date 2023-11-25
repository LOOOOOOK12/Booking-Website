import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import HomeStyles from '../Styles/Pages-Styles/homeStyles'

function Home() {
    return (
        <HomeStyles>
            <NavBar/>
                <div className='Container'>
                    <h1>Home Page</h1>
                </div>
                <section></section>
                <section></section>
                <section></section>
            <Footer/>
        </HomeStyles>
    )
}

export default Home