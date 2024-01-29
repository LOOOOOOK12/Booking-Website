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
        <div className='py-20 px-16 flex flex-col gap-8 items-center justify-between'>
            <h1>{count}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-6'>
                {booking.map((B) =>(
                    <BookContainer
                        count={book}
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