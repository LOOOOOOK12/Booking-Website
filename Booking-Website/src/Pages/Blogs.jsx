import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import BlogsStyles from '../Styles/Pages-Styles/BlogsStyles'

function Blogs() {
    return (
        <BlogsStyles>
            <NavBar/>
                <div className='Container'>
                    <h1>Blogs Page</h1>
                </div>
            <Footer/>
        </BlogsStyles>
    )
}

export default Blogs