import React from 'react'

function ServicesContainer(img, alt, head, paragraph) {
    return (
        <div className='flex flex-col py-12 px-12'>
            <img src={img} alt={alt} />
            <h1>{head}</h1>
            <p>{paragraph}</p>
        </div>
    )
}

export default ServicesContainer