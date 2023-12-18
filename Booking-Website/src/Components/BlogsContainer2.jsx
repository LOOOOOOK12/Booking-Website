import React from 'react'

function BlogsContainer2({image, alt, blogs}) {
    return (
            <div className='flex mb-6 gap-6 w-full h-full'>
                <img src={image} alt={alt} className='h-[10rem] w-[20rem] rounded-md' />
                <div className='w-full'>
                    <p>{blogs}</p>
                </div>
            </div>
    )
}

export default BlogsContainer2