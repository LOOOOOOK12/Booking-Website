import React from 'react'

function BlogsContainer({image, alt, header, blogs}) {
    return (
            <div className='flex flex-col items-center justify-center gap-6 w-full h-full'>
                <img src={image} alt={alt} className='h-[25rem] w-full rounded-md' />
                <div className='w-full'>
                    <h1 className='text-Rich-Black font-semibold text-3xl mb-4'>{header}</h1>
                    <p className='text-Grey'>{blogs}</p>
                </div>
            </div>
    )
}

export default BlogsContainer