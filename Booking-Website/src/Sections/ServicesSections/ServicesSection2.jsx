import React from 'react'
import ServicesContainer2 from '../../Components/ServicesContainer2'
import { servicesData2 } from '../../Constants/Services-Constants/servicesData2'

function ServicesSection2() {
    return (
        <div className='px-16 py-28 flex flex-col items-center justify-center'>
            <h1 className='mb-16 text-5xl text-Rich-Black font-bold w-1/2 text-center'>How We Work</h1>
            <div className=' flex flex-col'>
                {servicesData2.map((s)=>(
                    <ServicesContainer2
                        logo = {s.logo}
                        alt = {s.alt}
                        head = {s.head}
                        objective = {s.objective}
                        arrow ={s.arrow} 
                    />
                ))}
            </div>
        </div>
    )
}

export default ServicesSection2