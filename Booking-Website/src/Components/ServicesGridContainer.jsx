import React from 'react'

function ServicesGridContainer({logos,header,desc}) {
    return (
        <div className='flex flex-col items-center justify-center gap-10 px-6 py-8 bg-Grey-2 rounded-md'>
            <img src={logos} alt="logo"  className='h-14 w-14'/>
            <div className='flex flex-col gap-5 text-left'>
                <h1 className='text-4xl font-semibold text-Rich-Black'>{header}</h1>
                <p className='text-Grey text-xl'>{desc}</p>
            </div>
        </div>
    )
}

export default ServicesGridContainer