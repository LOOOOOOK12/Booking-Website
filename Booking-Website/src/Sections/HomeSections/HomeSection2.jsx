import React from 'react'
import HotelsContainer from '../../Components/HotelsContainer'
import { Hotels } from '../../Constants/Hotels/Hotels'

function HomeSection2() {
    return (
        <div className='px-24 py-20'>
            <div className='w-[30rem] mb-12'>
                <h2 className='mb-4 text-5xl font-semibold text-Rich-Black'>Hotels</h2>
                <hr className='bg-Rich-Black h-0.5'/>
                <p className='mt-4 text-Grey font-light text-2xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                </p>
            </div>
            <div className='flex gap-12 '>
                {Hotels.map((infos,idx) =>(
                    <div className='Hotels' key={idx}>
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