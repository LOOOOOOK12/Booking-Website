import React from 'react'

function dropDown({title,collection}) {
    return (
        <div className='flex flex-col gap-5'>
            <label className='text-3xl text-Rich-Black font-semibold'>{title}</label>
            <div>
                <select className='w-full px-4 py-2 rounded-lg'>
                    {collection.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default dropDown