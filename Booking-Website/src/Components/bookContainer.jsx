import React from 'react'

function bookContainer({image, alt, header, price, description, visitors, count}) {

    return (
        <div className='flex flex-col'>
            <img src={image} alt={alt} className='rounded-3xl mb-5'/>
            <div className='flex flex-col items-start gap-4'>
                <h1 className='text-4xl text-Rich-Black font-semibold'>{header}</h1>
                <h2 className='text-2xl text-Rich-Black font-semibold'>{price}</h2>
                <div className='flex gap-5'>
                    <p className='text-xl text-Grey-3'>{description}</p>
                    <p className='text-xl text-Rich-Black'>{visitors}</p>
                </div>
                <button 
                    className='text-Puti text-2xl px-6 py-5 w-full bg-Rich-Black hover:bg-Prussian-Blue ease-in duration-100 font-semibold rounded-md'
                    onClick={count}
                    >
                        Book
                    </button>
            </div>
        </div>
    )
}

export default bookContainer