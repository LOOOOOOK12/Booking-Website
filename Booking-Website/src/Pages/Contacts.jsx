import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Availability from '../Components/Availability'
import ContactsBg from '../assets/Contacts/ContactsBg.jpg'
import ContactsSection1 from '../Sections/ContactsSections/ContactsSection1'
import ContactsSection2 from '../Sections/ContactsSections/ContactsSection2'

function Contacts() {
    return (
        <>
            <NavBar/>
                <div className="h-[90vh] relative flex items-center justify-center">
                    <img src={ContactsBg} alt="" className='absolute brightness-50 h-full w-full object-cover -z-10' />             
                    <h1 className='text-7xl font-semibold text-Puti'><span className='text-Silver-Lake-Blue'>Contacts</span></h1>
                </div>
                <Availability/> 
                <ContactsSection1/>
                <ContactsSection2/>
            <Footer/>
        </>
    )
}

export default Contacts