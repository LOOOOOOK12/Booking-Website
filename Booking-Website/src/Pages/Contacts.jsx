import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ContactsStyles from '../Styles/Pages-Styles/contactsStyles'

function Contacts() {
    return (
        <ContactsStyles>
            <NavBar/>
                <h1>Contacts Page</h1>
            <Footer/>
        </ContactsStyles>
    )
}

export default Contacts