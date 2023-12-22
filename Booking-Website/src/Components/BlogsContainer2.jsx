import React from 'react'

function BlogsContainer2({image, alt, header, blogs}) {
    return (
            <div className='flex mb-6 gap-5 w-full h-full'>
                <img src={image} alt={alt} className='h-[10rem] w-[20rem] rounded-md' />
                <div className='flex flex-col w-full'>
                    <h1 className='text-2xl'>{header}</h1>
                    <hr className='mb-4 w-auto h-0.5 bg-Rich-Black' />
                    <p className='text-Grey'>{blogs}</p>
                </div>
            </div>
    )
}

export default BlogsContainer2