import React from 'react'
import BookContainer from '../../Components/bookContainer'
import DropDown from '../../Components/dropDown'
import Date from '../../Components/Date'
import { dropDown } from '../../Constants/Books/dropDown'
import { booking } from '../../Constants/Books/booking'
import { useState } from 'react'

function BookSection1() {

    const [count, setCount] = useState(0);

    function book(){
        setCount(count + 1)
    }

    return (
        <div className='py-32 px-16 flex flex-col gap-20 '>
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-between  gap-5'>
                {dropDown.map((B)=>(
                    <DropDown
                        title={B.title}
                        collection={B.collection}
                    />
                ))}
                <Date title="Check-In"/>
                <Date title="Check-Out"/>
            </div>
            <div className='flex flex-col gap-8'>
                <h1 className='text-Rich-Black text-3xl font-semibold'>Total Booked: {count}</h1>
                <h1 className='text-Rich-Black text-3xl font-semibold'>Total available Hotels: {booking.length}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {booking.slice(0, 6).map((B, index) => (
                <BookContainer
                    key={index}
                    count={book}
                    visitors={B.visitors}
                    image={B.image}
                    alt={B.alt}
                    header={B.header}
                    price={B.price}
                    description={B.description}
                />
            ))}
            </div>
        </div>
    )
}

export default BookSection1