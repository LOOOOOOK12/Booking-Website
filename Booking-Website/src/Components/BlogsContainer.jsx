import React from 'react'

function BlogsContainer({image, alt, blogs}) {
    return (
        <div className='flex flex-row items-center justify-center w-[18rem] h-[30rem]'> 
            <div className='flex flex-col gap-6 w-full h-full'>
                <img src={image} alt={alt} className='h-full w-full rounded-md' />
                <div className='w-full'>
                    <p>{blogs}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogsContainer