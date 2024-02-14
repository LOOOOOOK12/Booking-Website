import React from 'react'

function ServicesContainer({img, alt, head, paragraph}) {
    return (
        <div className='px-6 py-10 flex flex-col items-center justify-center gap-10 bg-Grey-2 rounded-md'>
            <img src={img} alt={alt} className='rounded-md h-12 w-15'/>
            <div className='flex flex-col gap-5 text-left'>
                <h1 className='text-4xl font-semibold text-Rich-Black'>{head}</h1>
                <p className='text-Grey text-xl'>{paragraph}</p>
            </div>
        </div>
    )
}

export default ServicesContainer