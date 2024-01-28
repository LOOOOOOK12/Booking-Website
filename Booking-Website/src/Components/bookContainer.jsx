import React from 'react'

function bookContainer({image, alt, header, price, description}) {
    return (
        <div className='flex flex-col py-10 px-9 rounded-md bg-Grey-2'>
            <img src={image} alt={alt} className='rounded-md mb-5'/>
            <div className='flex flex-col items-center gap-7'>
                <h1 className='text-5xl text-Rich-Black font-semibold'>{header}</h1>
                <hr className='mb-4 h-0.5 w-full bg-Rich-Black'/>
                <h2 className='text-4xl text-Rich-Black font-semibold'>{price}</h2>
                <p className='text-xl text-Grey-3'>{description}</p>
                <button className='text-Puti px-6 py-5 w-full bg-Rich-Black hover:bg-Prussian-Blue ease-in duration-100 font-semibold rounded-md'>Book</button>
            </div>
        </div>
    )
}

export default bookContainer