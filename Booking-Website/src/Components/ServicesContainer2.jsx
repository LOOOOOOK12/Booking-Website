import React from 'react'
import down from '../assets/ServicesPic/arrow-down.png'

function ServicesContainer2({logo, alt, head, objective}) {
    return (
        <div className='mb-16 flex flex-col justify-center items-center'>
            <div className='mb-6 flex flex-col items-center justify-center gap-5 text-center'>
                <img src={logo} alt={alt} />
                <h1 className='text-3xl font-semibold text-Rich-Black'>{head}</h1>
                <p className='text-Grey'>{objective}</p>
            </div>
            <img src={down} alt="arrow" />
        </div>
    )
    }

export default ServicesContainer2