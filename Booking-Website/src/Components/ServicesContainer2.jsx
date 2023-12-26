import React from 'react'

function ServicesContainer2({logo, alt, head, objective}) {
    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <img src={logo} alt={alt} />
            <h1>{head}</h1>
            <p>{objective}</p>
        </div>
    )
    }

export default ServicesContainer2