import React from 'react'
import BookContainer from '../../Components/bookContainer'
import { booking } from '../../Constants/Books/booking'
import { useState } from 'react'

function BookSection1() {

    const [count, setCount] = useState(0);

    function book(){
        setCount(count + 1)
    }

    return (
        <div className='py-24 px-16 flex flex-col gap-20 '>
            <div className='flex flex-col gap-8'>
                <h1 className='text-Rich-Black text-3xl font-semibold'>Total Booked: {count}</h1>
                <h1 className='text-Rich-Black text-3xl font-semibold'>Total available Hotels: {booking.length}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {booking.map((B) =>(
                    <BookContainer
                        count = {book}
                        visitors={B.visitors}
                        image = {B.image}
                        alt = {B.alt}
                        header = {B.header}
                        price = {B.price}
                        description = {B.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default BookSection1