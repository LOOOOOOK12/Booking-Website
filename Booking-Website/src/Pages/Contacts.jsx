import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ContactsStyles from '../Styles/Pages-Styles/ContactsStyles'

function Contacts() {
    return (
        <ContactsStyles>
            <NavBar/>
            <div className="Container">
                <h1>Contacts Page</h1>
            </div>
            <Footer/>
        </ContactsStyles>
    )
}

export default Contacts