import React from 'react'
import { Link } from 'react-router-dom'

function HotelsContainer({image, alt, hotelName, cost, wifi, service, bed, person}){

    return (
        <div className='flex flex-row bg-Grey-2 gap-6 rounded-md md:flex md:flex-col md:justify-center md:items-center md:text-center md:gap-6 md:pb-7 md:bg-Grey-2 '>           
            <div className='w-full'>
                <img src={image} alt={alt} className='h-full w-full rounded-md'/>
            </div>   
            <div className='flex flex-col gap-5'>
                <div className=''>
                    <h3 className='text-Rich-Black text-4xl font-semibold mb-6'>{hotelName}</h3>
                    <hr className='bg-Rich-Black h-0.5'/>
                </div>
                <div className='flex flex-col gap-5 text-Grey font-light'>
                    <p>{cost}</p>
                    <p>{wifi}</p>
                    <p>{service}</p>
                    <p>{bed}</p>
                    <p>{person}</p>
                    <Link to="/Book">
                        <button className='px-11 py-4 text-2xl font-light bg-Rich-Black hover:bg-Prussian-Blue ease-in duration-100 text-Puti rounded-md'>
                            Check
                        </button>
                    </Link>
                </div>      
            </div>      
        </div>
    )
}

export default HotelsContainer