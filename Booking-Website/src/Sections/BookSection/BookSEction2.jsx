import React from 'react'
import { useState } from 'react'

function BookSEction2() {
    
    const [count, setCount] = useState(0);

    function click() {
        setCount(count + 1);
    }
    function clear(){
        setCount(0);
    }

    return (
        <div className = 'px-16 py-20 h-screen flex flex-col items-center justify-center gap-4'>
            <h1>{count}</h1>
            <button className='px-11 py-4 text-2xl font-light bg-Rich-Black hover:bg-Prussian-Blue ease-in duration-100 text-Puti rounded-md' onClick={click}>Add</button>
            <button className='px-11 py-4 text-2xl font-light bg-Rich-Black hover:bg-Prussian-Blue ease-in duration-100 text-Puti rounded-md' onClick={clear}>Clear</button>        
        </div>
    )
}

export default BookSEction2