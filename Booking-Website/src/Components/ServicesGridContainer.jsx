import React from 'react'

function ServicesGridContainer({logos,desc}) {
    return (
        <div className='flex flex-col items-center justify-center gap-8 px-6 py-8 bg-Grey-2 rounded-md'>
            <img src={logos} alt=""  className='h-12 w-10'/>
            <p className='text-Grey'>{desc}</p>
        </div>
    )
}

export default ServicesGridContainer