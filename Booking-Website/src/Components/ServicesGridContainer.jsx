import React from 'react'

function ServicesGridContainer({logos,header,desc}) {
    return (
        <div className='flex flex-col items-center justify-center gap-6 px-6 py-8 bg-Grey-2 rounded-md'>
            <img src={logos} alt=""  className='h-12 w-10'/>
            <h1 className='text-3xl font-semibold text-Rich-Black'>{header}</h1>
            <p className='text-Grey'>{desc}</p>
        </div>
    )
}

export default ServicesGridContainer