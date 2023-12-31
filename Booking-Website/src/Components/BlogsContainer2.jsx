import React from 'react'

function BlogsContainer2({image, alt, header, blogs}) {
    return (
            <div className='flex mb-6 gap-5 w-full h-full max-[540px]:flex-col'>
                <img src={image} alt={alt} className='h-[10rem] w-[20rem] rounded-md' />
                <div className='flex flex-col w-full'>
                <div className='flex flex-col w-3/5'>
                        <h1 className='mb-4 text-2xl font-semibold text-Rich-Black' >Lorem Ipsum</h1>
                        <hr className='mb-4 w-full h-0.5 bg-Rich-Black ' />
                    </div>  
                    <p className='text-Grey text-xl'>{blogs}</p>
                </div>
            </div>
    )
}

export default BlogsContainer2