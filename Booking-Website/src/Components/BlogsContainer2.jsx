import React from 'react'

function BlogsContainer2({image, alt, blogs}) {
    return (
        <div className='flex flex-col w-[30%] h-full'> 
            <div className='flex gap-6 w-full h-full'>
                <img src={image} alt={alt} className='h-[20rem] w-[30rem] rounded-md' />
                <div className='w-full'>
                    <p>{blogs}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogsContainer2