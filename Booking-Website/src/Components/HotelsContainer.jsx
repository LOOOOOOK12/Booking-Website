import React from 'react'

function HotelsContainer({image, alt, hotelName, cost, wifi, service, bed, person}){

    return (
        <div className='flex flex-col justify-center items-center text-center gap-6 pb-7 rounded-md bg-Grey-2 '>           
            <img src={image} alt={alt} className=' w-full rounded-md'/>
            <div className='HotelName'>
                <h3 className='text-Rich-Black text-4xl font-semibold mb-6'>{hotelName}</h3>
                <hr className='bg-Rich-Black h-0.5'/>
            </div>
            <div className='flex flex-col gap-5 text-Grey font-light'>
                <p>{cost}</p>
                <p>{wifi}</p>
                <p>{service}</p>
                <p>{bed}</p>
                <p>{person}</p>
                <button className='px-11 py-4 text-2xl font-light bg-Rich-Black hover:bg-Prussian-Blue ease-in duration-100 text-Puti rounded-md'>Check</button>
            </div>
        </div>
    )
}

export default HotelsContainer