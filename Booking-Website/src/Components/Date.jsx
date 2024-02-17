import React from 'react'

function Date(props) {
    return (
        <div className='flex flex-col gap-5'>
            <label className='text-3xl text-Rich-Black font-semibold'>{props.title}</label>
            <input type="date" className='w-full px-4 py-2'/>
        </div>
    )
}

export default Date