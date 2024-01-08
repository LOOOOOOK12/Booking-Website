import React from 'react'
import HotelsContainer from '../../Components/HotelsContainer'
import { Hotels } from '../../Constants/Hotels/Hotels'

function HomeSection2() {
    return (
        <div className='px-16 py-20'>
            <div className='w-full mb-12'>
                <div className='w-1/2'>
                    <h2 className='mb-4 text-5xl text-Rich-Black font-semibold'>Hotel</h2>
                    <hr className='h-0.5 w-full bg-Rich-Black'/>
                </div>
                <p className='mt-4 text-Grey font-light text-2xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                </p>
            </div>
            <div className='flex flex-col gap-12 md:flex md:flex-row md:gap-12 '>
                {Hotels.map((infos,idx) =>(
                    <div className='' key={idx}>
                        <HotelsContainer
                            image={infos.image}
                            alt={infos.alt}
                            hotelName={infos.hotelName}
                            cost={infos.cost}
                            wifi={infos.wifi}
                            service={infos.service}
                            bed={infos.bed}
                            person={infos.person}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeSection2