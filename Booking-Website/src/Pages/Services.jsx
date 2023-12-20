import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ServicesSection1 from '../Sections/ServicesSections/ServicesSection1'
import ServicesSection2 from '../Sections/ServicesSections/ServicesSection2'
import Availability from '../Components/Availability'
import ServicesBG from '../assets/ServicesPic/Bg.jpg'

function Services() {
    return (
        <>
            <NavBar/>
                <div className="h-[90vh] relative flex items-center justify-center">
                    <img src={ServicesBG} alt="" className='absolute brightness-50 h-full w-full object-cover -z-10' />             
                    <h1 className='text-7xl font-semibold text-Puti'><span className='text-Silver-Lake-Blue'>Services</span></h1>
                </div>
                <Availability/>
                <ServicesSection1/>
                <ServicesSection2/>
            <Footer/>
        </>
    )
}

export default Services